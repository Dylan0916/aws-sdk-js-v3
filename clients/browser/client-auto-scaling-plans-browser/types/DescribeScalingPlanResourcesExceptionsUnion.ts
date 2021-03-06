import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
export type DescribeScalingPlanResourcesExceptionsUnion =
  | ValidationException
  | InvalidNextTokenException
  | ConcurrentUpdateException
  | InternalServiceException;
