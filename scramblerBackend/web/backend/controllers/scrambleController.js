import scramble from "../services/scrambler.js";

const getScrambleWord = async (req, res) => {
  const customerId = Number(req.query.logged_in_customer_id);

  res.json(await scramble.GET({ customerId }));
};

const postScrambledInput = async (req, res) => {
  const customerId = Number(req.query.logged_in_customer_id);

  res.json(await scramble.POST({ ...req.body, customerId }));
};
const scrambleController = {
  getScrambleWord,
  postScrambledInput,
};
export default scrambleController;
