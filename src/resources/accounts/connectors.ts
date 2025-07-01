// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectorsAPI from './connectors';
import * as AccountsAPI from './accounts';
import * as PaymentsAPI from '../payments/payments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Connectors extends APIResource {
  /**
   * Creates a new Merchant Connector for the merchant account. The connector could
   * be a payment processor/facilitator/acquirer or a provider of specialized
   * services like Fraud/Accounting etc.
   *
   * @example
   * ```ts
   * const merchantConnectorResponse =
   *   await client.accounts.connectors.create('account_id', {
   *     connector_name: 'adyen',
   *     connector_type: 'payment_processor',
   *     connector_account_details: {
   *       api_key: '{{adyen-api-key}}',
   *       auth_type: 'BodyKey',
   *       key1: '{{adyen_merchant_account}}',
   *     },
   *     connector_label: 'EU_adyen',
   *   });
   * ```
   */
  create(
    accountID: string,
    body: ConnectorCreateParams,
    options?: RequestOptions,
  ): APIPromise<MerchantConnectorResponse> {
    return this._client.post(path`/account/${accountID}/connectors`, { body, ...options });
  }

  /**
   * Retrieves details of a Connector account
   *
   * @example
   * ```ts
   * const merchantConnectorResponse =
   *   await client.accounts.connectors.retrieve(
   *     'merchant_connector_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  retrieve(
    merchantConnectorID: string,
    params: ConnectorRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MerchantConnectorResponse> {
    const { account_id } = params;
    return this._client.get(path`/account/${account_id}/connectors/${merchantConnectorID}`, options);
  }

  /**
   * To update an existing Merchant Connector account. Helpful in enabling/disabling
   * different payment methods and other settings for the connector
   *
   * @example
   * ```ts
   * const merchantConnectorResponse =
   *   await client.accounts.connectors.update(
   *     'merchant_connector_id',
   *     {
   *       account_id: 'account_id',
   *       connector_type: 'payment_processor',
   *       status: 'inactive',
   *       payment_methods_enabled: [{ payment_method: 'card' }],
   *     },
   *   );
   * ```
   */
  update(
    merchantConnectorID: string,
    params: ConnectorUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MerchantConnectorResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/account/${account_id}/connectors/${merchantConnectorID}`, {
      body,
      ...options,
    });
  }

  /**
   * List Merchant Connector Details for the merchant
   *
   * @example
   * ```ts
   * const connectors = await client.accounts.connectors.list(
   *   'account_id',
   * );
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<ConnectorListResponse> {
    return this._client.get(path`/account/${accountID}/connectors`, options);
  }

  /**
   * Delete or Detach a Merchant Connector from Merchant Account
   *
   * @example
   * ```ts
   * const connector = await client.accounts.connectors.delete(
   *   'merchant_connector_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    merchantConnectorID: string,
    params: ConnectorDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConnectorDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/account/${account_id}/connectors/${merchantConnectorID}`, options);
  }
}

export interface AdditionalMerchantData {
  open_banking_recipient_data:
    | AdditionalMerchantData.ConnectorRecipientID
    | AdditionalMerchantData.WalletID
    | AdditionalMerchantData.AccountData;
}

export namespace AdditionalMerchantData {
  export interface ConnectorRecipientID {
    connector_recipient_id: string | null;
  }

  export interface WalletID {
    wallet_id: string | null;
  }

  export interface AccountData {
    account_data:
      | AccountData.Iban
      | AccountData.Bacs
      | AccountData.FasterPayments
      | AccountData.Sepa
      | AccountData.SepaInstant
      | AccountData.Elixir
      | AccountData.Bankgiro
      | AccountData.Plusgiro;
  }

  export namespace AccountData {
    export interface Iban {
      /**
       * IBAN-based account for international transfers
       */
      iban: Iban.Iban;
    }

    export namespace Iban {
      /**
       * IBAN-based account for international transfers
       */
      export interface Iban {
        /**
         * International Bank Account Number (up to 34 characters)
         */
        iban: string;

        /**
         * Account holder name
         */
        name: string;

        connector_recipient_id?: string | null;
      }
    }

    export interface Bacs {
      /**
       * UK BACS payment system
       */
      bacs: Bacs.Bacs;
    }

    export namespace Bacs {
      /**
       * UK BACS payment system
       */
      export interface Bacs {
        /**
         * 8-digit UK account number
         */
        account_number: string;

        /**
         * Account holder name
         */
        name: string;

        /**
         * 6-digit UK sort code
         */
        sort_code: string;

        connector_recipient_id?: string | null;
      }
    }

    export interface FasterPayments {
      /**
       * UK Faster Payments (instant transfers)
       */
      faster_payments: FasterPayments.FasterPayments;
    }

    export namespace FasterPayments {
      /**
       * UK Faster Payments (instant transfers)
       */
      export interface FasterPayments {
        /**
         * 8-digit UK account number
         */
        account_number: string;

        /**
         * Account holder name
         */
        name: string;

        /**
         * 6-digit UK sort code
         */
        sort_code: string;

        connector_recipient_id?: string | null;
      }
    }

    export interface Sepa {
      /**
       * SEPA payments (Euro zone)
       */
      sepa: Sepa.Sepa;
    }

    export namespace Sepa {
      /**
       * SEPA payments (Euro zone)
       */
      export interface Sepa {
        /**
         * IBAN for SEPA transfers
         */
        iban: string;

        /**
         * Account holder name
         */
        name: string;

        connector_recipient_id?: string | null;
      }
    }

    export interface SepaInstant {
      /**
       * SEPA Instant payments (10-second transfers)
       */
      sepa_instant: SepaInstant.SepaInstant;
    }

    export namespace SepaInstant {
      /**
       * SEPA Instant payments (10-second transfers)
       */
      export interface SepaInstant {
        /**
         * IBAN for instant SEPA transfers
         */
        iban: string;

        /**
         * Account holder name
         */
        name: string;

        connector_recipient_id?: string | null;
      }
    }

    export interface Elixir {
      /**
       * Polish Elixir payment system
       */
      elixir: Elixir.Elixir;
    }

    export namespace Elixir {
      /**
       * Polish Elixir payment system
       */
      export interface Elixir {
        /**
         * Polish account number (26 digits)
         */
        account_number: string;

        /**
         * Polish IBAN (28 chars)
         */
        iban: string;

        /**
         * Account holder name
         */
        name: string;

        connector_recipient_id?: string | null;
      }
    }

    export interface Bankgiro {
      /**
       * Swedish Bankgiro system
       */
      bankgiro: Bankgiro.Bankgiro;
    }

    export namespace Bankgiro {
      /**
       * Swedish Bankgiro system
       */
      export interface Bankgiro {
        /**
         * Account holder name
         */
        name: string;

        /**
         * Bankgiro number (7-8 digits)
         */
        number: string;

        connector_recipient_id?: string | null;
      }
    }

    export interface Plusgiro {
      /**
       * Swedish Plusgiro system
       */
      plusgiro: Plusgiro.Plusgiro;
    }

    export namespace Plusgiro {
      /**
       * Swedish Plusgiro system
       */
      export interface Plusgiro {
        /**
         * Account holder name
         */
        name: string;

        /**
         * Plusgiro number (2-8 digits)
         */
        number: string;

        connector_recipient_id?: string | null;
      }
    }
  }
}

