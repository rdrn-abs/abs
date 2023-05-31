import { shuffle } from "@laufire/utils/collection.js";
import { rndValue } from "@laufire/utils/random.js";
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

const scrambler = { GET };

export default scrambler;
