import crypto from "crypto";
import { shuffle } from "@laufire/utils/collection.js";
import dayjs from "dayjs";

const checkDateDifference = (date) => {
  const currentDate = dayjs();
  const formattedDate = dayjs(date);
  const difference = currentDate.diff(formattedDate, "d");

  return difference;
};

const getNextAvailableAt = async (data) => {
  const currentTime = dayjs();
  const recordedTime = dayjs(data).add(1, "day");
  const offset = 60;

  const nextAvailableAt = {
    hours: recordedTime.diff(currentTime, "h"),
    minutes: recordedTime.diff(currentTime, "m") % offset,
    seconds: recordedTime.diff(currentTime, "s") % offset,
  };

  return nextAvailableAt;
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
  getNextAvailableAt
};

export default helper;
