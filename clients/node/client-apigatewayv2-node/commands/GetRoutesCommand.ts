import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRoutes } from "../model/operations/GetRoutes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRoutesInput } from "../types/GetRoutesInput";
import { GetRoutesOutput } from "../types/GetRoutesOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetRoutesInput";
export * from "../types/GetRoutesOutput";
export * from "../types/GetRoutesExceptionsUnion";

export class GetRoutesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRoutesInput,
      OutputTypesUnion,
      GetRoutesOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRoutes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRoutesInput,
    GetRoutesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRoutesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRoutesInput, GetRoutesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRoutesInput, GetRoutesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
