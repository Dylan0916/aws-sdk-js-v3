import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteElasticsearchServiceRole } from "../model/operations/DeleteElasticsearchServiceRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteElasticsearchServiceRoleInput } from "../types/DeleteElasticsearchServiceRoleInput";
import { DeleteElasticsearchServiceRoleOutput } from "../types/DeleteElasticsearchServiceRoleOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/DeleteElasticsearchServiceRoleInput";
export * from "../types/DeleteElasticsearchServiceRoleOutput";
export * from "../types/DeleteElasticsearchServiceRoleExceptionsUnion";

export class DeleteElasticsearchServiceRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteElasticsearchServiceRoleInput,
      OutputTypesUnion,
      DeleteElasticsearchServiceRoleOutput,
      ElasticsearchServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteElasticsearchServiceRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteElasticsearchServiceRoleInput,
    DeleteElasticsearchServiceRoleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteElasticsearchServiceRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteElasticsearchServiceRoleInput,
    DeleteElasticsearchServiceRoleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteElasticsearchServiceRoleInput,
        DeleteElasticsearchServiceRoleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
