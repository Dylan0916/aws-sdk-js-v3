import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetDeploymentTargets } from "../model/operations/BatchGetDeploymentTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetDeploymentTargetsInput } from "../types/BatchGetDeploymentTargetsInput";
import { BatchGetDeploymentTargetsOutput } from "../types/BatchGetDeploymentTargetsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/BatchGetDeploymentTargetsInput";
export * from "../types/BatchGetDeploymentTargetsOutput";
export * from "../types/BatchGetDeploymentTargetsExceptionsUnion";

export class BatchGetDeploymentTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetDeploymentTargetsInput,
      OutputTypesUnion,
      BatchGetDeploymentTargetsOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetDeploymentTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetDeploymentTargetsInput,
    BatchGetDeploymentTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetDeploymentTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetDeploymentTargetsInput,
    BatchGetDeploymentTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetDeploymentTargetsInput, BatchGetDeploymentTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
