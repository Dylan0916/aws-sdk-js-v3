import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResumeSession } from "../model/operations/ResumeSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResumeSessionInput } from "../types/ResumeSessionInput";
import { ResumeSessionOutput } from "../types/ResumeSessionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ResumeSessionInput";
export * from "../types/ResumeSessionOutput";
export * from "../types/ResumeSessionExceptionsUnion";

export class ResumeSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResumeSessionInput,
      OutputTypesUnion,
      ResumeSessionOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResumeSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResumeSessionInput,
    ResumeSessionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResumeSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ResumeSessionInput, ResumeSessionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResumeSessionInput, ResumeSessionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
