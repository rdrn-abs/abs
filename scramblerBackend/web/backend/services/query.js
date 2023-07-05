import config from "../config.js";

const pageMetaField = ` {
  metafieldDefinition(id: "gid://shopify/MetafieldDefinition/${config.pageMetaFieldsId}") {
    metafields(first:1){
      edges{
        node{
          value
        }
      }
    }
  }
}`

const customerMetaField =(customerId)=> `query {
  customer(id: "gid://shopify/Customer/${customerId}") {
      metafield(key:"custom",namespace:"custom"){
          value
          id
    }
  }
}
`
const updateCustomerMetaField = `mutation updateCustomerMetafields($input: CustomerInput!) {
  customerUpdate(input: $input) {
    customer {
      id
      metafields(first: 3) {
        edges {
          node {
            id
            namespace
            key
            value
          }
        }
      }
    }
    userErrors {
      message
      field
    }
  }
}`

const createCustomerMetaField = `mutation createCustomerMetaField($customerInput: CustomerInput!) {
  customerUpdate(input: $customerInput) {
    customer {
      id
      metafields(first: 100) {
        edges {
          node {
            namespace
            key
            value
            id
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}`

const createDiscount=`mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
    codeDiscountNode {
      codeDiscount {
        ... on DiscountCodeBasic {
          title
          codes(first: 10) {
            nodes {
              code
            }
          }
          startsAt
          endsAt
          customerSelection {
            ... on DiscountCustomerAll {
              allCustomers
            }
          }
          customerGets {
            value {
              ... on DiscountPercentage {
                percentage
              }
            }
            items {
              ... on AllDiscountItems {
                allItems
              }
            }
          }
          appliesOncePerCustomer
        }
      }
    }
    userErrors {
      field
      code
      message
    }
  }
}`

const graphqlQuery = {
  pageMetaField,
  customerMetaField,
  updateCustomerMetaField,
  createCustomerMetaField,
  createDiscount
}

export default graphqlQuery