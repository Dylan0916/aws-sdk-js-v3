import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSnapshotSchedule } from "../model/operations/DeleteSnapshotSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSnapshotScheduleInput } from "../types/DeleteSnapshotScheduleInput";
import { DeleteSnapshotScheduleOutput } from "../types/DeleteSnapshotScheduleOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteSnapshotScheduleInput";
export * from "../types/DeleteSnapshotScheduleOutput";
export * from "../types/DeleteSnapshotScheduleExceptionsUnion";

export class DeleteSnapshotScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSnapshotScheduleInput,
      OutputTypesUnion,
      DeleteSnapshotScheduleOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSnapshotSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSnapshotScheduleInput,
    DeleteSnapshotScheduleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSnapshotScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSnapshotScheduleInput,
    DeleteSnapshotScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSnapshotScheduleInput, DeleteSnapshotScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
