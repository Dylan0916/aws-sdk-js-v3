import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CompleteMultipartUpload } from "../model/operations/CompleteMultipartUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CompleteMultipartUploadInput } from "../types/CompleteMultipartUploadInput";
import { CompleteMultipartUploadOutput } from "../types/CompleteMultipartUploadOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/CompleteMultipartUploadInput";
export * from "../types/CompleteMultipartUploadOutput";
export * from "../types/CompleteMultipartUploadExceptionsUnion";

export class CompleteMultipartUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CompleteMultipartUploadInput,
      OutputTypesUnion,
      CompleteMultipartUploadOutput,
      GlacierResolvedConfiguration,
      Blob
    > {
  readonly model = CompleteMultipartUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CompleteMultipartUploadInput,
    CompleteMultipartUploadOutput,
    Blob
  >();

  constructor(readonly input: CompleteMultipartUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CompleteMultipartUploadInput,
    CompleteMultipartUploadOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CompleteMultipartUploadInput, CompleteMultipartUploadOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
