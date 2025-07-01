// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DefaultAPI from './default';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Profile extends APIResource {
  /**
   * Retrieve default config for profiles
   */
  retrieve(options?: RequestOptions): APIPromise<DefaultRoutingConfig> {
    return this._client.get('/routing/default/profile', options);
  }

  /**
   * Update default config for profiles
   */
  update(
    profileID: string,
    params: ProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DefaultRoutingConfig> {
    const { body } = params;
    return this._client.post(path`/routing/default/profile/${profileID}`, { body: body, ...options });
  }
}

export interface DefaultRoutingConfig {
  connectors: Array<DefaultAPI.RoutableConnectorChoice>;

  profile_id: string;
}

export interface ProfileUpdateParams {
  body: Array<DefaultAPI.RoutableConnectorChoice>;
}

export declare namespace Profile {
  export {
    type DefaultRoutingConfig as DefaultRoutingConfig,
    type ProfileUpdateParams as ProfileUpdateParams,
  };
}
