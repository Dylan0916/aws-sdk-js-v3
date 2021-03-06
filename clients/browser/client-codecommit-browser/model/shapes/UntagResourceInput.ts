import { _TagKeysList } from "./_TagKeysList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "tagKeys"],
  members: {
    resourceArn: {
      shape: {
        type: "string"
      }
    },
    tagKeys: {
      shape: _TagKeysList
    }
  }
};
