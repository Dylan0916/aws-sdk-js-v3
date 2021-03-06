import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified resource cannot be located.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;

  /**
   * _ErrorCode shape
   */
  code?: number;
}
