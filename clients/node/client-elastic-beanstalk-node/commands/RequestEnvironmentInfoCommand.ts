import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RequestEnvironmentInfo } from "../model/operations/RequestEnvironmentInfo";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RequestEnvironmentInfoInput } from "../types/RequestEnvironmentInfoInput";
import { RequestEnvironmentInfoOutput } from "../types/RequestEnvironmentInfoOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/RequestEnvironmentInfoInput";
export * from "../types/RequestEnvironmentInfoOutput";
export * from "../types/RequestEnvironmentInfoExceptionsUnion";

export class RequestEnvironmentInfoCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RequestEnvironmentInfoInput,
      OutputTypesUnion,
      RequestEnvironmentInfoOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RequestEnvironmentInfo;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RequestEnvironmentInfoInput,
    RequestEnvironmentInfoOutput,
    _stream.Readable
  >();

  constructor(readonly input: RequestEnvironmentInfoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RequestEnvironmentInfoInput,
    RequestEnvironmentInfoOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RequestEnvironmentInfoInput, RequestEnvironmentInfoOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
