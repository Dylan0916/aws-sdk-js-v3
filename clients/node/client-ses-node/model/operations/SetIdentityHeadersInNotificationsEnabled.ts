import { SetIdentityHeadersInNotificationsEnabledInput } from "../shapes/SetIdentityHeadersInNotificationsEnabledInput";
import { SetIdentityHeadersInNotificationsEnabledOutput } from "../shapes/SetIdentityHeadersInNotificationsEnabledOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetIdentityHeadersInNotificationsEnabled: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetIdentityHeadersInNotificationsEnabled",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetIdentityHeadersInNotificationsEnabledInput
  },
  output: {
    shape: SetIdentityHeadersInNotificationsEnabledOutput,
    resultWrapper: "SetIdentityHeadersInNotificationsEnabledResult"
  },
  errors: []
};
