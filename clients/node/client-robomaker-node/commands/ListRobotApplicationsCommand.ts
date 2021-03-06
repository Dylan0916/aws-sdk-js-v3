import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRobotApplications } from "../model/operations/ListRobotApplications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRobotApplicationsInput } from "../types/ListRobotApplicationsInput";
import { ListRobotApplicationsOutput } from "../types/ListRobotApplicationsOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/ListRobotApplicationsInput";
export * from "../types/ListRobotApplicationsOutput";
export * from "../types/ListRobotApplicationsExceptionsUnion";

export class ListRobotApplicationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRobotApplicationsInput,
      OutputTypesUnion,
      ListRobotApplicationsOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRobotApplications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRobotApplicationsInput,
    ListRobotApplicationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRobotApplicationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRobotApplicationsInput,
    ListRobotApplicationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRobotApplicationsInput, ListRobotApplicationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
