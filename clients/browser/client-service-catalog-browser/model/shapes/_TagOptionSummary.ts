import { _TagOptionValues } from "./_TagOptionValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TagOptionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _TagOptionValues
    }
  }
};
