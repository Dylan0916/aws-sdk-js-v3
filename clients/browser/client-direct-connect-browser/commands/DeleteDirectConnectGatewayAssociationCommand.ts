import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDirectConnectGatewayAssociation } from "../model/operations/DeleteDirectConnectGatewayAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDirectConnectGatewayAssociationInput } from "../types/DeleteDirectConnectGatewayAssociationInput";
import { DeleteDirectConnectGatewayAssociationOutput } from "../types/DeleteDirectConnectGatewayAssociationOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DeleteDirectConnectGatewayAssociationInput";
export * from "../types/DeleteDirectConnectGatewayAssociationOutput";
export * from "../types/DeleteDirectConnectGatewayAssociationExceptionsUnion";

export class DeleteDirectConnectGatewayAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDirectConnectGatewayAssociationInput,
      OutputTypesUnion,
      DeleteDirectConnectGatewayAssociationOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDirectConnectGatewayAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDirectConnectGatewayAssociationInput,
    DeleteDirectConnectGatewayAssociationOutput,
    Blob
  >();

  constructor(readonly input: DeleteDirectConnectGatewayAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDirectConnectGatewayAssociationInput,
    DeleteDirectConnectGatewayAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDirectConnectGatewayAssociationInput,
        DeleteDirectConnectGatewayAssociationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
