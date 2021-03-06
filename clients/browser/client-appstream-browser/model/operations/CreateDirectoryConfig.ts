import { CreateDirectoryConfigInput } from "../shapes/CreateDirectoryConfigInput";
import { CreateDirectoryConfigOutput } from "../shapes/CreateDirectoryConfigOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDirectoryConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDirectoryConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDirectoryConfigInput
  },
  output: {
    shape: CreateDirectoryConfigOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccountStatusException
    }
  ]
};
