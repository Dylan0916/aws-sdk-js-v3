import { _UnmarshalledDomainStatus } from "./_DomainStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.</p>
 */
export interface CreateDomainOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the search domain.</p>
   */
  DomainStatus?: _UnmarshalledDomainStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
