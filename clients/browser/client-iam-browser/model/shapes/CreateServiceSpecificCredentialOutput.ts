import { _ServiceSpecificCredential } from "./_ServiceSpecificCredential";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServiceSpecificCredentialOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceSpecificCredential: {
      shape: _ServiceSpecificCredential
    }
  }
};
