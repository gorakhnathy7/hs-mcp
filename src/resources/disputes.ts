// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts/accounts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Disputes extends APIResource {
  /**
   * Retrieves a dispute
   */
  retrieve(disputeID: string, options?: RequestOptions): APIPromise<DisputeResponse> {
    return this._client.get(path`/disputes/${disputeID}`, options);
  }

  /**
   * Lists all the Disputes for a merchant
   */
  list(
    query: DisputeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DisputeListResponse> {
    return this._client.get('/disputes/list', { query, ...options });
  }
}

export interface DisputeResponse {
  /**
   * Connector specific types to send
   */
  amount: string;

  /**
   * The identifier for payment_attempt
   */
  attempt_id: string;

  /**
   * connector to which dispute is associated with
   */
  connector: string;

  /**
   * Dispute id sent by connector
   */
  connector_dispute_id: string;

  /**
   * Status of the dispute sent by connector
   */
  connector_status: string;

  /**
   * Time at which dispute is received
   */
  created_at: string;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  /**
   * The identifier for dispute
   */
  dispute_id: string;

  /**
   * Stage of the dispute
   */
  dispute_stage: DisputeStage;

  /**
   * Status of the dispute
   */
  dispute_status: DisputeStatus;

  /**
   * The identifier for payment_intent
   */
  payment_id: string;

  /**
   * Evidence deadline of dispute sent by connector
   */
  challenge_required_by?: string | null;

  /**
   * Dispute created time sent by connector
   */
  connector_created_at?: string | null;

  /**
   * Reason of dispute sent by connector
   */
  connector_reason?: string | null;

  /**
   * Reason code of dispute sent by connector
   */
  connector_reason_code?: string | null;

  /**
   * Dispute updated time sent by connector
   */
  connector_updated_at?: string | null;

  /**
   * The `merchant_connector_id` of the connector / processor through which the
   * dispute was processed
   */
  merchant_connector_id?: string | null;

  /**
   * The `profile_id` associated with the dispute
   */
  profile_id?: string | null;
}

/**
 * Stage of the dispute
 */
export type DisputeStage = 'pre_dispute' | 'dispute' | 'pre_arbitration';

/**
 * Status of the dispute
 */
export type DisputeStatus =
  | 'dispute_opened'
  | 'dispute_expired'
  | 'dispute_accepted'
  | 'dispute_cancelled'
  | 'dispute_challenged'
  | 'dispute_won'
  | 'dispute_lost';

export type DisputeListResponse = Array<DisputeResponse>;

export interface DisputeListParams {
  /**
   * The connector linked to dispute
   */
  connector?: string | null;

  /**
   * Stage of the dispute
   */
  dispute_stage?: DisputeStage | null;

  /**
   * Status of the dispute
   */
  dispute_status?: DisputeStatus | null;

  /**
   * The maximum number of Dispute Objects to include in the response
   */
  limit?: number | null;

  /**
   * The reason for dispute
   */
  reason?: string | null;

  received_time?: DisputeListParams.ReceivedTime;
}

export namespace DisputeListParams {
  export interface ReceivedTime {
    /**
     * Time greater than the dispute received time
     */
    gt?: string | null;

    /**
     * Time greater than or equals to the dispute received time
     */
    gte?: string | null;

    /**
     * Time less than the dispute received time
     */
    lt?: string | null;

    /**
     * Time less than or equals to the dispute received time
     */
    lte?: string | null;
  }
}

export declare namespace Disputes {
  export {
    type DisputeResponse as DisputeResponse,
    type DisputeStage as DisputeStage,
    type DisputeStatus as DisputeStatus,
    type DisputeListResponse as DisputeListResponse,
    type DisputeListParams as DisputeListParams,
  };
}
