import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteIntegration } from "../model/operations/DeleteIntegration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIntegrationInput } from "../types/DeleteIntegrationInput";
import { DeleteIntegrationOutput } from "../types/DeleteIntegrationOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/DeleteIntegrationInput";
export * from "../types/DeleteIntegrationOutput";
export * from "../types/DeleteIntegrationExceptionsUnion";

export class DeleteIntegrationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIntegrationInput,
      OutputTypesUnion,
      DeleteIntegrationOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteIntegration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIntegrationInput,
    DeleteIntegrationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteIntegrationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteIntegrationInput, DeleteIntegrationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIntegrationInput, DeleteIntegrationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
