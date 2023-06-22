import graphQLFetch from "./grapQLFetch";

const createMetaFieldDefinition = async (variables) => {
  const query = `mutation CreateMetafieldDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        name
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  `;

  const response = await graphQLFetch({ query, variables });
  const data = await response.json();

  return data;
};

export default createMetaFieldDefinition;
