// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MandatesAPI from '../mandates';
import * as AccountsAPI from '../accounts/accounts';
import * as PaymentMethodsAPI from './payment-methods';
import {
  PaymentMethodListParams,
  PaymentMethodListSavedParams,
  PaymentMethods,
  PaymentMethodsList,
  SurchargeDetails,
  SurchargePercentage,
} from './payment-methods';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Customers extends APIResource {
  paymentMethods: PaymentMethodsAPI.PaymentMethods = new PaymentMethodsAPI.PaymentMethods(this._client);

  /**
   * Creates a customer object and stores the customer details to be reused for
   * future payments. Incase the customer already exists in the system, this API will
   * respond with the customer details.
   *
   * @example
   * ```ts
   * const customer = await client.customers.create({
   *   email: 'guest@example.com',
   *   name: 'John Doe',
   * });
   * ```
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<Customer> {
    return this._client.post('/customers', { body, ...options });
  }

  /**
   * Retrieves a customer's details.
   *
   * @example
   * ```ts
   * const customer = await client.customers.retrieve(
   *   'customer_id',
   * );
   * ```
   */
  retrieve(customerID: string, options?: RequestOptions): APIPromise<Customer> {
    return this._client.get(path`/customers/${customerID}`, options);
  }

  /**
   * Updates the customer's details in a customer object.
   *
   * @example
   * ```ts
   * const customer = await client.customers.update(
   *   'customer_id',
   *   { email: 'guest@example.com', name: 'John Doe' },
   * );
   * ```
   */
  update(customerID: string, body: CustomerUpdateParams, options?: RequestOptions): APIPromise<Customer> {
    return this._client.post(path`/customers/${customerID}`, { body, ...options });
  }

  /**
   * Lists all the customers for a particular merchant id.
   *
   * @example
   * ```ts
   * const customers = await client.customers.list();
   * ```
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/customers/list', { query, ...options });
  }

  /**
   * Delete a customer record.
   *
   * @example
   * ```ts
   * const customer = await client.customers.delete(
   *   'customer_id',
   * );
   * ```
   */
  delete(customerID: string, options?: RequestOptions): APIPromise<CustomerDeleteResponse> {
    return this._client.delete(path`/customers/${customerID}`, options);
  }

  /**
   * Lists all the mandates for a particular customer id.
   *
   * @example
   * ```ts
   * const mandateResponses =
   *   await client.customers.listMandates('customer_id');
   * ```
   */
  listMandates(customerID: string, options?: RequestOptions): APIPromise<CustomerListMandatesResponse> {
    return this._client.get(path`/customers/${customerID}/mandates`, options);
  }
}

/**
 * Address details
 */
export interface AddressDetails {
  /**
   * The city, district, suburb, town, or village of the address.
   */
  city?: string | null;

  country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * The first name for the address
   */
  first_name?: string | null;

  /**
   * The last name for the address
   */
  last_name?: string | null;

  /**
   * The first line of the street address or P.O. Box.
   */
  line1?: string | null;

  /**
   * The second line of the street address or P.O. Box (e.g., apartment, suite, unit,
   * or building).
   */
  line2?: string | null;

  /**
   * The third line of the street address, if applicable.
   */
  line3?: string | null;

  /**
   * The address state
   */
  state?: string | null;

  /**
   * The zip/postal code for the address
   */
  zip?: string | null;
}

export interface Customer {
  /**
   * A timestamp (ISO 8601 code) that determines when the customer was created
   */
  created_at: string;

  /**
   * The identifier for the customer object
   */
  customer_id: string;

  /**
   * Address details
   */
  address?: AddressDetails | null;

  /**
   * The identifier for the default payment method.
   */
  default_payment_method_id?: string | null;

  /**
   * An arbitrary string that you can attach to a customer object.
   */
  description?: string | null;

  /**
   * The customer's email address
   */
  email?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * The customer's name
   */
  name?: string | null;

  /**
   * The customer's phone number
   */
  phone?: string | null;

  /**
   * The country code for the customer phone number
   */
  phone_country_code?: string | null;
}

export type CustomerListResponse = Array<Customer>;

export interface CustomerDeleteResponse {
  /**
   * Whether address was deleted or not
   */
  address_deleted: boolean;

  /**
   * Whether customer was deleted or not
   */
  customer_deleted: boolean;

  /**
   * The identifier for the customer object
   */
  customer_id: string;

  /**
   * Whether payment methods deleted or not
   */
  payment_methods_deleted: boolean;
}

export type CustomerListMandatesResponse = Array<MandatesAPI.MandateResponse>;

export interface CustomerCreateParams {
  /**
   * Address details
   */
  address?: AddressDetails | null;

  /**
   * The identifier for the customer object. If not provided the customer ID will be
   * autogenerated.
   */
  customer_id?: string | null;

  /**
   * An arbitrary string that you can attach to a customer object.
   */
  description?: string | null;

  /**
   * The customer's email address
   */
  email?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * The customer's name
   */
  name?: string | null;

  /**
   * The customer's phone number
   */
  phone?: string | null;

  /**
   * The country code for the customer phone number
   */
  phone_country_code?: string | null;
}

export interface CustomerUpdateParams {
  /**
   * Address details
   */
  address?: AddressDetails | null;

  /**
   * An arbitrary string that you can attach to a customer object.
   */
  description?: string | null;

  /**
   * The customer's email address
   */
  email?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * The customer's name
   */
  name?: string | null;

  /**
   * The customer's phone number
   */
  phone?: string | null;

  /**
   * The country code for the customer phone number
   */
  phone_country_code?: string | null;
}

export interface CustomerListParams {
  /**
   * Limit for pagination
   */
  limit?: number | null;

  /**
   * Offset for pagination
   */
  offset?: number | null;
}

Customers.PaymentMethods = PaymentMethods;

export declare namespace Customers {
  export {
    type AddressDetails as AddressDetails,
    type Customer as Customer,
    type CustomerListResponse as CustomerListResponse,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerListMandatesResponse as CustomerListMandatesResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    PaymentMethods as PaymentMethods,
    type PaymentMethodsList as PaymentMethodsList,
    type SurchargeDetails as SurchargeDetails,
    type SurchargePercentage as SurchargePercentage,
    type PaymentMethodListParams as PaymentMethodListParams,
    type PaymentMethodListSavedParams as PaymentMethodListSavedParams,
  };
}
