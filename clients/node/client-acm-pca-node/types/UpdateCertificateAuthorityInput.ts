import { _RevocationConfiguration } from "./_RevocationConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateCertificateAuthorityInput shape
 */
export interface UpdateCertificateAuthorityInput {
  /**
   * <p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   */
  CertificateAuthorityArn: string;

  /**
   * <p>Revocation information for your private CA.</p>
   */
  RevocationConfiguration?: _RevocationConfiguration;

  /**
   * <p>Status of your private CA.</p>
   */
  Status?:
    | "CREATING"
    | "PENDING_CERTIFICATE"
    | "ACTIVE"
    | "DELETED"
    | "DISABLED"
    | "EXPIRED"
    | "FAILED"
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
