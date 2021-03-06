import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>ListTaskExecutions</p>
 */
export interface ListTaskExecutionsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the task whose tasks you want to list.</p>
   */
  TaskArn?: string;

  /**
   * <p>The maximum number of executed tasks to list.</p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque string that indicates the position at which to begin the next list of the executed tasks.</p>
   */
  NextToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
