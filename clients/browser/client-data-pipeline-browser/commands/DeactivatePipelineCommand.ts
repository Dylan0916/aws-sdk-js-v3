import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeactivatePipeline } from "../model/operations/DeactivatePipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeactivatePipelineInput } from "../types/DeactivatePipelineInput";
import { DeactivatePipelineOutput } from "../types/DeactivatePipelineOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/DeactivatePipelineInput";
export * from "../types/DeactivatePipelineOutput";
export * from "../types/DeactivatePipelineExceptionsUnion";

export class DeactivatePipelineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeactivatePipelineInput,
      OutputTypesUnion,
      DeactivatePipelineOutput,
      DataPipelineResolvedConfiguration,
      Blob
    > {
  readonly model = DeactivatePipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeactivatePipelineInput,
    DeactivatePipelineOutput,
    Blob
  >();

  constructor(readonly input: DeactivatePipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeactivatePipelineInput,
    DeactivatePipelineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeactivatePipelineInput, DeactivatePipelineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
