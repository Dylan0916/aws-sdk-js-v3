import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateIPSet } from "../model/operations/UpdateIPSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateIPSetInput } from "../types/UpdateIPSetInput";
import { UpdateIPSetOutput } from "../types/UpdateIPSetOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/UpdateIPSetInput";
export * from "../types/UpdateIPSetOutput";
export * from "../types/UpdateIPSetExceptionsUnion";

export class UpdateIPSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateIPSetInput,
      OutputTypesUnion,
      UpdateIPSetOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateIPSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateIPSetInput,
    UpdateIPSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateIPSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateIPSetInput, UpdateIPSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateIPSetInput, UpdateIPSetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
