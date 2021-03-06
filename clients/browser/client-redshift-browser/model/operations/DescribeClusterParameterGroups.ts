import { DescribeClusterParameterGroupsInput } from "../shapes/DescribeClusterParameterGroupsInput";
import { DescribeClusterParameterGroupsOutput } from "../shapes/DescribeClusterParameterGroupsOutput";
import { ClusterParameterGroupNotFoundFault } from "../shapes/ClusterParameterGroupNotFoundFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusterParameterGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusterParameterGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClusterParameterGroupsInput
  },
  output: {
    shape: DescribeClusterParameterGroupsOutput,
    resultWrapper: "DescribeClusterParameterGroupsResult"
  },
  errors: [
    {
      shape: ClusterParameterGroupNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
