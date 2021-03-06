import { DescribeVoicesInput } from "../shapes/DescribeVoicesInput";
import { DescribeVoicesOutput } from "../shapes/DescribeVoicesOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVoices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVoices",
  http: {
    method: "GET",
    requestUri: "/v1/voices"
  },
  input: {
    shape: DescribeVoicesInput
  },
  output: {
    shape: DescribeVoicesOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
