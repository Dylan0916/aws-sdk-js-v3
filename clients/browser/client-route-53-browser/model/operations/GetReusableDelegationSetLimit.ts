import { GetReusableDelegationSetLimitInput } from "../shapes/GetReusableDelegationSetLimitInput";
import { GetReusableDelegationSetLimitOutput } from "../shapes/GetReusableDelegationSetLimitOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NoSuchDelegationSet } from "../shapes/NoSuchDelegationSet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetReusableDelegationSetLimit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetReusableDelegationSetLimit",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/reusabledelegationsetlimit/{Id}/{Type}"
  },
  input: {
    shape: GetReusableDelegationSetLimitInput
  },
  output: {
    shape: GetReusableDelegationSetLimitOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchDelegationSet
    }
  ]
};
