import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteExpression } from "../model/operations/DeleteExpression";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteExpressionInput } from "../types/DeleteExpressionInput";
import { DeleteExpressionOutput } from "../types/DeleteExpressionOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DeleteExpressionInput";
export * from "../types/DeleteExpressionOutput";
export * from "../types/DeleteExpressionExceptionsUnion";

export class DeleteExpressionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteExpressionInput,
      OutputTypesUnion,
      DeleteExpressionOutput,
      CloudSearchResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteExpression;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteExpressionInput,
    DeleteExpressionOutput,
    Blob
  >();

  constructor(readonly input: DeleteExpressionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteExpressionInput, DeleteExpressionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteExpressionInput, DeleteExpressionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
