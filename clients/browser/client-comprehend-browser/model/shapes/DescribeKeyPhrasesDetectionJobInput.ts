import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeKeyPhrasesDetectionJobInput: _Structure_ = {
  type: "structure",
  required: ["JobId"],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
