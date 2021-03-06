import { DeleteNetworkInterfacePermissionInput } from "../shapes/DeleteNetworkInterfacePermissionInput";
import { DeleteNetworkInterfacePermissionOutput } from "../shapes/DeleteNetworkInterfacePermissionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNetworkInterfacePermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNetworkInterfacePermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNetworkInterfacePermissionInput
  },
  output: {
    shape: DeleteNetworkInterfacePermissionOutput
  },
  errors: []
};
