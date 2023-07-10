import scramble from "../services/scrambler.js";

const GET = async (req, res) => {
  const customerId = Number(req.query.logged_in_customer_id);

  res.json(await scramble.getScrambledWord({ customerId }));
};

const POST = async (req, res) => {
  const customerId = Number(req.query.logged_in_customer_id);

  res.json(await scramble.validateAnswer({ ...req.body, customerId }));
};

const scrambleController = {
  GET,
  POST,
};
export default scrambleController;
