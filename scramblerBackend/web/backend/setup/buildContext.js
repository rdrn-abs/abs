import express from "express";

const PORT = parseInt(
  process.env.BACKEND_PORT || process.env.PORT || "3000",
  10
);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

const buildContext = () => ({
  app,
  staticPath: STATIC_PATH,
  port: PORT,
});

export default buildContext;
