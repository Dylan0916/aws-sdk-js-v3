import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteServerCatalog } from "../model/operations/DeleteServerCatalog";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteServerCatalogInput } from "../types/DeleteServerCatalogInput";
import { DeleteServerCatalogOutput } from "../types/DeleteServerCatalogOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/DeleteServerCatalogInput";
export * from "../types/DeleteServerCatalogOutput";
export * from "../types/DeleteServerCatalogExceptionsUnion";

export class DeleteServerCatalogCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteServerCatalogInput,
      OutputTypesUnion,
      DeleteServerCatalogOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteServerCatalog;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteServerCatalogInput,
    DeleteServerCatalogOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteServerCatalogInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteServerCatalogInput,
    DeleteServerCatalogOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteServerCatalogInput, DeleteServerCatalogOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
