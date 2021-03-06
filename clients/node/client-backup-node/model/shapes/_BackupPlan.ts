import { _BackupRules } from "./_BackupRules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackupPlan: _Structure_ = {
  type: "structure",
  required: ["BackupPlanName", "Rules"],
  members: {
    BackupPlanName: {
      shape: {
        type: "string"
      }
    },
    Rules: {
      shape: _BackupRules
    }
  }
};
