import { ListTemplatesInput } from "../shapes/ListTemplatesInput";
import { ListTemplatesOutput } from "../shapes/ListTemplatesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTemplates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTemplates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTemplatesInput
  },
  output: {
    shape: ListTemplatesOutput,
    resultWrapper: "ListTemplatesResult"
  },
  errors: []
};
