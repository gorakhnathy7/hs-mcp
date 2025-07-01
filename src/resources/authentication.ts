// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts/accounts';
import * as PaymentsAPI from './payments/payments';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Authentication extends APIResource {
  /**
   * Create a new authentication for accessing our APIs from your servers.
   *
   * @example
   * ```ts
   * const authentication = await client.authentication.create({
   *   amount: 0,
   *   currency: 'AED',
   * });
   * ```
   */
  create(
    body: AuthenticationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AuthenticationCreateResponse> {
    return this._client.post('/authentication', { body, ...options });
  }
}

export interface AcquirerDetails {
  /**
   * The bin of the card.
   */
  bin?: string | null;

  /**
   * The country code of the card.
   */
  country_code?: string | null;

  /**
   * The merchant id of the card.
   */
  merchant_id?: string | null;
}

export type AuthenticationConnectors =
  | 'threedsecureio'
  | 'netcetera'
  | 'gpayments'
  | 'ctp_mastercard'
  | 'unified_authentication_service'
  | 'juspaythreedsserver'
  | 'ctp_visa';

export type AuthenticationStatus = 'started' | 'pending' | 'success' | 'failed';

export interface AuthenticationCreateResponse {
  /**
   * This Unit struct represents MinorUnit in which core amount works
   */
  amount: number;

  /**
   * The unique identifier for this authentication.
   */
  authentication_id: string;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  /**
   * This is an identifier for the merchant account. This is inferred from the API
   * key provided during the request
   */
  merchant_id: string;

  status: AuthenticationStatus;

  acquirer_details?: AcquirerDetails | null;

  authentication_connector?: AuthenticationConnectors | null;

  /**
   * The client secret for this authentication, to be used for client-side
   * operations.
   */
  client_secret?: string | null;

  created_at?: string | null;

  error_code?: string | null;

  /**
   * If there was an error while calling the connector the error message is received
   * here
   */
  error_message?: string | null;

  /**
   * Whether 3DS challenge was forced.
   */
  force_3ds_challenge?: boolean | null;

  /**
   * The business profile that is associated with this payment
   */
  profile_id?: string | null;

  /**
   * SCA Exemptions types available for authentication
   */
  psd2_sca_exemption_type?: PaymentsAPI.ScaExemptionType | null;

  /**
   * The URL to which the user should be redirected after authentication, if
   * provided.
   */
  return_url?: string | null;
}

export interface AuthenticationCreateParams {
  /**
   * This Unit struct represents MinorUnit in which core amount works
   */
  amount: number;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  acquirer_details?: AcquirerDetails | null;

  authentication_connector?: AuthenticationConnectors | null;

  /**
   * The unique identifier for this authentication.
   */
  authentication_id?: string | null;

  /**
   * Passing this object creates a new customer or attaches an existing customer to
   * the payment
   */
  customer?: PaymentsAPI.CustomerDetails | null;

  /**
   * Force 3DS challenge.
   */
  force_3ds_challenge?: boolean | null;

  /**
   * The business profile that is associated with this authentication
   */
  profile_id?: string | null;

  /**
   * SCA Exemptions types available for authentication
   */
  psd2_sca_exemption_type?: PaymentsAPI.ScaExemptionType | null;

  /**
   * The URL to which the user should be redirected after authentication.
   */
  return_url?: string | null;
}

export declare namespace Authentication {
  export {
    type AcquirerDetails as AcquirerDetails,
    type AuthenticationConnectors as AuthenticationConnectors,
    type AuthenticationStatus as AuthenticationStatus,
    type AuthenticationCreateResponse as AuthenticationCreateResponse,
    type AuthenticationCreateParams as AuthenticationCreateParams,
  };
}
