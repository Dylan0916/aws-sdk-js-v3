import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateReplicationInstance } from "../model/operations/CreateReplicationInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateReplicationInstanceInput } from "../types/CreateReplicationInstanceInput";
import { CreateReplicationInstanceOutput } from "../types/CreateReplicationInstanceOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/CreateReplicationInstanceInput";
export * from "../types/CreateReplicationInstanceOutput";
export * from "../types/CreateReplicationInstanceExceptionsUnion";

export class CreateReplicationInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateReplicationInstanceInput,
      OutputTypesUnion,
      CreateReplicationInstanceOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateReplicationInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateReplicationInstanceInput,
    CreateReplicationInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateReplicationInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateReplicationInstanceInput,
    CreateReplicationInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateReplicationInstanceInput, CreateReplicationInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
