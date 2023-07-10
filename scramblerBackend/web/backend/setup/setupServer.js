import { join } from "path";
import { readFileSync } from "fs";
import shopify from "../../shopify.js";

const setupServer = ({ app, staticPath, port }) => {
  app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
    return res
      .status(200)
      .set("Content-Type", "text/html")
      .send(readFileSync(join(staticPath, "index.html")));
  });

  app.listen(port);
};

export default setupServer;
