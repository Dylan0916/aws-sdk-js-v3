import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ListRolePoliciesExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
