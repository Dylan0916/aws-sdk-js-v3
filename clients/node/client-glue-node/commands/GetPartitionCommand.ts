import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPartition } from "../model/operations/GetPartition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPartitionInput } from "../types/GetPartitionInput";
import { GetPartitionOutput } from "../types/GetPartitionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetPartitionInput";
export * from "../types/GetPartitionOutput";
export * from "../types/GetPartitionExceptionsUnion";

export class GetPartitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPartitionInput,
      OutputTypesUnion,
      GetPartitionOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPartition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPartitionInput,
    GetPartitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPartitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPartitionInput, GetPartitionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPartitionInput, GetPartitionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
