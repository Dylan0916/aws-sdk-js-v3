import { _UnmarshalledActivitiesResponse } from "./_ActivitiesResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCampaignActivitiesOutput shape
 */
export interface GetCampaignActivitiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the activities that were performed by a campaign.</p>
   */
  ActivitiesResponse: _UnmarshalledActivitiesResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
