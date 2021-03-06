import { VerifyDomainIdentityInput } from "../shapes/VerifyDomainIdentityInput";
import { VerifyDomainIdentityOutput } from "../shapes/VerifyDomainIdentityOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const VerifyDomainIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "VerifyDomainIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: VerifyDomainIdentityInput
  },
  output: {
    shape: VerifyDomainIdentityOutput,
    resultWrapper: "VerifyDomainIdentityResult"
  },
  errors: []
};
