import { map } from "@laufire/utils/collection.js";
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
  map(ownerTypes,(ownerType) =>
    createMetaFieldDefinition({
      definition: { ...definition, ownerType },
    })
  );
};

export default setupMetaFields;
