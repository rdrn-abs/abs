// @ts-check
import setupRoutes from "./backend/setup/setupRoutes.js";
import setupMetaField from "./backend/setup/setupMetaFields.js";
import setupServer from "./backend/setup/setupServer.js";
import setupMiddleware from "./backend/setup/setupMiddleware.js";
import buildContext from "./backend/setup/buildContext.js";

const main = async () => {
  const context = buildContext();
  setupMiddleware(context);
  setupMetaField();
  setupRoutes(context);
  setupServer(context);
};

main();
