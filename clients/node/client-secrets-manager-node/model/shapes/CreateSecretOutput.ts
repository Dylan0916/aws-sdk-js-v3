import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecretOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionId: {
      shape: {
        type: "string",
        min: 32
      }
    }
  }
};
