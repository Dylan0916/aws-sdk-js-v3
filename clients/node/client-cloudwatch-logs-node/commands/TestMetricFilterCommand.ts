import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TestMetricFilter } from "../model/operations/TestMetricFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestMetricFilterInput } from "../types/TestMetricFilterInput";
import { TestMetricFilterOutput } from "../types/TestMetricFilterOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/TestMetricFilterInput";
export * from "../types/TestMetricFilterOutput";
export * from "../types/TestMetricFilterExceptionsUnion";

export class TestMetricFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestMetricFilterInput,
      OutputTypesUnion,
      TestMetricFilterOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TestMetricFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestMetricFilterInput,
    TestMetricFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: TestMetricFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<TestMetricFilterInput, TestMetricFilterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestMetricFilterInput, TestMetricFilterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
