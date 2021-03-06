import { _Policy } from "./_Policy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Policy: {
      shape: _Policy
    }
  }
};
