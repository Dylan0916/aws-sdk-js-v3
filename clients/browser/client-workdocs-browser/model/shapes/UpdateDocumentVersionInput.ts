import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDocumentVersionInput: _Structure_ = {
  type: "structure",
  required: ["DocumentId", "VersionId"],
  members: {
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    },
    DocumentId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "DocumentId"
    },
    VersionId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "VersionId"
    },
    VersionStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
