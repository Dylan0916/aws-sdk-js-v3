import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteReplicationJob } from "../model/operations/DeleteReplicationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReplicationJobInput } from "../types/DeleteReplicationJobInput";
import { DeleteReplicationJobOutput } from "../types/DeleteReplicationJobOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/DeleteReplicationJobInput";
export * from "../types/DeleteReplicationJobOutput";
export * from "../types/DeleteReplicationJobExceptionsUnion";

export class DeleteReplicationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReplicationJobInput,
      OutputTypesUnion,
      DeleteReplicationJobOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteReplicationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReplicationJobInput,
    DeleteReplicationJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteReplicationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteReplicationJobInput,
    DeleteReplicationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteReplicationJobInput, DeleteReplicationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
