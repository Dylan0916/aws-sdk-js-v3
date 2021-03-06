import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResetEbsDefaultKmsKeyId } from "../model/operations/ResetEbsDefaultKmsKeyId";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetEbsDefaultKmsKeyIdInput } from "../types/ResetEbsDefaultKmsKeyIdInput";
import { ResetEbsDefaultKmsKeyIdOutput } from "../types/ResetEbsDefaultKmsKeyIdOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ResetEbsDefaultKmsKeyIdInput";
export * from "../types/ResetEbsDefaultKmsKeyIdOutput";
export * from "../types/ResetEbsDefaultKmsKeyIdExceptionsUnion";

export class ResetEbsDefaultKmsKeyIdCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetEbsDefaultKmsKeyIdInput,
      OutputTypesUnion,
      ResetEbsDefaultKmsKeyIdOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResetEbsDefaultKmsKeyId;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetEbsDefaultKmsKeyIdInput,
    ResetEbsDefaultKmsKeyIdOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResetEbsDefaultKmsKeyIdInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetEbsDefaultKmsKeyIdInput,
    ResetEbsDefaultKmsKeyIdOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetEbsDefaultKmsKeyIdInput, ResetEbsDefaultKmsKeyIdOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
