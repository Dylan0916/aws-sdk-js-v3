import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchUpdatePhoneNumber } from "../model/operations/BatchUpdatePhoneNumber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchUpdatePhoneNumberInput } from "../types/BatchUpdatePhoneNumberInput";
import { BatchUpdatePhoneNumberOutput } from "../types/BatchUpdatePhoneNumberOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/BatchUpdatePhoneNumberInput";
export * from "../types/BatchUpdatePhoneNumberOutput";
export * from "../types/BatchUpdatePhoneNumberExceptionsUnion";

export class BatchUpdatePhoneNumberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchUpdatePhoneNumberInput,
      OutputTypesUnion,
      BatchUpdatePhoneNumberOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = BatchUpdatePhoneNumber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchUpdatePhoneNumberInput,
    BatchUpdatePhoneNumberOutput,
    Blob
  >();

  constructor(readonly input: BatchUpdatePhoneNumberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchUpdatePhoneNumberInput,
    BatchUpdatePhoneNumberOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchUpdatePhoneNumberInput, BatchUpdatePhoneNumberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
