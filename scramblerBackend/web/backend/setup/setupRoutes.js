import scrambleController from "../controllers/scrambleController.js";

const setupRoutes = ({ app }) => {
  app.get("/custom/api/scrambleWord", scrambleController.getScrambleWord);
  app.post("/custom/api/scrambleWord", scrambleController.postScrambledInput);
};

export default setupRoutes;
