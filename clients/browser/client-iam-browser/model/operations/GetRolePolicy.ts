import { GetRolePolicyInput } from "../shapes/GetRolePolicyInput";
import { GetRolePolicyOutput } from "../shapes/GetRolePolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRolePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRolePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRolePolicyInput
  },
  output: {
    shape: GetRolePolicyOutput,
    resultWrapper: "GetRolePolicyResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
