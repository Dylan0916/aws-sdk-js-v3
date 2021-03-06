import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListQueryExecutionsInput shape
 */
export interface ListQueryExecutionsInput {
  /**
   * <p>The token that specifies where to start pagination if a previous request was truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of query executions to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the workgroup from which queries are being returned.</p>
   */
  WorkGroup?: string;

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
