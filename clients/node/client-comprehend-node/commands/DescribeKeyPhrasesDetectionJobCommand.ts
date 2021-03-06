import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeKeyPhrasesDetectionJob } from "../model/operations/DescribeKeyPhrasesDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeKeyPhrasesDetectionJobInput } from "../types/DescribeKeyPhrasesDetectionJobInput";
import { DescribeKeyPhrasesDetectionJobOutput } from "../types/DescribeKeyPhrasesDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DescribeKeyPhrasesDetectionJobInput";
export * from "../types/DescribeKeyPhrasesDetectionJobOutput";
export * from "../types/DescribeKeyPhrasesDetectionJobExceptionsUnion";

export class DescribeKeyPhrasesDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeKeyPhrasesDetectionJobInput,
      OutputTypesUnion,
      DescribeKeyPhrasesDetectionJobOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeKeyPhrasesDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeKeyPhrasesDetectionJobInput,
    DescribeKeyPhrasesDetectionJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeKeyPhrasesDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeKeyPhrasesDetectionJobInput,
    DescribeKeyPhrasesDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeKeyPhrasesDetectionJobInput,
        DescribeKeyPhrasesDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
