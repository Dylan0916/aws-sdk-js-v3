import { _FilterValues } from "./_FilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Filter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _FilterValues
    }
  }
};
