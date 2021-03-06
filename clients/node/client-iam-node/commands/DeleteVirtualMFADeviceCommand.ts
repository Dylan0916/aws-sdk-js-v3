import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVirtualMFADevice } from "../model/operations/DeleteVirtualMFADevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVirtualMFADeviceInput } from "../types/DeleteVirtualMFADeviceInput";
import { DeleteVirtualMFADeviceOutput } from "../types/DeleteVirtualMFADeviceOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteVirtualMFADeviceInput";
export * from "../types/DeleteVirtualMFADeviceOutput";
export * from "../types/DeleteVirtualMFADeviceExceptionsUnion";

export class DeleteVirtualMFADeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVirtualMFADeviceInput,
      OutputTypesUnion,
      DeleteVirtualMFADeviceOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVirtualMFADevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVirtualMFADeviceInput,
    DeleteVirtualMFADeviceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVirtualMFADeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVirtualMFADeviceInput,
    DeleteVirtualMFADeviceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVirtualMFADeviceInput, DeleteVirtualMFADeviceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
