import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourcePolicyInput: _Structure_ = {
  type: "structure",
  required: ["SecretId"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
