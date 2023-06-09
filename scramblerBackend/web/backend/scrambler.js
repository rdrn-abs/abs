import { shuffle } from "@laufire/utils/collection.js";
import { rndString, rndValue } from "@laufire/utils/random.js";
import crypto from "crypto";
import config from "./config.js";
import { isDefined } from "@laufire/utils/reflection.js";

const hashWord = (word) => {
  const hash = crypto.createHash("sha256");
  hash.update(word.toUpperCase());

  return hash.digest("hex");
};

const graphQLFetch = async (data) => {
  const response = await fetch(config.shopifyEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": config.accessToken,
    },
    body: JSON.stringify(data),
  });
  return response;
};

const getCustomerMetaField = async ({ customerId }) => {
  const query = `query {
    customer(id: "gid://shopify/Customer/${customerId}") {
        metafield(key:"custom",namespace:"custom"){
            value
            id
      }
    }
  }
  `;

  const response = await graphQLFetch({ query });

  const {
    data: {
      customer: { metafield },
    },
  } = await response.json();

  return metafield;
};

const updateCustomerMetaField = async ({ customerId, metafield: { id } }) => {
  const query = `mutation updateCustomerMetafields($input: CustomerInput!) {
    customerUpdate(input: $input) {
      customer {
        id
        metafields(first: 3) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }`;
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
  const query = `mutation createCustomerMetaField($customerInput: CustomerInput!) {
    customerUpdate(input: $customerInput) {
      customer {
        id
        metafields(first: 100) {
          edges {
            node {
              namespace
              key
              value
              id
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`;

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
  const query = ` {
    metafieldDefinition(id: "gid://shopify/MetafieldDefinition/${config.pageMetaFieldsId}") {
      metafields(first:1){
        edges{
          node{
            value
          }
        }
      }
    }
  }`;
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
  const collectionLink = value;
  const [collectionUrl, collectionName] = collectionLink.match(
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

  const mutation = `mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
    codeDiscountNode {
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          codes(first: 10) {
            nodes {
              code
            }
          }
          startsAt
          endsAt
          customerSelection {
            ... on DiscountCustomerAll {
              allCustomers
            }
          }
          customerGets {
            value {
              ... on DiscountPercentage {
                percentage
              }
            }
            items {
              ... on AllDiscountItems {
                allItems
              }
            }
          }
          appliesOncePerCustomer
        }
      }
    }
    userErrors {
      field
      code
      message
    }
  }
}`;
  const variables = {
    basicCodeDiscount: {
      title: config.discountTitle,
      code: `SUMMER${rndString(config.codeLength)}`,
      startsAt: new Date(),
      endsAt: new Date(new Date().getTime() + config.millisecondsPerDay),
      customerSelection: {
        customers: {
          add: [`gid://shopify/Customer/${customerId}`],
        },
      },
      customerGets: {
        value: {
          percentage: config.discountPercentage,
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

const timeDelta = ({ lastWonAt }) => {
  const previousWonDate = Date.parse(lastWonAt);
  const currentDate = Date.parse(new Date());
  const timeDelta = currentDate - previousWonDate;

  return timeDelta;
};

const getTimeDifference = async ({ metafield: { value } }) => {
  const response = JSON.parse(value);
  const { lastWonAt } = response.scrambler.discount;
  const timeDifference = timeDelta({ lastWonAt });

  return timeDifference;
};

const scramble = (word) => {
  const strArr = word.split("");

  return shuffle(strArr).join("");
};

const createScrambledWord = () => {
  const word = rndValue(config.words);

  return {
    digest: hashWord(word),
    word: scramble(word),
  };
};

const getNextAvailableAt = async (context) => {
  const metafield = await getCustomerMetaField(context);
  const timeDifference = await getTimeDifference({ ...context, metafield });
  const date = new Date(timeDifference);
  const nextAvailableAt = config.hoursPerDay - date.getUTCHours();

  return nextAvailableAt;
};

const isEligibleToPlay = async (context) => {
  const metafield = await getCustomerMetaField(context);

  return (
    !metafield?.value ||
    (await getTimeDifference({ ...context, metafield })) >
      config.millisecondsPerDay
  );
};

const GET = async (context) => {
  const isEligible = await isEligibleToPlay(context);

  return isEligible
    ? { data: createScrambledWord() }
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