export type Connector =
  | 'adyenplatform'
  | 'stripe_billing_test'
  | 'phonypay'
  | 'fauxpay'
  | 'pretendpay'
  | 'stripe_test'
  | 'adyen_test'
  | 'checkout_test'
  | 'paypal_test'
  | 'aci'
  | 'adyen'
  | 'airwallex'
  | 'archipel'
  | 'authorizedotnet'
  | 'bambora'
  | 'bamboraapac'
  | 'bankofamerica'
  | 'barclaycard'
  | 'billwerk'
  | 'bitpay'
  | 'bluesnap'
  | 'boku'
  | 'braintree'
  | 'cashtocode'
  | 'chargebee'
  | 'checkout'
  | 'coinbase'
  | 'coingate'
  | 'cryptopay'
  | 'ctp_mastercard'
  | 'ctp_visa'
  | 'cybersource'
  | 'datatrans'
  | 'deutschebank'
  | 'digitalvirgo'
  | 'dlocal'
  | 'ebanx'
  | 'elavon'
  | 'facilitapay'
  | 'fiserv'
  | 'fiservemea'
  | 'fiuu'
  | 'forte'
  | 'getnet'
  | 'globalpay'
  | 'globepay'
  | 'gocardless'
  | 'gpayments'
  | 'hipay'
  | 'helcim'
  | 'hyperswitch_vault'
  | 'inespay'
  | 'iatapay'
  | 'itaubank'
  | 'jpmorgan'
  | 'juspaythreedsserver'
  | 'klarna'
  | 'mifinity'
  | 'mollie'
  | 'moneris'
  | 'multisafepay'
  | 'netcetera'
  | 'nexinets'
  | 'nexixpay'
  | 'nmi'
  | 'nomupay'
  | 'noon'
  | 'novalnet'
  | 'nuvei'
  | 'opennode'
  | 'paybox'
  | 'payme'
  | 'payone'
  | 'paypal'
  | 'paystack'
  | 'payu'
  | 'placetopay'
  | 'powertranz'
  | 'prophetpay'
  | 'rapyd'
  | 'razorpay'
  | 'recurly'
  | 'redsys'
  | 'shift4'
  | 'square'
  | 'stax'
  | 'stripe'
  | 'stripebilling'
  | 'taxjar'
  | 'threedsecureio'
  | 'tokenio'
  | 'trustpay'
  | 'tsys'
  | 'vgs'
  | 'volt'
  | 'wellsfargo'
  | 'wise'
  | 'worldline'
  | 'worldpay'
  | 'worldpayvantiv'
  | 'worldpayxml'
  | 'signifyd'
  | 'plaid'
  | 'riskified'
  | 'xendit'
  | 'zen'
  | 'zsl';

