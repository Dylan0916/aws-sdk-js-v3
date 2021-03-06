import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePatchPropertiesOutput shape
 */
export interface DescribePatchPropertiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the properties for patches matching the filter request parameters.</p>
   */
  Properties?: Array<{ [key: string]: string }>;

  /**
   * <p>The token for the next set of items to return. (You use this token in the next call.)</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
