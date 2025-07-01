// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProfileAPI from './profile';
import { Profile, ProfileListParams } from './profile';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Events extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);

  /**
   * List all Events associated with a Merchant Account or Profile.
   *
   * @example
   * ```ts
   * const totalEvents = await client.events.list(
   *   'merchant_id',
   *   {
   *     created_after: '2023-01-01T00:00:00',
   *     created_before: '2023-01-31T23:59:59',
   *     event_classes: ['payments', 'refunds'],
   *     event_types: ['payment_succeeded'],
   *     is_delivered: true,
   *     limit: 5,
   *     object_id: '{{object_id}}',
   *     profile_id: '{{profile_id}}',
   *   },
   * );
   * ```
   */
  list(merchantID: string, body: EventListParams, options?: RequestOptions): APIPromise<TotalEvents> {
    return this._client.post(path`/events/${merchantID}`, { body, ...options });
  }

  /**
   * List all delivery attempts for the specified Event.
   *
   * @example
   * ```ts
   * const eventRetrieves = await client.events.deliveryAttempts(
   *   'event_id',
   *   { merchant_id: 'merchant_id' },
   * );
   * ```
   */
  deliveryAttempts(
    eventID: string,
    params: EventDeliveryAttemptsParams,
    options?: RequestOptions,
  ): APIPromise<EventDeliveryAttemptsResponse> {
    const { merchant_id } = params;
    return this._client.get(path`/events/${merchant_id}/${eventID}/attempts`, options);
  }

  /**
   * Manually retry the delivery of the specified Event.
   *
   * @example
   * ```ts
   * const eventRetrieve = await client.events.retry(
   *   'event_id',
   *   { merchant_id: 'merchant_id' },
   * );
   * ```
   */
  retry(eventID: string, params: EventRetryParams, options?: RequestOptions): APIPromise<EventRetrieve> {
    const { merchant_id } = params;
    return this._client.post(path`/events/${merchant_id}/${eventID}/retry`, options);
  }
}

export type EventClass = 'payments' | 'refunds' | 'disputes' | 'mandates' | 'payouts';

/**
 * The constraints to apply when filtering events.
 */
export interface EventListConstraints {
  /**
   * Filter events created after the specified time.
   */
  created_after?: string | null;

  /**
   * Filter events created before the specified time.
   */
  created_before?: string | null;

  /**
   * Filter events by their class.
   */
  event_classes?: Array<EventClass> | null;

  /**
   * Filter events by their type.
   */
  event_types?: Array<EventType> | null;

  /**
   * Filter all events by `is_overall_delivery_successful` field of the event.
   */
  is_delivered?: boolean | null;

  /**
   * Include at most the specified number of events.
   */
  limit?: number | null;

  /**
   * Filter all events associated with the specified object identifier (Payment
   * Intent ID, Refund ID, etc.)
   */
  object_id?: string | null;

  /**
   * Include events after the specified offset.
   */
  offset?: number | null;

  /**
   * Filter all events associated with the specified business profile ID.
   */
  profile_id?: string | null;
}

/**
 * The response body for each item when listing events.
 */
export interface EventListItem {
  /**
   * Time at which the event was created.
   */
  created: string;

  event_class: EventClass;

  /**
   * The identifier for the Event.
   */
  event_id: string;

  event_type: EventType;

  /**
   * The identifier for the initial delivery attempt. This will be the same as
   * `event_id` for the initial delivery attempt.
   */
  initial_attempt_id: string;

  /**
   * The identifier for the Merchant Account.
   */
  merchant_id: string;

  /**
   * The identifier for the object (Payment Intent ID, Refund ID, etc.)
   */
  object_id: string;

  /**
   * The identifier for the Business Profile.
   */
  profile_id: string;

  /**
   * Indicates whether the webhook was ultimately delivered or not.
   */
  is_delivery_successful?: boolean | null;
}

/**
 * The response body for retrieving an event.
 */
