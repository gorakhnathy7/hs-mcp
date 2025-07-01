// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import * as ThreeDSDecisionAPI from '../three-ds-decision';
import * as ConnectorsAPI from './connectors';
import {
  AdditionalMerchantData,
  Connector,
  ConnectorCreateParams,
  ConnectorDeleteParams,
  ConnectorDeleteResponse,
  ConnectorListResponse,
  ConnectorRetrieveParams,
  ConnectorStatus,
  ConnectorType,
  ConnectorUpdateParams,
  ConnectorWalletDetails,
  Connectors,
  FrmConfigs,
  FrmPreferredFlowTypes,
  MerchantConnectorDetails,
  MerchantConnectorResponse,
  MerchantConnectorWebhookDetails,
  PaymentMethodsEnabled,
} from './connectors';
import * as CustomersAPI from '../customers/customers';
import * as PaymentMethodsAPI from '../customers/payment-methods';
import * as PaymentsAPI from '../payments/payments';
import * as PayoutsAPI from '../payouts/payouts';
import * as BusinessProfileAPI from './business-profile/business-profile';
import {
  AuthenticationConnectorDetails,
  BusinessPaymentLinkConfig,
  BusinessPayoutLinkConfig,
  BusinessProfile,
  BusinessProfileCreateParams,
  BusinessProfileDeleteParams,
  BusinessProfileDeleteResponse,
  BusinessProfileListResponse,
  BusinessProfileRetrieveParams,
  BusinessProfileUpdateParams,
  CardTestingGuardConfig,
  CardTestingGuardStatus,
  MerchantCategoryCode,
  PaymentLinkConfigRequest,
  ProfileCreate,
  ProfileResponse,
  UiWidgetFormLayout,
} from './business-profile/business-profile';
import * as DefaultAPI from '../routing/default/default';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  businessProfile: BusinessProfileAPI.BusinessProfile = new BusinessProfileAPI.BusinessProfile(this._client);

  /**
   * Create a new account for a _merchant_ and the _merchant_ could be a seller or
   * retailer or client who likes to receive and send payments.
   *
   * @example
   * ```ts
   * const merchantAccount = await client.accounts.create({
   *   merchant_id: 'merchant_abc',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<MerchantAccount> {
    return this._client.post('/accounts', { body, ...options });
  }

  /**
   * Retrieve a _merchant_ account details.
   *
   * @example
   * ```ts
   * const merchantAccount = await client.accounts.retrieve(
   *   'account_id',
   * );
   * ```
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<MerchantAccount> {
    return this._client.get(path`/accounts/${accountID}`, options);
  }

  /**
   * Updates details of an existing merchant account. Helpful in updating merchant
   * details such as email, contact details, or other configuration details like
   * webhook, routing algorithm etc
   *
   * @example
   * ```ts
   * const merchantAccount = await client.accounts.update(
   *   'account_id',
   *   {
   *     merchant_id: 'merchant_abc',
   *     merchant_name: 'merchant_name',
   *   },
   * );
   * ```
   */
  update(
    accountID: string,
    body: AccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MerchantAccount> {
    return this._client.post(path`/accounts/${accountID}`, { body, ...options });
  }

  /**
   * Delete a _merchant_ account
   *
   * @example
   * ```ts
   * const account = await client.accounts.delete('account_id');
   * ```
   */
  delete(accountID: string, options?: RequestOptions): APIPromise<AccountDeleteResponse> {
    return this._client.delete(path`/accounts/${accountID}`, options);
  }

  /**
   * Toggle KV mode for the Merchant Account
   *
   * @example
   * ```ts
   * const response = await client.accounts.kv('account_id', {
   *   kv_enabled: true,
   * });
   * ```
   */
  kv(accountID: string, body: AccountKvParams, options?: RequestOptions): APIPromise<AccountKvResponse> {
    return this._client.post(path`/accounts/${accountID}/kv`, { body, ...options });
  }

  /**
   * Lists the applicable payment methods for a particular Merchant ID. Use the
   * client secret and publishable key authorization to list all relevant payment
   * methods of the merchant for the payment corresponding to the client secret.
   *
   * @example
   * ```ts
   * const response = await client.accounts.listPaymentMethods();
   * ```
   */
  listPaymentMethods(
    query: AccountListPaymentMethodsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListPaymentMethodsResponse> {
    return this._client.get('/account/payment_methods', { query, ...options });
  }
}

/**
 * Object for GenericLinkUiConfig
 */
export interface BusinessCollectLinkConfig extends BusinessGenericLinkConfig {
  /**
   * List of payment methods shown on collect UI
   */
  enabled_payment_methods: Array<EnabledPaymentMethod>;
}

/**
 * Object for GenericLinkUiConfig
 */
export interface BusinessGenericLinkConfig extends PayoutsAPI.GenericLinkUiConfig {
  /**
   * A list of allowed domains (glob patterns) where this link can be embedded /
   * opened from
   */
  allowed_domains: Array<string>;

  /**
   * Custom domain name to be used for hosting the link
   */
  domain_name?: string | null;
}

/**
 * Indicates the card network.
 */
export type CardNetwork =
  | 'Visa'
  | 'Mastercard'
  | 'AmericanExpress'
  | 'JCB'
  | 'DinersClub'
  | 'Discover'
  | 'CartesBancaires'
  | 'UnionPay'
  | 'Interac'
  | 'RuPay'
  | 'Maestro'
  | 'Star'
  | 'Pulse'
  | 'Accel'
  | 'Nyce';

export type ConnectorSelection = ConnectorSelection.Priority | ConnectorSelection.VolumeSplit;

export namespace ConnectorSelection {
  export interface Priority {
    data: Array<DefaultAPI.RoutableConnectorChoice>;

    type: 'priority';
  }

  export interface VolumeSplit {
    data: Array<PaymentsAPI.ConnectorVolumeSplit>;

    type: 'volume_split';
  }
}

export type CountryAlpha2 =
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'CV'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'UM'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW'
  | 'US';

/**
 * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
 * amount. This field is mandatory for creating a payment.
 */
export type Currency =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STD'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZWL';

/**
 * Object for EnabledPaymentMethod
 */
export interface EnabledPaymentMethod {
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
   * An array of associated payment method types
   */
  payment_method_types: Array<PaymentsAPI.PaymentMethodType>;
}

/**
 * Represents an IF statement with conditions and optional nested IF statements
 *
 * ```text
 * payment.method = card {
 * payment.method.cardtype = (credit, debit) {
 * payment.method.network = (amex, rupay, diners)
 * }
 * }
 * ```
 */
export interface IfStatement {
  condition: Array<IfStatement.Condition>;

  nested?: Array<IfStatement> | null;
}

export namespace IfStatement {
  /**
   * Represents a single comparison condition.
   */
  export interface Condition {
    /**
     * Conditional comparison type
     */
    comparison:
      | 'equal'
      | 'not_equal'
      | 'less_than'
      | 'less_than_equal'
      | 'greater_than'
      | 'greater_than_equal';

    /**
     * The left hand side which will always be a domain input identifier like
     * "payment.method.cardtype"
     */
    lhs: string;

    /**
     * Additional metadata that the Static Analyzer and Backend does not touch. This
     * can be used to store useful information for the frontend and is required for
     * communication between the static analyzer and the frontend.
     */
    metadata: { [key: string]: unknown };

    /**
     * Represents a value in the DSL
     */
    value:
      | Condition.Number
      | Condition.EnumVariant
      | Condition.MetadataVariant
      | Condition.StrValue
      | Condition.NumberArray
      | Condition.EnumVariantArray
      | Condition.NumberComparisonArray;
  }

  export namespace Condition {
    export interface Number {
      type: 'number';

      /**
       * This Unit struct represents MinorUnit in which core amount works
       */
      value: number;
    }

    export interface EnumVariant {
      type: 'enum_variant';

      /**
       * Represents an enum variant
       */
      value: string;
    }

    export interface MetadataVariant {
      type: 'metadata_variant';

      value: MetadataVariant.Value;
    }

    export namespace MetadataVariant {
      export interface Value {
        key: string;

        value: string;
      }
    }

    export interface StrValue {
      type: 'str_value';

      /**
       * Represents a arbitrary String value
       */
      value: string;
    }

    export interface NumberArray {
      type: 'number_array';

      /**
       * Represents an array of numbers. This is basically used for "one of the given
       * numbers" operations eg: payment.method.amount = (1, 2, 3)
       */
      value: Array<number>;
    }

    export interface EnumVariantArray {
      type: 'enum_variant_array';

      /**
       * Similar to NumberArray but for enum variants eg: payment.method.cardtype =
       * (debit, credit)
       */
      value: Array<string>;
    }

    export interface NumberComparisonArray {
      type: 'number_comparison_array';

      /**
       * Like a number array but can include comparisons. Useful for conditions like "500
       * < amount < 1000" eg: payment.amount = (> 500, < 1000)
       */
      value: Array<NumberComparisonArray.Value>;
    }

    export namespace NumberComparisonArray {
      /**
       * Represents a number comparison for "NumberComparisonArrayValue"
       */
      export interface Value {
        /**
         * Conditional comparison type
         */
        comparisonType:
          | 'equal'
          | 'not_equal'
          | 'less_than'
          | 'less_than_equal'
          | 'greater_than'
          | 'greater_than_equal';

        /**
         * This Unit struct represents MinorUnit in which core amount works
         */
        number: number;
      }
    }
  }
}

export interface MandateAmountData {
  /**
   * The maximum amount to be debited for the mandate transaction
   */
  amount: number;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: Currency;

  /**
   * Specifying end date of the mandate
   */
  end_date?: string | null;

  /**
   * Additional details required by mandate
   */
  metadata?: unknown | null;

  /**
   * Specifying start date of the mandate
   */
  start_date?: string | null;
}

export type MandateType = MandateType.SingleUse | MandateType.MultiUse;

export namespace MandateType {
  export interface SingleUse {
    single_use: AccountsAPI.MandateAmountData;
  }

  export interface MultiUse {
    multi_use: AccountsAPI.MandateAmountData | null;
  }
}

export interface MerchantAccount {
  /**
   * A boolean value to indicate if payment response hash needs to be enabled
   */
  enable_payment_response_hash: boolean;

  /**
   * A boolean value to indicate if the merchant has recon service is enabled or not,
   * by default value is false
   */
  is_recon_enabled: boolean;

  merchant_account_type: 'standard' | 'platform' | 'connected';

  /**
   * The identifier for the Merchant Account
   */
  merchant_id: string;

  /**
   * The organization id merchant is associated with
   */
  organization_id: string;

  /**
   * Details about the primary business unit of the merchant account
   */
  primary_business_details: Array<PrimaryBusinessDetails>;

  recon_status: 'not_requested' | 'requested' | 'active' | 'disabled';

  /**
   * A boolean value to indicate if redirect to merchant with http post needs to be
   * enabled
   */
  redirect_to_merchant_with_http_post: boolean;

  /**
   * The default profile that must be used for creating merchant accounts and
   * payments
   */
  default_profile?: string | null;

  frm_routing_algorithm?: StaticRoutingAlgorithm | null;

  /**
   * An identifier for the vault used to store payment method information.
   */
  locker_id?: string | null;

  merchant_details?: MerchantDetails | null;

  /**
   * Name of the Merchant Account
   */
  merchant_name?: string | null;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * Refers to the Parent Merchant ID if the merchant being created is a sub-merchant
   */
  parent_merchant_id?: string | null;

  /**
   * Refers to the hash key used for calculating the signature for webhooks and
   * redirect response. If the value is not provided, a value is automatically
   * generated.
   */
  payment_response_hash_key?: string | null;

  payout_routing_algorithm?: StaticRoutingAlgorithm | null;

  /**
   * Object for GenericLinkUiConfig
   */
  pm_collect_link_config?: BusinessCollectLinkConfig | null;

  product_type?: MerchantProductType | null;

  /**
   * API key that will be used for server side API access
   */
  publishable_key?: string | null;

  /**
   * The URL to redirect after completion of the payment
   */
  return_url?: string | null;

  /**
   * A boolean value to indicate if the merchant is a sub-merchant under a master or
   * a parent merchant. By default, its value is false.
   */
  sub_merchants_enabled?: boolean | null;

  webhook_details?: WebhookDetails | null;
}

export interface MerchantDetails {
  /**
   * A brief description about merchant's business
   */
  about_business?: string | null;

  /**
   * Address details
   */
  address?: CustomersAPI.AddressDetails | null;

  /**
   * The merchant's primary contact name
   */
  primary_contact_person?: string | null;

  /**
   * The merchant's primary email address
   */
  primary_email?: string | null;

  /**
   * The merchant's primary phone number
   */
  primary_phone?: string | null;

  /**
   * The merchant's secondary contact name
   */
  secondary_contact_person?: string | null;

  /**
   * The merchant's secondary email address
   */
  secondary_email?: string | null;

  /**
   * The merchant's secondary phone number
   */
  secondary_phone?: string | null;

  /**
   * The business website of the merchant
   */
  website?: string | null;
}

export type MerchantProductType =
  | 'orchestration'
  | 'vault'
  | 'recon'
  | 'recovery'
  | 'cost_observability'
  | 'dynamic_routing';

export interface PrimaryBusinessDetails {
  business: string;

  country: CountryAlpha2;
}

export type StaticRoutingAlgorithm =
  | StaticRoutingAlgorithm.Single
  | StaticRoutingAlgorithm.Priority
  | StaticRoutingAlgorithm.VolumeSplit
  | StaticRoutingAlgorithm.Advanced
  | StaticRoutingAlgorithm.ThreeDSDecisionRule;

export namespace StaticRoutingAlgorithm {
  export interface Single {
    /**
     * Routable Connector chosen for a payment
     */
    data: DefaultAPI.RoutableConnectorChoice;

    type: 'single';
  }

  export interface Priority {
    data: Array<DefaultAPI.RoutableConnectorChoice>;

    type: 'priority';
  }

  export interface VolumeSplit {
    data: Array<PaymentsAPI.ConnectorVolumeSplit>;

    type: 'volume_split';
  }

  export interface Advanced {
    /**
     * The program, having a default connector selection and a bunch of rules. Also can
     * hold arbitrary metadata.
     */
    data: Advanced.Data;

    type: 'advanced';
  }

  export namespace Advanced {
    /**
     * The program, having a default connector selection and a bunch of rules. Also can
     * hold arbitrary metadata.
     */
    export interface Data {
      defaultSelection: AccountsAPI.ConnectorSelection;

      metadata: { [key: string]: unknown };

      /**
       * Represents a rule
       *
       * ```text
       * rule_name: [stripe, adyen, checkout]
       * {
       * payment.method = card {
       * payment.method.cardtype = (credit, debit) {
       * payment.method.network = (amex, rupay, diners)
       * }
       *
       * payment.method.cardtype = credit
       * }
       * }
       * ```
       */
      rules: Data.Rules;
    }

    export namespace Data {
      /**
       * Represents a rule
       *
       * ```text
       * rule_name: [stripe, adyen, checkout]
       * {
       * payment.method = card {
       * payment.method.cardtype = (credit, debit) {
       * payment.method.network = (amex, rupay, diners)
       * }
       *
       * payment.method.cardtype = credit
       * }
       * }
       * ```
       */
      export interface Rules {
        connectorSelection: AccountsAPI.ConnectorSelection;

        name: string;

        statements: Array<AccountsAPI.IfStatement>;
      }
    }
  }

  export interface ThreeDSDecisionRule {
    data: ThreeDSDecisionRule.Data;

    type: 'three_ds_decision_rule';
  }

  export namespace ThreeDSDecisionRule {
    export interface Data {
      /**
       * Struct representing the output configuration for the 3DS Decision Rule Engine.
       */
      defaultSelection: Data.DefaultSelection;

      metadata: { [key: string]: unknown };

      rules: Data.Rules;
    }

    export namespace Data {
      /**
       * Struct representing the output configuration for the 3DS Decision Rule Engine.
       */
      export interface DefaultSelection {
        /**
         * Enum representing the possible outcomes of the 3DS Decision Rule Engine.
         */
        decision: ThreeDSDecisionAPI.ThreeDSDecision;
      }

      export interface Rules {
        /**
         * Enum representing the possible outcomes of the 3DS Decision Rule Engine.
         */
        connectorSelection: ThreeDSDecisionAPI.ThreeDSDecision;

        name: string;

        statements: Array<AccountsAPI.IfStatement>;
      }
    }
  }
}

export interface WebhookDetails {
  /**
   * List of payment statuses that triggers a webhook for payment intents
   */
  payment_statuses_enabled: Array<PaymentsAPI.IntentStatus>;

  /**
   * List of refund statuses that triggers a webhook for refunds
   */
  refund_statuses_enabled: Array<PaymentsAPI.IntentStatus>;

  /**
   * If this property is true, a webhook message is posted whenever a new payment is
   * created
   */
  payment_created_enabled?: boolean | null;

  /**
   * If this property is true, a webhook message is posted whenever a payment fails
   */
  payment_failed_enabled?: boolean | null;

  /**
   * If this property is true, a webhook message is posted whenever a payment is
   * successful
   */
  payment_succeeded_enabled?: boolean | null;

  /**
   * List of payout statuses that triggers a webhook for payouts
   */
  payout_statuses_enabled?: Array<PayoutsAPI.Status> | null;

  /**
   * The password for Webhook login
   */
  webhook_password?: string | null;

  /**
   * The url for the webhook endpoint
   */
  webhook_url?: string | null;

  /**
   * The user name for Webhook login
   */
  webhook_username?: string | null;

  /**
   * The version for Webhook
   */
  webhook_version?: string | null;
}

export interface AccountDeleteResponse {
  /**
   * If the connector is deleted or not
   */
  deleted: boolean;

  /**
   * The identifier for the Merchant Account
   */
  merchant_id: string;
}

export interface AccountKvResponse {
  /**
   * Status of KV for the specific merchant
   */
  kv_enabled: boolean;

  /**
   * The identifier for the Merchant Account
   */
  merchant_id: string;
}

export interface AccountListPaymentMethodsResponse {
  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: Currency;

  /**
   * flag that indicates whether to calculate tax on the order amount
   */
  is_tax_calculation_enabled: boolean;

  mandate_payment: MandateType;

  /**
   * Information about the payment method
   */
  payment_methods: Array<AccountListPaymentMethodsResponse.PaymentMethod>;

  /**
   * flag to indicate whether to perform external 3ds authentication
   */
  request_external_three_ds_authentication: boolean;

  /**
   * flag to indicate if surcharge and tax breakup screen should be shown or not
   */
  show_surcharge_breakup_screen: boolean;

  /**
   * flag that indicates whether to collect billing details from wallets or from the
   * customer
   */
  collect_billing_details_from_wallets?: boolean | null;

  /**
   * flag that indicates whether to collect shipping details from wallets or from the
   * customer
   */
  collect_shipping_details_from_wallets?: boolean | null;

  merchant_name?: string | null;

  /**
   * The type of the payment that differentiates between normal and various types of
   * mandate payments. Use 'setup_mandate' in case of zero auth flow.
   */
  payment_type?: PaymentsAPI.PaymentType | null;

  /**
   * Redirect URL of the merchant
   */
  redirect_url?: string | null;
}

export namespace AccountListPaymentMethodsResponse {
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

    /**
     * The list of payment method types enabled for a connector account
     */
    payment_method_types: Array<PaymentMethod.PaymentMethodType>;
  }

  export namespace PaymentMethod {
    export interface PaymentMethodType {
      /**
       * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
       * wallets.
       */
      payment_method_type: PaymentsAPI.PaymentMethodType;

      bank_debits?: PaymentMethodType.BankDebits | null;

      /**
       * The list of banks enabled, if applicable for a payment method type
       */
      bank_names?: Array<PaymentMethodType.BankName> | null;

      bank_transfers?: PaymentMethodType.BankTransfers | null;

      /**
       * The list of card networks enabled, if applicable for a payment method type
       */
      card_networks?: Array<PaymentMethodType.CardNetwork> | null;

      /**
       * The list of payment experiences enabled, if applicable for a payment method type
       */
      payment_experience?: Array<PaymentMethodType.PaymentExperience> | null;

      /**
       * auth service connector label for this payment method type, if exists
       */
      pm_auth_connector?: string | null;

      /**
       * Required fields for the payment_method_type.
       */
      required_fields?: { [key: string]: PaymentMethodType.RequiredFields } | null;

      surcharge_details?: PaymentMethodsAPI.SurchargeDetails | null;
    }

    export namespace PaymentMethodType {
      export interface BankDebits {
        eligible_connectors: Array<string>;
      }

      export interface BankName {
        bank_name: Array<PayoutsAPI.BankNames>;

        eligible_connectors: Array<string>;
      }

      export interface BankTransfers {
        /**
         * The list of eligible connectors for a given payment experience
         */
        eligible_connectors: Array<string>;
      }

      export interface CardNetwork {
        /**
         * The list of eligible connectors for a given card network
         */
        eligible_connectors: Array<string>;

        /**
         * Indicates the card network.
         */
        card_network?: AccountsAPI.CardNetwork | null;

        surcharge_details?: PaymentMethodsAPI.SurchargeDetails | null;
      }

      export interface PaymentExperience {
        /**
         * The list of eligible connectors for a given payment experience
         */
        eligible_connectors: Array<string>;

        /**
         * To indicate the type of payment experience that the customer would go through
         */
        payment_experience_type?: PaymentsAPI.PaymentExperience | null;
      }

      /**
       * Required fields info used while listing the payment_method_data
       */
      export interface RequiredFields {
        /**
         * Display name of the required field in the front-end
         */
        display_name: string;

        /**
         * Possible field type of required fields in payment_method_data
         */
        field_type:
          | 'user_card_number'
          | 'user_card_expiry_month'
          | 'user_card_expiry_year'
          | 'user_card_cvc'
          | 'user_card_network'
          | 'user_full_name'
          | 'user_email_address'
          | 'user_phone_number'
          | 'user_phone_number_country_code'
          | 'user_crypto_currency_network'
          | 'user_billing_name'
          | 'user_address_line1'
          | 'user_address_line2'
          | 'user_address_city'
          | 'user_address_pincode'
          | 'user_address_state'
          | 'user_shipping_name'
          | 'user_shipping_address_line1'
          | 'user_shipping_address_line2'
          | 'user_shipping_address_city'
          | 'user_shipping_address_pincode'
          | 'user_shipping_address_state'
          | 'user_social_security_number'
          | 'user_blik_code'
          | 'user_bank'
          | 'user_bank_account_number'
          | 'user_source_bank_account_id'
          | 'user_destination_bank_account_id'
          | 'text'
          | 'user_date_of_birth'
          | 'user_vpa_id'
          | 'user_pix_key'
          | 'user_cpf'
          | 'user_cnpj'
          | 'user_iban'
          | 'user_bsb_number'
          | 'user_bank_sort_code'
          | 'user_bank_routing_number'
          | 'user_msisdn'
          | 'user_client_identifier'
          | 'order_details_product_name'
          | RequiredFields.UserCountry
          | RequiredFields.UserCurrency
          | RequiredFields.UserAddressCountry
          | RequiredFields.UserShippingAddressCountry
          | RequiredFields.DropDown
          | RequiredFields.LanguagePreference;

        /**
         * Required field for a payment_method through a payment_method_type
         */
        required_field: string;

        value?: string | null;
      }

      export namespace RequiredFields {
        export interface UserCountry {
          user_country: UserCountry.UserCountry;
        }

        export namespace UserCountry {
          export interface UserCountry {
            options: Array<string>;
          }
        }

        export interface UserCurrency {
          user_currency: UserCurrency.UserCurrency;
        }

        export namespace UserCurrency {
          export interface UserCurrency {
            options: Array<string>;
          }
        }

        export interface UserAddressCountry {
          user_address_country: UserAddressCountry.UserAddressCountry;
        }

        export namespace UserAddressCountry {
          export interface UserAddressCountry {
            options: Array<string>;
          }
        }

        export interface UserShippingAddressCountry {
          user_shipping_address_country: UserShippingAddressCountry.UserShippingAddressCountry;
        }

        export namespace UserShippingAddressCountry {
          export interface UserShippingAddressCountry {
            options: Array<string>;
          }
        }

        export interface DropDown {
          drop_down: DropDown.DropDown;
        }

        export namespace DropDown {
          export interface DropDown {
            options: Array<string>;
          }
        }

        export interface LanguagePreference {
          language_preference: LanguagePreference.LanguagePreference;
        }

        export namespace LanguagePreference {
          export interface LanguagePreference {
            options: Array<string>;
          }
        }
      }
    }
  }
}

