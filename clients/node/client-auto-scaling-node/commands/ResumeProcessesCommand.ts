import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResumeProcesses } from "../model/operations/ResumeProcesses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResumeProcessesInput } from "../types/ResumeProcessesInput";
import { ResumeProcessesOutput } from "../types/ResumeProcessesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/ResumeProcessesInput";
export * from "../types/ResumeProcessesOutput";
export * from "../types/ResumeProcessesExceptionsUnion";

export class ResumeProcessesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResumeProcessesInput,
      OutputTypesUnion,
      ResumeProcessesOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResumeProcesses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResumeProcessesInput,
    ResumeProcessesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResumeProcessesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<ResumeProcessesInput, ResumeProcessesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResumeProcessesInput, ResumeProcessesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
