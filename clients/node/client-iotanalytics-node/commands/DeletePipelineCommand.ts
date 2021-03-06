import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePipeline } from "../model/operations/DeletePipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePipelineInput } from "../types/DeletePipelineInput";
import { DeletePipelineOutput } from "../types/DeletePipelineOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/DeletePipelineInput";
export * from "../types/DeletePipelineOutput";
export * from "../types/DeletePipelineExceptionsUnion";

export class DeletePipelineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePipelineInput,
      OutputTypesUnion,
      DeletePipelineOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePipelineInput,
    DeletePipelineOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeletePipelineInput, DeletePipelineOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePipelineInput, DeletePipelineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
