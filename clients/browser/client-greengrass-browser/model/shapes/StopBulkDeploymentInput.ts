import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopBulkDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["BulkDeploymentId"],
  members: {
    BulkDeploymentId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "BulkDeploymentId"
    }
  }
};
