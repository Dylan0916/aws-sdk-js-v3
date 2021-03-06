import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
