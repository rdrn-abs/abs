import express from "express";
import serveStatic from "serve-static";
import shopify from "../../shopify.js";

const setupMiddleware = ({ app, staticPath }) => {
  app.use(express.json());
  app.use(shopify.cspHeaders());
  app.use(serveStatic(staticPath, { index: false }));
};

export default setupMiddleware