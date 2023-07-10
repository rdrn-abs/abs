import graphQLFetch from "./grapQLFetch.js";

const createMetaFieldDefinition = async (variables) => {
  try {
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
    const { data } = await response.json();
    data.metafieldDefinitionCreate.createdDefinition
      ? console.log("Successfully created a metaDefinition")
      : console.log(
          "Error:",
          data.metafieldDefinitionCreate.userErrors
        );
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default createMetaFieldDefinition;
