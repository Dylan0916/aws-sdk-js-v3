import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProject } from "../model/operations/DescribeProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProjectInput } from "../types/DescribeProjectInput";
import { DescribeProjectOutput } from "../types/DescribeProjectOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/DescribeProjectInput";
export * from "../types/DescribeProjectOutput";
export * from "../types/DescribeProjectExceptionsUnion";

export class DescribeProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProjectInput,
      OutputTypesUnion,
      DescribeProjectOutput,
      IoT1ClickProjectsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProjectInput,
    DescribeProjectOutput,
    Blob
  >();

  constructor(readonly input: DescribeProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeProjectInput, DescribeProjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeProjectInput, DescribeProjectOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
