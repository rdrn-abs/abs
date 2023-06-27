import createMetaFieldDefinition from "../services/createMetaFieldDefinition.js";

const definition = {
  name: "Custom",
  namespace: "custom",
  key: "custom",
  description: "For scramble game.",
  type: "json",
};

const setupMetaField = async () => {
  await createMetaFieldDefinition({
    definition: { ...definition, ownerType: "PAGE" },
  });
  await createMetaFieldDefinition({
    definition: { ...definition, ownerType: "CUSTOMER" },
  });
};

export default setupMetaField;
