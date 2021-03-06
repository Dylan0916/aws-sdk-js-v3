import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RebootRequest: _Structure_ = {
  type: "structure",
  required: ["WorkspaceId"],
  members: {
    WorkspaceId: {
      shape: {
        type: "string"
      }
    }
  }
};
