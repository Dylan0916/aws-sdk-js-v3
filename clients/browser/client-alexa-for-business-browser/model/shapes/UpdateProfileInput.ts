import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProfileInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProfileArn: {
      shape: {
        type: "string"
      }
    },
    ProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IsDefault: {
      shape: {
        type: "boolean"
      }
    },
    Timezone: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Address: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DistanceUnit: {
      shape: {
        type: "string"
      }
    },
    TemperatureUnit: {
      shape: {
        type: "string"
      }
    },
    WakeWord: {
      shape: {
        type: "string"
      }
    },
    SetupModeDisabled: {
      shape: {
        type: "boolean"
      }
    },
    MaxVolumeLimit: {
      shape: {
        type: "integer"
      }
    },
    PSTNEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
