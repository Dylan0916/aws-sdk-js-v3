import { _InputDataConfig } from "./_InputDataConfig";
import { _OutputDataConfig } from "./_OutputDataConfig";
import { _VpcConfig } from "./_VpcConfig";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartDocumentClassificationJobInput shape
 */
export interface StartDocumentClassificationJobInput {
  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classifier to use to process the job.</p>
   */
  DocumentClassifierArn: string;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: _InputDataConfig;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: _OutputDataConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your document classification job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _VpcConfig;

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
