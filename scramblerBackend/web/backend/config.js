import {config as c} from 'dotenv'

c()

const config = {
  words: ["wiring", "damascus", "ingredient", "plankton"],
  shopifyEndpoint: `https://${process.env.SHOPIFY_SUB_DOMAIN}.myshopify.com/admin/api/2023-04/graphql.json`,
  accessToken:process.env.SHOPIFY_ACCESS_TOKEN,
  millisecondsPerDay: 86400000,
  codeLength: 5,
  hoursPerDay:24,
  discountPercentage:0.03,
  collectionNameRegex: /(?:.*\/)(.*)/,
  pageMetaFieldsId:4574347581,
  discountTitle:"3% off all items during the summer of 2023",
};

export default config