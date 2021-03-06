import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tags: {
      shape: _TagList
    }
  }
};
