// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ConnectorsAPI from './accounts/connectors';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Gsm extends APIResource {
  /**
   * Creates a GSM (Global Status Mapping) Rule. A GSM rule is used to map a
   * connector's error message/error code combination during a particular payments
   * flow/sub-flow to Hyperswitch's unified status/error code/error message
   * combination. It is also used to decide the next action in the flow -
   * retry/requeue/do_default
   */
  create(body: GsmCreateParams, options?: RequestOptions): APIPromise<GsmResponse> {
    return this._client.post('/gsm', { body, ...options });
  }

  /**
   * Retrieves a Gsm Rule
   */
  retrieve(body: GsmRetrieveParams, options?: RequestOptions): APIPromise<GsmResponse> {
    return this._client.post('/gsm/get', { body, ...options });
  }

  /**
   * Updates a Gsm Rule
   */
  update(body: GsmUpdateParams, options?: RequestOptions): APIPromise<GsmResponse> {
    return this._client.post('/gsm/update', { body, ...options });
  }

  /**
   * Deletes a Gsm Rule
   */
  delete(body: GsmDeleteParams, options?: RequestOptions): APIPromise<GsmDeleteResponse> {
    return this._client.post('/gsm/delete', { body, ...options });
  }
}

export type ErrorCategory =
  | 'frm_decline'
  | 'processor_downtime'
  | 'processor_decline_unauthorized'
  | 'issue_with_payment_method'
  | 'processor_decline_incorrect_data';

export type GsmDecision = 'retry' | 'requeue' | 'do_default';

export interface GsmResponse {
  /**
   * indicates if retry with pan is possible
   */
  clear_pan_possible: boolean;

  /**
   * code received from the connector
   */
  code: string;

  /**
   * The connector through which payment has gone through
   */
  connector: string;

  /**
   * decision to be taken for auto retries flow
   */
  decision: string;

  /**
   * The flow in which the code and message occurred for a connector
   */
  flow: string;

  /**
   * message received from the connector
   */
  message: string;

  /**
   * status provided by the router
   */
  status: string;

  /**
   * indicates if step_up retry is possible
   */
  step_up_possible: boolean;

  /**
   * The sub_flow in which the code and message occurred for a connector
   */
  sub_flow: string;

  error_category?: ErrorCategory | null;

  /**
   * optional error provided by the router
   */
  router_error?: string | null;

  /**
   * error code unified across the connectors
   */
  unified_code?: string | null;

  /**
   * error message unified across the connectors
   */
  unified_message?: string | null;
}

export interface GsmDeleteResponse {
  /**
   * code received from the connector
   */
  code: string;

  /**
   * The connector through which payment has gone through
   */
  connector: string;

  /**
   * The flow in which the code and message occurred for a connector
   */
  flow: string;

  gsm_rule_delete: boolean;

  /**
   * The sub_flow in which the code and message occurred for a connector
   */
  sub_flow: string;
}

export interface GsmCreateParams {
  /**
   * indicates if retry with pan is possible
   */
  clear_pan_possible: boolean;

  /**
   * code received from the connector
   */
  code: string;

  connector: ConnectorsAPI.Connector;

  decision: GsmDecision;

  /**
   * The flow in which the code and message occurred for a connector
   */
  flow: string;

  /**
   * message received from the connector
   */
  message: string;

  /**
   * status provided by the router
   */
  status: string;

  /**
   * indicates if step_up retry is possible
   */
  step_up_possible: boolean;

  /**
   * The sub_flow in which the code and message occurred for a connector
   */
  sub_flow: string;

  error_category?: ErrorCategory | null;

  /**
   * optional error provided by the router
   */
  router_error?: string | null;

  /**
   * error code unified across the connectors
   */
  unified_code?: string | null;

  /**
   * error message unified across the connectors
   */
  unified_message?: string | null;
}

export interface GsmRetrieveParams {
  /**
   * code received from the connector
   */
  code: string;

  connector: ConnectorsAPI.Connector;

  /**
   * The flow in which the code and message occurred for a connector
   */
  flow: string;

  /**
   * message received from the connector
   */
  message: string;

  /**
   * The sub_flow in which the code and message occurred for a connector
   */
  sub_flow: string;
}

export interface GsmUpdateParams {
  /**
   * code received from the connector
   */
  code: string;

  /**
   * The connector through which payment has gone through
   */
  connector: string;

  /**
   * The flow in which the code and message occurred for a connector
   */
  flow: string;

  /**
   * message received from the connector
   */
  message: string;

  /**
   * The sub_flow in which the code and message occurred for a connector
   */
  sub_flow: string;

  /**
   * indicates if retry with pan is possible
   */
  clear_pan_possible?: boolean | null;

  decision?: GsmDecision | null;

  error_category?: ErrorCategory | null;

  /**
   * optional error provided by the router
   */
  router_error?: string | null;

  /**
   * status provided by the router
   */
  status?: string | null;

  /**
   * indicates if step_up retry is possible
   */
  step_up_possible?: boolean | null;

  /**
   * error code unified across the connectors
   */
  unified_code?: string | null;

  /**
   * error message unified across the connectors
   */
  unified_message?: string | null;
}

export interface GsmDeleteParams {
  /**
   * code received from the connector
   */
  code: string;

  /**
   * The connector through which payment has gone through
   */
  connector: string;

  /**
   * The flow in which the code and message occurred for a connector
   */
  flow: string;

  /**
   * message received from the connector
   */
  message: string;

  /**
   * The sub_flow in which the code and message occurred for a connector
   */
  sub_flow: string;
}

export declare namespace Gsm {
  export {
    type ErrorCategory as ErrorCategory,
    type GsmDecision as GsmDecision,
    type GsmResponse as GsmResponse,
    type GsmDeleteResponse as GsmDeleteResponse,
    type GsmCreateParams as GsmCreateParams,
    type GsmRetrieveParams as GsmRetrieveParams,
    type GsmUpdateParams as GsmUpdateParams,
    type GsmDeleteParams as GsmDeleteParams,
  };
}
