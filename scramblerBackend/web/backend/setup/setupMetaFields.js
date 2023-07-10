import createMetaFieldDefinition from "../services/createMetaFieldDefinition.js";

const definition = {
  name: "Custom",
  namespace: "custom",
  key: "custom",
  description: "For scramble game.",
  type: "json",
};

const ownerTypes = ["PAGE", "CUSTOMER"];

const setupMetaFields = () => {
  ownerTypes.map((ownerType) =>
    createMetaFieldDefinition({
      definition: { ...definition, ownerType },
    })
  );
};

export default setupMetaFields;
