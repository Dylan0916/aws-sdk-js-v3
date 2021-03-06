import { _Credentials } from "./_Credentials";
import { _AssumedRoleUser } from "./_AssumedRoleUser";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssumeRoleWithSAMLOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Credentials: {
      shape: _Credentials
    },
    AssumedRoleUser: {
      shape: _AssumedRoleUser
    },
    PackedPolicySize: {
      shape: {
        type: "integer"
      }
    },
    Subject: {
      shape: {
        type: "string"
      }
    },
    SubjectType: {
      shape: {
        type: "string"
      }
    },
    Issuer: {
      shape: {
        type: "string"
      }
    },
    Audience: {
      shape: {
        type: "string"
      }
    },
    NameQualifier: {
      shape: {
        type: "string"
      }
    }
  }
};
