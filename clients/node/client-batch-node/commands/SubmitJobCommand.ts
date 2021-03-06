import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SubmitJob } from "../model/operations/SubmitJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SubmitJobInput } from "../types/SubmitJobInput";
import { SubmitJobOutput } from "../types/SubmitJobOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/SubmitJobInput";
export * from "../types/SubmitJobOutput";
export * from "../types/SubmitJobExceptionsUnion";

export class SubmitJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SubmitJobInput,
      OutputTypesUnion,
      SubmitJobOutput,
      BatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SubmitJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SubmitJobInput,
    SubmitJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: SubmitJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<SubmitJobInput, SubmitJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SubmitJobInput, SubmitJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