export interface AccountCreateParams {
  /**
   * The identifier for the Merchant Account
   */
  merchant_id: string;

  /**
   * A boolean value to indicate if payment response hash needs to be enabled
   */
  enable_payment_response_hash?: boolean | null;

  /**
   * The frm routing algorithm to be used for routing payments to desired FRM's
   */
  frm_routing_algorithm?: unknown | null;

  /**
   * An identifier for the vault used to store payment method information.
   */
  locker_id?: string | null;

  merchant_account_type?: 'standard' | 'connected' | null;

  merchant_details?: MerchantDetails | null;

  /**
   * Name of the Merchant Account
   */
  merchant_name?: string | null;

  /**
   * Metadata is useful for storing additional, unstructured information on an object
   */
  metadata?: unknown | null;

  /**
   * The id of the organization to which the merchant belongs to, if not passed an
   * organization is created
   */
  organization_id?: string | null;

  /**
   * Refers to the Parent Merchant ID if the merchant being created is a sub-merchant
   */
  parent_merchant_id?: string | null;

  /**
   * Refers to the hash key used for calculating the signature for webhooks and
   * redirect response. If the value is not provided, a value is automatically
   * generated.
   */
  payment_response_hash_key?: string | null;

  payout_routing_algorithm?: StaticRoutingAlgorithm | null;

