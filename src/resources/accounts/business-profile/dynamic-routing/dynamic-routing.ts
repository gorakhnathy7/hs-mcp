// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ContractsAPI from './contracts';
import {
  ContractBasedRoutingConfig,
  ContractToggleParams,
  ContractUpdateConfigParams,
  Contracts,
} from './contracts';
import * as EliminationAPI from './elimination';
import { Elimination, EliminationToggleParams } from './elimination';
import * as SuccessBasedAPI from './success-based';
import {
  DecisionEngineGatewayWiseExtraScore,
  DynamicRoutingConfigParams,
  DynamicRoutingFeatures,
  SuccessBased,
  SuccessBasedRoutingConfig,
  SuccessBasedToggleParams,
  SuccessBasedUpdateConfigParams,
} from './success-based';

export class DynamicRouting extends APIResource {
  successBased: SuccessBasedAPI.SuccessBased = new SuccessBasedAPI.SuccessBased(this._client);
  elimination: EliminationAPI.Elimination = new EliminationAPI.Elimination(this._client);
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
}

DynamicRouting.SuccessBased = SuccessBased;
DynamicRouting.Elimination = Elimination;
DynamicRouting.Contracts = Contracts;

export declare namespace DynamicRouting {
  export {
    SuccessBased as SuccessBased,
    type DecisionEngineGatewayWiseExtraScore as DecisionEngineGatewayWiseExtraScore,
    type DynamicRoutingConfigParams as DynamicRoutingConfigParams,
    type DynamicRoutingFeatures as DynamicRoutingFeatures,
    type SuccessBasedRoutingConfig as SuccessBasedRoutingConfig,
    type SuccessBasedToggleParams as SuccessBasedToggleParams,
    type SuccessBasedUpdateConfigParams as SuccessBasedUpdateConfigParams,
  };

  export { Elimination as Elimination, type EliminationToggleParams as EliminationToggleParams };

  export {
    Contracts as Contracts,
    type ContractBasedRoutingConfig as ContractBasedRoutingConfig,
    type ContractToggleParams as ContractToggleParams,
    type ContractUpdateConfigParams as ContractUpdateConfigParams,
  };
}
