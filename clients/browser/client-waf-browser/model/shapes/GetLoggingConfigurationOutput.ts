import { _LoggingConfiguration } from "./_LoggingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoggingConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoggingConfiguration: {
      shape: _LoggingConfiguration
    }
  }
};
