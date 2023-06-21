import config from "../config.js";

const graphQLFetch = async (data) => {
  const response = await fetch(config.shopifyEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": config.accessToken,
    },
    body: JSON.stringify(data),
  });
  return response;
};

export default graphQLFetch;
