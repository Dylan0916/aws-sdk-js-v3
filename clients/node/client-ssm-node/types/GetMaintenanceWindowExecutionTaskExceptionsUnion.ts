import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type GetMaintenanceWindowExecutionTaskExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
