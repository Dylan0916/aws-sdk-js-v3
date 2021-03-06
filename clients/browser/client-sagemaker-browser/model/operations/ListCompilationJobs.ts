import { ListCompilationJobsInput } from "../shapes/ListCompilationJobsInput";
import { ListCompilationJobsOutput } from "../shapes/ListCompilationJobsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCompilationJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCompilationJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCompilationJobsInput
  },
  output: {
    shape: ListCompilationJobsOutput
  },
  errors: []
};
