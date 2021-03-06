import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteInstance } from "../model/operations/DeleteInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInstanceInput } from "../types/DeleteInstanceInput";
import { DeleteInstanceOutput } from "../types/DeleteInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DeleteInstanceInput";
export * from "../types/DeleteInstanceOutput";
export * from "../types/DeleteInstanceExceptionsUnion";

export class DeleteInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInstanceInput,
      OutputTypesUnion,
      DeleteInstanceOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInstanceInput,
    DeleteInstanceOutput,
    Blob
  >();

  constructor(readonly input: DeleteInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteInstanceInput, DeleteInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInstanceInput, DeleteInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
