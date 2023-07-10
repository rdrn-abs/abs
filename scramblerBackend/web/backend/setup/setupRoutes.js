import scrambleController from "../controllers/scrambleController.js";

const setupRoutes = ({ app }) => {
  app.get("/custom/api/scrambleWord", scrambleController.GET);
  app.post("/custom/api/scrambleWord", scrambleController.POST);
};

export default setupRoutes;
