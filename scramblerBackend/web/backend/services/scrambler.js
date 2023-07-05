import { shuffle } from "@laufire/utils/collection.js";
import { rndString, rndValue } from "@laufire/utils/random.js";
import crypto from "crypto";
import config from "../config.js";
import graphQLFetch from "./grapQLFetch.js";
import graphqlQuery from "./query.js";
import dayjs from "dayjs";

const hashWord = (word) => {
  const hash = crypto.createHash("sha256");
  hash.update(word.toUpperCase());

  return hash.digest("hex");
};

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
  const query = graphqlQuery.customerMetaField(customerId);

  const response = await graphQLFetch({ query });

  const {
    data: {
      customer: { metafield },
    },
  } = await response.json();

  return metafield;
};

const updateCustomerMetaField = async ({ customerId, metafield: { id } }) => {
  const query = graphqlQuery.updateCustomerMetaField;
  const variables = {
    input: {
      metafields: [
        {
          id: id,
          value: `{\"scrambler\":{\"discount\":{\"lastWonAt\":\"${new Date()}\"}}}`,
        },
      ],
      id: `gid://shopify/Customer/${customerId}`,
    },
  };

  const response = await graphQLFetch({ query, variables });
  const { data } = await response.json();

  return data;
};

const createCustomerMetaField = async ({ customerId }) => {
  const query = graphqlQuery.createCustomerMetaField;

  const variables = {
    customerInput: {
      id: `gid://shopify/Customer/${customerId}`,
      metafields: [
        {
          namespace: "custom",
          key: "custom",
          value: `{\"scrambler\":{\"discount\":{\"lastWonAt\":\"${new Date()}\"}}}`,
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

const createDiscount = async ({ customerId }) => {
  const { collectionId, collectionUrl } = await getCollection();
  const metafield = await getCustomerMetaField({ customerId });
  const pageMetaField = await getPageMetaField();
  const { discountCodePrefix, discountTitle, discountPercentage } =
    await JSON.parse(pageMetaField);

  const mutation = graphqlQuery.createDiscount;
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
    query: mutation,
    variables: variables,
  });
  const { data } = await response.json();

  metafield?.id
    ? await updateCustomerMetaField({ customerId, metafield })
    : await createCustomerMetaField({ customerId });

  return { ...data, collectionUrl };
};

const timeDelta = async (context) => {
  const metafield = await getCustomerMetaField(context);
  const response = JSON.parse(metafield.value);
  const discount = response.scrambler.discount;
  const currentDate = dayjs();
  const lastWonAt = dayjs(discount.lastWonAt);

  return { currentDate, lastWonAt };
};

const checkTimeDifference = async (context) => {
  const { currentDate, lastWonAt } = await timeDelta(context);
  const timeDifference = currentDate.diff(lastWonAt, "d");

  return timeDifference;
};

const scramble = (word) => {
  const strArr = word.split("");

  return shuffle(strArr).join("");
};

const createScrambledWord = async () => {
  const pageMetaField = await getPageMetaField();
  const { scramblerWords } = await JSON.parse(pageMetaField);
  const word = rndValue(scramblerWords);

  return {
    digest: hashWord(word),
    word: scramble(word),
  };
};

const getNextAvailableAt = async (context) => {
  const { currentDate, lastWonAt } = await timeDelta(context);
  const nextAvailableAt = config.hoursPerDay - currentDate.diff(lastWonAt, "h");

  return nextAvailableAt;
};

const isEligibleToPlay = async (context) => {
  const metafield = await getCustomerMetaField(context);

  return (
    !metafield?.value || (await checkTimeDifference({ ...context, metafield }))
  );
};

const GET = async (context) => {
  const isEligible = await isEligibleToPlay(context);

  return isEligible
    ? { data: await createScrambledWord() }
    : {
        error: {
          type: "Come back the next day.",
          nextAvailableAt: await getNextAvailableAt(context),
        },
      };
};

const POST = async ({ digest, word, customerId }) => {
  const userInputDigest = hashWord(word);
  const isMatch = digest === userInputDigest;

  return isMatch
    ? { data: await createDiscount({ customerId }) }
    : { error: { type: "Not match" } };
};

const scrambler = { GET, POST };

export default scrambler;
