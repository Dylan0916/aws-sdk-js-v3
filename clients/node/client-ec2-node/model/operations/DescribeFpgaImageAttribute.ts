import { DescribeFpgaImageAttributeInput } from "../shapes/DescribeFpgaImageAttributeInput";
import { DescribeFpgaImageAttributeOutput } from "../shapes/DescribeFpgaImageAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFpgaImageAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFpgaImageAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFpgaImageAttributeInput
  },
  output: {
    shape: DescribeFpgaImageAttributeOutput
  },
  errors: []
};
