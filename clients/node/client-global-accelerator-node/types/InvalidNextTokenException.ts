import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There isn't another item to return.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
