import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateMemberFromGroupInput shape
 */
export interface DisassociateMemberFromGroupInput {
  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string;

  /**
   * <p>The identifier for the group from which members are removed.</p>
   */
  GroupId: string;

  /**
   * <p>The identifier for the member to be removed to the group.</p>
   */
  MemberId: string;

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