  /**
   * Object for GenericLinkUiConfig
   */
  pm_collect_link_config?: BusinessCollectLinkConfig | null;

  primary_business_details?: PrimaryBusinessDetails | null;

  product_type?: MerchantProductType | null;

  /**
   * API key that will be used for client side API access. A publishable key has to
   * be always paired with a `client_secret`. A `client_secret` can be obtained by
   * creating a payment with `confirm` set to false
   */
  publishable_key?: string | null;

  /**
   * A boolean value to indicate if redirect to merchant with http post needs to be
   * enabled.
   */
  redirect_to_merchant_with_http_post?: boolean | null;

  /**
   * The URL to redirect after the completion of the operation
   */
  return_url?: string | null;

  /**
   * A boolean value to indicate if the merchant is a sub-merchant under a master or
   * a parent merchant. By default, its value is false.
   */
  sub_merchants_enabled?: boolean | null;

  webhook_details?: WebhookDetails | null;
}

export interface AccountUpdateParams {
  /**
   * The identifier for the Merchant Account
   */
  merchant_id: string;

  /**
   * The default profile that must be used for creating merchant accounts and
   * payments
   */
  default_profile?: string | null;

  /**
   * A boolean value to indicate if payment response hash needs to be enabled
   */
  enable_payment_response_hash?: boolean | null;

