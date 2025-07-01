// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RoutingAPI from '../../../routing/routing';
import * as SuccessBasedAPI from './success-based';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Contracts extends APIResource {
  /**
   * Create a Contract based dynamic routing algorithm
   *
   * @example
   * ```ts
   * const routingDictionaryRecord =
   *   await client.accounts.businessProfile.dynamicRouting.contracts.toggle(
   *     'profile_id',
   *     { account_id: 'account_id', enable: 'metrics' },
   *   );
   * ```
   */
  toggle(
    profileID: string,
    params: ContractToggleParams,
    options?: RequestOptions,
  ): APIPromise<RoutingAPI.RoutingDictionaryRecord> {
    const { account_id, enable, ...body } = params;
    return this._client.post(
      path`/account/${account_id}/business_profile/${profileID}/dynamic_routing/contracts/toggle`,
      { query: { enable }, body, ...options },
    );
  }

  /**
   * Update contract based dynamic routing algorithm
   *
   * @example
   * ```ts
   * const routingDictionaryRecord =
   *   await client.accounts.businessProfile.dynamicRouting.contracts.updateConfig(
   *     'algorithm_id',
   *     { account_id: 'account_id', profile_id: 'profile_id' },
   *   );
   * ```
   */
  updateConfig(
    algorithmID: string,
    params: ContractUpdateConfigParams,
    options?: RequestOptions,
  ): APIPromise<RoutingAPI.RoutingDictionaryRecord> {
    const { account_id, profile_id, ...body } = params;
    return this._client.patch(
      path`/account/${account_id}/business_profile/${profile_id}/dynamic_routing/contracts/config/${algorithmID}`,
      { body, ...options },
    );
  }
}

export interface ContractBasedRoutingConfig {
  config?: ContractBasedRoutingConfig.Config | null;

  label_info?: Array<ContractBasedRoutingConfig.LabelInfo> | null;
}

export namespace ContractBasedRoutingConfig {
  export interface Config {
    constants?: Array<number> | null;

    time_scale?: 'day' | 'month' | null;
  }

  export interface LabelInfo {
    label: string;

    mca_id: string;

    target_count: number;

    target_time: number;
  }
}

export interface ContractToggleParams {
  /**
   * Path param: Merchant id
   */
  account_id: string;

  /**
   * Query param: Feature to enable for contract based routing
   */
  enable: SuccessBasedAPI.DynamicRoutingFeatures;

  /**
   * Body param:
   */
  config?: ContractToggleParams.Config | null;

  /**
   * Body param:
   */
  label_info?: Array<ContractToggleParams.LabelInfo> | null;
}

export namespace ContractToggleParams {
  export interface Config {
    constants?: Array<number> | null;

    time_scale?: 'day' | 'month' | null;
  }

  export interface LabelInfo {
    label: string;

    mca_id: string;

    target_count: number;

    target_time: number;
  }
}

export interface ContractUpdateConfigParams {
  /**
   * Path param: Merchant id
   */
  account_id: string;

  /**
   * Path param: Profile id under which Dynamic routing needs to be toggled
   */
  profile_id: string;

  /**
   * Body param:
   */
  config?: ContractUpdateConfigParams.Config | null;

  /**
   * Body param:
   */
  label_info?: Array<ContractUpdateConfigParams.LabelInfo> | null;
}

export namespace ContractUpdateConfigParams {
  export interface Config {
    constants?: Array<number> | null;

    time_scale?: 'day' | 'month' | null;
  }

  export interface LabelInfo {
    label: string;

    mca_id: string;

    target_count: number;

    target_time: number;
  }
}

export declare namespace Contracts {
  export {
    type ContractBasedRoutingConfig as ContractBasedRoutingConfig,
    type ContractToggleParams as ContractToggleParams,
    type ContractUpdateConfigParams as ContractUpdateConfigParams,
  };
}
