import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateTagSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
      shape: {
        type: "string"
      },
      locationName: "resourceType"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
