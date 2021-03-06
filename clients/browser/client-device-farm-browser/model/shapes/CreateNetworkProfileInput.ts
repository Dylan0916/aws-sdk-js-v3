import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkProfileInput: _Structure_ = {
  type: "structure",
  required: ["projectArn", "name"],
  members: {
    projectArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    uplinkBandwidthBits: {
      shape: {
        type: "integer"
      }
    },
    downlinkBandwidthBits: {
      shape: {
        type: "integer"
      }
    },
    uplinkDelayMs: {
      shape: {
        type: "integer"
      }
    },
    downlinkDelayMs: {
      shape: {
        type: "integer"
      }
    },
    uplinkJitterMs: {
      shape: {
        type: "integer"
      }
    },
    downlinkJitterMs: {
      shape: {
        type: "integer"
      }
    },
    uplinkLossPercent: {
      shape: {
        type: "integer"
      }
    },
    downlinkLossPercent: {
      shape: {
        type: "integer"
      }
    }
  }
};
