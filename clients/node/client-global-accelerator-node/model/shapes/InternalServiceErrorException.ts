import { Structure as _Structure_ } from "@aws-sdk/types";

export const InternalServiceErrorException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InternalServiceErrorException"
};
