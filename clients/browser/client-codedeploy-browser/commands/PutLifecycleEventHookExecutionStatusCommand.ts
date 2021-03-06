import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutLifecycleEventHookExecutionStatus } from "../model/operations/PutLifecycleEventHookExecutionStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLifecycleEventHookExecutionStatusInput } from "../types/PutLifecycleEventHookExecutionStatusInput";
import { PutLifecycleEventHookExecutionStatusOutput } from "../types/PutLifecycleEventHookExecutionStatusOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/PutLifecycleEventHookExecutionStatusInput";
export * from "../types/PutLifecycleEventHookExecutionStatusOutput";
export * from "../types/PutLifecycleEventHookExecutionStatusExceptionsUnion";

export class PutLifecycleEventHookExecutionStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutLifecycleEventHookExecutionStatusInput,
      OutputTypesUnion,
      PutLifecycleEventHookExecutionStatusOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = PutLifecycleEventHookExecutionStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLifecycleEventHookExecutionStatusInput,
    PutLifecycleEventHookExecutionStatusOutput,
    Blob
  >();

  constructor(readonly input: PutLifecycleEventHookExecutionStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutLifecycleEventHookExecutionStatusInput,
    PutLifecycleEventHookExecutionStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutLifecycleEventHookExecutionStatusInput,
        PutLifecycleEventHookExecutionStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
