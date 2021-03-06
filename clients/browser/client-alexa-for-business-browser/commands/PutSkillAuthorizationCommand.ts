import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutSkillAuthorization } from "../model/operations/PutSkillAuthorization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutSkillAuthorizationInput } from "../types/PutSkillAuthorizationInput";
import { PutSkillAuthorizationOutput } from "../types/PutSkillAuthorizationOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/PutSkillAuthorizationInput";
export * from "../types/PutSkillAuthorizationOutput";
export * from "../types/PutSkillAuthorizationExceptionsUnion";

export class PutSkillAuthorizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutSkillAuthorizationInput,
      OutputTypesUnion,
      PutSkillAuthorizationOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = PutSkillAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutSkillAuthorizationInput,
    PutSkillAuthorizationOutput,
    Blob
  >();

  constructor(readonly input: PutSkillAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutSkillAuthorizationInput,
    PutSkillAuthorizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutSkillAuthorizationInput, PutSkillAuthorizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
