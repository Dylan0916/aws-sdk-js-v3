import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableEbsEncryptionByDefault } from "../model/operations/DisableEbsEncryptionByDefault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableEbsEncryptionByDefaultInput } from "../types/DisableEbsEncryptionByDefaultInput";
import { DisableEbsEncryptionByDefaultOutput } from "../types/DisableEbsEncryptionByDefaultOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisableEbsEncryptionByDefaultInput";
export * from "../types/DisableEbsEncryptionByDefaultOutput";
export * from "../types/DisableEbsEncryptionByDefaultExceptionsUnion";

export class DisableEbsEncryptionByDefaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableEbsEncryptionByDefaultInput,
      OutputTypesUnion,
      DisableEbsEncryptionByDefaultOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableEbsEncryptionByDefault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableEbsEncryptionByDefaultInput,
    DisableEbsEncryptionByDefaultOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableEbsEncryptionByDefaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableEbsEncryptionByDefaultInput,
    DisableEbsEncryptionByDefaultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisableEbsEncryptionByDefaultInput,
        DisableEbsEncryptionByDefaultOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
