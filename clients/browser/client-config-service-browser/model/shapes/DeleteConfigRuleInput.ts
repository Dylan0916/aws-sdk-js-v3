import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConfigRuleInput: _Structure_ = {
  type: "structure",
  required: ["ConfigRuleName"],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
