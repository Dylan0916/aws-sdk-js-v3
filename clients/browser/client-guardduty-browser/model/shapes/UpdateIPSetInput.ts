import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateIPSetInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "IpSetId"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    IpSetId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ipSetId"
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "name"
    },
    Location: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "location"
    },
    Activate: {
      shape: {
        type: "boolean"
      },
      locationName: "activate"
    }
  }
};
