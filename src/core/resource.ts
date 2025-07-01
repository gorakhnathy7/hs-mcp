// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Hyperswitch } from '../client';

export abstract class APIResource {
  protected _client: Hyperswitch;

  constructor(client: Hyperswitch) {
    this._client = client;
  }
}
