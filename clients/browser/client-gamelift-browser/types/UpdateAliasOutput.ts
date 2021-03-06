import { _UnmarshalledAlias } from "./_Alias";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface UpdateAliasOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that contains the updated alias configuration.</p>
   */
  Alias?: _UnmarshalledAlias;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
