import { List as _List_ } from "@aws-sdk/types";
import { _DeployedImage } from "./_DeployedImage";

export const _DeployedImages: _List_ = {
  type: "list",
  member: {
    shape: _DeployedImage
  }
};
