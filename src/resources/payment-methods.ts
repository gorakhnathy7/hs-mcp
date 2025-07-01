// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentMethodsAPI from './payment-methods';
import * as AccountsAPI from './accounts/accounts';
import * as PaymentsAPI from './payments/payments';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentMethods extends APIResource {
  /**
   * Creates and stores a payment method against a customer. In case of cards, this
   * API should be used only by PCI compliant merchants.
   *
   * @example
   * ```ts
   * const paymentMethodResponse =
   *   await client.paymentMethods.create({
   *     payment_method: 'card',
   *     card: {
   *       card_exp_month: '11',
   *       card_exp_year: '25',
   *       card_holder_name: 'John Doe',
   *       card_number: '4242424242424242',
   *     },
   *     customer_id: '{{customer_id}}',
   *     payment_method_issuer: 'Visa',
   *     payment_method_type: 'credit',
   *   });
   * ```
   */
  create(body: PaymentMethodCreateParams, options?: RequestOptions): APIPromise<PaymentMethodResponse> {
    return this._client.post('/payment_methods', { body, ...options });
  }

  /**
   * Retrieves a payment method of a customer.
   *
   * @example
   * ```ts
   * const paymentMethodResponse =
   *   await client.paymentMethods.retrieve('method_id');
   * ```
   */
  retrieve(methodID: string, options?: RequestOptions): APIPromise<PaymentMethodResponse> {
    return this._client.get(path`/payment_methods/${methodID}`, options);
  }

  /**
   * Update an existing payment method of a customer. This API is useful for use
   * cases such as updating the card number for expired cards to prevent
   * discontinuity in recurring payments.
   *
   * @example
   * ```ts
   * const paymentMethodResponse =
   *   await client.paymentMethods.update('method_id');
   * ```
   */
  update(
    methodID: string,
    body: PaymentMethodUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodResponse> {
    return this._client.post(path`/payment_methods/${methodID}/update`, { body, ...options });
  }

  /**
   * Deletes a payment method of a customer.
   *
   * @example
   * ```ts
   * const paymentMethod = await client.paymentMethods.delete(
   *   'method_id',
   * );
   * ```
   */
  delete(methodID: string, options?: RequestOptions): APIPromise<PaymentMethodDeleteResponse> {
    return this._client.delete(path`/payment_methods/${methodID}`, options);
  }

  /**
   * Set the Payment Method as Default for the Customer.
   *
   * @example
   * ```ts
   * const response = await client.paymentMethods.setDefault(
   *   'payment_method_id',
   *   { customer_id: 'customer_id' },
   * );
   * ```
   */
  setDefault(
    paymentMethodID: string,
    params: PaymentMethodSetDefaultParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodSetDefaultResponse> {
    const { customer_id } = params;
    return this._client.post(path`/${customer_id}/payment_methods/${paymentMethodID}/default`, options);
  }
}

export type Bank =
  | Bank.ACHBankTransfer
  | Bank.BacsBankTransfer
  | Bank.SepaBankTransfer
  | Bank.PixBankTransfer;

export namespace Bank {
  export interface ACHBankTransfer {
    /**
     * Bank account number is an unique identifier assigned by a bank to a customer.
     */
    bank_account_number: string;

    /**
     * [9 digits] Routing number - used in USA for identifying a specific bank.
     */
    bank_routing_number: string;

    /**
     * Bank city
     */
    bank_city?: string | null;

    bank_country_code?: AccountsAPI.CountryAlpha2 | null;

    /**
     * Bank name
     */
    bank_name?: string | null;
  }

  export interface BacsBankTransfer {
    /**
     * Bank account number is an unique identifier assigned by a bank to a customer.
     */
    bank_account_number: string;

    /**
     * [6 digits] Sort Code - used in UK and Ireland for identifying a bank and it's
     * branches.
     */
    bank_sort_code: string;

    /**
     * Bank city
     */
    bank_city?: string | null;

    bank_country_code?: AccountsAPI.CountryAlpha2 | null;

    /**
     * Bank name
     */
    bank_name?: string | null;
  }

  export interface SepaBankTransfer {
    /**
     * [8 / 11 digits] Bank Identifier Code (bic) / Swift Code - used in many countries
     * for identifying a bank and it's branches
     */
    bic: string;

    /**
     * International Bank Account Number (iban) - used in many countries for
     * identifying a bank along with it's customer.
     */
    iban: string;

    /**
     * Bank city
     */
    bank_city?: string | null;

    bank_country_code?: AccountsAPI.CountryAlpha2 | null;

    /**
     * Bank name
     */
    bank_name?: string | null;
  }

  export interface PixBankTransfer {
    /**
     * Bank account number is an unique identifier assigned by a bank to a customer.
     */
    bank_account_number: string;

    /**
     * Unique key for pix customer
     */
    pix_key: string;

    /**
     * Bank branch
     */
    bank_branch?: string | null;

    /**
     * Bank name
     */
    bank_name?: string | null;

    /**
     * Individual taxpayer identification number
     */
    tax_id?: string | null;
  }
}

export interface CardDetail {
  /**
   * Card Expiry Month
   */
  card_exp_month: string;

  /**
   * Card Expiry Year
   */
  card_exp_year: string;

  /**
   * Card Holder Name
   */
  card_holder_name: string;

  /**
   * Card Number
   */
  card_number: string;

  /**
   * Issuer Bank for Card
   */
  card_issuer?: string | null;

  /**
   * Card Issuing Country
   */
  card_issuing_country?: string | null;

  /**
   * Indicates the card network.
   */
  card_network?: AccountsAPI.CardNetwork | null;

  /**
   * Card Type
   */
  card_type?: string | null;

  /**
   * Card Holder's Nick Name
   */
  nick_name?: string | null;
}

export interface CardDetailFromLocker {
  saved_to_locker: boolean;

  card_fingerprint?: string | null;

  card_holder_name?: string | null;

  card_isin?: string | null;

  card_issuer?: string | null;

  /**
   * Indicates the card network.
   */
  card_network?: AccountsAPI.CardNetwork | null;

  card_token?: string | null;

  card_type?: string | null;

  expiry_month?: string | null;

  expiry_year?: string | null;

  issuer_country?: string | null;

  last4_digits?: string | null;

  nick_name?: string | null;

  scheme?: string | null;
}

export type PaymentMethodIssuerCode =
  | 'jp_hdfc'
  | 'jp_icici'
  | 'jp_googlepay'
  | 'jp_applepay'
  | 'jp_phonepay'
  | 'jp_wechat'
  | 'jp_sofort'
  | 'jp_giropay'
  | 'jp_sepa'
  | 'jp_bacs';

export interface PaymentMethodResponse {
  /**
   * Unique identifier for a merchant
   */
  merchant_id: string;

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
   * The unique identifier of the Payment method
   */
  payment_method_id: string;

  bank_transfer?: Bank | null;

  card?: CardDetailFromLocker | null;

  /**
   * For Client based calls
   */
  client_secret?: string | null;

  /**
   * A timestamp (ISO 8601 code) that determines when the payment method was created
   */
  created?: string | null;

  /**
   * The unique identifier of the customer.
   */
  customer_id?: string | null;

  /**
   * Indicates whether the payment method is eligible for installment payments (e.g.,
   * EMI, BNPL). Optional.
   */
  installment_payment_enabled?: boolean | null;

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
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type?: PaymentsAPI.PaymentMethodType | null;

  /**
   * Indicates whether the payment method supports recurring payments. Optional.
   */
  recurring_enabled?: boolean | null;
}

export type Wallet = Wallet.Paypal | Wallet.Venmo;

export namespace Wallet {
  export interface Paypal {
    paypal: Paypal.Paypal;
  }

  export namespace Paypal {
    export interface Paypal {
      /**
       * Email linked with paypal account
       */
      email: string;

      /**
       * id of the paypal account
       */
      paypal_id: string;

      /**
       * mobile number linked to paypal account
       */
      telephone_number: string;
    }
  }

  export interface Venmo {
    venmo: Venmo.Venmo;
  }

  export namespace Venmo {
    export interface Venmo {
      /**
       * mobile number linked to venmo account
       */
      telephone_number: string;
    }
  }
}

export interface PaymentMethodDeleteResponse {
  /**
   * Whether payment method was deleted or not
   */
  deleted: boolean;

  /**
   * The unique identifier of the Payment method
   */
  payment_method_id: string;
}

export interface PaymentMethodSetDefaultResponse {
  /**
   * The unique identifier of the customer.
   */
  customer_id: string;

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
   * The unique identifier of the Payment method
   */
  default_payment_method_id?: string | null;

  /**
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type?: PaymentsAPI.PaymentMethodType | null;
}

export interface PaymentMethodCreateParams {
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

  bank_transfer?: Bank | null;

  billing?: PaymentsAPI.Address | null;

  card?: CardDetail | null;

  /**
   * The card network
   */
  card_network?: string | null;

  /**
   * For Client based calls, SDK will use the client_secret in order to call
   * /payment_methods Client secret will be generated whenever a new payment method
   * is created
   */
  client_secret?: string | null;

  /**
   * The unique identifier of the customer.
   */
  customer_id?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  payment_method_data?: PaymentMethodCreateParams.PaymentMethodData | null;

  /**
   * The name of the bank/ provider issuing the payment method to the end user
   */
  payment_method_issuer?: string | null;

  payment_method_issuer_code?: PaymentMethodIssuerCode | null;

  /**
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type?: PaymentsAPI.PaymentMethodType | null;

  wallet?: Wallet | null;
}

export namespace PaymentMethodCreateParams {
  export interface PaymentMethodData {
    card: PaymentMethodsAPI.CardDetail;
  }
}

export interface PaymentMethodUpdateParams {
  card?: PaymentMethodUpdateParams.Card | null;

  /**
   * This is a 15 minute expiry token which shall be used from the client to
   * authenticate and perform sessions from the SDK
   */
  client_secret?: string | null;
}

export namespace PaymentMethodUpdateParams {
  export interface Card {
    /**
     * Card Expiry Month
     */
    card_exp_month: string;

    /**
     * Card Expiry Year
     */
    card_exp_year: string;

    /**
     * Card Holder Name
     */
    card_holder_name: string;

    /**
     * Card Holder's Nick Name
     */
    nick_name?: string | null;
  }
}

export interface PaymentMethodSetDefaultParams {
  /**
   * The unique identifier for the Customer
   */
  customer_id: string;
}

export declare namespace PaymentMethods {
  export {
    type Bank as Bank,
    type CardDetail as CardDetail,
    type CardDetailFromLocker as CardDetailFromLocker,
    type PaymentMethodIssuerCode as PaymentMethodIssuerCode,
    type PaymentMethodResponse as PaymentMethodResponse,
    type Wallet as Wallet,
    type PaymentMethodDeleteResponse as PaymentMethodDeleteResponse,
    type PaymentMethodSetDefaultResponse as PaymentMethodSetDefaultResponse,
    type PaymentMethodCreateParams as PaymentMethodCreateParams,
    type PaymentMethodUpdateParams as PaymentMethodUpdateParams,
    type PaymentMethodSetDefaultParams as PaymentMethodSetDefaultParams,
  };
}
