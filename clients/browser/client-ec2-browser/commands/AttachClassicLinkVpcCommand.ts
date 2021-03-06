import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachClassicLinkVpc } from "../model/operations/AttachClassicLinkVpc";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachClassicLinkVpcInput } from "../types/AttachClassicLinkVpcInput";
import { AttachClassicLinkVpcOutput } from "../types/AttachClassicLinkVpcOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AttachClassicLinkVpcInput";
export * from "../types/AttachClassicLinkVpcOutput";
export * from "../types/AttachClassicLinkVpcExceptionsUnion";

export class AttachClassicLinkVpcCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachClassicLinkVpcInput,
      OutputTypesUnion,
      AttachClassicLinkVpcOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AttachClassicLinkVpc;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachClassicLinkVpcInput,
    AttachClassicLinkVpcOutput,
    Blob
  >();

  constructor(readonly input: AttachClassicLinkVpcInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachClassicLinkVpcInput,
    AttachClassicLinkVpcOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachClassicLinkVpcInput, AttachClassicLinkVpcOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
