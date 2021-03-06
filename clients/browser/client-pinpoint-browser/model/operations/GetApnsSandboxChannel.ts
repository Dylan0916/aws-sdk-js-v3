import { GetApnsSandboxChannelInput } from "../shapes/GetApnsSandboxChannelInput";
import { GetApnsSandboxChannelOutput } from "../shapes/GetApnsSandboxChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApnsSandboxChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApnsSandboxChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/apns_sandbox"
  },
  input: {
    shape: GetApnsSandboxChannelInput
  },
  output: {
    shape: GetApnsSandboxChannelOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
