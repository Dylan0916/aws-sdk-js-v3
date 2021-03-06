import { _TaskSet } from "./_TaskSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTaskSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskSet: {
      shape: _TaskSet
    }
  }
};
