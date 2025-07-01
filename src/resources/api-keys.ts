// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create a new API Key for accessing our APIs from your servers. The plaintext API
   * Key will be displayed only once on creation, so ensure you store it securely.
   *
   * @example
   * ```ts
   * const apiKey = await client.apiKeys.create('merchant_id', {
   *   expiration: 'never',
   *   name: 'Sandbox integration key',
   * });
   * ```
   */
  create(
    merchantID: string,
    body: APIKeyCreateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyCreateResponse> {
    return this._client.post(path`/api_keys/${merchantID}`, { body, ...options });
  }

  /**
   * Retrieve information about the specified API Key.
   *
   * @example
   * ```ts
   * const retrieveAPIKey = await client.apiKeys.retrieve(
   *   'key_id',
   *   { merchant_id: 'merchant_id' },
   * );
   * ```
   */
  retrieve(
    keyID: string,
    params: APIKeyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RetrieveAPIKey> {
    const { merchant_id } = params;
    return this._client.get(path`/api_keys/${merchant_id}/${keyID}`, options);
  }

  /**
   * Update information for the specified API Key.
   *
   * @example
   * ```ts
   * const retrieveAPIKey = await client.apiKeys.update(
   *   'key_id',
   *   { merchant_id: 'merchant_id' },
   * );
   * ```
   */
  update(keyID: string, params: APIKeyUpdateParams, options?: RequestOptions): APIPromise<RetrieveAPIKey> {
    const { merchant_id, ...body } = params;
    return this._client.post(path`/api_keys/${merchant_id}/${keyID}`, { body, ...options });
  }

  /**
   * List all the API Keys associated to a merchant account.
   *
   * @example
   * ```ts
   * const retrieveAPIKeys = await client.apiKeys.list(
   *   'merchant_id',
   * );
   * ```
   */
  list(
    merchantID: string,
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get(path`/api_keys/${merchantID}/list`, { query, ...options });
  }

  /**
   * Revoke the specified API Key. Once revoked, the API Key can no longer be used
   * for authenticating with our APIs.
   *
   * @example
   * ```ts
   * const response = await client.apiKeys.revoke('key_id', {
   *   merchant_id: 'merchant_id',
   * });
   * ```
   */
  revoke(
    keyID: string,
    params: APIKeyRevokeParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyRevokeResponse> {
    const { merchant_id } = params;
    return this._client.delete(path`/api_keys/${merchant_id}/${keyID}`, options);
  }
}

export type APIKeyExpiration = 'never' | (string & {});

/**
 * The response body for retrieving an API Key.
 */
export interface RetrieveAPIKey {
  /**
   * The time at which the API Key was created.
   */
  created: string;

  expiration: APIKeyExpiration;

  /**
   * The identifier for the API Key.
   */
  key_id: string;

  /**
   * The identifier for the Merchant Account.
   */
  merchant_id: string;

  /**
   * The unique name for the API Key to help you identify it.
   */
  name: string;

  /**
   * The first few characters of the plaintext API Key to help you identify it.
   */
  prefix: string;

  /**
   * The description to provide more context about the API Key.
   */
  description?: string | null;
}

/**
 * The response body for creating an API Key.
 */
export interface APIKeyCreateResponse {
  /**
   * The plaintext API Key used for server-side API access. Ensure you store the API
   * Key securely as you will not be able to see it again.
   */
  api_key: string;

  /**
   * The time at which the API Key was created.
   */
  created: string;

  expiration: APIKeyExpiration;

  /**
   * The identifier for the API Key.
   */
  key_id: string;

  /**
   * The identifier for the Merchant Account.
   */
  merchant_id: string;

  /**
   * The unique name for the API Key to help you identify it.
   */
  name: string;

  /**
   * The description to provide more context about the API Key.
   */
  description?: string | null;
}

export type APIKeyListResponse = Array<RetrieveAPIKey>;

/**
 * The response body for revoking an API Key.
 */
export interface APIKeyRevokeResponse {
  /**
   * The identifier for the API Key.
   */
  key_id: string;

  /**
   * The identifier for the Merchant Account.
   */
  merchant_id: string;

  /**
   * Indicates whether the API key was revoked or not.
   */
  revoked: boolean;
}

export interface APIKeyCreateParams {
  expiration: APIKeyExpiration;

  /**
   * A unique name for the API Key to help you identify it.
   */
  name: string;

  /**
   * A description to provide more context about the API Key.
   */
  description?: string | null;
}

export interface APIKeyRetrieveParams {
  /**
   * The unique identifier for the merchant account
   */
  merchant_id: string;
}

export interface APIKeyUpdateParams {
  /**
   * Path param: The unique identifier for the merchant account
   */
  merchant_id: string;

  /**
   * Body param: A description to provide more context about the API Key.
   */
  description?: string | null;

  /**
   * Body param:
   */
  expiration?: APIKeyExpiration | null;

  /**
   * Body param: A unique name for the API Key to help you identify it.
   */
  name?: string | null;
}

export interface APIKeyListParams {
  /**
   * The maximum number of API Keys to include in the response
   */
  limit?: number | null;

  /**
   * The number of API Keys to skip when retrieving the list of API keys.
   */
  skip?: number | null;
}

export interface APIKeyRevokeParams {
  /**
   * The unique identifier for the merchant account
   */
  merchant_id: string;
}

export declare namespace APIKeys {
  export {
    type APIKeyExpiration as APIKeyExpiration,
    type RetrieveAPIKey as RetrieveAPIKey,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyRevokeParams as APIKeyRevokeParams,
  };
}
