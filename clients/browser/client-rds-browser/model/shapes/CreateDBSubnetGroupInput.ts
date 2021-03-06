import { _SubnetIdentifierList } from "./_SubnetIdentifierList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBSubnetGroupName", "DBSubnetGroupDescription", "SubnetIds"],
  members: {
    DBSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    DBSubnetGroupDescription: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIdentifierList
    },
    Tags: {
      shape: _TagList
    }
  }
};
