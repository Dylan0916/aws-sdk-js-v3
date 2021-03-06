import { _AttributeList } from "./_AttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountAttributes: {
      shape: _AttributeList
    }
  }
};
