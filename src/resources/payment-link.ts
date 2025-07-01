// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts/accounts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentLink extends APIResource {
  /**
   * To retrieve the properties of a Payment Link. This may be used to get the status
   * of a previously initiated payment or next action for an ongoing payment
   */
  retrieve(
    paymentLinkID: string,
    query: PaymentLinkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentLinkRetrieveResponse> {
    return this._client.get(path`/payment_link/${paymentLinkID}`, { query, ...options });
  }
}

export interface PaymentLinkRetrieveResponse {
  /**
   * The payment amount. Amount for the payment in the lowest denomination of the
   * currency
   */
  amount: number;

  /**
   * Date and time of Payment Link creation
   */
  created_at: string;

  /**
   * Open payment link (without any security checks and listing SPMs)
   */
  link_to_pay: string;

  /**
   * Identifier for Merchant
   */
  merchant_id: string;

  /**
   * Identifier for Payment Link
   */
  payment_link_id: string;

  /**
   * Status Of the Payment Link
   */
  status: 'active' | 'expired';

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency?: AccountsAPI.Currency | null;

  /**
   * Description for Payment Link
   */
  description?: string | null;

  /**
   * Date and time of Expiration for Payment Link
   */
  expiry?: string | null;

  /**
   * Secure payment link (with security checks and listing saved payment methods)
   */
  secure_link?: string | null;
}

export interface PaymentLinkRetrieveParams {
  /**
   * This is a token which expires after 15 minutes, used from the client to
   * authenticate and create sessions from the SDK
   */
  client_secret?: string | null;
}

export declare namespace PaymentLink {
  export {
    type PaymentLinkRetrieveResponse as PaymentLinkRetrieveResponse,
    type PaymentLinkRetrieveParams as PaymentLinkRetrieveParams,
  };
}
