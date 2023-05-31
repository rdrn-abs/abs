const config = {
  words: ["wiring", "damascus", "ingredient", "plankton"],
  shopifyEndpoint: `https://${process.env.REACT_APP_SHOPIFY_SUB_DOMAIN}.myshopify.com/admin/api/2023-04/graphql.json`,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  millisecondsPerDay: 86400000,
  codeLength: 5,
};

export default config