export type ConnectorStatus = 'inactive' | 'active';

/**
 * Type of the Connector for the financial use case. Could range from Payments to
 * Accounting to Banking.
 */
export type ConnectorType =
  | 'payment_processor'
  | 'payment_vas'
  | 'fin_operations'
  | 'fiz_operations'
  | 'networks'
  | 'banking_entities'
  | 'non_banking_finance'
  | 'payout_processor'
  | 'payment_method_auth'
  | 'authentication_processor'
  | 'tax_processor'
  | 'billing_processor'
  | 'vault_processor';

export interface ConnectorWalletDetails {
  /**
   * This field is for our legacy Apple Pay flow that contains the Apple Pay
   * certificates and credentials for only iOS Apple Pay flow
   */
  apple_pay?: unknown | null;

  /**
   * This field contains the Apple Pay certificates and credentials for iOS and Web
   * Apple Pay flow
   */
  apple_pay_combined?: unknown | null;

  /**
   * This field contains the Google Pay certificates and credentials
   */
  google_pay?: unknown | null;

  /**
   * This field contains the Paze certificates and credentials
   */
  paze?: unknown | null;

  /**
   * This field contains the Samsung Pay certificates and credentials
   */
  samsung_pay?: unknown | null;
}

/**
 * Details of FrmConfigs are mentioned here... it should be passed in payment
 * connector create api call, and stored in merchant_connector_table
 */
export interface FrmConfigs {
  /**
   * Type of the Connector for the financial use case. Could range from Payments to
   * Accounting to Banking.
   */
  gateway: ConnectorType;

  /**
   * payment methods that can be used in the payment
   */
  payment_methods: Array<FrmConfigs.PaymentMethod>;
}

export namespace FrmConfigs {
  /**
   * Details of FrmPaymentMethod are mentioned here... it should be passed in payment
   * connector create api call, and stored in merchant_connector_table
   */
  export interface PaymentMethod {
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

    flow?: ConnectorsAPI.FrmPreferredFlowTypes | null;

    /**
     * payment method types(credit, debit) that can be used in the payment. This field
     * is deprecated. It has not been removed to provide backward compatibility.
     */
    payment_method_types?: Array<PaymentMethod.PaymentMethodType> | null;
  }

