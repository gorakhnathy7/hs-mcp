// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from '../accounts/accounts';
import * as PayoutsAPI from './payouts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class List extends APIResource {
  /**
   * Payouts - List
   *
   * @example
   * ```ts
   * const payoutListResponse =
   *   await client.payouts.list.retrieve({
   *     created: 'created',
   *     customer_id: 'customer_id',
   *     ending_before: 'ending_before',
   *     limit: 'limit',
   *     starting_after: 'starting_after',
   *     time_range: 'time_range',
   *   });
   * ```
   */
  retrieve(query: ListRetrieveParams, options?: RequestOptions): APIPromise<PayoutListResponse> {
    return this._client.get('/payouts/list', { query, ...options });
  }

  /**
   * Payouts - List using filters
   *
   * @example
   * ```ts
   * const payoutListResponse =
   *   await client.payouts.list.withFilters({
   *     currency: 'AED',
   *     entity_type: 'Individual',
   *     start_time: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  withFilters(body: ListWithFiltersParams, options?: RequestOptions): APIPromise<PayoutListResponse> {
    return this._client.post('/payouts/list', { body, ...options });
  }
}

export interface PayoutListResponse {
  /**
   * The list of payouts response objects
   */
  data: Array<PayoutsAPI.CreateResponse>;

  /**
   * The number of payouts included in the list
   */
  size: number;

  /**
   * The total number of available payouts for given constraints
   */
  total_count?: number | null;
}

export interface ListRetrieveParams {
  /**
   * The time at which payout is created
   */
  created: string;

  /**
   * The identifier for customer
   */
  customer_id: string;

  /**
   * A cursor for use in pagination, fetch the previous list before some object
   */
  ending_before: string;

  /**
   * limit on the number of objects to return
   */
  limit: string;

  /**
   * A cursor for use in pagination, fetch the next list after some object
   */
  starting_after: string;

  /**
   * The time range for which objects are needed. TimeRange has two fields start_time
   * and end_time from which objects can be filtered as per required scenarios
   * (created_at, time less than, greater than etc).
   */
  time_range: string;
}

export interface ListWithFiltersParams {
  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  /**
   * Type of entity to whom the payout is being carried out to, select from the given
   * list of options
   */
  entity_type: PayoutsAPI.EntityType;

  /**
   * The start time to filter payments list or to get list of filters. To get list of
   * filters start time is needed to be passed
   */
  start_time: string;

  /**
   * The list of connectors to filter payouts list
   */
  connector?: Array<PayoutsAPI.PayoutConnectors> | null;

  /**
   * The identifier for customer
   */
  customer_id?: string | null;

  /**
   * The end time to filter payments list or to get list of filters. If not passed
   * the default time is now
   */
  end_time?: string | null;

  /**
   * The limit on the number of objects. The default limit is 10 and max limit is 20
   */
  limit?: number;

  /**
   * The starting point within a list of objects
   */
  offset?: number | null;

  /**
   * The identifier for payout
   */
  payout_id?: string | null;

  /**
   * The list of payout methods to filter payouts list
   */
  payout_method?: Array<PayoutsAPI.PayoutType> | null;

  /**
   * The identifier for business profile
   */
  profile_id?: string | null;

  /**
   * The list of payout status to filter payouts list
   */
  status?: Array<PayoutsAPI.Status> | null;
}

export declare namespace List {
  export {
    type PayoutListResponse as PayoutListResponse,
    type ListRetrieveParams as ListRetrieveParams,
    type ListWithFiltersParams as ListWithFiltersParams,
  };
}
