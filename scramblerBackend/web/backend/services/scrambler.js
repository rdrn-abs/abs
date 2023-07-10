import { rndString, rndValue } from "@laufire/utils/random.js";
import config from "../config.js";
import graphQLFetch from "./grapQLFetch.js";
import graphqlQuery from "./query.js";
import dayjs from "dayjs";
import helper from "./helper.js";

const getPageMetaField = async () => {
  const query = graphqlQuery.pageMetaField;
  const response = await graphQLFetch({ query });
  const data = await response.json();
  const {
    data: {
      metafieldDefinition: {
        metafields: { edges },
      },
    },
  } = data;
  const [
    {
      node: { value },
    },
  ] = edges;

  return value;
};

const getCustomerMetaField = async ({ customerId }) => {
  const query = graphqlQuery.getCustomerMetaField(customerId);

  const response = await graphQLFetch({ query });

  const {
    data: {
      customer: { metafield },
    },
  } = await response.json();

  return metafield;
};

const updateCustomerMetaField = async ({
  customerId,
  metafield: { id },
  value,
}) => {
  const query = graphqlQuery.updateCustomerMetaField;
  const variables = {
    input: {
      metafields: [
        {
          id: id,
          value: value,
        },
      ],
      id: `gid://shopify/Customer/${customerId}`,
    },
  };

  const response = await graphQLFetch({ query, variables });
  const { data } = await response.json();

  return data;
};

const createCustomerMetaField = async ({ customerId, value }) => {
  const query = graphqlQuery.createCustomerMetaField;

  const variables = {
    customerInput: {
      id: `gid://shopify/Customer/${customerId}`,
      metafields: [
        {
          namespace: "custom",
          key: "custom",
          value: value,
          type: "json",
        },
      ],
    },
  };

  const response = await graphQLFetch({ query, variables });
  const { data } = await response.json();

  return data;
};

const getCollectionId = async ({ collectionName }) => {
  const query = `{
    collectionByHandle(handle: "${collectionName}") {
      id
    }
  }`;

  const response = await graphQLFetch({ query });
  const data = await response.json();
  return data;
};

const getCollection = async () => {
  const pageMetaField = await getPageMetaField();
  const { collectionUrl } = await JSON.parse(pageMetaField);
  const [dummy, collectionName] = collectionUrl.match(
    config.collectionNameRegex
  );
  const {
    data: {
      collectionByHandle: { id: collectionId },
    },
  } = await getCollectionId({ collectionName });

  return { collectionUrl, collectionName, collectionId };
};

const createDiscount = async ({ customerId, metafieldValue }) => {
  const { collectionId, collectionUrl } = await getCollection();
  const metafield = await getCustomerMetaField({ customerId });
  const pageMetaField = await getPageMetaField();
  const { discountCodePrefix, discountTitle, discountPercentage } =
    await JSON.parse(pageMetaField);

  const variables = {
    basicCodeDiscount: {
      title: discountTitle,
      code: `${discountCodePrefix + rndString(config.codeLength)}`,
      startsAt: new Date(),
      endsAt: new Date(new Date().getTime() + config.millisecondsPerDay),
      customerSelection: {
        customers: {
          add: [`gid://shopify/Customer/${customerId}`],
        },
      },
      customerGets: {
        value: {
          percentage: parseFloat(discountPercentage),
        },
        items: {
          collections: {
            add: [collectionId],
          },
        },
      },
      appliesOncePerCustomer: true,
    },
  };

  const response = await graphQLFetch({
    query: graphqlQuery.createDiscount,
    variables: variables,
  });
  const { data } = await response.json();
  const {
    discountCodeBasicCreate: {
      codeDiscountNode: {
        codeDiscount: {
          codes: { nodes },
        },
      },
    },
  } = data;
  const [{ code }] = nodes;

  const value = JSON.stringify({
    scrambler: {
      ...metafieldValue.scrambler,
      discount: { lastWonAt: new Date(), code },
    },
  });

  await updateCustomerMetaField({ customerId, metafield, value });

  return { ...data, collectionUrl };
};

const createScrambledWord = async (context) => {
  const isMetaField = context?.metafieldValue;
  const pageMetaField = await getPageMetaField();
  const { scramblerWords } = await JSON.parse(pageMetaField);
  const word = rndValue(scramblerWords);
  const digest = helper.hashWord(word);
  const scrambleWord = helper.scramble(word);
  const data = {
    wordIssued: scrambleWord,
    wordIssuedAt: new Date(),
    digest,
    retry: config.retry,
  };
  const value = JSON.stringify({
    scrambler: { ...isMetaField?.scrambler, ...data },
  });
  isMetaField
    ? await updateCustomerMetaField({ ...context, value })
    : await createCustomerMetaField({ ...context, value });

  return {
    word: scrambleWord,
  };
};

const getNextAvailableAt = async (context) => {
  const {
    metafieldValue: {
      scrambler: {
        discount: { lastWonAt },
      },
    },
  } = context;
  const currentDate = dayjs();
  const date = dayjs(lastWonAt);
  const nextAvailableAt = config.hoursPerDay - currentDate.diff(date, "h");
  
  return nextAvailableAt;
};

const checkRemainingChance = async (context) => {
  const {
    metafieldValue: {
      scrambler: { retry, wordIssued },
    },
  } = context;

  return retry
    ? { data: { word: wordIssued } }
    : {
        error: { msg: "You have no more chance to play today", code: "lose" },
      };
};

const isAlreadyPlayed = async (context) => {
  const {
    metafieldValue: {
      scrambler: { wordIssuedAt },
    },
  } = context;
  const canPlay = helper.checkDateDifference(wordIssuedAt);

  return !canPlay
    ? await checkRemainingChance(context)
    : { data: await createScrambledWord(context) };
};

const isEligibleToPlay = async (context) => {
  const {
    metafieldValue: { scrambler },
  } = context;
  const isEligible =
    !scrambler?.discount ||
    helper.checkDateDifference(scrambler.discount.lastWonAt);

  return isEligible
    ? await isAlreadyPlayed(context)
    : {
        error: {
          msg: "Come back the next day.",
          nextAvailableAt: await getNextAvailableAt(context),
          code: "win",
          discountCode: scrambler.discount.code,
        },
      };
};

const updateRemainingChange = async (context) => {
  const {
    metafieldValue: { scrambler },
  } = context;
  const retry = scrambler.retry - 1;
  const value = JSON.stringify({
    scrambler: { ...scrambler, retry },
  });
  await updateCustomerMetaField({ ...context, value });

  return { error: { msg: "Not match", remainingChances: retry } };
};

const GET = async (context) => {
  const metafield = await getCustomerMetaField(context);
  const metafieldValue =
    metafield?.value && (await JSON.parse(metafield.value));
  const enrichedContext = { ...context, metafield, metafieldValue };

  const response = metafieldValue
    ? await isEligibleToPlay(enrichedContext)
    : { data: await createScrambledWord(enrichedContext) };

  return response;
};

const POST = async (context) => {
  const { word, customerId } = context;
  const metafield = await getCustomerMetaField({ customerId });
  const metafieldValue = await JSON.parse(metafield.value);
  const enrichedContext = { ...context, metafieldValue, metafield };
  const userInputDigest = helper.hashWord(word);
  const isMatch = metafieldValue.scrambler.digest === userInputDigest;

  return isMatch
    ? { data: await createDiscount(enrichedContext) }
    : await updateRemainingChange(enrichedContext);
};

const scrambler = { GET, POST };

export default scrambler;
