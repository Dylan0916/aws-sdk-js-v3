import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutScalingPolicy } from "../model/operations/PutScalingPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutScalingPolicyInput } from "../types/PutScalingPolicyInput";
import { PutScalingPolicyOutput } from "../types/PutScalingPolicyOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/PutScalingPolicyInput";
export * from "../types/PutScalingPolicyOutput";
export * from "../types/PutScalingPolicyExceptionsUnion";

export class PutScalingPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutScalingPolicyInput,
      OutputTypesUnion,
      PutScalingPolicyOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = PutScalingPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutScalingPolicyInput,
    PutScalingPolicyOutput,
    Blob
  >();

  constructor(readonly input: PutScalingPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<PutScalingPolicyInput, PutScalingPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutScalingPolicyInput, PutScalingPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
