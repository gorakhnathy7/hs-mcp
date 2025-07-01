// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ProfileAcquirers extends APIResource {
  /**
   * Create a new Profile Acquirer for accessing our APIs from your servers.
   *
   * @example
   * ```ts
   * const profileAcquirer =
   *   await client.profileAcquirers.create({
   *     acquirer_assigned_merchant_id: 'M123456789',
   *     acquirer_bin: '456789',
   *     acquirer_fraud_rate: 0.01,
   *     merchant_country_code: 'US',
   *     merchant_name: 'NewAge Retailer',
   *     network: 'VISA',
   *     profile_id: 'pro_ky0yNyOXXlA5hF8JzE5q',
   *   });
   * ```
   */
  create(body: ProfileAcquirerCreateParams, options?: RequestOptions): APIPromise<ProfileAcquirer> {
    return this._client.post('/profile_acquirers', { body, ...options });
  }

  /**
   * Update a Profile Acquirer for accessing our APIs from your servers.
   *
   * @example
   * ```ts
   * const profileAcquirer =
   *   await client.profileAcquirers.update(
   *     'profile_acquirer_id',
   *     { profile_id: 'profile_id' },
   *   );
   * ```
   */
  update(
    profileAcquirerID: string,
    params: ProfileAcquirerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileAcquirer> {
    const { profile_id, ...body } = params;
    return this._client.post(path`/profile_acquirers/${profile_id}/${profileAcquirerID}`, {
      body,
      ...options,
    });
  }
}

export interface ProfileAcquirer {
  /**
   * The merchant id assigned by the acquirer
   */
  acquirer_assigned_merchant_id: string;

  /**
   * Acquirer bin
   */
  acquirer_bin: string;

  /**
   * Fraud rate for the particular acquirer configuration
   */
  acquirer_fraud_rate: number;

  /**
   * Merchant country code assigned by acquirer
   */
  merchant_country_code: string;

  /**
   * Merchant name
   */
  merchant_name: string;

  /**
   * Network provider
   */
  network: string;

  /**
   * The unique identifier of the profile acquirer
   */
  profile_acquirer_id: string;

  /**
   * Parent profile id to link the acquirer account with
   */
  profile_id: string;

  /**
   * Acquirer ica provided by acquirer
   */
  acquirer_ica?: string | null;
}

export interface ProfileAcquirerCreateParams {
  /**
   * The merchant id assigned by the acquirer
   */
  acquirer_assigned_merchant_id: string;

  /**
   * Acquirer bin
   */
  acquirer_bin: string;

  /**
   * Fraud rate for the particular acquirer configuration
   */
  acquirer_fraud_rate: number;

  /**
   * Merchant country code assigned by acquirer
   */
  merchant_country_code: string;

  /**
   * merchant name
   */
  merchant_name: string;

  /**
   * Network provider
   */
  network: string;

  /**
   * Parent profile id to link the acquirer account with
   */
  profile_id: string;

  /**
   * Acquirer ica provided by acquirer
   */
  acquirer_ica?: string | null;
}

export interface ProfileAcquirerUpdateParams {
  /**
   * Path param: The unique identifier for the Profile
   */
  profile_id: string;

  /**
   * Body param:
   */
  acquirer_assigned_merchant_id?: string | null;

  /**
   * Body param:
   */
  acquirer_bin?: string | null;

  /**
   * Body param:
   */
  acquirer_fraud_rate?: number | null;

  /**
   * Body param:
   */
  acquirer_ica?: string | null;

  /**
   * Body param:
   */
  merchant_country_code?: string | null;

  /**
   * Body param:
   */
  merchant_name?: string | null;

  /**
   * Body param:
   */
  network?: string | null;
}

export declare namespace ProfileAcquirers {
  export {
    type ProfileAcquirer as ProfileAcquirer,
    type ProfileAcquirerCreateParams as ProfileAcquirerCreateParams,
    type ProfileAcquirerUpdateParams as ProfileAcquirerUpdateParams,
  };
}
