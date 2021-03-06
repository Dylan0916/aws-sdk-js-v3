import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddApplicationOutput } from "../model/operations/AddApplicationOutput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddApplicationOutputInput } from "../types/AddApplicationOutputInput";
import { AddApplicationOutputOutput } from "../types/AddApplicationOutputOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/AddApplicationOutputInput";
export * from "../types/AddApplicationOutputOutput";
export * from "../types/AddApplicationOutputExceptionsUnion";

export class AddApplicationOutputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddApplicationOutputInput,
      OutputTypesUnion,
      AddApplicationOutputOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      Blob
    > {
  readonly model = AddApplicationOutput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddApplicationOutputInput,
    AddApplicationOutputOutput,
    Blob
  >();

  constructor(readonly input: AddApplicationOutputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddApplicationOutputInput,
    AddApplicationOutputOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddApplicationOutputInput, AddApplicationOutputOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
