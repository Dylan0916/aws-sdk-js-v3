import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaOutput: _Structure_ = {
  type: "structure",
  required: ["ResourceARN", "RoleARN"],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
