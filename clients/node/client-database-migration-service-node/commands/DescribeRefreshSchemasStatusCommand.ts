import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRefreshSchemasStatus } from "../model/operations/DescribeRefreshSchemasStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRefreshSchemasStatusInput } from "../types/DescribeRefreshSchemasStatusInput";
import { DescribeRefreshSchemasStatusOutput } from "../types/DescribeRefreshSchemasStatusOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeRefreshSchemasStatusInput";
export * from "../types/DescribeRefreshSchemasStatusOutput";
export * from "../types/DescribeRefreshSchemasStatusExceptionsUnion";

export class DescribeRefreshSchemasStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRefreshSchemasStatusInput,
      OutputTypesUnion,
      DescribeRefreshSchemasStatusOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeRefreshSchemasStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRefreshSchemasStatusInput,
    DescribeRefreshSchemasStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRefreshSchemasStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRefreshSchemasStatusInput,
    DescribeRefreshSchemasStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeRefreshSchemasStatusInput,
        DescribeRefreshSchemasStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
