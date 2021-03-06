import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TerminateInstances } from "../model/operations/TerminateInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateInstancesInput } from "../types/TerminateInstancesInput";
import { TerminateInstancesOutput } from "../types/TerminateInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/TerminateInstancesInput";
export * from "../types/TerminateInstancesOutput";
export * from "../types/TerminateInstancesExceptionsUnion";

export class TerminateInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateInstancesInput,
      OutputTypesUnion,
      TerminateInstancesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TerminateInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateInstancesInput,
    TerminateInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: TerminateInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TerminateInstancesInput,
    TerminateInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TerminateInstancesInput, TerminateInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
