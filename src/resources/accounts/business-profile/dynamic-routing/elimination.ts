// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RoutingAPI from '../../../routing/routing';
import * as SuccessBasedAPI from './success-based';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Elimination extends APIResource {
  /**
   * Create a elimination based dynamic routing algorithm
   *
   * @example
   * ```ts
   * const routingDictionaryRecord =
   *   await client.accounts.businessProfile.dynamicRouting.elimination.toggle(
   *     'profile_id',
   *     { account_id: 'account_id', enable: 'metrics' },
   *   );
   * ```
   */
  toggle(
    profileID: string,
    params: EliminationToggleParams,
    options?: RequestOptions,
  ): APIPromise<RoutingAPI.RoutingDictionaryRecord> {
    const { account_id, enable } = params;
    return this._client.post(
      path`/account/${account_id}/business_profile/${profileID}/dynamic_routing/elimination/toggle`,
      { query: { enable }, ...options },
    );
  }
}

export interface EliminationToggleParams {
  /**
   * Path param: Merchant id
   */
  account_id: string;

  /**
   * Query param: Feature to enable for elimination based routing
   */
  enable: SuccessBasedAPI.DynamicRoutingFeatures;
}

export declare namespace Elimination {
  export { type EliminationToggleParams as EliminationToggleParams };
}
