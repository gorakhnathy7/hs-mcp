// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Organization extends APIResource {
  /**
   * Create a new organization
   *
   * @example
   * ```ts
   * const organizationResponse =
   *   await client.organization.create({
   *     organization_name: 'organization_abc',
   *   });
   * ```
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<OrganizationResponse> {
    return this._client.post('/organization', { body, ...options });
  }

  /**
   * Retrieve an existing organization
   *
   * @example
   * ```ts
   * const organizationResponse =
   *   await client.organization.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OrganizationResponse> {
    return this._client.get(path`/organization/${id}`, options);
  }

  /**
   * Create a new organization for .
   *
   * @example
   * ```ts
   * const organizationResponse =
   *   await client.organization.update('id', {
   *     platform_merchant_id: 'platform_merchant_id',
   *     organization_name: 'organization_abcd',
   *   });
   * ```
   */
  update(
    id: string,
    body: OrganizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationResponse> {
    return this._client.put(path`/organization/${id}`, { body, ...options });
  }
}

export interface OrganizationResponse {
  created_at: string;

  modified_at: string;

  /**
   * The unique identifier for the Organization
   */
  organization_id: string;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * Details about the organization
   */
  organization_details?: unknown | null;

  /**
   * Name of the Organization
   */
  organization_name?: string | null;
}

export interface OrganizationCreateParams {
  /**
   * Name of the organization
   */
  organization_name: string;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * Details about the organization
   */
  organization_details?: unknown | null;
}

export interface OrganizationUpdateParams {
  /**
   * Platform merchant id is unique distiguisher for special merchant in the platform
   * org
   */
  platform_merchant_id: string;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * Details about the organization
   */
  organization_details?: unknown | null;

  /**
   * Name of the organization
   */
  organization_name?: string | null;
}

export declare namespace Organization {
  export {
    type OrganizationResponse as OrganizationResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
  };
}
