// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PayoutsAPI from './payouts';
import * as PaymentMethodsAPI from '../payment-methods';
import * as AccountsAPI from '../accounts/accounts';
import * as PaymentsAPI from '../payments/payments';
import * as ListAPI from './list';
import { List, ListRetrieveParams, ListWithFiltersParams, PayoutListResponse } from './list';
import * as BusinessProfileAPI from '../accounts/business-profile/business-profile';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Payouts extends APIResource {
  list: ListAPI.List = new ListAPI.List(this._client);

  /**
   * Payouts - Create
   *
   * @example
   * ```ts
   * const createResponse = await client.payouts.create({
   *   amount: 0,
   *   currency: 'AED',
   * });
   * ```
   */
  create(body: PayoutCreateParams, options?: RequestOptions): APIPromise<CreateResponse> {
    return this._client.post('/payouts/create', { body, ...options });
  }

  /**
   * Payouts - Retrieve
   *
   * @example
   * ```ts
   * const createResponse = await client.payouts.retrieve(
   *   'payout_id',
   * );
   * ```
   */
  retrieve(
    payoutID: string,
    query: PayoutRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CreateResponse> {
    return this._client.get(path`/payouts/${payoutID}`, { query, ...options });
  }

  /**
   * Payouts - Update
   *
   * @example
   * ```ts
   * const createResponse = await client.payouts.update(
   *   'payout_id',
   * );
   * ```
   */
  update(payoutID: string, body: PayoutUpdateParams, options?: RequestOptions): APIPromise<CreateResponse> {
    return this._client.post(path`/payouts/${payoutID}`, { body, ...options });
  }

  /**
   * Payouts - Cancel
   *
   * @example
   * ```ts
   * const createResponse = await client.payouts.cancel(
   *   'payout_id',
   *   { body_payout_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * );
   * ```
   */
  cancel(payoutID: string, body: PayoutCancelParams, options?: RequestOptions): APIPromise<CreateResponse> {
    return this._client.post(path`/payouts/${payoutID}/cancel`, { body, ...options });
  }

  /**
   * Payouts - Confirm
   *
   * @example
   * ```ts
   * const createResponse = await client.payouts.confirm(
   *   'payout_id',
   *   { client_secret: 'client_secret' },
   * );
   * ```
   */
  confirm(payoutID: string, body: PayoutConfirmParams, options?: RequestOptions): APIPromise<CreateResponse> {
    return this._client.post(path`/payouts/${payoutID}/confirm`, { body, ...options });
  }

  /**
   * Payouts - Fulfill
   *
   * @example
   * ```ts
   * const createResponse = await client.payouts.fulfill(
   *   'payout_id',
   *   { body_payout_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * );
   * ```
   */
  fulfill(payoutID: string, body: PayoutFulfillParams, options?: RequestOptions): APIPromise<CreateResponse> {
    return this._client.post(path`/payouts/${payoutID}/fulfill`, { body, ...options });
  }

  /**
   * Payouts - List available filters
   *
   * @example
   * ```ts
   * const response = await client.payouts.listFilters({
   *   start_time: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  listFilters(
    body: PayoutListFiltersParams,
    options?: RequestOptions,
  ): APIPromise<PayoutListFiltersResponse> {
    return this._client.post('/payouts/filter', { body, ...options });
  }
}

/**
 * Name of banks supported by Hyperswitch
 */
export type BankNames =
  | 'american_express'
  | 'affin_bank'
  | 'agro_bank'
  | 'alliance_bank'
  | 'am_bank'
  | 'bank_of_america'
  | 'bank_of_china'
  | 'bank_islam'
  | 'bank_muamalat'
  | 'bank_rakyat'
  | 'bank_simpanan_nasional'
  | 'barclays'
  | 'blik_p_s_p'
  | 'capital_one'
  | 'chase'
  | 'citi'
  | 'cimb_bank'
  | 'discover'
  | 'navy_federal_credit_union'
  | 'pentagon_federal_credit_union'
  | 'synchrony_bank'
  | 'wells_fargo'
  | 'abn_amro'
  | 'asn_bank'
  | 'bunq'
  | 'handelsbanken'
  | 'hong_leong_bank'
  | 'hsbc_bank'
  | 'ing'
  | 'knab'
  | 'kuwait_finance_house'
  | 'moneyou'
  | 'rabobank'
  | 'regiobank'
  | 'revolut'
  | 'sns_bank'
  | 'triodos_bank'
  | 'van_lanschot'
  | 'arzte_und_apotheker_bank'
  | 'austrian_anadi_bank_ag'
  | 'bank_austria'
  | 'bank99_ag'
  | 'bankhaus_carl_spangler'
  | 'bankhaus_schelhammer_und_schattera_ag'
  | 'bank_millennium'
  | 'bank_p_e_k_a_o_s_a'
  | 'bawag_psk_ag'
  | 'bks_bank_ag'
  | 'brull_kallmus_bank_ag'
  | 'btv_vier_lander_bank'
  | 'capital_bank_grawe_gruppe_ag'
  | 'ceska_sporitelna'
  | 'dolomitenbank'
  | 'easybank_ag'
  | 'e_platby_v_u_b'
  | 'erste_bank_und_sparkassen'
  | 'friesland_bank'
  | 'hypo_alpeadriabank_international_ag'
  | 'hypo_noe_lb_fur_niederosterreich_u_wien'
  | 'hypo_oberosterreich_salzburg_steiermark'
  | 'hypo_tirol_bank_ag'
  | 'hypo_vorarlberg_bank_ag'
  | 'hypo_bank_burgenland_aktiengesellschaft'
  | 'komercni_banka'
  | 'm_bank'
  | 'marchfelder_bank'
  | 'maybank'
  | 'oberbank_ag'
  | 'osterreichische_arzte_und_apothekerbank'
  | 'ocbc_bank'
  | 'pay_with_i_n_g'
  | 'place_z_i_p_k_o'
  | 'platnosc_online_karta_platnicza'
  | 'posojilnica_bank_e_gen'
  | 'postova_banka'
  | 'public_bank'
  | 'raiffeisen_bankengruppe_osterreich'
  | 'rhb_bank'
  | 'schelhammer_capital_bank_ag'
  | 'standard_chartered_bank'
  | 'schoellerbank_ag'
  | 'sparda_bank_wien'
  | 'sporo_pay'
  | 'santander_przelew24'
  | 'tatra_pay'
  | 'viamo'
  | 'volksbank_gruppe'
  | 'volkskreditbank_ag'
  | 'vr_bank_braunau'
  | 'uob_bank'
  | 'pay_with_alior_bank'
  | 'banki_spoldzielcze'
  | 'pay_with_inteligo'
  | 'b_n_p_paribas_poland'
  | 'bank_nowy_s_a'
  | 'credit_agricole'
  | 'pay_with_b_o_s'
  | 'pay_with_citi_handlowy'
  | 'pay_with_plus_bank'
  | 'toyota_bank'
  | 'velo_bank'
  | 'e_transfer_pocztowy24'
  | 'plus_bank'
  | 'etransfer_pocztowy24'
  | 'banki_spbdzielcze'
  | 'bank_nowy_bfg_sa'
  | 'getin_bank'
  | 'blik'
  | 'noble_pay'
  | 'idea_bank'
  | 'envelo_bank'
  | 'nest_przelew'
  | 'mbank_mtransfer'
  | 'inteligo'
  | 'pbac_z_ipko'
  | 'bnp_paribas'
  | 'bank_pekao_sa'
  | 'volkswagen_bank'
  | 'alior_bank'
  | 'boz'
  | 'bangkok_bank'
  | 'krungsri_bank'
  | 'krung_thai_bank'
  | 'the_siam_commercial_bank'
  | 'kasikorn_bank'
  | 'open_bank_success'
  | 'open_bank_failure'
  | 'open_bank_cancelled'
  | 'aib'
  | 'bank_of_scotland'
  | 'danske_bank'
  | 'first_direct'
  | 'first_trust'
  | 'halifax'
  | 'lloyds'
  | 'monzo'
  | 'nat_west'
  | 'nationwide_bank'
  | 'royal_bank_of_scotland'
  | 'starling'
  | 'tsb_bank'
  | 'tesco_bank'
  | 'ulster_bank'
  | 'yoursafe'
  | 'n26'
  | 'nationale_nederlanden';

/**
 * Custom payout link config for the particular payout, if payout link is to be
 * generated.
 */
export interface CreatePayoutLinkConfig extends GenericLinkUiConfig {
  /**
   * List of payout methods shown on collect UI
   */
  enabled_payment_methods?: Array<AccountsAPI.EnabledPaymentMethod> | null;

  form_layout?: BusinessProfileAPI.UiWidgetFormLayout | null;

  /**
   * The unique identifier for the collect link.
   */
  payout_link_id?: string | null;

  /**
   * `test_mode` allows for opening payout links without any restrictions. This
   * removes
   *
   * - domain name validations
   * - check for making sure link is accessed within an iframe
   */
  test_mode?: boolean | null;
}

export interface CreateResponse {
  /**
   * The payout amount. Amount for the payout in lowest denomination of the currency.
   * (i.e) in cents for USD denomination, in paisa for INR denomination etc.,
   */
  amount: number;

  /**
   * Set to true to confirm the payout without review, no further action required
   */
  auto_fulfill: boolean;

  business_country: AccountsAPI.CountryAlpha2;

  /**
   * It's a token used for client side verification.
   */
  client_secret: string;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  /**
   * The identifier for the customer object. If not provided the customer ID will be
   * autogenerated.
   */
  customer_id: string;

  /**
   * Type of entity to whom the payout is being carried out to, select from the given
   * list of options
   */
  entity_type: EntityType;

  /**
   * This is an identifier for the merchant account. This is inferred from the API
   * key provided during the request
   */
  merchant_id: string;

  /**
   * Unique identifier for the payout. This ensures idempotency for multiple payouts
   * that have been done by a single merchant. This field is auto generated and is
   * returned in the API response.
   */
  payout_id: string;

  /**
   * The business profile that is associated with this payout
   */
  profile_id: string;

  /**
   * Specifies whether or not the payout request is recurring
   */
  recurring: boolean;

  /**
   * The URL to redirect after the completion of the operation
   */
  return_url: string;

  status: Status;

  /**
   * List of attempts
   */
  attempts?: Array<CreateResponse.Attempt> | null;

  billing?: PaymentsAPI.Address | null;

  /**
   * Business label of the merchant for this payout
   */
  business_label?: string | null;

  /**
   * The connector used for the payout
   */
  connector?: string | null;

  /**
   * Underlying processor's payout resource ID
   */
  connector_transaction_id?: string | null;

  /**
   * Time when the payout was created
   */
  created?: string | null;

  /**
   * Details of customer attached to this payment
   */
  customer?: PaymentsAPI.CustomerDetailsResponse | null;

  /**
   * A description of the payout
   */
  description?: string | null;

  /**
   * @deprecated Customer's email. _Deprecated: Use customer object instead._
   */
  email?: string | null;

  /**
   * If there was an error while calling the connectors the code is received here
   */
  error_code?: string | null;

  /**
   * If there was an error while calling the connector the error message is received
   * here
   */
  error_message?: string | null;

  /**
   * Unique identifier of the merchant connector account
   */
  merchant_connector_id?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * @deprecated Customer's name. _Deprecated: Use customer object instead._
   */
  name?: string | null;

  payout_link?: CreateResponse.PayoutLink | null;

  /**
   * The payout method information for response
   */
  payout_method_data?: CreateResponse.Card | CreateResponse.Bank | CreateResponse.Wallet | null;

  /**
   * Identifier for payout method
   */
  payout_method_id?: string | null;

  /**
   * The payout_type of the payout request is a mandatory field for confirming the
   * payouts. It should be specified in the Create request. If not provided, it must
   * be updated in the Payout Update request before it can be confirmed.
   */
  payout_type?: PayoutType | null;

  /**
   * @deprecated Customer's phone. _Deprecated: Use customer object instead._
   */
  phone?: string | null;

  /**
   * @deprecated Customer's phone country code. _Deprecated: Use customer object
   * instead._
   */
  phone_country_code?: string | null;

  /**
   * The send method which will be required for processing payouts, check options for
   * better understanding.
   */
  priority?: SendPriority | null;

  /**
   * (This field is not live yet) Error code unified across the connectors is
   * received here in case of errors while calling the underlying connector
   */
  unified_code?: string | null;

  /**
   * (This field is not live yet) Error message unified across the connectors is
   * received here in case of errors while calling the underlying connector
   */
  unified_message?: string | null;
}

export namespace CreateResponse {
  export interface Attempt {
    /**
     * The payout attempt amount. Amount for the payout in lowest denomination of the
     * currency. (i.e) in cents for USD denomination, in paisa for INR denomination
     * etc.,
     */
    amount: number;

    /**
     * Unique identifier for the attempt
     */
    attempt_id: string;

    status: PayoutsAPI.Status;

    /**
     * If the payout was cancelled the reason provided here
     */
    cancellation_reason?: string | null;

    /**
     * The connector used for the payout
     */
    connector?: string | null;

    /**
     * A unique identifier for a payout provided by the connector
     */
    connector_transaction_id?: string | null;

    /**
     * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
     * amount. This field is mandatory for creating a payment.
     */
    currency?: AccountsAPI.Currency | null;

    /**
     * Connector's error code in case of failures
     */
    error_code?: string | null;

    /**
     * Connector's error message in case of failures
     */
    error_message?: string | null;

    /**
     * The payout_type of the payout request is a mandatory field for confirming the
     * payouts. It should be specified in the Create request. If not provided, it must
     * be updated in the Payout Update request before it can be confirmed.
     */
    payment_method?: PayoutsAPI.PayoutType | null;

    /**
     * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
     * wallets.
     */
    payout_method_type?: PaymentsAPI.PaymentMethodType | null;

    /**
     * (This field is not live yet) Error code unified across the connectors is
     * received here in case of errors while calling the underlying connector
     */
    unified_code?: string | null;

    /**
     * (This field is not live yet) Error message unified across the connectors is
     * received here in case of errors while calling the underlying connector
     */
    unified_message?: string | null;
  }

  export interface PayoutLink {
    link: string;

    payout_link_id: string;
  }

  export interface Card {
    /**
     * Masked payout method details for card payout method
     */
    card: Card.Card;
  }

  export namespace Card {
    /**
     * Masked payout method details for card payout method
     */
    export interface Card {
      /**
       * Card expiry month
       */
      card_exp_month: string;

      /**
       * Card expiry year
       */
      card_exp_year: string;

      /**
       * Card holder name
       */
      card_holder_name: string;

      /**
       * Code for Card issuing bank
       */
      bank_code?: string | null;

      /**
       * Extended bin of card, contains the first 8 digits of card number
       */
      card_extended_bin?: string | null;

      /**
       * The ISIN of the card
       */
      card_isin?: string | null;

      /**
       * Issuer of the card
       */
      card_issuer?: string | null;

      /**
       * Card issuing country
       */
      card_issuing_country?: string | null;

      /**
       * Indicates the card network.
       */
      card_network?: AccountsAPI.CardNetwork | null;

      /**
       * Card type, can be either `credit` or `debit`
       */
      card_type?: string | null;

      /**
       * Last 4 digits of the card number
       */
      last4?: string | null;
    }
  }

  export interface Bank {
    /**
     * Masked payout method details for bank payout method
     */
    bank:
      | Bank.ACHBankTransferAdditionalData
      | Bank.BacsBankTransferAdditionalData
      | Bank.SepaBankTransferAdditionalData
      | PayoutsAPI.PixBankTransferAdditionalData;
  }

  export namespace Bank {
    /**
     * Masked payout method details for ach bank transfer payout method
     */
    export interface ACHBankTransferAdditionalData {
      /**
       * Partially masked account number for ach bank debit payment
       */
      bank_account_number: string;

      /**
       * Partially masked routing number for ach bank debit payment
       */
      bank_routing_number: string;

      /**
       * Bank city
       */
      bank_city?: string | null;

      bank_country_code?: AccountsAPI.CountryAlpha2 | null;

      /**
       * Name of banks supported by Hyperswitch
       */
      bank_name?: PayoutsAPI.BankNames | null;
    }

    /**
     * Masked payout method details for bacs bank transfer payout method
     */
    export interface BacsBankTransferAdditionalData {
      /**
       * Bank account's owner name
       */
      bank_account_number: string;

      /**
       * Partially masked sort code for Bacs payment method
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

    /**
     * Masked payout method details for sepa bank transfer payout method
     */
    export interface SepaBankTransferAdditionalData {
      /**
       * Partially masked international bank account number (iban) for SEPA
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

      /**
       * [8 / 11 digits] Bank Identifier Code (bic) / Swift Code - used in many countries
       * for identifying a bank and it's branches
       */
      bic?: string | null;
    }
  }

  export interface Wallet {
    /**
     * Masked payout method details for wallet payout method
     */
    wallet: Wallet.PaypalAdditionalData | Wallet.VenmoAdditionalData;
  }

  export namespace Wallet {
    /**
     * Masked payout method details for paypal wallet payout method
     */
    export interface PaypalAdditionalData {
      /**
       * Email linked with paypal account
       */
      email?: string | null;

      /**
       * id of the paypal account
       */
      paypal_id?: string | null;

      /**
       * mobile number linked to paypal account
       */
      telephone_number?: string | null;
    }

    /**
     * Masked payout method details for venmo wallet payout method
     */
    export interface VenmoAdditionalData {
      /**
       * mobile number linked to venmo account
       */
      telephone_number?: string | null;
    }
  }
}

/**
 * Type of entity to whom the payout is being carried out to, select from the given
 * list of options
 */
export type EntityType =
  | 'Individual'
  | 'Company'
  | 'NonProfit'
  | 'PublicSector'
  | 'NaturalPerson'
  | 'lowercase'
  | 'Personal';

/**
 * Object for GenericLinkUiConfig
 */
export interface GenericLinkUiConfig {
  /**
   * Merchant's display logo
   */
  logo?: string | null;

  /**
   * Custom merchant name for the link
   */
  merchant_name?: string | null;

  /**
   * Primary color to be used in the form represented in hex format
   */
  theme?: string | null;
}

/**
 * The payout method information required for carrying out a payout
 */
export type MethodData = MethodData.Card | MethodData.Bank | MethodData.Wallet;

export namespace MethodData {
  export interface Card {
    card: Card.Card;
  }

  export namespace Card {
    export interface Card {
      /**
       * The card holder's name
       */
      card_holder_name: string;

      /**
       * The card number
       */
      card_number: string;

      /**
       * The card's expiry month
       */
      expiry_month: string;

      /**
       * The card's expiry year
       */
      expiry_year: string;
    }
  }

  export interface Bank {
    bank: PaymentMethodsAPI.Bank;
  }

  export interface Wallet {
    wallet: PaymentMethodsAPI.Wallet;
  }
}

export type PayoutConnectors =
  | 'adyen'
  | 'adyenplatform'
  | 'cybersource'
  | 'ebanx'
  | 'nomupay'
  | 'payone'
  | 'paypal'
  | 'stripe'
  | 'wise';

/**
 * The payout_type of the payout request is a mandatory field for confirming the
 * payouts. It should be specified in the Create request. If not provided, it must
 * be updated in the Payout Update request before it can be confirmed.
 */
export type PayoutType = 'card' | 'bank' | 'wallet';

export interface PixBankTransferAdditionalData {
  /**
   * Partially masked CNPJ - CNPJ is a Brazilian company tax identification number
   */
  cnpj?: string | null;

  /**
   * Partially masked CPF - CPF is a Brazilian tax identification number
   */
  cpf?: string | null;

  /**
   * Partially masked destination bank account number
   */
  destination_bank_account_id?: string | null;

  /**
   * Partially masked unique key for pix transfer
   */
  pix_key?: string | null;

  /**
   * Partially masked source bank account number
   */
  source_bank_account_id?: string | null;
}

/**
 * The send method which will be required for processing payouts, check options for
 * better understanding.
 */
export type SendPriority = 'instant' | 'fast' | 'regular' | 'wire' | 'cross_border' | 'internal';

export type Status =
  | 'success'
  | 'failed'
  | 'cancelled'
  | 'initiated'
  | 'expired'
  | 'reversed'
  | 'pending'
  | 'ineligible'
  | 'requires_creation'
  | 'requires_confirmation'
  | 'requires_payout_method_data'
  | 'requires_fulfillment'
  | 'requires_vendor_account_creation';

/**
 * A type representing a range of time for filtering, including a mandatory start
 * time and an optional end time.
 */
export interface TimeRange {
  /**
   * The start time to filter payments list or to get list of filters. To get list of
   * filters start time is needed to be passed
   */
  start_time: string;

  /**
   * The end time to filter payments list or to get list of filters. If not passed
   * the default time is now
   */
  end_time?: string | null;
}

export interface PayoutListFiltersResponse {
  /**
   * The list of available connector filters
   */
  connector: Array<PayoutConnectors>;

  /**
   * The list of available currency filters
   */
  currency: Array<AccountsAPI.Currency>;

  /**
   * The list of available payout method filters
   */
  payout_method: Array<PayoutType>;

  /**
   * The list of available payout status filters
   */
  status: Array<Status>;
}

export interface PayoutCreateParams {
  /**
   * The payout amount. Amount for the payout in lowest denomination of the currency.
   * (i.e) in cents for USD denomination, in paisa for INR denomination etc.,
   */
  amount: number;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  /**
   * Set to true to confirm the payout without review, no further action required
   */
  auto_fulfill?: boolean | null;

  billing?: PaymentsAPI.Address | null;

  business_country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * @deprecated Business label of the merchant for this payout. _Deprecated: Use
   * profile_id instead._
   */
  business_label?: string | null;

  /**
   * This field is used when merchant wants to confirm the payout, thus useful for
   * the payout _Confirm_ request. Ideally merchants should _Create_ a payout,
   * _Update_ it (if required), then _Confirm_ it.
   */
  confirm?: boolean | null;

  /**
   * This field allows the merchant to manually select a connector with which the
   * payout can go through.
   */
  connector?: Array<PayoutConnectors> | null;

  /**
   * Passing this object creates a new customer or attaches an existing customer to
   * the payment
   */
  customer?: PaymentsAPI.CustomerDetails | null;

  /**
   * @deprecated The identifier for the customer object. If not provided the customer
   * ID will be autogenerated. _Deprecated: Use customer_id instead._
   */
  customer_id?: string | null;

  /**
   * A description of the payout
   */
  description?: string | null;

  /**
   * @deprecated Customer's email. _Deprecated: Use customer object instead._
   */
  email?: string | null;

  /**
   * Type of entity to whom the payout is being carried out to, select from the given
   * list of options
   */
  entity_type?: EntityType | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * @deprecated Customer's name. _Deprecated: Use customer object instead._
   */
  name?: string | null;

  /**
   * Whether to get the payout link (if applicable). Merchant need to specify this
   * during the Payout _Create_, this field can not be updated during Payout
   * _Update_.
   */
  payout_link?: boolean | null;

  /**
   * Custom payout link config for the particular payout, if payout link is to be
   * generated.
   */
  payout_link_config?: CreatePayoutLinkConfig | null;

  /**
   * The payout method information required for carrying out a payout
   */
  payout_method_data?: MethodData | null;

  /**
   * Identifier for payout method
   */
  payout_method_id?: string | null;

  /**
   * Provide a reference to a stored payout method, used to process the payout.
   */
  payout_token?: string | null;

  /**
   * The payout_type of the payout request is a mandatory field for confirming the
   * payouts. It should be specified in the Create request. If not provided, it must
   * be updated in the Payout Update request before it can be confirmed.
   */
  payout_type?: PayoutType | null;

  /**
   * @deprecated Customer's phone. _Deprecated: Use customer object instead._
   */
  phone?: string | null;

  /**
   * @deprecated Customer's phone country code. _Deprecated: Use customer object
   * instead._
   */
  phone_country_code?: string | null;

  /**
   * The send method which will be required for processing payouts, check options for
   * better understanding.
   */
  priority?: SendPriority | null;

  /**
   * The business profile to use for this payout, especially if there are multiple
   * business profiles associated with the account, otherwise default business
   * profile associated with the merchant account will be used.
   */
  profile_id?: string | null;

  /**
   * Specifies whether or not the payout request is recurring
   */
  recurring?: boolean | null;

  /**
   * The URL to redirect after the completion of the operation
   */
  return_url?: string | null;

  routing?: AccountsAPI.StaticRoutingAlgorithm | null;

  /**
   * Will be used to expire client secret after certain amount of time to be supplied
   * in seconds (900) for 15 mins
   */
  session_expiry?: number | null;
}

export interface PayoutRetrieveParams {
  /**
   * Sync with the connector to get the payout details (defaults to false)
   */
  force_sync?: boolean | null;
}

export interface PayoutUpdateParams {
  /**
   * The payout amount. Amount for the payout in lowest denomination of the currency.
   * (i.e) in cents for USD denomination, in paisa for INR denomination etc.,
   */
  amount?: number | null;

  /**
   * Set to true to confirm the payout without review, no further action required
   */
  auto_fulfill?: boolean | null;

  billing?: PaymentsAPI.Address | null;

  business_country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * @deprecated Business label of the merchant for this payout. _Deprecated: Use
   * profile_id instead._
   */
  business_label?: string | null;

  /**
   * It's a token used for client side verification.
   */
  client_secret?: string | null;

  /**
   * This field is used when merchant wants to confirm the payout, thus useful for
   * the payout _Confirm_ request. Ideally merchants should _Create_ a payout,
   * _Update_ it (if required), then _Confirm_ it.
   */
  confirm?: boolean | null;

  /**
   * This field allows the merchant to manually select a connector with which the
   * payout can go through.
   */
  connector?: Array<PayoutConnectors> | null;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency?: AccountsAPI.Currency | null;

  /**
   * Passing this object creates a new customer or attaches an existing customer to
   * the payment
   */
  customer?: PaymentsAPI.CustomerDetails | null;

  /**
   * @deprecated The identifier for the customer object. If not provided the customer
   * ID will be autogenerated. _Deprecated: Use customer_id instead._
   */
  customer_id?: string | null;

  /**
   * A description of the payout
   */
  description?: string | null;

  /**
   * @deprecated Customer's email. _Deprecated: Use customer object instead._
   */
  email?: string | null;

  /**
   * Type of entity to whom the payout is being carried out to, select from the given
   * list of options
   */
  entity_type?: EntityType | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * @deprecated Customer's name. _Deprecated: Use customer object instead._
   */
  name?: string | null;

  /**
   * Whether to get the payout link (if applicable). Merchant need to specify this
   * during the Payout _Create_, this field can not be updated during Payout
   * _Update_.
   */
  payout_link?: boolean | null;

  /**
   * Custom payout link config for the particular payout, if payout link is to be
   * generated.
   */
  payout_link_config?: CreatePayoutLinkConfig | null;

  /**
   * The payout method information required for carrying out a payout
   */
  payout_method_data?: MethodData | null;

  /**
   * Identifier for payout method
   */
  payout_method_id?: string | null;

  /**
   * Provide a reference to a stored payout method, used to process the payout.
   */
  payout_token?: string | null;

  /**
   * The payout_type of the payout request is a mandatory field for confirming the
   * payouts. It should be specified in the Create request. If not provided, it must
   * be updated in the Payout Update request before it can be confirmed.
   */
  payout_type?: PayoutType | null;

  /**
   * @deprecated Customer's phone. _Deprecated: Use customer object instead._
   */
  phone?: string | null;

  /**
   * @deprecated Customer's phone country code. _Deprecated: Use customer object
   * instead._
   */
  phone_country_code?: string | null;

  /**
   * The send method which will be required for processing payouts, check options for
   * better understanding.
   */
  priority?: SendPriority | null;

  /**
   * The business profile to use for this payout, especially if there are multiple
   * business profiles associated with the account, otherwise default business
   * profile associated with the merchant account will be used.
   */
  profile_id?: string | null;

  /**
   * Specifies whether or not the payout request is recurring
   */
  recurring?: boolean | null;

  /**
   * The URL to redirect after the completion of the operation
   */
  return_url?: string | null;

  routing?: AccountsAPI.StaticRoutingAlgorithm | null;

  /**
   * Will be used to expire client secret after certain amount of time to be supplied
   * in seconds (900) for 15 mins
   */
  session_expiry?: number | null;
}

export interface PayoutCancelParams {
  /**
   * Unique identifier for the payout. This ensures idempotency for multiple payouts
   * that have been done by a single merchant. This field is auto generated and is
   * returned in the API response.
   */
  body_payout_id: string;
}

export interface PayoutConfirmParams {
  /**
   * It's a token used for client side verification.
   */
  client_secret: string;

  /**
   * The payout amount. Amount for the payout in lowest denomination of the currency.
   * (i.e) in cents for USD denomination, in paisa for INR denomination etc.,
   */
  amount?: number | null;

  /**
   * Set to true to confirm the payout without review, no further action required
   */
  auto_fulfill?: boolean | null;

  billing?: PaymentsAPI.Address | null;

  business_country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * @deprecated Business label of the merchant for this payout. _Deprecated: Use
   * profile_id instead._
   */
  business_label?: string | null;

  /**
   * This field allows the merchant to manually select a connector with which the
   * payout can go through.
   */
  connector?: Array<PayoutConnectors> | null;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency?: AccountsAPI.Currency | null;

  /**
   * Passing this object creates a new customer or attaches an existing customer to
   * the payment
   */
  customer?: PaymentsAPI.CustomerDetails | null;

  /**
   * @deprecated The identifier for the customer object. If not provided the customer
   * ID will be autogenerated. _Deprecated: Use customer_id instead._
   */
  customer_id?: string | null;

  /**
   * A description of the payout
   */
  description?: string | null;

  /**
   * @deprecated Customer's email. _Deprecated: Use customer object instead._
   */
  email?: string | null;

  /**
   * Type of entity to whom the payout is being carried out to, select from the given
   * list of options
   */
  entity_type?: EntityType | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * @deprecated Customer's name. _Deprecated: Use customer object instead._
   */
  name?: string | null;

  /**
   * Whether to get the payout link (if applicable). Merchant need to specify this
   * during the Payout _Create_, this field can not be updated during Payout
   * _Update_.
   */
  payout_link?: boolean | null;

  /**
   * Custom payout link config for the particular payout, if payout link is to be
   * generated.
   */
  payout_link_config?: CreatePayoutLinkConfig | null;

  /**
   * The payout method information required for carrying out a payout
   */
  payout_method_data?: MethodData | null;

  /**
   * Identifier for payout method
   */
  payout_method_id?: string | null;

  /**
   * Provide a reference to a stored payout method, used to process the payout.
   */
  payout_token?: string | null;

  /**
   * The payout_type of the payout request is a mandatory field for confirming the
   * payouts. It should be specified in the Create request. If not provided, it must
   * be updated in the Payout Update request before it can be confirmed.
   */
  payout_type?: PayoutType | null;

  /**
   * @deprecated Customer's phone. _Deprecated: Use customer object instead._
   */
  phone?: string | null;

  /**
   * @deprecated Customer's phone country code. _Deprecated: Use customer object
   * instead._
   */
  phone_country_code?: string | null;

  /**
   * The send method which will be required for processing payouts, check options for
   * better understanding.
   */
  priority?: SendPriority | null;

  /**
   * The business profile to use for this payout, especially if there are multiple
   * business profiles associated with the account, otherwise default business
   * profile associated with the merchant account will be used.
   */
  profile_id?: string | null;

  /**
   * Specifies whether or not the payout request is recurring
   */
  recurring?: boolean | null;

  /**
   * The URL to redirect after the completion of the operation
   */
  return_url?: string | null;

  routing?: AccountsAPI.StaticRoutingAlgorithm | null;

  /**
   * Will be used to expire client secret after certain amount of time to be supplied
   * in seconds (900) for 15 mins
   */
  session_expiry?: number | null;
}

export interface PayoutFulfillParams {
  /**
   * Unique identifier for the payout. This ensures idempotency for multiple payouts
   * that have been done by a single merchant. This field is auto generated and is
   * returned in the API response.
   */
  body_payout_id: string;
}

export interface PayoutListFiltersParams {
  /**
   * The start time to filter payments list or to get list of filters. To get list of
   * filters start time is needed to be passed
   */
  start_time: string;

  /**
   * The end time to filter payments list or to get list of filters. If not passed
   * the default time is now
   */
  end_time?: string | null;
}

Payouts.List = List;

export declare namespace Payouts {
  export {
    type BankNames as BankNames,
    type CreatePayoutLinkConfig as CreatePayoutLinkConfig,
    type CreateResponse as CreateResponse,
    type EntityType as EntityType,
    type GenericLinkUiConfig as GenericLinkUiConfig,
    type MethodData as MethodData,
    type PayoutConnectors as PayoutConnectors,
    type PayoutType as PayoutType,
    type PixBankTransferAdditionalData as PixBankTransferAdditionalData,
    type SendPriority as SendPriority,
    type Status as Status,
    type TimeRange as TimeRange,
    type PayoutListFiltersResponse as PayoutListFiltersResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutConfirmParams as PayoutConfirmParams,
    type PayoutFulfillParams as PayoutFulfillParams,
    type PayoutListFiltersParams as PayoutListFiltersParams,
  };

  export {
    List as List,
    type PayoutListResponse as PayoutListResponse,
    type ListRetrieveParams as ListRetrieveParams,
    type ListWithFiltersParams as ListWithFiltersParams,
  };
}
