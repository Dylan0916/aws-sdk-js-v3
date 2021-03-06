import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLoginProfile } from "../model/operations/DeleteLoginProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLoginProfileInput } from "../types/DeleteLoginProfileInput";
import { DeleteLoginProfileOutput } from "../types/DeleteLoginProfileOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteLoginProfileInput";
export * from "../types/DeleteLoginProfileOutput";
export * from "../types/DeleteLoginProfileExceptionsUnion";

export class DeleteLoginProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLoginProfileInput,
      OutputTypesUnion,
      DeleteLoginProfileOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLoginProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLoginProfileInput,
    DeleteLoginProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLoginProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLoginProfileInput,
    DeleteLoginProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLoginProfileInput, DeleteLoginProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
