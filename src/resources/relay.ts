// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts/accounts';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Relay extends APIResource {
  /**
   * Creates a relay request.
   *
   * @example
   * ```ts
   * const relayResponse = await client.relay.create({
   *   connector_id: 'mca_5apGeP94tMts6rg3U3kR',
   *   connector_resource_id: '7256228702616471803954',
   *   type: 'refund',
   *   'X-Idempotency-Key': 'X-Idempotency-Key',
   *   'X-Profile-Id': 'X-Profile-Id',
   *   data: { refund: { amount: 6540, currency: 'USD' } },
   * });
   * ```
   */
  create(params: RelayCreateParams, options?: RequestOptions): APIPromise<RelayResponse> {
    const { 'X-Idempotency-Key': xIdempotencyKey, 'X-Profile-Id': xProfileID, ...body } = params;
    return this._client.post('/relay', {
      body,
      ...options,
      headers: buildHeaders([
        { 'X-Idempotency-Key': xIdempotencyKey, 'X-Profile-Id': xProfileID },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a relay details.
   *
   * @example
   * ```ts
   * const relayResponse = await client.relay.retrieve(
   *   'relay_id',
   *   { 'X-Profile-Id': 'X-Profile-Id' },
   * );
   * ```
   */
  retrieve(
    relayID: string,
    params: RelayRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RelayResponse> {
    const { 'X-Profile-Id': xProfileID } = params;
    return this._client.get(path`/relay/${relayID}`, {
      ...options,
      headers: buildHeaders([{ 'X-Profile-Id': xProfileID }, options?.headers]),
    });
  }
}

export interface RelayData {
  refund: RelayData.Refund;
}

export namespace RelayData {
  export interface Refund {
    /**
     * The amount that is being refunded
     */
    amount: number;

    /**
     * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
     * amount. This field is mandatory for creating a payment.
     */
    currency: AccountsAPI.Currency;

    /**
     * The reason for the refund
     */
    reason?: string | null;
  }
}

export interface RelayResponse {
  /**
   * The unique identifier for the Relay
   */
  id: string;

  /**
   * Identifier of the connector ( merchant connector account ) which was chosen to
   * make the payment
   */
  connector_id: string;

  /**
   * The identifier that is associated to a resource at the connector reference to
   * which the relay request is being made
   */
  connector_resource_id: string;

  /**
   * The business profile that is associated with this relay request.
   */
  profile_id: string;

  status: 'created' | 'pending' | 'success' | 'failure';

  type: RelayType;

  /**
   * The identifier that is associated to a resource at the connector to which the
   * relay request is being made
   */
  connector_reference_id?: string | null;

  data?: RelayData | null;

  error?: RelayResponse.Error | null;
}

export namespace RelayResponse {
  export interface Error {
    /**
     * The error code
     */
    code: string;

    /**
     * The error message
     */
    message: string;
  }
}

export type RelayType = 'refund';

export interface RelayCreateParams {
  /**
   * Body param: Identifier of the connector ( merchant connector account ) which was
   * chosen to make the payment
   */
  connector_id: string;

  /**
   * Body param: The identifier that is associated to a resource at the connector
   * reference to which the relay request is being made
   */
  connector_resource_id: string;

  /**
   * Body param:
   */
  type: RelayType;

  /**
   * Header param: Idempotency Key for relay request
   */
  'X-Idempotency-Key': string;

  /**
   * Header param: Profile ID for authentication
   */
  'X-Profile-Id': string;

  /**
   * Body param:
   */
  data?: RelayData | null;
}

export interface RelayRetrieveParams {
  /**
   * Profile ID for authentication
   */
  'X-Profile-Id': string;
}

export declare namespace Relay {
  export {
    type RelayData as RelayData,
    type RelayResponse as RelayResponse,
    type RelayType as RelayType,
    type RelayCreateParams as RelayCreateParams,
    type RelayRetrieveParams as RelayRetrieveParams,
  };
}
