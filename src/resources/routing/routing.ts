// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RoutingAPI from './routing';
import * as ThreeDSDecisionAPI from '../three-ds-decision';
import * as AccountsAPI from '../accounts/accounts';
import * as PaymentsAPI from '../payments/payments';
import * as DefaultAPI from './default/default';
import {
  Default,
  DefaultRetrieveResponse,
  DefaultUpdateParams,
  DefaultUpdateResponse,
  RoutableConnectorChoice,
} from './default/default';
import * as ContractsAPI from '../accounts/business-profile/dynamic-routing/contracts';
import * as SuccessBasedAPI from '../accounts/business-profile/dynamic-routing/success-based';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Routing extends APIResource {
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);

  /**
   * Create a routing config
   */
  create(body: RoutingCreateParams, options?: RequestOptions): APIPromise<RoutingDictionaryRecord> {
    return this._client.post('/routing', { body, ...options });
  }

  /**
   * Retrieve a routing algorithm
   */
  retrieve(routingAlgorithmID: string, options?: RequestOptions): APIPromise<MerchantRoutingAlgorithm> {
    return this._client.get(path`/routing/${routingAlgorithmID}`, options);
  }

  /**
   * List all routing configs
   */
  list(
    query: RoutingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoutingListResponse> {
    return this._client.get('/routing', { query, ...options });
  }

  /**
   * Activate a routing config
   */
  activate(routingAlgorithmID: string, options?: RequestOptions): APIPromise<RoutingDictionaryRecord> {
    return this._client.post(path`/routing/${routingAlgorithmID}/activate`, options);
  }

  /**
   * Deactivates a routing config
   */
  deactivate(body: RoutingDeactivateParams, options?: RequestOptions): APIPromise<RoutingDictionaryRecord> {
    return this._client.post('/routing/deactivate', { body, ...options });
  }

  /**
   * Retrieve active config
   */
  retrieveActive(
    query: RoutingRetrieveActiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoutingRetrieveActiveResponse> {
    return this._client.get('/routing/active', { query, ...options });
  }
}

/**
 * Routing Algorithm specific to merchants
 */
export interface MerchantRoutingAlgorithm {
  id: string;

  algorithm:
    | MerchantRoutingAlgorithm.UnionMember0
    | MerchantRoutingAlgorithm.UnionMember1
    | MerchantRoutingAlgorithm.UnionMember2
    | MerchantRoutingAlgorithm.UnionMember3
    | MerchantRoutingAlgorithm.UnionMember4
    | MerchantRoutingAlgorithm.EliminationRoutingConfig
    | SuccessBasedAPI.SuccessBasedRoutingConfig
    | ContractsAPI.ContractBasedRoutingConfig;

  algorithm_for: TransactionType;

  created_at: number;

  description: string;

  modified_at: number;

  name: string;

  profile_id: string;
}

export namespace MerchantRoutingAlgorithm {
  export interface UnionMember0 {
    /**
     * Routable Connector chosen for a payment
     */
    data: DefaultAPI.RoutableConnectorChoice;

    type: 'single';
  }

  export interface UnionMember1 {
    data: Array<DefaultAPI.RoutableConnectorChoice>;

    type: 'priority';
  }

  export interface UnionMember2 {
    data: Array<PaymentsAPI.ConnectorVolumeSplit>;

    type: 'volume_split';
  }

  export interface UnionMember3 {
    /**
     * The program, having a default connector selection and a bunch of rules. Also can
     * hold arbitrary metadata.
     */
    data: UnionMember3.Data;

    type: 'advanced';
  }

  export namespace UnionMember3 {
    /**
     * The program, having a default connector selection and a bunch of rules. Also can
     * hold arbitrary metadata.
     */
    export interface Data {
      defaultSelection: AccountsAPI.ConnectorSelection;

      metadata: { [key: string]: unknown };

      /**
       * Represents a rule
       *
       * ```text
       * rule_name: [stripe, adyen, checkout]
       * {
       * payment.method = card {
       * payment.method.cardtype = (credit, debit) {
       * payment.method.network = (amex, rupay, diners)
       * }
       *
       * payment.method.cardtype = credit
       * }
       * }
       * ```
       */
      rules: Data.Rules;
    }

    export namespace Data {
      /**
       * Represents a rule
       *
       * ```text
       * rule_name: [stripe, adyen, checkout]
       * {
       * payment.method = card {
       * payment.method.cardtype = (credit, debit) {
       * payment.method.network = (amex, rupay, diners)
       * }
       *
       * payment.method.cardtype = credit
       * }
       * }
       * ```
       */
      export interface Rules {
        connectorSelection: AccountsAPI.ConnectorSelection;

        name: string;

        statements: Array<AccountsAPI.IfStatement>;
      }
    }
  }

  export interface UnionMember4 {
    data: UnionMember4.Data;

    type: 'three_ds_decision_rule';
  }

  export namespace UnionMember4 {
    export interface Data {
      /**
       * Struct representing the output configuration for the 3DS Decision Rule Engine.
       */
      defaultSelection: Data.DefaultSelection;

      metadata: { [key: string]: unknown };

      rules: Data.Rules;
    }

    export namespace Data {
      /**
       * Struct representing the output configuration for the 3DS Decision Rule Engine.
       */
      export interface DefaultSelection {
        /**
         * Enum representing the possible outcomes of the 3DS Decision Rule Engine.
         */
        decision: ThreeDSDecisionAPI.ThreeDSDecision;
      }

      export interface Rules {
        /**
         * Enum representing the possible outcomes of the 3DS Decision Rule Engine.
         */
        connectorSelection: ThreeDSDecisionAPI.ThreeDSDecision;

        name: string;

        statements: Array<AccountsAPI.IfStatement>;
      }
    }
  }

  export interface EliminationRoutingConfig {
    decision_engine_configs: EliminationRoutingConfig.DecisionEngineConfigs;

    elimination_analyser_config?: EliminationRoutingConfig.EliminationAnalyserConfig | null;

    params?: Array<SuccessBasedAPI.DynamicRoutingConfigParams> | null;
  }

  export namespace EliminationRoutingConfig {
    export interface DecisionEngineConfigs {
      threshold: number;
    }

    export interface EliminationAnalyserConfig {
      bucket_leak_interval_in_secs?: number | null;

      bucket_size?: number | null;
    }
  }
}

export interface RoutingConfig {
  algorithm?: AccountsAPI.StaticRoutingAlgorithm | null;

  description?: string | null;

  name?: string | null;

  profile_id?: string | null;

  transaction_type?: TransactionType | null;
}

export interface RoutingDictionaryRecord {
  id: string;

  created_at: number;

  description: string;

  kind: 'single' | 'priority' | 'volume_split' | 'advanced' | 'dynamic' | 'three_ds_decision_rule';

  modified_at: number;

  name: string;

  profile_id: string;

  algorithm_for?: TransactionType | null;

  decision_engine_routing_id?: string | null;
}

export type TransactionType = 'payment' | 'payout' | 'three_ds_authentication';

export type RoutingListResponse = RoutingListResponse.RoutingDictionary | Array<RoutingDictionaryRecord>;

export namespace RoutingListResponse {
  export interface RoutingDictionary {
    merchant_id: string;

    records: Array<RoutingAPI.RoutingDictionaryRecord>;

    active_id?: string | null;
  }
}

/**
 * Response of the retrieved routing configs for a merchant account
 */
export type RoutingRetrieveActiveResponse =
  | RoutingRetrieveActiveResponse.RoutingRetrieveResponse
  | Array<RoutingDictionaryRecord>;

export namespace RoutingRetrieveActiveResponse {
  /**
   * Response of the retrieved routing configs for a merchant account
   */
  export interface RoutingRetrieveResponse {
    /**
     * Routing Algorithm specific to merchants
     */
    algorithm?: RoutingAPI.MerchantRoutingAlgorithm | null;
  }
}

export interface RoutingCreateParams {
  algorithm?: AccountsAPI.StaticRoutingAlgorithm | null;

  description?: string | null;

  name?: string | null;

  profile_id?: string | null;

  transaction_type?: TransactionType | null;
}

export interface RoutingListParams {
  /**
   * The number of records to be returned
   */
  limit?: number | null;

  /**
   * The record offset from which to start gathering of results
   */
  offset?: number | null;

  /**
   * The unique identifier for a merchant profile
   */
  profile_id?: string | null;
}

export interface RoutingDeactivateParams {
  algorithm?: AccountsAPI.StaticRoutingAlgorithm | null;

  description?: string | null;

  name?: string | null;

  profile_id?: string | null;

  transaction_type?: TransactionType | null;
}

export interface RoutingRetrieveActiveParams {
  /**
   * The unique identifier for a merchant profile
   */
  profile_id?: string | null;
}

Routing.Default = Default;

export declare namespace Routing {
  export {
    type MerchantRoutingAlgorithm as MerchantRoutingAlgorithm,
    type RoutingConfig as RoutingConfig,
    type RoutingDictionaryRecord as RoutingDictionaryRecord,
    type TransactionType as TransactionType,
    type RoutingListResponse as RoutingListResponse,
    type RoutingRetrieveActiveResponse as RoutingRetrieveActiveResponse,
    type RoutingCreateParams as RoutingCreateParams,
    type RoutingListParams as RoutingListParams,
    type RoutingDeactivateParams as RoutingDeactivateParams,
    type RoutingRetrieveActiveParams as RoutingRetrieveActiveParams,
  };

  export {
    Default as Default,
    type RoutableConnectorChoice as RoutableConnectorChoice,
    type DefaultRetrieveResponse as DefaultRetrieveResponse,
    type DefaultUpdateResponse as DefaultUpdateResponse,
    type DefaultUpdateParams as DefaultUpdateParams,
  };
}
