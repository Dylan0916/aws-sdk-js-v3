import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyEbsDefaultKmsKeyId } from "../model/operations/ModifyEbsDefaultKmsKeyId";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyEbsDefaultKmsKeyIdInput } from "../types/ModifyEbsDefaultKmsKeyIdInput";
import { ModifyEbsDefaultKmsKeyIdOutput } from "../types/ModifyEbsDefaultKmsKeyIdOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyEbsDefaultKmsKeyIdInput";
export * from "../types/ModifyEbsDefaultKmsKeyIdOutput";
export * from "../types/ModifyEbsDefaultKmsKeyIdExceptionsUnion";

export class ModifyEbsDefaultKmsKeyIdCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyEbsDefaultKmsKeyIdInput,
      OutputTypesUnion,
      ModifyEbsDefaultKmsKeyIdOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyEbsDefaultKmsKeyId;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyEbsDefaultKmsKeyIdInput,
    ModifyEbsDefaultKmsKeyIdOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyEbsDefaultKmsKeyIdInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyEbsDefaultKmsKeyIdInput,
    ModifyEbsDefaultKmsKeyIdOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyEbsDefaultKmsKeyIdInput, ModifyEbsDefaultKmsKeyIdOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
