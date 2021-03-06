import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutVoiceConnectorTerminationCredentials } from "../model/operations/PutVoiceConnectorTerminationCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutVoiceConnectorTerminationCredentialsInput } from "../types/PutVoiceConnectorTerminationCredentialsInput";
import { PutVoiceConnectorTerminationCredentialsOutput } from "../types/PutVoiceConnectorTerminationCredentialsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/PutVoiceConnectorTerminationCredentialsInput";
export * from "../types/PutVoiceConnectorTerminationCredentialsOutput";
export * from "../types/PutVoiceConnectorTerminationCredentialsExceptionsUnion";

export class PutVoiceConnectorTerminationCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutVoiceConnectorTerminationCredentialsInput,
      OutputTypesUnion,
      PutVoiceConnectorTerminationCredentialsOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutVoiceConnectorTerminationCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutVoiceConnectorTerminationCredentialsInput,
    PutVoiceConnectorTerminationCredentialsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutVoiceConnectorTerminationCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutVoiceConnectorTerminationCredentialsInput,
    PutVoiceConnectorTerminationCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutVoiceConnectorTerminationCredentialsInput,
        PutVoiceConnectorTerminationCredentialsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
