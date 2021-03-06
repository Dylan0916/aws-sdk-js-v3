import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSMBSecurityStrategyInput shape
 */
export interface UpdateSMBSecurityStrategyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN: string;

  /**
   * <p>Specifies the type of security strategy.</p> <p>ClientSpecified: SMBv1 is enabled, SMB signing is offered but not required, SMB encryption is offered but not required.</p> <p>MandatorySigning: SMBv1 is disabled, SMB signing is required, SMB encryption is offered but not required.</p> <p>MandatoryEncryption: SMBv1 is disabled, SMB signing is offered but not required, SMB encryption is required.</p>
   */
  SMBSecurityStrategy:
    | "ClientSpecified"
    | "MandatorySigning"
    | "MandatoryEncryption"
    | string;

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