  /**
   * The frm routing algorithm to be used for routing payments to desired FRM's
   */
  frm_routing_algorithm?: unknown | null;

  /**
   * An identifier for the vault used to store payment method information.
   */
  locker_id?: string | null;

  merchant_details?: MerchantDetails | null;

  /**
   * Name of the Merchant Account
   */
  merchant_name?: string | null;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * Refers to the Parent Merchant ID if the merchant being created is a sub-merchant
   */
  parent_merchant_id?: string | null;

  /**
   * Refers to the hash key used for calculating the signature for webhooks and
   * redirect response.
   */
  payment_response_hash_key?: string | null;

  payout_routing_algorithm?: StaticRoutingAlgorithm | null;

  /**
   * Object for GenericLinkUiConfig
   */
  pm_collect_link_config?: BusinessCollectLinkConfig | null;

  /**
   * Details about the primary business unit of the merchant account
   */
  primary_business_details?: Array<PrimaryBusinessDetails> | null;

  /**
   * API key that will be used for server side API access
   */
  publishable_key?: string | null;

  /**
   * A boolean value to indicate if redirect to merchant with http post needs to be
   * enabled
   */
  redirect_to_merchant_with_http_post?: boolean | null;

  /**
   * The URL to redirect after the completion of the operation
   */
  return_url?: string | null;

