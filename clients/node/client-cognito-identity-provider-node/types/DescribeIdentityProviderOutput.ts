import { _UnmarshalledIdentityProviderType } from "./_IdentityProviderType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeIdentityProviderOutput shape
 */
export interface DescribeIdentityProviderOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identity provider that was deleted.</p>
   */
  IdentityProvider: _UnmarshalledIdentityProviderType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
