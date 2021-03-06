import { _EventFilter } from "./_EventFilter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventAggregatesInput shape
 */
export interface DescribeEventAggregatesInput {
  /**
   * <p>Values to narrow the results returned.</p>
   */
  filter?: _EventFilter;

  /**
   * <p>The only currently supported value is <code>eventTypeCategory</code>.</p>
   */
  aggregateField: "eventTypeCategory" | string;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   */
  maxResults?: number;

  /**
   * <p>If the results of a search are large, only a portion of the results are returned, and a <code>nextToken</code> pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;

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
