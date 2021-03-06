import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExportTransitGatewayRoutes } from "../model/operations/ExportTransitGatewayRoutes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportTransitGatewayRoutesInput } from "../types/ExportTransitGatewayRoutesInput";
import { ExportTransitGatewayRoutesOutput } from "../types/ExportTransitGatewayRoutesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ExportTransitGatewayRoutesInput";
export * from "../types/ExportTransitGatewayRoutesOutput";
export * from "../types/ExportTransitGatewayRoutesExceptionsUnion";

export class ExportTransitGatewayRoutesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportTransitGatewayRoutesInput,
      OutputTypesUnion,
      ExportTransitGatewayRoutesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ExportTransitGatewayRoutes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportTransitGatewayRoutesInput,
    ExportTransitGatewayRoutesOutput,
    Blob
  >();

  constructor(readonly input: ExportTransitGatewayRoutesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ExportTransitGatewayRoutesInput,
    ExportTransitGatewayRoutesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ExportTransitGatewayRoutesInput,
        ExportTransitGatewayRoutesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
