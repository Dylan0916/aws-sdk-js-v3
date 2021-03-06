import { _WriteSegmentRequest } from "./_WriteSegmentRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSegmentInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "WriteSegmentRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    WriteSegmentRequest: {
      shape: _WriteSegmentRequest
    }
  },
  payload: "WriteSegmentRequest"
};
