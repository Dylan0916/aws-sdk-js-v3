import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSendStatistics } from "../model/operations/GetSendStatistics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSendStatisticsInput } from "../types/GetSendStatisticsInput";
import { GetSendStatisticsOutput } from "../types/GetSendStatisticsOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetSendStatisticsInput";
export * from "../types/GetSendStatisticsOutput";
export * from "../types/GetSendStatisticsExceptionsUnion";

export class GetSendStatisticsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSendStatisticsInput,
      OutputTypesUnion,
      GetSendStatisticsOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = GetSendStatistics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSendStatisticsInput,
    GetSendStatisticsOutput,
    Blob
  >();

  constructor(readonly input: GetSendStatisticsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSendStatisticsInput, GetSendStatisticsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSendStatisticsInput, GetSendStatisticsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
