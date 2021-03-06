import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDomainAssociation } from "../model/operations/UpdateDomainAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDomainAssociationInput } from "../types/UpdateDomainAssociationInput";
import { UpdateDomainAssociationOutput } from "../types/UpdateDomainAssociationOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/UpdateDomainAssociationInput";
export * from "../types/UpdateDomainAssociationOutput";
export * from "../types/UpdateDomainAssociationExceptionsUnion";

export class UpdateDomainAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDomainAssociationInput,
      OutputTypesUnion,
      UpdateDomainAssociationOutput,
      AmplifyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDomainAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDomainAssociationInput,
    UpdateDomainAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDomainAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDomainAssociationInput,
    UpdateDomainAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDomainAssociationInput, UpdateDomainAssociationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
