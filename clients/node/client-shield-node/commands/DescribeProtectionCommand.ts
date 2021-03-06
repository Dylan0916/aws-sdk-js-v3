import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeProtection } from "../model/operations/DescribeProtection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProtectionInput } from "../types/DescribeProtectionInput";
import { DescribeProtectionOutput } from "../types/DescribeProtectionOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/DescribeProtectionInput";
export * from "../types/DescribeProtectionOutput";
export * from "../types/DescribeProtectionExceptionsUnion";

export class DescribeProtectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProtectionInput,
      OutputTypesUnion,
      DescribeProtectionOutput,
      ShieldResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeProtection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProtectionInput,
    DescribeProtectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeProtectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProtectionInput,
    DescribeProtectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeProtectionInput, DescribeProtectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
