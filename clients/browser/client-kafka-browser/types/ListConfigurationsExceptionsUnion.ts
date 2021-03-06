import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
export type ListConfigurationsExceptionsUnion =
  | ServiceUnavailableException
  | BadRequestException
  | UnauthorizedException
  | InternalServerErrorException
  | ForbiddenException;
