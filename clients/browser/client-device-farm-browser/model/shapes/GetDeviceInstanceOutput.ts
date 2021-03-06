import { _DeviceInstance } from "./_DeviceInstance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeviceInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deviceInstance: {
      shape: _DeviceInstance
    }
  }
};
