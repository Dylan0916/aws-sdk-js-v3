import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { HeadBucket } from "../model/operations/HeadBucket";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { HeadBucketInput } from "../types/HeadBucketInput";
import { HeadBucketOutput } from "../types/HeadBucketOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/HeadBucketInput";
export * from "../types/HeadBucketOutput";
export * from "../types/HeadBucketExceptionsUnion";

export class HeadBucketCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      HeadBucketInput,
      OutputTypesUnion,
      HeadBucketOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = HeadBucket;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    HeadBucketInput,
    HeadBucketOutput,
    _stream.Readable
  >();

  constructor(readonly input: HeadBucketInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<HeadBucketInput, HeadBucketOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_bucket_endpoint_middleware.bucketEndpointMiddleware({
        forcePathStyle: configuration.forcePathStyle,
        preformedBucketEndpoint: configuration.bucketEndpoint,
        useAccelerateEndpoint: configuration.useAccelerateEndpoint,
        useDualstackEndpoint: configuration.useDualstackEndpoint
      }),
      {
        step: "build",
        priority: 0
      }
    );
    stack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "Content-Type": "application/octet-stream"
      }),
      {
        step: "build",
        priority: -50,
        tags: { "Content-Type": true }
      }
    );
    return stack.resolve(
      handler<HeadBucketInput, HeadBucketOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
