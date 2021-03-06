import { _UnmarshalledRole } from "./_Role";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>CreateRole</a> request. </p>
 */
export interface CreateRoleOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing details about the new role.</p>
   */
  Role: _UnmarshalledRole;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
