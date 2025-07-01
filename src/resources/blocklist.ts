// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Blocklist extends APIResource {
  create(body: BlocklistCreateParams, options?: RequestOptions): APIPromise<BlocklistResponse> {
    return this._client.post('/blocklist', { body, ...options });
  }

  retrieve(query: BlocklistRetrieveParams, options?: RequestOptions): APIPromise<BlocklistResponse> {
    return this._client.get('/blocklist', { query, ...options });
  }

  delete(body: BlocklistDeleteParams, options?: RequestOptions): APIPromise<BlocklistResponse> {
    return this._client.delete('/blocklist', { body, ...options });
  }

  toggle(params: BlocklistToggleParams, options?: RequestOptions): APIPromise<BlocklistToggleResponse> {
    const { status } = params;
    return this._client.post('/blocklist/toggle', { query: { status }, ...options });
  }
}

export type BlocklistDataKind = 'payment_method' | 'card_bin' | 'extended_card_bin';

export type BlocklistRequest =
  | BlocklistRequest.CardBin
  | BlocklistRequest.Fingerprint
  | BlocklistRequest.ExtendedCardBin;

export namespace BlocklistRequest {
  export interface CardBin {
    data: string;

    type: 'card_bin';
  }

  export interface Fingerprint {
    data: string;

    type: 'fingerprint';
  }

  export interface ExtendedCardBin {
    data: string;

    type: 'extended_card_bin';
  }
}

export interface BlocklistResponse {
  created_at: string;

  data_kind: BlocklistDataKind;

  fingerprint_id: string;
}

export interface BlocklistToggleResponse {
  blocklist_guard_status: string;
}

export type BlocklistCreateParams =
  | BlocklistCreateParams.Variant0
  | BlocklistCreateParams.Variant1
  | BlocklistCreateParams.Variant2;

export declare namespace BlocklistCreateParams {
  export interface Variant0 {
    data: string;

    type: 'card_bin';
  }

  export interface Variant1 {
    data: string;

    type: 'fingerprint';
  }

  export interface Variant2 {
    data: string;

    type: 'extended_card_bin';
  }
}

export interface BlocklistRetrieveParams {
  /**
   * Kind of the fingerprint list requested
   */
  data_kind: BlocklistDataKind;
}

export type BlocklistDeleteParams =
  | BlocklistDeleteParams.Variant0
  | BlocklistDeleteParams.Variant1
  | BlocklistDeleteParams.Variant2;

export declare namespace BlocklistDeleteParams {
  export interface Variant0 {
    data: string;

    type: 'card_bin';
  }

  export interface Variant1 {
    data: string;

    type: 'fingerprint';
  }

  export interface Variant2 {
    data: string;

    type: 'extended_card_bin';
  }
}

export interface BlocklistToggleParams {
  /**
   * Boolean value to enable/disable blocklist
   */
  status: boolean;
}

export declare namespace Blocklist {
  export {
    type BlocklistDataKind as BlocklistDataKind,
    type BlocklistRequest as BlocklistRequest,
    type BlocklistResponse as BlocklistResponse,
    type BlocklistToggleResponse as BlocklistToggleResponse,
    type BlocklistCreateParams as BlocklistCreateParams,
    type BlocklistRetrieveParams as BlocklistRetrieveParams,
    type BlocklistDeleteParams as BlocklistDeleteParams,
    type BlocklistToggleParams as BlocklistToggleParams,
  };
}
