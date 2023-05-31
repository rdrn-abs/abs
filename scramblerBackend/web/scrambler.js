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

const GET = async (context) => ({ data: createScrambledWord() });

const scrambler = { GET };

export default scrambler;
