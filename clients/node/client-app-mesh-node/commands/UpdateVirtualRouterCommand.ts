import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateVirtualRouter } from "../model/operations/UpdateVirtualRouter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVirtualRouterInput } from "../types/UpdateVirtualRouterInput";
import { UpdateVirtualRouterOutput } from "../types/UpdateVirtualRouterOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/UpdateVirtualRouterInput";
export * from "../types/UpdateVirtualRouterOutput";
export * from "../types/UpdateVirtualRouterExceptionsUnion";

export class UpdateVirtualRouterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVirtualRouterInput,
      OutputTypesUnion,
      UpdateVirtualRouterOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateVirtualRouter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVirtualRouterInput,
    UpdateVirtualRouterOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateVirtualRouterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateVirtualRouterInput,
    UpdateVirtualRouterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVirtualRouterInput, UpdateVirtualRouterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
