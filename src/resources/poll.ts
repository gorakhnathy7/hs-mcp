// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Poll extends APIResource {
  /**
   * Poll - Retrieve Poll Status
   */
  retrieveStatus(pollID: string, options?: RequestOptions): APIPromise<PollRetrieveStatusResponse> {
    return this._client.get(path`/poll/status/${pollID}`, options);
  }
}

export interface PollRetrieveStatusResponse {
  /**
   * The poll id
   */
  poll_id: string;

  status: 'pending' | 'completed' | 'not_found';
}

export declare namespace Poll {
  export { type PollRetrieveStatusResponse as PollRetrieveStatusResponse };
}
