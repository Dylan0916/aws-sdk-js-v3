import { _JobTemplate } from "./_JobTemplate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobTemplate: {
      shape: _JobTemplate,
      locationName: "jobTemplate"
    }
  }
};
