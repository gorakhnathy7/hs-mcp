// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RefundsAPI from './refunds';
import * as AccountsAPI from './accounts/accounts';
import * as PaymentsAPI from './payments/payments';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Refunds extends APIResource {
  /**
   * Creates a refund against an already processed payment. In case of some
   * processors, you can even opt to refund only a partial amount multiple times
   * until the original charge amount has been refunded
   *
   * @example
   * ```ts
   * const refundResponse = await client.refunds.create({
   *   payment_id: '{{payment_id}}',
   *   amount: 654,
   *   refund_type: 'instant',
   * });
   * ```
   */
  create(body: RefundCreateParams, options?: RequestOptions): APIPromise<RefundResponse> {
    return this._client.post('/refunds', { body, ...options });
  }

  /**
   * Retrieves a Refund. This may be used to get the status of a previously initiated
   * refund
   *
   * @example
   * ```ts
   * const refundResponse = await client.refunds.retrieve(
   *   'refund_id',
   * );
   * ```
   */
  retrieve(refundID: string, options?: RequestOptions): APIPromise<RefundResponse> {
    return this._client.get(path`/refunds/${refundID}`, options);
  }

  /**
   * Updates the properties of a Refund object. This API can be used to attach a
   * reason for the refund or metadata fields
   *
   * @example
   * ```ts
   * const refundResponse = await client.refunds.update(
   *   'refund_id',
   *   { reason: 'Paid by mistake' },
   * );
   * ```
   */
  update(refundID: string, body: RefundUpdateParams, options?: RequestOptions): APIPromise<RefundResponse> {
    return this._client.post(path`/refunds/${refundID}`, { body, ...options });
  }

  /**
   * Lists all the refunds associated with the merchant, or for a specific payment if
   * payment_id is provided
   *
   * @example
   * ```ts
   * const refunds = await client.refunds.list({
   *   start_time: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  list(body: RefundListParams, options?: RequestOptions): APIPromise<RefundListResponse> {
    return this._client.post('/refunds/list', { body, ...options });
  }
}

export interface RefundResponse {
  /**
   * The refund amount, which should be less than or equal to the total payment
   * amount. Amount for the payment in lowest denomination of the currency. (i.e) in
   * cents for USD denomination, in paisa for INR denomination etc
   */
  amount: number;

  /**
   * The connector used for the refund and the corresponding payment
   */
  connector: string;

  /**
   * The three-letter ISO currency code
   */
  currency: string;

  /**
   * The payment id against which refund is initiated
   */
  payment_id: string;

  /**
   * Unique Identifier for the refund
   */
  refund_id: string;

  /**
   * The status for refunds
   */
  status: RefundStatus;

  /**
   * The timestamp at which refund is created
   */
  created_at?: string | null;

  /**
   * The code for the error
   */
  error_code?: string | null;

  /**
   * The error message
   */
  error_message?: string | null;

  /**
   * Error code received from the issuer in case of failed refunds
   */
  issuer_error_code?: string | null;

  /**
   * Error message received from the issuer in case of failed refunds
   */
  issuer_error_message?: string | null;

  /**
   * The merchant_connector_id of the processor through which this payment went
   * through
   */
  merchant_connector_id?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object
   */
  metadata?: unknown | null;

  /**
   * The id of business profile for this refund
   */
  profile_id?: string | null;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users
   * and your customer support executive
   */
  reason?: string | null;

  /**
   * Charge specific fields for controlling the revert of funds from either platform
   * or connected account. Check sub-fields for more details.
   */
  split_refunds?: SplitRefund | null;

  /**
   * Error code unified across the connectors is received here if there was an error
   * while calling connector
   */
  unified_code?: string | null;

  /**
   * Error message unified across the connectors is received here if there was an
   * error while calling connector
   */
  unified_message?: string | null;

  /**
   * The timestamp at which refund is updated
   */
  updated_at?: string | null;
}

/**
 * The status for refunds
 */
export type RefundStatus = 'succeeded' | 'failed' | 'pending' | 'review';

/**
 * Charge specific fields for controlling the revert of funds from either platform
 * or connected account. Check sub-fields for more details.
 */
export type SplitRefund =
  | SplitRefund.StripeSplitRefund
  | SplitRefund.AdyenSplitRefund
  | SplitRefund.XenditSplitRefund;

export namespace SplitRefund {
  export interface StripeSplitRefund {
    /**
     * Charge specific fields for controlling the revert of funds from either platform
     * or connected account for Stripe. Check sub-fields for more details.
     */
    stripe_split_refund: StripeSplitRefund.StripeSplitRefund;
  }

  export namespace StripeSplitRefund {
    /**
     * Charge specific fields for controlling the revert of funds from either platform
     * or connected account for Stripe. Check sub-fields for more details.
     */
    export interface StripeSplitRefund {
      /**
       * Toggle for reverting the application fee that was collected for the payment. If
       * set to false, the funds are pulled from the destination account.
       */
      revert_platform_fee?: boolean | null;