  /**
   * A boolean value to indicate if the merchant is a sub-merchant under a master or
   * a parent merchant. By default, its value is false.
   */
  sub_merchants_enabled?: boolean | null;

  webhook_details?: WebhookDetails | null;
}

export interface AccountKvParams {
  /**
   * Status of KV for the specific merchant
   */
  kv_enabled: boolean;
}

export interface AccountListPaymentMethodsParams {
  /**
   * The two-letter ISO currency code
   */
  accepted_countries?: Array<CountryAlpha2> | null;

  /**
   * The three-letter ISO currency code
   */
  accepted_currencies?: Array<Currency> | null;

  /**
   * The amount accepted for processing by the particular payment method.
   */
  amount?: number | null;

  /**
   * Indicates whether the payment method is eligible for card netwotks
   */
  card_networks?: Array<CardNetwork> | null;

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

Accounts.Connectors = Connectors;
Accounts.BusinessProfile = BusinessProfile;

export declare namespace Accounts {
  export {
    type BusinessCollectLinkConfig as BusinessCollectLinkConfig,
    type BusinessGenericLinkConfig as BusinessGenericLinkConfig,
    type CardNetwork as CardNetwork,
    type ConnectorSelection as ConnectorSelection,
    type CountryAlpha2 as CountryAlpha2,
    type Currency as Currency,
    type EnabledPaymentMethod as EnabledPaymentMethod,
    type IfStatement as IfStatement,
    type MandateAmountData as MandateAmountData,
    type MandateType as MandateType,
    type MerchantAccount as MerchantAccount,
    type MerchantDetails as MerchantDetails,
    type MerchantProductType as MerchantProductType,
    type PrimaryBusinessDetails as PrimaryBusinessDetails,
    type StaticRoutingAlgorithm as StaticRoutingAlgorithm,
    type WebhookDetails as WebhookDetails,
    type AccountDeleteResponse as AccountDeleteResponse,
    type AccountKvResponse as AccountKvResponse,
    type AccountListPaymentMethodsResponse as AccountListPaymentMethodsResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountKvParams as AccountKvParams,
    type AccountListPaymentMethodsParams as AccountListPaymentMethodsParams,
  };

  export {
    Connectors as Connectors,
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

  export {
    BusinessProfile as BusinessProfile,
    type AuthenticationConnectorDetails as AuthenticationConnectorDetails,
    type BusinessPaymentLinkConfig as BusinessPaymentLinkConfig,
    type BusinessPayoutLinkConfig as BusinessPayoutLinkConfig,
    type CardTestingGuardConfig as CardTestingGuardConfig,
    type CardTestingGuardStatus as CardTestingGuardStatus,
    type MerchantCategoryCode as MerchantCategoryCode,
    type PaymentLinkConfigRequest as PaymentLinkConfigRequest,
    type ProfileCreate as ProfileCreate,
    type ProfileResponse as ProfileResponse,
    type UiWidgetFormLayout as UiWidgetFormLayout,
    type BusinessProfileListResponse as BusinessProfileListResponse,
    type BusinessProfileDeleteResponse as BusinessProfileDeleteResponse,
    type BusinessProfileCreateParams as BusinessProfileCreateParams,
    type BusinessProfileRetrieveParams as BusinessProfileRetrieveParams,
    type BusinessProfileUpdateParams as BusinessProfileUpdateParams,
    type BusinessProfileDeleteParams as BusinessProfileDeleteParams,
  };
}
