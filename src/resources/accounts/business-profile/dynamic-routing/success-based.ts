// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SuccessBasedAPI from './success-based';
import * as RoutingAPI from '../../../routing/routing';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class SuccessBased extends APIResource {
  /**
   * Create a success based dynamic routing algorithm
   *
   * @example
   * ```ts
   * const routingDictionaryRecord =
   *   await client.accounts.businessProfile.dynamicRouting.successBased.toggle(
   *     'profile_id',
   *     { account_id: 'account_id', enable: 'metrics' },
   *   );
   * ```
   */
  toggle(
    profileID: string,
    params: SuccessBasedToggleParams,
    options?: RequestOptions,
  ): APIPromise<RoutingAPI.RoutingDictionaryRecord> {
    const { account_id, enable } = params;
    return this._client.post(
      path`/account/${account_id}/business_profile/${profileID}/dynamic_routing/success_based/toggle`,
      { query: { enable }, ...options },
    );
  }

  /**
   * Update success based dynamic routing algorithm
   *
   * @example
   * ```ts
   * const routingDictionaryRecord =
   *   await client.accounts.businessProfile.dynamicRouting.successBased.updateConfig(
   *     'algorithm_id',
   *     {
   *       account_id: 'account_id',
   *       profile_id: 'profile_id',
   *       decision_engine_configs: {},
   *     },
   *   );
   * ```
   */
  updateConfig(
    algorithmID: string,
    params: SuccessBasedUpdateConfigParams,
    options?: RequestOptions,
  ): APIPromise<RoutingAPI.RoutingDictionaryRecord> {
    const { account_id, profile_id, ...body } = params;
    return this._client.patch(
      path`/account/${account_id}/business_profile/${profile_id}/dynamic_routing/success_based/config/${algorithmID}`,
      { body, ...options },
    );
  }
}

export interface DecisionEngineGatewayWiseExtraScore {
  gatewayName: string;

  gatewaySigmaFactor: number;
}

export type DynamicRoutingConfigParams =
  | 'PaymentMethod'
  | 'PaymentMethodType'
  | 'AuthenticationType'
  | 'Currency'
  | 'Country'
  | 'CardNetwork'
  | 'CardBin';

export type DynamicRoutingFeatures = 'metrics' | 'dynamic_connector_selection' | 'none';

export interface SuccessBasedRoutingConfig {
  decision_engine_configs: SuccessBasedRoutingConfig.DecisionEngineConfigs;

  config?: SuccessBasedRoutingConfig.Config | null;

  params?: Array<DynamicRoutingConfigParams> | null;
}

export namespace SuccessBasedRoutingConfig {
  export interface DecisionEngineConfigs {
    defaultBucketSize?: number | null;

    defaultGatewayExtraScore?: Array<SuccessBasedAPI.DecisionEngineGatewayWiseExtraScore> | null;

    defaultHedgingPercent?: number | null;

    defaultLatencyThreshold?: number | null;

    defaultLowerResetFactor?: number | null;

    defaultUpperResetFactor?: number | null;

    subLevelInputConfig?: Array<DecisionEngineConfigs.SubLevelInputConfig> | null;
  }

  export namespace DecisionEngineConfigs {
    export interface SubLevelInputConfig {
      bucketSize?: number | null;

      gatewayExtraScore?: Array<SuccessBasedAPI.DecisionEngineGatewayWiseExtraScore> | null;

      hedgingPercent?: number | null;

      latencyThreshold?: number | null;

      lowerResetFactor?: number | null;

      paymentMethod?: string | null;

      paymentMethodType?: string | null;

      upperResetFactor?: number | null;
    }
  }

  export interface Config {
    current_block_threshold?: Config.CurrentBlockThreshold | null;

    default_success_rate?: number | null;

    exploration_percent?: number | null;

    max_aggregates_size?: number | null;

    min_aggregates_size?: number | null;

    shuffle_on_tie_during_exploitation?: boolean | null;

    specificity_level?: 'merchant' | 'global';
  }

  export namespace Config {
    export interface CurrentBlockThreshold {
      duration_in_mins?: number | null;

      max_total_count?: number | null;
    }
  }
}

export interface SuccessBasedToggleParams {
  /**
   * Path param: Merchant id
   */
  account_id: string;

  /**
   * Query param: Feature to enable for success based routing
   */
  enable: DynamicRoutingFeatures;
}

export interface SuccessBasedUpdateConfigParams {
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
  decision_engine_configs: SuccessBasedUpdateConfigParams.DecisionEngineConfigs;

  /**
   * Body param:
   */
  config?: SuccessBasedUpdateConfigParams.Config | null;

  /**
   * Body param:
   */
  params?: Array<DynamicRoutingConfigParams> | null;
}

export namespace SuccessBasedUpdateConfigParams {
  export interface DecisionEngineConfigs {
    defaultBucketSize?: number | null;

    defaultGatewayExtraScore?: Array<SuccessBasedAPI.DecisionEngineGatewayWiseExtraScore> | null;

    defaultHedgingPercent?: number | null;

    defaultLatencyThreshold?: number | null;

    defaultLowerResetFactor?: number | null;

    defaultUpperResetFactor?: number | null;

    subLevelInputConfig?: Array<DecisionEngineConfigs.SubLevelInputConfig> | null;
  }

  export namespace DecisionEngineConfigs {
    export interface SubLevelInputConfig {
      bucketSize?: number | null;

      gatewayExtraScore?: Array<SuccessBasedAPI.DecisionEngineGatewayWiseExtraScore> | null;

      hedgingPercent?: number | null;

      latencyThreshold?: number | null;

      lowerResetFactor?: number | null;

      paymentMethod?: string | null;

      paymentMethodType?: string | null;

      upperResetFactor?: number | null;
    }
  }

  export interface Config {
    current_block_threshold?: Config.CurrentBlockThreshold | null;

    default_success_rate?: number | null;

    exploration_percent?: number | null;

    max_aggregates_size?: number | null;

    min_aggregates_size?: number | null;

    shuffle_on_tie_during_exploitation?: boolean | null;

    specificity_level?: 'merchant' | 'global';
  }

  export namespace Config {
    export interface CurrentBlockThreshold {
      duration_in_mins?: number | null;

      max_total_count?: number | null;
    }
  }
}

export declare namespace SuccessBased {
  export {
    type DecisionEngineGatewayWiseExtraScore as DecisionEngineGatewayWiseExtraScore,
    type DynamicRoutingConfigParams as DynamicRoutingConfigParams,
    type DynamicRoutingFeatures as DynamicRoutingFeatures,
    type SuccessBasedRoutingConfig as SuccessBasedRoutingConfig,
    type SuccessBasedToggleParams as SuccessBasedToggleParams,
    type SuccessBasedUpdateConfigParams as SuccessBasedUpdateConfigParams,
  };
}
