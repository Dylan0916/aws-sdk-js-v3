import { DescribeApplicationsInput } from "../shapes/DescribeApplicationsInput";
import { DescribeApplicationsOutput } from "../shapes/DescribeApplicationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeApplications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeApplications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeApplicationsInput
  },
  output: {
    shape: DescribeApplicationsOutput,
    resultWrapper: "DescribeApplicationsResult"
  },
  errors: []
};