      /**
       * Toggle for reverting the transfer that was made during the charge. If set to
       * false, the funds are pulled from the main platform's account.
       */
      revert_transfer?: boolean | null;
    }
  }

  export interface AdyenSplitRefund {
    /**
     * Fee information for Split Payments to be charged on the payment being collected
     * for Adyen
     */
    adyen_split_refund: PaymentsAPI.AdyenSplitData;
  }

  export interface XenditSplitRefund {
    /**
     * Fee information to be charged on the payment being collected for sub-merchant
     * via xendit
     */
    xendit_split_refund: RefundsAPI.XenditSplitSubMerchantData;
  }
}

/**
 * Fee information to be charged on the payment being collected for sub-merchant
 * via xendit
 */
export interface XenditSplitSubMerchantData {
  /**
   * The sub-account user-id that you want to make this transaction for.
   */
  for_user_id: string;
}

export interface RefundListResponse {
  /**
   * The number of refunds included in the list
   */
  count: number;

  /**
   * The List of refund response object
   */
  data: Array<RefundResponse>;

  /**
   * The total number of refunds in the list
   */
  total_count: number;
}

export interface RefundCreateParams {
  /**
   * The payment id against which refund is to be initiated
   */
  payment_id: string;

  /**
   * Total amount for which the refund is to be initiated. Amount for the payment in
   * lowest denomination of the currency. (i.e) in cents for USD denomination, in
   * paisa for INR denomination etc., If not provided, this will default to the full
   * payment amount
   */
  amount?: number | null;

  /**
   * Merchant connector details used to make payments.
   */
  merchant_connector_details?: PaymentsAPI.MerchantConnectorDetailsWrap | null;

  /**
   * The identifier for the Merchant Account
   */
  merchant_id?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * Reason for the refund. Often useful for displaying to users and your customer
   * support executive. In case the payment went through Stripe, this field needs to
   * be passed with one of these enums: `duplicate`, `fraudulent`, or
   * `requested_by_customer`
   */
  reason?: string | null;

  /**
   * Unique Identifier for the Refund. This is to ensure idempotency for multiple
   * partial refunds initiated against the same payment. If this is not passed by the
   * merchant, this field shall be auto generated and provided in the API response.
   * It is recommended to generate uuid(v4) as the refund_id.
   */
  refund_id?: string | null;

  /**
   * To indicate whether to refund needs to be instant or scheduled
   */
  refund_type?: 'scheduled' | 'instant' | null;

  /**
   * Charge specific fields for controlling the revert of funds from either platform
   * or connected account. Check sub-fields for more details.
   */
  split_refunds?: SplitRefund | null;
}

export interface RefundUpdateParams {
  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users
   * and your customer support executive
   */
  reason?: string | null;
}

export interface RefundListParams {
  /**
   * The start time to filter payments list or to get list of filters. To get list of
   * filters start time is needed to be passed
   */
  start_time: string;

  amount_filter?: RefundListParams.AmountFilter | null;

  /**
   * The list of connectors to filter refunds list
   */
  connector?: Array<string> | null;

  /**
   * The list of currencies to filter refunds list
   */
  currency?: Array<AccountsAPI.Currency> | null;

  /**
   * The end time to filter payments list or to get list of filters. If not passed
   * the default time is now
   */
  end_time?: string | null;

  /**
   * Limit on the number of objects to return
   */
  limit?: number | null;

  /**
   * The list of merchant connector ids to filter the refunds list for selected label
   */
  merchant_connector_id?: Array<string> | null;

  /**
   * The starting point within a list of objects
   */
  offset?: number | null;

  /**
   * The identifier for the payment
   */
  payment_id?: string | null;

  /**
   * The identifier for business profile
   */
  profile_id?: string | null;

  /**
   * The identifier for the refund
   */
  refund_id?: string | null;

  /**
   * The list of refund statuses to filter refunds list
   */
  refund_status?: Array<RefundStatus> | null;
}

export namespace RefundListParams {
  export interface AmountFilter {
    /**
     * The end amount to filter list of transactions which are less than or equal to
     * the end amount
     */
    end_amount?: number | null;

    /**
     * The start amount to filter list of transactions which are greater than or equal
     * to the start amount
     */
    start_amount?: number | null;
  }
}

export declare namespace Refunds {
  export {
    type RefundResponse as RefundResponse,
    type RefundStatus as RefundStatus,
    type SplitRefund as SplitRefund,
    type XenditSplitSubMerchantData as XenditSplitSubMerchantData,
    type RefundListResponse as RefundListResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundUpdateParams as RefundUpdateParams,
    type RefundListParams as RefundListParams,
  };
}
