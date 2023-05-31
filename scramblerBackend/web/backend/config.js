import {config as c} from 'dotenv'

c()

const config = {
  words: ["wiring", "damascus", "ingredient", "plankton"],
  shopifyEndpoint: `https://${process.env.SHOPIFY_SUB_DOMAIN}.myshopify.com/admin/api/2023-04/graphql.json`,
  accessToken:process.env.SHOPIFY_ACCESS_TOKEN,
  millisecondsPerDay: 86400000,
  codeLength: 5,
};

export default config
