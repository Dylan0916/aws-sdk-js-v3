import { GetConfigurationSetInput } from "../shapes/GetConfigurationSetInput";
import { GetConfigurationSetOutput } from "../shapes/GetConfigurationSetOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetConfigurationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConfigurationSet",
  http: {
    method: "GET",
    requestUri: "/v1/email/configuration-sets/{ConfigurationSetName}"
  },
  input: {
    shape: GetConfigurationSetInput
  },
  output: {
    shape: GetConfigurationSetOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
