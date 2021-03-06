import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListLicenseConfigurations } from "../model/operations/ListLicenseConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLicenseConfigurationsInput } from "../types/ListLicenseConfigurationsInput";
import { ListLicenseConfigurationsOutput } from "../types/ListLicenseConfigurationsOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/ListLicenseConfigurationsInput";
export * from "../types/ListLicenseConfigurationsOutput";
export * from "../types/ListLicenseConfigurationsExceptionsUnion";

export class ListLicenseConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLicenseConfigurationsInput,
      OutputTypesUnion,
      ListLicenseConfigurationsOutput,
      LicenseManagerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListLicenseConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLicenseConfigurationsInput,
    ListLicenseConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListLicenseConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListLicenseConfigurationsInput,
    ListLicenseConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLicenseConfigurationsInput, ListLicenseConfigurationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
