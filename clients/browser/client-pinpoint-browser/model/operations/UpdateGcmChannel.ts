import { UpdateGcmChannelInput } from "../shapes/UpdateGcmChannelInput";
import { UpdateGcmChannelOutput } from "../shapes/UpdateGcmChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGcmChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGcmChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/gcm"
  },
  input: {
    shape: UpdateGcmChannelInput
  },
  output: {
    shape: UpdateGcmChannelOutput
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