  export namespace PaymentMethod {
    /**
     * Details of FrmPaymentMethodType are mentioned here... it should be passed in
     * payment connector create api call, and stored in merchant_connector_table
     */
    export interface PaymentMethodType {
      action: 'cancel_txn' | 'auto_refund' | 'manual_review';

      /**
       * Indicates the card network.
       */
      card_networks: AccountsAPI.CardNetwork;

      flow: ConnectorsAPI.FrmPreferredFlowTypes;

      /**
       * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
       * wallets.
       */
      payment_method_type: PaymentsAPI.PaymentMethodType;
    }
  }
}

export type FrmPreferredFlowTypes = 'pre' | 'post';

export interface MerchantConnectorDetails {
  /**
   * Account details of the Connector. You can specify up to 50 keys, with key names
   * up to 40 characters long and values up to 500 characters long. Useful for
   * storing additional, structured information on an object.
   */
  connector_account_details?: unknown | null;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;
}

/**
 * Response of creating a new Merchant Connector for the merchant account."
 */
export interface MerchantConnectorResponse {
  connector_name: Connector;

  /**
   * Type of the Connector for the financial use case. Could range from Payments to
   * Accounting to Banking.
   */
  connector_type: ConnectorType;

  /**
   * Unique ID of the merchant connector account
   */
  merchant_connector_id: string;

  /**
   * Identifier for the profile, if not provided default will be chosen from merchant
   * account
   */
  profile_id: string;

  status: ConnectorStatus;

  additional_merchant_data?: AdditionalMerchantData | null;

  /**
   * identifier for the verified domains of a particular connector account
   */
  applepay_verified_domains?: Array<string> | null;

  business_country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * The business label to which the connector account is attached. To be deprecated
   * soon. Use the 'profile_id' instead
   */
  business_label?: string | null;

  /**
   * The business sublabel to which the connector account is attached. To be
   * deprecated soon. Use the 'profile_id' instead
   */
  business_sub_label?: string | null;

  connector_account_details?: MerchantConnectorDetails | null;

  /**
   * A unique label to identify the connector account created under a profile
   */
  connector_label?: string | null;

  connector_wallets_details?: ConnectorWalletDetails | null;

  connector_webhook_details?: MerchantConnectorWebhookDetails | null;

  /**
   * A boolean value to indicate if the connector is disabled. By default, its value
   * is false.
   */
  disabled?: boolean | null;

  /**
   * Contains the frm configs for the merchant connector
   */
  frm_configs?: Array<FrmConfigs> | null;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * An object containing the details about the payment methods that need to be
   * enabled under this merchant connector account
   */
  payment_methods_enabled?: Array<PaymentMethodsEnabled> | null;

  pm_auth_config?: unknown | null;

  /**
   * A boolean value to indicate if the connector is in Test mode. By default, its
   * value is false.
   */
  test_mode?: boolean | null;
}

export interface MerchantConnectorWebhookDetails {
  additional_secret: string;

  merchant_secret: string;
}

/**
 * Details of all the payment methods enabled for the connector for the given
 * merchant account
 */
export interface PaymentMethodsEnabled {
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
   * Subtype of payment method
   */
  payment_method_types?: Array<PaymentMethodsEnabled.PaymentMethodType> | null;
}

export namespace PaymentMethodsEnabled {
  export interface PaymentMethodType {
    /**
     * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
     * wallets.
     */
    payment_method_type: PaymentsAPI.PaymentMethodType;

    /**
     * Object to filter the customer countries for which the payment method is
     * displayed
     */
    accepted_countries?:
      | PaymentMethodType.EnableOnly
      | PaymentMethodType.DisableOnly
      | PaymentMethodType.AllAccepted
      | null;

    accepted_currencies?:
      | PaymentMethodType.EnableOnly
      | PaymentMethodType.DisableOnly
      | PaymentMethodType.AllAccepted
      | null;

    card_networks?: Array<AccountsAPI.CardNetwork> | null;

    /**
     * Indicates whether the payment method is eligible for installment payments (e.g.,
     * EMI, BNPL). Optional.
     */
    installment_payment_enabled?: boolean | null;

    /**
     * This Unit struct represents MinorUnit in which core amount works
     */
    maximum_amount?: number | null;

