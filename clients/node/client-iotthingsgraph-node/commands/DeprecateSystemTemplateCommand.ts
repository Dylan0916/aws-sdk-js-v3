import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeprecateSystemTemplate } from "../model/operations/DeprecateSystemTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeprecateSystemTemplateInput } from "../types/DeprecateSystemTemplateInput";
import { DeprecateSystemTemplateOutput } from "../types/DeprecateSystemTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/DeprecateSystemTemplateInput";
export * from "../types/DeprecateSystemTemplateOutput";
export * from "../types/DeprecateSystemTemplateExceptionsUnion";

export class DeprecateSystemTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeprecateSystemTemplateInput,
      OutputTypesUnion,
      DeprecateSystemTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeprecateSystemTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeprecateSystemTemplateInput,
    DeprecateSystemTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeprecateSystemTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeprecateSystemTemplateInput,
    DeprecateSystemTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeprecateSystemTemplateInput, DeprecateSystemTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
