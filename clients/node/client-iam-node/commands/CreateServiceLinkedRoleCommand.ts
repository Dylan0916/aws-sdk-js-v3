import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateServiceLinkedRole } from "../model/operations/CreateServiceLinkedRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateServiceLinkedRoleInput } from "../types/CreateServiceLinkedRoleInput";
import { CreateServiceLinkedRoleOutput } from "../types/CreateServiceLinkedRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateServiceLinkedRoleInput";
export * from "../types/CreateServiceLinkedRoleOutput";
export * from "../types/CreateServiceLinkedRoleExceptionsUnion";

export class CreateServiceLinkedRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateServiceLinkedRoleInput,
      OutputTypesUnion,
      CreateServiceLinkedRoleOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateServiceLinkedRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateServiceLinkedRoleInput,
    CreateServiceLinkedRoleOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateServiceLinkedRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateServiceLinkedRoleInput,
    CreateServiceLinkedRoleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateServiceLinkedRoleInput, CreateServiceLinkedRoleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
