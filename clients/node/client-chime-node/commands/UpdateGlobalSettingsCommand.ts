import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateGlobalSettings } from "../model/operations/UpdateGlobalSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGlobalSettingsInput } from "../types/UpdateGlobalSettingsInput";
import { UpdateGlobalSettingsOutput } from "../types/UpdateGlobalSettingsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/UpdateGlobalSettingsInput";
export * from "../types/UpdateGlobalSettingsOutput";
export * from "../types/UpdateGlobalSettingsExceptionsUnion";

export class UpdateGlobalSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGlobalSettingsInput,
      OutputTypesUnion,
      UpdateGlobalSettingsOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateGlobalSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGlobalSettingsInput,
    UpdateGlobalSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateGlobalSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateGlobalSettingsInput,
    UpdateGlobalSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGlobalSettingsInput, UpdateGlobalSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
