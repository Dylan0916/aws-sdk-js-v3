import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLexiconInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        sensitive: true
      },
      location: "uri",
      locationName: "LexiconName"
    }
  }
};
