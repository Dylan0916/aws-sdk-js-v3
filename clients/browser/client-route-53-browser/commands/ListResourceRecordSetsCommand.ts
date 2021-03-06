import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResourceRecordSets } from "../model/operations/ListResourceRecordSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourceRecordSetsInput } from "../types/ListResourceRecordSetsInput";
import { ListResourceRecordSetsOutput } from "../types/ListResourceRecordSetsOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListResourceRecordSetsInput";
export * from "../types/ListResourceRecordSetsOutput";
export * from "../types/ListResourceRecordSetsExceptionsUnion";

export class ListResourceRecordSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourceRecordSetsInput,
      OutputTypesUnion,
      ListResourceRecordSetsOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = ListResourceRecordSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourceRecordSetsInput,
    ListResourceRecordSetsOutput,
    Blob
  >();

  constructor(readonly input: ListResourceRecordSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourceRecordSetsInput,
    ListResourceRecordSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_route53_id_normalizer_middleware.idNormalizerMiddleware,
      {
        step: "initialize",
        priority: 0,
        tags: { NORMALIZE_ROUTE53_IDS: true }
      }
    );
    return stack.resolve(
      handler<ListResourceRecordSetsInput, ListResourceRecordSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
