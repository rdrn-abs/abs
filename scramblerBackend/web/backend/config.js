import dotenv from "dotenv";

dotenv.config();

const config = {
  shopifyEndpoint: `https://${process.env.SHOPIFY_SUB_DOMAIN}.myshopify.com/admin/api/2023-04/graphql.json`,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  millisecondsPerDay: 86400000,
  codeLength: 5,
  hoursPerDay: 24,
  retry:3,
  discountPercentage: 0.03,
  collectionNameRegex: /(?:.*\/)(.*)/,
  pageMetaFieldsId: process.env.SHOPIFY_PAGE_META_DEFINITION_ID,
};

export default config;
