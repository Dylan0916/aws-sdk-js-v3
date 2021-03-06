import { DescribeScheduledInstancesInput } from "../shapes/DescribeScheduledInstancesInput";
import { DescribeScheduledInstancesOutput } from "../shapes/DescribeScheduledInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeScheduledInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScheduledInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScheduledInstancesInput
  },
  output: {
    shape: DescribeScheduledInstancesOutput
  },
  errors: []
};
