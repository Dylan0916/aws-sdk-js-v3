import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
export type UpdatePatchBaselineExceptionsUnion =
  | DoesNotExistException
  | InternalServerError;
