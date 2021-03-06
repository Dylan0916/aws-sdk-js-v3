import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetQueueAttributes } from "../model/operations/SetQueueAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetQueueAttributesInput } from "../types/SetQueueAttributesInput";
import { SetQueueAttributesOutput } from "../types/SetQueueAttributesOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/SetQueueAttributesInput";
export * from "../types/SetQueueAttributesOutput";
export * from "../types/SetQueueAttributesExceptionsUnion";

export class SetQueueAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetQueueAttributesInput,
      OutputTypesUnion,
      SetQueueAttributesOutput,
      SQSResolvedConfiguration,
      Blob
    > {
  readonly model = SetQueueAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetQueueAttributesInput,
    SetQueueAttributesOutput,
    Blob
  >();

  constructor(readonly input: SetQueueAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetQueueAttributesInput,
    SetQueueAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetQueueAttributesInput, SetQueueAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
