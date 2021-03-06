import { CreateDomainNameInput } from "../shapes/CreateDomainNameInput";
import { CreateDomainNameOutput } from "../shapes/CreateDomainNameOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDomainName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDomainName",
  http: {
    method: "POST",
    requestUri: "/v2/domainnames"
  },
  input: {
    shape: CreateDomainNameInput
  },
  output: {
    shape: CreateDomainNameOutput
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
    },
    {
      shape: ConflictException
    }
  ]
};
