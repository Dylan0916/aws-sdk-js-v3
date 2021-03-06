import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelCertificateTransfer } from "../model/operations/CancelCertificateTransfer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelCertificateTransferInput } from "../types/CancelCertificateTransferInput";
import { CancelCertificateTransferOutput } from "../types/CancelCertificateTransferOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CancelCertificateTransferInput";
export * from "../types/CancelCertificateTransferOutput";
export * from "../types/CancelCertificateTransferExceptionsUnion";

export class CancelCertificateTransferCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelCertificateTransferInput,
      OutputTypesUnion,
      CancelCertificateTransferOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelCertificateTransfer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelCertificateTransferInput,
    CancelCertificateTransferOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelCertificateTransferInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelCertificateTransferInput,
    CancelCertificateTransferOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelCertificateTransferInput, CancelCertificateTransferOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
