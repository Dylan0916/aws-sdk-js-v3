import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopAppReplication } from "../model/operations/StopAppReplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopAppReplicationInput } from "../types/StopAppReplicationInput";
import { StopAppReplicationOutput } from "../types/StopAppReplicationOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/StopAppReplicationInput";
export * from "../types/StopAppReplicationOutput";
export * from "../types/StopAppReplicationExceptionsUnion";

export class StopAppReplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopAppReplicationInput,
      OutputTypesUnion,
      StopAppReplicationOutput,
      SMSResolvedConfiguration,
      Blob
    > {
  readonly model = StopAppReplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopAppReplicationInput,
    StopAppReplicationOutput,
    Blob
  >();

  constructor(readonly input: StopAppReplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopAppReplicationInput,
    StopAppReplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopAppReplicationInput, StopAppReplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
