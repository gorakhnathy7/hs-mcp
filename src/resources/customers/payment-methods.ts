// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersPaymentMethodsAPI from './payment-methods';
import * as PaymentMethodsAPI from '../payment-methods';
import * as AccountsAPI from '../accounts/accounts';
import * as PaymentsAPI from '../payments/payments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PaymentMethods extends APIResource {
  /**
   * Lists all the applicable payment methods for a particular Customer ID.
   *
   * @example
   * ```ts
   * const paymentMethodsList =
   *   await client.customers.paymentMethods.list('customer_id');
   * ```
   */
  list(
    customerID: string,
    query: PaymentMethodListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentMethodsList> {
    return this._client.get(path`/customers/${customerID}/payment_methods`, { query, ...options });
  }

  /**
   * Lists all the applicable payment methods for a particular payment tied to the
   * `client_secret`.
   *
   * @example
   * ```ts
   * const paymentMethodsList =
   *   await client.customers.paymentMethods.listSaved();
   * ```
   */
  listSaved(
    query: PaymentMethodListSavedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentMethodsList> {
    return this._client.get('/customers/payment_methods', { query, ...options });
  }
}

export interface PaymentMethodsList {
  /**
   * List of payment methods for customer
   */
  customer_payment_methods: Array<PaymentMethodsList.CustomerPaymentMethod>;

  /**
   * Returns whether a customer id is not tied to a payment intent (only when the
   * request is made against a client secret)
   */
  is_guest_customer?: boolean | null;
}

export namespace PaymentMethodsList {
  export interface CustomerPaymentMethod {
    /**
     * The unique identifier of the customer.
     */
    customer_id: string;

    /**
     * Indicates if the payment method has been set to default or not
     */
    default_payment_method_set: boolean;

    /**
     * Indicates the type of payment method. Eg: 'card', 'wallet', etc.
     */
    payment_method:
      | 'card'
      | 'card_redirect'
      | 'pay_later'
      | 'wallet'
      | 'bank_redirect'
      | 'bank_transfer'
      | 'crypto'
      | 'bank_debit'
      | 'reward'
      | 'real_time_payment'
      | 'upi'
      | 'voucher'
      | 'gift_card'
      | 'open_banking'
      | 'mobile_payment';

    /**
     * The unique identifier of the customer.
     */
    payment_method_id: string;

    /**
     * Token for payment method in temporary card locker which gets refreshed often
     */
    payment_token: string;

    /**
     * Whether this payment method requires CVV to be collected
     */
    requires_cvv: boolean;

    bank?: CustomerPaymentMethod.Bank | null;

    bank_transfer?: PaymentMethodsAPI.Bank | null;

    billing?: PaymentsAPI.Address | null;

    card?: PaymentMethodsAPI.CardDetailFromLocker | null;

    /**
     * A timestamp (ISO 8601 code) that determines when the payment method was created
     */
    created?: string | null;

    /**
     * Indicates whether the payment method is eligible for installment payments (e.g.,
     * EMI, BNPL). Optional.
     */
    installment_payment_enabled?: boolean | null;

    /**
     * A timestamp (ISO 8601 code) that determines when the payment method was last
     * used
     */
    last_used_at?: string | null;

    /**
     * You can specify up to 50 keys, with key names up to 40 characters long and
     * values up to 500 characters long. Metadata is useful for storing additional,
     * structured information on an object.
     */
    metadata?: unknown | null;

    /**
     * Type of payment experience enabled with the connector
     */
    payment_experience?: Array<PaymentsAPI.PaymentExperience> | null;

    /**
     * The name of the bank/ provider issuing the payment method to the end user
     */
    payment_method_issuer?: string | null;

    payment_method_issuer_code?: PaymentMethodsAPI.PaymentMethodIssuerCode | null;

    /**
     * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
     * wallets.
     */
    payment_method_type?: PaymentsAPI.PaymentMethodType | null;

    /**
     * Indicates whether the payment method supports recurring payments. Optional.
     */
    recurring_enabled?: boolean | null;

    surcharge_details?: CustomersPaymentMethodsAPI.SurchargeDetails | null;
  }

  export namespace CustomerPaymentMethod {
    export interface Bank {
      mask: string;
    }
  }
}

export interface SurchargeDetails {
  /**
   * surcharge amount for this payment
   */
  display_surcharge_amount: number;

  /**
   * tax on surcharge amount for this payment
   */
  display_tax_on_surcharge_amount: number;

  /**
   * sum of display_surcharge_amount and display_tax_on_surcharge_amount
   */
  display_total_surcharge_amount: number;

  surcharge: SurchargeDetails.Fixed | SurchargeDetails.Rate;

  tax_on_surcharge?: SurchargePercentage | null;
}

export namespace SurchargeDetails {
  export interface Fixed {
    type: 'fixed';

    /**
     * This Unit struct represents MinorUnit in which core amount works
     */
    value: number;
  }

  export interface Rate {
    type: 'rate';

    value: CustomersPaymentMethodsAPI.SurchargePercentage;
  }
}

export interface SurchargePercentage {
  percentage: number;
}

export interface PaymentMethodListParams {
  /**
   * The two-letter ISO currency code
   */
  accepted_countries?: Array<AccountsAPI.CountryAlpha2> | null;

  /**
   * The three-letter ISO currency code
   */
  accepted_currencies?: Array<AccountsAPI.Currency> | null;

  /**
   * The amount accepted for processing by the particular payment method.
   */
  amount?: number | null;

  /**
   * Indicates whether the payment method is eligible for card netwotks
   */
  card_networks?: Array<AccountsAPI.CardNetwork> | null;

  /**
   * This is a token which expires after 15 minutes, used from the client to
   * authenticate and create sessions from the SDK
   */
  client_secret?: string | null;

  /**
   * Indicates whether the payment method is eligible for installment payments
   */
  installment_payment_enabled?: boolean | null;

  /**
   * Indicates the limit of last used payment methods
   */
  limit?: number | null;

  /**
   * Indicates whether the payment method is eligible for recurring payments
   */
  recurring_enabled?: boolean | null;
}

export interface PaymentMethodListSavedParams {
  /**
   * The two-letter ISO currency code
   */
  accepted_countries?: Array<AccountsAPI.CountryAlpha2> | null;

  /**
   * The three-letter ISO currency code
   */
  accepted_currencies?: Array<AccountsAPI.Currency> | null;

  /**
   * The amount accepted for processing by the particular payment method.
   */
  amount?: number | null;

  /**
   * Indicates whether the payment method is eligible for card netwotks
   */
  card_networks?: Array<AccountsAPI.CardNetwork> | null;

  /**
   * This is a token which expires after 15 minutes, used from the client to
   * authenticate and create sessions from the SDK
   */
  client_secret?: string | null;

  /**
   * Indicates whether the payment method is eligible for installment payments
   */
  installment_payment_enabled?: boolean | null;

  /**
   * Indicates the limit of last used payment methods
   */
  limit?: number | null;

  /**
   * Indicates whether the payment method is eligible for recurring payments
   */
  recurring_enabled?: boolean | null;
}

export declare namespace PaymentMethods {
  export {
    type PaymentMethodsList as PaymentMethodsList,
    type SurchargeDetails as SurchargeDetails,
    type SurchargePercentage as SurchargePercentage,
    type PaymentMethodListParams as PaymentMethodListParams,
    type PaymentMethodListSavedParams as PaymentMethodListSavedParams,
  };
}
