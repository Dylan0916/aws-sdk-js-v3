import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDeploymentJob } from "../model/operations/DescribeDeploymentJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDeploymentJobInput } from "../types/DescribeDeploymentJobInput";
import { DescribeDeploymentJobOutput } from "../types/DescribeDeploymentJobOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DescribeDeploymentJobInput";
export * from "../types/DescribeDeploymentJobOutput";
export * from "../types/DescribeDeploymentJobExceptionsUnion";

export class DescribeDeploymentJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDeploymentJobInput,
      OutputTypesUnion,
      DescribeDeploymentJobOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDeploymentJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDeploymentJobInput,
    DescribeDeploymentJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDeploymentJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDeploymentJobInput,
    DescribeDeploymentJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDeploymentJobInput, DescribeDeploymentJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
