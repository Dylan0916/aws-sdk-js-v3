import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelConversionTask } from "../model/operations/CancelConversionTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelConversionTaskInput } from "../types/CancelConversionTaskInput";
import { CancelConversionTaskOutput } from "../types/CancelConversionTaskOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CancelConversionTaskInput";
export * from "../types/CancelConversionTaskOutput";
export * from "../types/CancelConversionTaskExceptionsUnion";

export class CancelConversionTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelConversionTaskInput,
      OutputTypesUnion,
      CancelConversionTaskOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelConversionTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelConversionTaskInput,
    CancelConversionTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelConversionTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelConversionTaskInput,
    CancelConversionTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelConversionTaskInput, CancelConversionTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
