import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeScheduledInstanceAvailability } from "../model/operations/DescribeScheduledInstanceAvailability";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScheduledInstanceAvailabilityInput } from "../types/DescribeScheduledInstanceAvailabilityInput";
import { DescribeScheduledInstanceAvailabilityOutput } from "../types/DescribeScheduledInstanceAvailabilityOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeScheduledInstanceAvailabilityInput";
export * from "../types/DescribeScheduledInstanceAvailabilityOutput";
export * from "../types/DescribeScheduledInstanceAvailabilityExceptionsUnion";

export class DescribeScheduledInstanceAvailabilityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScheduledInstanceAvailabilityInput,
      OutputTypesUnion,
      DescribeScheduledInstanceAvailabilityOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeScheduledInstanceAvailability;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScheduledInstanceAvailabilityInput,
    DescribeScheduledInstanceAvailabilityOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeScheduledInstanceAvailabilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScheduledInstanceAvailabilityInput,
    DescribeScheduledInstanceAvailabilityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeScheduledInstanceAvailabilityInput,
        DescribeScheduledInstanceAvailabilityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
