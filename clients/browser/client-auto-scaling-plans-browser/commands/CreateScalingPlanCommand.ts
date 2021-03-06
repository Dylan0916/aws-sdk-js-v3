import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateScalingPlan } from "../model/operations/CreateScalingPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateScalingPlanInput } from "../types/CreateScalingPlanInput";
import { CreateScalingPlanOutput } from "../types/CreateScalingPlanOutput";
import { AutoScalingPlansResolvedConfiguration } from "../AutoScalingPlansConfiguration";
export * from "../types/CreateScalingPlanInput";
export * from "../types/CreateScalingPlanOutput";
export * from "../types/CreateScalingPlanExceptionsUnion";

export class CreateScalingPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateScalingPlanInput,
      OutputTypesUnion,
      CreateScalingPlanOutput,
      AutoScalingPlansResolvedConfiguration,
      Blob
    > {
  readonly model = CreateScalingPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateScalingPlanInput,
    CreateScalingPlanOutput,
    Blob
  >();

  constructor(readonly input: CreateScalingPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingPlansResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateScalingPlanInput, CreateScalingPlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateScalingPlanInput, CreateScalingPlanOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
