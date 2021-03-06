import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDataSource } from "../model/operations/UpdateDataSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDataSourceInput } from "../types/UpdateDataSourceInput";
import { UpdateDataSourceOutput } from "../types/UpdateDataSourceOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/UpdateDataSourceInput";
export * from "../types/UpdateDataSourceOutput";
export * from "../types/UpdateDataSourceExceptionsUnion";

export class UpdateDataSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDataSourceInput,
      OutputTypesUnion,
      UpdateDataSourceOutput,
      MachineLearningResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDataSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDataSourceInput,
    UpdateDataSourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDataSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDataSourceInput, UpdateDataSourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDataSourceInput, UpdateDataSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
