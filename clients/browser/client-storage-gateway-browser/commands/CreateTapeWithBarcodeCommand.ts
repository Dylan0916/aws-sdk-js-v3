import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTapeWithBarcode } from "../model/operations/CreateTapeWithBarcode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTapeWithBarcodeInput } from "../types/CreateTapeWithBarcodeInput";
import { CreateTapeWithBarcodeOutput } from "../types/CreateTapeWithBarcodeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/CreateTapeWithBarcodeInput";
export * from "../types/CreateTapeWithBarcodeOutput";
export * from "../types/CreateTapeWithBarcodeExceptionsUnion";

export class CreateTapeWithBarcodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTapeWithBarcodeInput,
      OutputTypesUnion,
      CreateTapeWithBarcodeOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTapeWithBarcode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTapeWithBarcodeInput,
    CreateTapeWithBarcodeOutput,
    Blob
  >();

  constructor(readonly input: CreateTapeWithBarcodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTapeWithBarcodeInput,
    CreateTapeWithBarcodeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTapeWithBarcodeInput, CreateTapeWithBarcodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
