import { RenewCertificateInput } from "../shapes/RenewCertificateInput";
import { RenewCertificateOutput } from "../shapes/RenewCertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RenewCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RenewCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RenewCertificateInput
  },
  output: {
    shape: RenewCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    }
  ]
};
