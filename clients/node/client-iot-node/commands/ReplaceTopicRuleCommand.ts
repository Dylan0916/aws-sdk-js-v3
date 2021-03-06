import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ReplaceTopicRule } from "../model/operations/ReplaceTopicRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReplaceTopicRuleInput } from "../types/ReplaceTopicRuleInput";
import { ReplaceTopicRuleOutput } from "../types/ReplaceTopicRuleOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ReplaceTopicRuleInput";
export * from "../types/ReplaceTopicRuleOutput";
export * from "../types/ReplaceTopicRuleExceptionsUnion";

export class ReplaceTopicRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReplaceTopicRuleInput,
      OutputTypesUnion,
      ReplaceTopicRuleOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ReplaceTopicRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReplaceTopicRuleInput,
    ReplaceTopicRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: ReplaceTopicRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ReplaceTopicRuleInput, ReplaceTopicRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReplaceTopicRuleInput, ReplaceTopicRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
