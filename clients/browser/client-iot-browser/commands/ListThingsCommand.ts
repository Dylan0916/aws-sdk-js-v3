import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListThings } from "../model/operations/ListThings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThingsInput } from "../types/ListThingsInput";
import { ListThingsOutput } from "../types/ListThingsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListThingsInput";
export * from "../types/ListThingsOutput";
export * from "../types/ListThingsExceptionsUnion";

export class ListThingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThingsInput,
      OutputTypesUnion,
      ListThingsOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListThings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThingsInput,
    ListThingsOutput,
    Blob
  >();

  constructor(readonly input: ListThingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListThingsInput, ListThingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListThingsInput, ListThingsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