    /**
     * This Unit struct represents MinorUnit in which core amount works
     */
    minimum_amount?: number | null;

    /**
     * To indicate the type of payment experience that the customer would go through
     */
    payment_experience?: PaymentsAPI.PaymentExperience | null;

    /**
     * Indicates whether the payment method supports recurring payments. Optional.
     */
    recurring_enabled?: boolean | null;
  }

  export namespace PaymentMethodType {
    export interface EnableOnly {
      list: Array<AccountsAPI.CountryAlpha2>;

      type: 'enable_only';
    }

    export interface DisableOnly {
      list: Array<AccountsAPI.CountryAlpha2>;

      type: 'disable_only';
    }

    export interface AllAccepted {
      type: 'all_accepted';
    }

    export interface EnableOnly {
      list: Array<AccountsAPI.Currency>;

      type: 'enable_only';
    }

    export interface DisableOnly {
      list: Array<AccountsAPI.Currency>;

      type: 'disable_only';
    }

    export interface AllAccepted {
      type: 'all_accepted';
    }
  }
}

export type ConnectorListResponse = Array<ConnectorListResponse.ConnectorListResponseItem>;

export namespace ConnectorListResponse {
  export interface ConnectorListResponseItem {
    connector_name: ConnectorsAPI.Connector;

    /**
     * Type of the Connector for the financial use case. Could range from Payments to
     * Accounting to Banking.
     */
    connector_type: ConnectorsAPI.ConnectorType;

    /**
     * Unique ID of the merchant connector account
     */
    merchant_connector_id: string;

    /**
     * Identifier for the profile, if not provided default will be chosen from merchant
     * account
     */
    profile_id: string;

    status: ConnectorsAPI.ConnectorStatus;

    /**
     * identifier for the verified domains of a particular connector account
     */
    applepay_verified_domains?: Array<string> | null;

    business_country?: AccountsAPI.CountryAlpha2 | null;

    /**
     * The business label to which the connector account is attached. To be deprecated
     * soon. Use the 'profile_id' instead
     */
    business_label?: string | null;

    /**
     * The business sublabel to which the connector account is attached. To be
     * deprecated soon. Use the 'profile_id' instead
     */
    business_sub_label?: string | null;

    /**
     * A unique label to identify the connector account created under a profile
     */
    connector_label?: string | null;

    /**
     * A boolean value to indicate if the connector is disabled. By default, its value
     * is false.
     */
    disabled?: boolean | null;

    /**
     * Contains the frm configs for the merchant connector
     */
    frm_configs?: Array<ConnectorsAPI.FrmConfigs> | null;

    /**
     * An object containing the details about the payment methods that need to be
     * enabled under this merchant connector account
     */
    payment_methods_enabled?: Array<ConnectorsAPI.PaymentMethodsEnabled> | null;

    pm_auth_config?: unknown | null;

    /**
     * A boolean value to indicate if the connector is in Test mode. By default, its
     * value is false.
     */
    test_mode?: boolean | null;
  }
}

export interface ConnectorDeleteResponse {
  /**
   * If the connector is deleted or not
   */
  deleted: boolean;

  /**
   * Unique ID of the connector
   */
  merchant_connector_id: string;

  /**
   * The identifier for the Merchant Account
   */
  merchant_id: string;
}

export interface ConnectorCreateParams {
  connector_name: Connector;

  /**
   * Type of the Connector for the financial use case. Could range from Payments to
   * Accounting to Banking.
   */
  connector_type: ConnectorType;

  additional_merchant_data?: AdditionalMerchantData | null;

  business_country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * The business label to which the connector account is attached. To be deprecated
   * soon. Use the 'profile_id' instead
   */
  business_label?: string | null;

  /**
   * The business sublabel to which the connector account is attached. To be
   * deprecated soon. Use the 'profile_id' instead
   */
  business_sub_label?: string | null;

  connector_account_details?: MerchantConnectorDetails | null;

  /**
   * This is an unique label you can generate and pass in order to identify this
   * connector account on your Hyperswitch dashboard and reports. Eg: if your profile
   * label is `default`, connector label can be `stripe_default`
   */
  connector_label?: string | null;

  connector_wallets_details?: ConnectorWalletDetails | null;

