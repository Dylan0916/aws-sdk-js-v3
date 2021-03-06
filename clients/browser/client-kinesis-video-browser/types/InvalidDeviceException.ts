import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Not implemented.</p>
 */
export interface InvalidDeviceException
  extends __ServiceException__<_InvalidDeviceExceptionDetails> {
  name: "InvalidDeviceException";
}

export interface _InvalidDeviceExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
