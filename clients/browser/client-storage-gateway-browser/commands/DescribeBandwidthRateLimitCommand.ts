import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBandwidthRateLimit } from "../model/operations/DescribeBandwidthRateLimit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBandwidthRateLimitInput } from "../types/DescribeBandwidthRateLimitInput";
import { DescribeBandwidthRateLimitOutput } from "../types/DescribeBandwidthRateLimitOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeBandwidthRateLimitInput";
export * from "../types/DescribeBandwidthRateLimitOutput";
export * from "../types/DescribeBandwidthRateLimitExceptionsUnion";

export class DescribeBandwidthRateLimitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBandwidthRateLimitInput,
      OutputTypesUnion,
      DescribeBandwidthRateLimitOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeBandwidthRateLimit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBandwidthRateLimitInput,
    DescribeBandwidthRateLimitOutput,
    Blob
  >();

  constructor(readonly input: DescribeBandwidthRateLimitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeBandwidthRateLimitInput,
    DescribeBandwidthRateLimitOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeBandwidthRateLimitInput,
        DescribeBandwidthRateLimitOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
