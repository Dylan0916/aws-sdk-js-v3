import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    code: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
