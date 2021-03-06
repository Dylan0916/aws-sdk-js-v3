import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateIntentVersion } from "../model/operations/CreateIntentVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIntentVersionInput } from "../types/CreateIntentVersionInput";
import { CreateIntentVersionOutput } from "../types/CreateIntentVersionOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/CreateIntentVersionInput";
export * from "../types/CreateIntentVersionOutput";
export * from "../types/CreateIntentVersionExceptionsUnion";

export class CreateIntentVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIntentVersionInput,
      OutputTypesUnion,
      CreateIntentVersionOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateIntentVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIntentVersionInput,
    CreateIntentVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateIntentVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateIntentVersionInput,
    CreateIntentVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateIntentVersionInput, CreateIntentVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
