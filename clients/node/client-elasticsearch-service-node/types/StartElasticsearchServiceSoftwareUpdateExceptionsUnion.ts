import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
export type StartElasticsearchServiceSoftwareUpdateExceptionsUnion =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException;