export interface EventRetrieve extends EventListItem {
  /**
   * The request information (headers and body) sent in the webhook.
   */
  request: EventRetrieve.Request;

  /**
   * The response information (headers, body and status code) received for the
   * webhook sent.
   */
  response: EventRetrieve.Response;

  delivery_attempt?: 'initial_attempt' | 'automatic_retry' | 'manual_retry' | null;
}

export namespace EventRetrieve {
  /**
   * The request information (headers and body) sent in the webhook.
   */
  export interface Request {
    /**
     * The request body sent in the webhook.
     */
    body: string;

    /**
     * The request headers sent in the webhook.
     */
    headers: Array<Array<string>>;
  }

  /**
   * The response information (headers, body and status code) received for the
   * webhook sent.
   */
  export interface Response {
    /**
     * The response body received for the webhook sent.
     */
    body?: string | null;

    /**
     * Error message in case any error occurred when trying to deliver the webhook.
     */
    error_message?: string | null;

    /**
     * The response headers received for the webhook sent.
     */
    headers?: Array<Array<string>> | null;

    /**
     * The HTTP status code for the webhook sent.
     */
    status_code?: number | null;
  }
}

export type EventType =
  | 'payment_succeeded'
  | 'payment_failed'
  | 'payment_processing'
  | 'payment_cancelled'
  | 'payment_authorized'
  | 'payment_captured'
  | 'action_required'
  | 'refund_succeeded'
  | 'refund_failed'
  | 'dispute_opened'
  | 'dispute_expired'
  | 'dispute_accepted'
  | 'dispute_cancelled'
  | 'dispute_challenged'
  | 'dispute_won'
  | 'dispute_lost'
  | 'mandate_active'
  | 'mandate_revoked'
  | 'payout_success'
  | 'payout_failed'
  | 'payout_initiated'
  | 'payout_processing'
  | 'payout_cancelled'
  | 'payout_expired'
  | 'payout_reversed';

/**
 * The response body of list initial delivery attempts api call.
 */
export interface TotalEvents {
  /**
   * The list of events
   */
  events: Array<EventListItem>;

  /**
   * Count of total events
   */
  total_count: number;
}

export type EventDeliveryAttemptsResponse = Array<EventRetrieve>;

export interface EventListParams {
  /**
   * Filter events created after the specified time.
   */
  created_after?: string | null;

  /**
   * Filter events created before the specified time.
   */
  created_before?: string | null;

  /**
   * Filter events by their class.
   */
  event_classes?: Array<EventClass> | null;

  /**
   * Filter events by their type.
   */
  event_types?: Array<EventType> | null;

  /**
   * Filter all events by `is_overall_delivery_successful` field of the event.
   */
  is_delivered?: boolean | null;

  /**
   * Include at most the specified number of events.
   */
  limit?: number | null;

  /**
   * Filter all events associated with the specified object identifier (Payment
   * Intent ID, Refund ID, etc.)
   */
  object_id?: string | null;

  /**
   * Include events after the specified offset.
   */
  offset?: number | null;

  /**
   * Filter all events associated with the specified business profile ID.
   */
  profile_id?: string | null;
}

export interface EventDeliveryAttemptsParams {
  /**
   * The unique identifier for the Merchant Account.
   */
  merchant_id: string;
}

export interface EventRetryParams {
  /**
   * The unique identifier for the Merchant Account.
   */
  merchant_id: string;
}

Events.Profile = Profile;

export declare namespace Events {
  export {
    type EventClass as EventClass,
    type EventListConstraints as EventListConstraints,
    type EventListItem as EventListItem,
    type EventRetrieve as EventRetrieve,
    type EventType as EventType,
    type TotalEvents as TotalEvents,
    type EventDeliveryAttemptsResponse as EventDeliveryAttemptsResponse,
    type EventListParams as EventListParams,
    type EventDeliveryAttemptsParams as EventDeliveryAttemptsParams,
    type EventRetryParams as EventRetryParams,
  };

  export { Profile as Profile, type ProfileListParams as ProfileListParams };
}
