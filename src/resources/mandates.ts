// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts/accounts';
import * as PaymentsAPI from './payments/payments';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Mandates extends APIResource {
  /**
   * Retrieves a mandate created using the Payments/Create API
   */
  retrieve(mandateID: string, options?: RequestOptions): APIPromise<MandateResponse> {
    return this._client.get(path`/mandates/${mandateID}`, options);
  }

  /**
   * Revokes a mandate created using the Payments/Create API
   */
  revoke(mandateID: string, options?: RequestOptions): APIPromise<MandateRevokeResponse> {
    return this._client.post(path`/mandates/revoke/${mandateID}`, options);
  }
}

export interface MandateResponse {
  /**
   * The identifier for mandate
   */
  mandate_id: string;

  /**
   * The payment method
   */
  payment_method: string;

  /**
   * The identifier for payment method
   */
  payment_method_id: string;

  /**
   * The status of the mandate, which indicates whether it can be used to initiate a
   * payment.
   */
  status: MandateStatus;

  card?: MandateResponse.Card | null;

  /**
   * This "CustomerAcceptance" object is passed during Payments-Confirm request, it
   * enlists the type, time, and mode of acceptance properties related to an
   * acceptance done by the customer. The customer_acceptance sub object is usually
   * passed by the SDK or client.
   */
  customer_acceptance?: PaymentsAPI.CustomerAcceptance | null;

  /**
   * The payment method type
   */
  payment_method_type?: string | null;
}

export namespace MandateResponse {
  export interface Card {
    /**
     * The expiry month of card
     */
    card_exp_month?: string | null;

    /**
     * The expiry year of card
     */
    card_exp_year?: string | null;

    /**
     * A unique identifier alias to identify a particular card
     */
    card_fingerprint?: string | null;

    /**
     * The card holder name
     */
    card_holder_name?: string | null;

    /**
     * The first 6 digits of card
     */
    card_isin?: string | null;

    /**
     * The bank that issued the card
     */
    card_issuer?: string | null;

    /**
     * Indicates the card network.
     */
    card_network?: AccountsAPI.CardNetwork | null;

    /**
     * The token from card locker
     */
    card_token?: string | null;

    /**
     * The type of the payment card
     */
    card_type?: string | null;

    /**
     * The country code in in which the card was issued
     */
    issuer_country?: string | null;

    /**
     * The last 4 digits of card
     */
    last4_digits?: string | null;

    /**
     * The nick_name of the card holder
     */
    nick_name?: string | null;

    /**
     * The card scheme network for the particular card
     */
    scheme?: string | null;
  }
}

/**
 * The status of the mandate, which indicates whether it can be used to initiate a
 * payment.
 */
export type MandateStatus = 'active' | 'inactive' | 'pending' | 'revoked';

export interface MandateRevokeResponse {
  /**
   * The identifier for mandate
   */
  mandate_id: string;

  /**
   * The status of the mandate, which indicates whether it can be used to initiate a
   * payment.
   */
  status: MandateStatus;

  /**
   * If there was an error while calling the connectors the code is received here
   */
  error_code?: string | null;

  /**
   * If there was an error while calling the connector the error message is received
   * here
   */
  error_message?: string | null;
}

export declare namespace Mandates {
  export {
    type MandateResponse as MandateResponse,
    type MandateStatus as MandateStatus,
    type MandateRevokeResponse as MandateRevokeResponse,
  };
}
