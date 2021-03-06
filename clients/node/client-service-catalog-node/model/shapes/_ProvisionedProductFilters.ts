import { Map as _Map_ } from "@aws-sdk/types";
import { _ProvisionedProductViewFilterValues } from "./_ProvisionedProductViewFilterValues";

export const _ProvisionedProductFilters: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ProvisionedProductViewFilterValues
  }
};
