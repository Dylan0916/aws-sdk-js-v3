import { EnableAlarmActionsInput } from "../shapes/EnableAlarmActionsInput";
import { EnableAlarmActionsOutput } from "../shapes/EnableAlarmActionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableAlarmActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableAlarmActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableAlarmActionsInput
  },
  output: {
    shape: EnableAlarmActionsOutput
  },
  errors: []
};
