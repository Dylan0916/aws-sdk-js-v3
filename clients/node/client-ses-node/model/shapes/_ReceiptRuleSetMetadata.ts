import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReceiptRuleSetMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
