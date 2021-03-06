import { _App } from "./_App";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAppOutput: _Structure_ = {
  type: "structure",
  required: ["app"],
  members: {
    app: {
      shape: _App
    }
  }
};