  connector_webhook_details?: MerchantConnectorWebhookDetails | null;

  /**
   * A boolean value to indicate if the connector is disabled. By default, its value
   * is false.
   */
  disabled?: boolean | null;

  /**
   * Contains the frm configs for the merchant connector
   */
  frm_configs?: Array<FrmConfigs> | null;

  /**
   * Unique ID of the connector
   */
  merchant_connector_id?: string | null;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * An object containing the details about the payment methods that need to be
   * enabled under this merchant connector account
   */
  payment_methods_enabled?: Array<PaymentMethodsEnabled> | null;

  pm_auth_config?: unknown | null;

  /**
   * Identifier for the profile, if not provided default will be chosen from merchant
   * account
   */
  profile_id?: string | null;

  status?: ConnectorStatus | null;

  /**
   * A boolean value to indicate if the connector is in Test mode. By default, its
   * value is false.
   */
  test_mode?: boolean | null;
}

export interface ConnectorRetrieveParams {
  /**
   * The unique identifier for the merchant account
   */
  account_id: string;
}

export interface ConnectorUpdateParams {
  /**
   * Path param: The unique identifier for the merchant account
   */
  account_id: string;

  /**
   * Body param: Type of the Connector for the financial use case. Could range from
   * Payments to Accounting to Banking.
   */
  connector_type: ConnectorType;

  /**
   * Body param:
   */
  status: ConnectorStatus;

  /**
   * Body param:
   */
  additional_merchant_data?: AdditionalMerchantData | null;

  /**
   * Body param:
   */
  connector_account_details?: MerchantConnectorDetails | null;

  /**
   * Body param: This is an unique label you can generate and pass in order to
   * identify this connector account on your Hyperswitch dashboard and reports. Eg:
   * if your profile label is `default`, connector label can be `stripe_default`
   */
  connector_label?: string | null;

  /**
   * Body param:
   */
  connector_wallets_details?: ConnectorWalletDetails | null;

  /**
   * Body param:
   */
  connector_webhook_details?: MerchantConnectorWebhookDetails | null;

  /**
   * Body param: A boolean value to indicate if the connector is disabled. By
   * default, its value is false.
   */
  disabled?: boolean | null;

  /**
   * Body param: Contains the frm configs for the merchant connector
   */
  frm_configs?: Array<FrmConfigs> | null;

  /**
   * Body param: Metadata is useful for storing additional, unstructured information
   * on an object.
   */
  metadata?: unknown | null;

  /**
   * Body param: An object containing the details about the payment methods that need
   * to be enabled under this merchant connector account
   */
  payment_methods_enabled?: Array<PaymentMethodsEnabled> | null;

  /**
   * Body param: pm_auth_config will relate MCA records to their respective chosen
   * auth services, based on payment_method and pmt
   */
  pm_auth_config?: unknown | null;

  /**
   * Body param: A boolean value to indicate if the connector is in Test mode. By
   * default, its value is false.
   */
  test_mode?: boolean | null;
}

export interface ConnectorDeleteParams {
  /**
   * The unique identifier for the merchant account
   */
  account_id: string;
}

export declare namespace Connectors {
  export {
    type AdditionalMerchantData as AdditionalMerchantData,
    type Connector as Connector,
    type ConnectorStatus as ConnectorStatus,
    type ConnectorType as ConnectorType,
    type ConnectorWalletDetails as ConnectorWalletDetails,
    type FrmConfigs as FrmConfigs,
    type FrmPreferredFlowTypes as FrmPreferredFlowTypes,
    type MerchantConnectorDetails as MerchantConnectorDetails,
    type MerchantConnectorResponse as MerchantConnectorResponse,
    type MerchantConnectorWebhookDetails as MerchantConnectorWebhookDetails,
    type PaymentMethodsEnabled as PaymentMethodsEnabled,
    type ConnectorListResponse as ConnectorListResponse,
    type ConnectorDeleteResponse as ConnectorDeleteResponse,
    type ConnectorCreateParams as ConnectorCreateParams,
    type ConnectorRetrieveParams as ConnectorRetrieveParams,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorDeleteParams as ConnectorDeleteParams,
  };
}
