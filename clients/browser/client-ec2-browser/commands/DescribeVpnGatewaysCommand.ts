import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVpnGateways } from "../model/operations/DescribeVpnGateways";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpnGatewaysInput } from "../types/DescribeVpnGatewaysInput";
import { DescribeVpnGatewaysOutput } from "../types/DescribeVpnGatewaysOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpnGatewaysInput";
export * from "../types/DescribeVpnGatewaysOutput";
export * from "../types/DescribeVpnGatewaysExceptionsUnion";

export class DescribeVpnGatewaysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpnGatewaysInput,
      OutputTypesUnion,
      DescribeVpnGatewaysOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVpnGateways;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpnGatewaysInput,
    DescribeVpnGatewaysOutput,
    Blob
  >();

  constructor(readonly input: DescribeVpnGatewaysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpnGatewaysInput,
    DescribeVpnGatewaysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVpnGatewaysInput, DescribeVpnGatewaysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
