import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSchemaAsJsonInput: _Structure_ = {
  type: "structure",
  required: ["SchemaArn"],
  members: {
    SchemaArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    }
  }
};
