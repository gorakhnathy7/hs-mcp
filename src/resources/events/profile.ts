// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Profile extends APIResource {
  /**
   * List all Events associated with a Profile.
   *
   * @example
   * ```ts
   * const totalEvents = await client.events.profile.list({
   *   created_after: '2023-01-01T00:00:00',
   *   created_before: '2023-01-31T23:59:59',
   *   event_classes: ['payments', 'refunds'],
   *   event_types: ['payment_succeeded'],
   *   is_delivered: true,
   *   limit: 5,
   *   object_id: '{{object_id}}',
   *   profile_id: '{{profile_id}}',
   * });
   * ```
   */
  list(body: ProfileListParams, options?: RequestOptions): APIPromise<EventsAPI.TotalEvents> {
    return this._client.post('/events/profile/list', { body, ...options });
  }
}

export interface ProfileListParams {
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
  event_classes?: Array<EventsAPI.EventClass> | null;

  /**
   * Filter events by their type.
   */
  event_types?: Array<EventsAPI.EventType> | null;

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

export declare namespace Profile {
  export { type ProfileListParams as ProfileListParams };
}
