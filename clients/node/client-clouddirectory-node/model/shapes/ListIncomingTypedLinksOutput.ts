import { _TypedLinkSpecifierList } from "./_TypedLinkSpecifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIncomingTypedLinksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LinkSpecifiers: {
      shape: _TypedLinkSpecifierList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
