import crypto from "crypto";
import { shuffle } from "@laufire/utils/collection.js";
import dayjs from "dayjs";

const checkDateDifference = (context) => {
  const currentDate = dayjs();
  const date = dayjs(context.date);
  const difference = currentDate.diff(date, "d");

  return difference;
};

const hashWord = (word) => {
  const hash = crypto.createHash("sha256");
  hash.update(word.toUpperCase());

  return hash.digest("hex");
};

const scramble = (word) => {
  const strArr = word.split("");

  return shuffle(strArr).join("");
};

const helper = {
  hashWord,
  checkDateDifference,
  scramble,
};

export default helper;
