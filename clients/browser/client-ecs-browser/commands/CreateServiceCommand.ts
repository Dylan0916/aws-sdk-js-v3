import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateService } from "../model/operations/CreateService";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateServiceInput } from "../types/CreateServiceInput";
import { CreateServiceOutput } from "../types/CreateServiceOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/CreateServiceInput";
export * from "../types/CreateServiceOutput";
export * from "../types/CreateServiceExceptionsUnion";

export class CreateServiceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateServiceInput,
      OutputTypesUnion,
      CreateServiceOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = CreateService;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateServiceInput,
    CreateServiceOutput,
    Blob
  >();

  constructor(readonly input: CreateServiceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateServiceInput, CreateServiceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateServiceInput, CreateServiceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
