import { shuffle } from "@laufire/utils/collection.js";
import { rndString, rndValue } from "@laufire/utils/random.js";
import crypto from "crypto";
import config from "./config.js";


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

const updateCustomerMetaField = async ({ customerId }) => {
  const { id } = await getCustomerMetaField({ customerId });

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
          value: `{\"scrambler\":{\"discount\":{\"lastWon\":\"${new Date()}\"}}}`,
        },
      ],
      id: `gid://shopify/Customer/${customerId}`,
    },
  };

  const response = await graphQLFetch({ query, variables });
  const { data } = await response.json();

  return data;
};

const createDiscount = async ({ customerId }) => {
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
      title: "10% off all items during the summer of 2023",
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
          percentage: 0.1,
        },
        items: {
          all: true,
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

  await updateCustomerMetaField({ customerId });

  return data;
};


const getLastWon = async (context) => {
  const { value } = await getCustomerMetaField(context);

  const response = JSON.parse(value);
  const { lastWon } = response.scrambler.discount;

  return lastWon;
};

const timeDelta = ({ lastWon }) => {
  const previousWonDate = Date.parse(lastWon);
  const currentDate = Date.parse(new Date());
  const timeDelta = currentDate - previousWonDate;

  return timeDelta;
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

const GET = async (context) => {
  const lastWon = await getLastWon(context);
  const timeDifference = timeDelta({ lastWon });
  const isValid = timeDifference > config.millisecondsPerDay;
  const date = new Date(timeDifference);
  const hours = date.getUTCHours();

  return isValid
    ? { data: createScrambledWord() }
    : {
        error: {
          type: "Come back the next day.",
          lastPlayed: hours,
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

const scrambler = { GET , POST };

export default scrambler;
