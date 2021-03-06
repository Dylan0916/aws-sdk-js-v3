import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetTraceGraph } from "../model/operations/GetTraceGraph";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTraceGraphInput } from "../types/GetTraceGraphInput";
import { GetTraceGraphOutput } from "../types/GetTraceGraphOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/GetTraceGraphInput";
export * from "../types/GetTraceGraphOutput";
export * from "../types/GetTraceGraphExceptionsUnion";

export class GetTraceGraphCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTraceGraphInput,
      OutputTypesUnion,
      GetTraceGraphOutput,
      XRayResolvedConfiguration,
      Blob
    > {
  readonly model = GetTraceGraph;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTraceGraphInput,
    GetTraceGraphOutput,
    Blob
  >();

  constructor(readonly input: GetTraceGraphInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTraceGraphInput, GetTraceGraphOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTraceGraphInput, GetTraceGraphOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
