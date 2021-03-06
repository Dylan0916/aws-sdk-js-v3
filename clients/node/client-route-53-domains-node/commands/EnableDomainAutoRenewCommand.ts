import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableDomainAutoRenew } from "../model/operations/EnableDomainAutoRenew";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableDomainAutoRenewInput } from "../types/EnableDomainAutoRenewInput";
import { EnableDomainAutoRenewOutput } from "../types/EnableDomainAutoRenewOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/EnableDomainAutoRenewInput";
export * from "../types/EnableDomainAutoRenewOutput";
export * from "../types/EnableDomainAutoRenewExceptionsUnion";

export class EnableDomainAutoRenewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableDomainAutoRenewInput,
      OutputTypesUnion,
      EnableDomainAutoRenewOutput,
      Route53DomainsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableDomainAutoRenew;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableDomainAutoRenewInput,
    EnableDomainAutoRenewOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableDomainAutoRenewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableDomainAutoRenewInput,
    EnableDomainAutoRenewOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableDomainAutoRenewInput, EnableDomainAutoRenewOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
