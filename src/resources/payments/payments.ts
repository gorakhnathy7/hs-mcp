// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PaymentsAPI from './payments';
import * as AuthenticationAPI from '../authentication';
import * as DisputesAPI from '../disputes';
import * as RefundsAPI from '../refunds';
import * as AccountsAPI from '../accounts/accounts';
import * as ConnectorsAPI from '../accounts/connectors';
import * as CustomersAPI from '../customers/customers';
import * as Number3DSAPI from './number-3ds';
import {
  Number3DS,
  Number3DSAuthenticateParams,
  Number3DSAuthenticateResponse,
  ThreeDSCompletionIndicator,
} from './number-3ds';
import * as PayoutsAPI from '../payouts/payouts';
import * as BusinessProfileAPI from '../accounts/business-profile/business-profile';
import * as DefaultAPI from '../routing/default/default';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Payments extends APIResource {
  number3DS: Number3DSAPI.Number3DS = new Number3DSAPI.Number3DS(this._client);

  /**
   * Creates a payment resource, which represents a customer's intent to pay. This
   * endpoint is the starting point for various payment flows:
   *
   * @example
   * ```ts
   * const paymentsCreateResponseOpenAPI =
   *   await client.payments.create({
   *     amount: 6540,
   *     currency: 'USD',
   *   });
   * ```
   */
  create(body: PaymentCreateParams, options?: RequestOptions): APIPromise<PaymentsCreateResponseOpenAPI> {
    return this._client.post('/payments', { body, ...options });
  }

  /**
   * Retrieves a Payment. This API can also be used to get the status of a previously
   * initiated payment or next action for an ongoing payment
   *
   * @example
   * ```ts
   * const paymentsResponse = await client.payments.retrieve(
   *   'payment_id',
   * );
   * ```
   */
  retrieve(
    paymentID: string,
    query: PaymentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentsResponse> {
    return this._client.get(path`/payments/${paymentID}`, { query, ...options });
  }

  /**
   * To update the properties of a _PaymentIntent_ object. This may include attaching
   * a payment method, or attaching customer object or metadata fields after the
   * Payment is created
   *
   * @example
   * ```ts
   * const paymentsCreateResponseOpenAPI =
   *   await client.payments.update('payment_id', {
   *     amount: 7654,
   *   });
   * ```
   */
  update(
    paymentID: string,
    body: PaymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentsCreateResponseOpenAPI> {
    return this._client.post(path`/payments/${paymentID}`, { body, ...options });
  }

  /**
   * To list the _payments_
   *
   * @example
   * ```ts
   * const payments = await client.payments.list();
   * ```
   */
  list(
    query: PaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentListResponse> {
    return this._client.get('/payments/list', { query, ...options });
  }

  /**
   * A Payment could can be cancelled when it is in one of these statuses:
   * `requires_payment_method`, `requires_capture`, `requires_confirmation`,
   * `requires_customer_action`.
   *
   * @example
   * ```ts
   * await client.payments.cancel('payment_id', {
   *   cancellation_reason: 'requested_by_customer',
   * });
   * ```
   */
  cancel(paymentID: string, body: PaymentCancelParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/payments/${paymentID}/cancel`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Captures the funds for a previously authorized payment intent where
   * `capture_method` was set to `manual` and the payment is in a `requires_capture`
   * state.
   *
   * Upon successful capture, the payment status usually transitions to `succeeded`.
   * The `amount_to_capture` can be specified in the request body; it must be less
   * than or equal to the payment's `amount_capturable`. If omitted, the full
   * capturable amount is captured.
   *
   * A payment must be in a capturable state (e.g., `requires_capture`). Attempting
   * to capture an already `succeeded` (and fully captured) payment or one in an
   * invalid state will lead to an error.
   *
   * @example
   * ```ts
   * const paymentsResponse = await client.payments.capture(
   *   'payment_id',
   *   { amount_to_capture: 654 },
   * );
   * ```
   */
  capture(
    paymentID: string,
    body: PaymentCaptureParams,
    options?: RequestOptions,
  ): APIPromise<PaymentsResponse> {
    return this._client.post(path`/payments/${paymentID}/capture`, { body, ...options });
  }

  /**
   * Payments - Complete Authorize
   *
   * @example
   * ```ts
   * const paymentsResponse =
   *   await client.payments.completeAuthorize('payment_id', {
   *     client_secret: 'client_secret',
   *   });
   * ```
   */
  completeAuthorize(
    paymentID: string,
    body: PaymentCompleteAuthorizeParams,
    options?: RequestOptions,
  ): APIPromise<PaymentsResponse> {
    return this._client.post(path`/payments/${paymentID}/complete_authorize`, { body, ...options });
  }

  /**
   * Confirms a payment intent that was previously created with `confirm: false`.
   * This action attempts to authorize the payment with the payment processor.
   *
   * Expected status transitions after confirmation:
   *
   * - `succeeded`: If authorization is successful and `capture_method` is
   *   `automatic`.
   * - `requires_capture`: If authorization is successful and `capture_method` is
   *   `manual`.
   * - `failed`: If authorization fails.
   *
   * @example
   * ```ts
   * const paymentsCreateResponseOpenAPI =
   *   await client.payments.confirm('payment_id', {
   *     customer_acceptance: {
   *       acceptance_type: 'online',
   *       accepted_at: '1963-05-03T04:07:52.723Z',
   *       online: {
   *         ip_address: '127.0.0.1',
   *         user_agent: 'amet irure esse',
   *       },
   *     },
   *     payment_method: 'card',
   *     payment_method_data: {
   *       card: {
   *         card_cvc: '123',
   *         card_exp_month: '10',
   *         card_exp_year: '25',
   *         card_holder_name: 'joseph Doe',
   *         card_number: '4242424242424242',
   *       },
   *     },
   *     payment_method_type: 'credit',
   *   });
   * ```
   */
  confirm(
    paymentID: string,
    body: PaymentConfirmParams,
    options?: RequestOptions,
  ): APIPromise<PaymentsCreateResponseOpenAPI> {
    return this._client.post(path`/payments/${paymentID}/confirm`, { body, ...options });
  }

  /**
   * Creates a session object or a session token for wallets like Apple Pay, Google
   * Pay, etc. These tokens are used by Hyperswitch's SDK to initiate these wallets'
   * SDK.
   *
   * @example
   * ```ts
   * const response = await client.payments.createSessionToken({
   *   client_secret: 'client_secret',
   *   payment_id: 'payment_id',
   *   wallets: ['ach'],
   * });
   * ```
   */
  createSessionToken(
    body: PaymentCreateSessionTokenParams,
    options?: RequestOptions,
  ): APIPromise<PaymentCreateSessionTokenResponse> {
    return this._client.post('/payments/session_tokens', { body, ...options });
  }

  /**
   * Authorized amount for a payment can be incremented if it is in status:
   * requires_capture
   *
   * @example
   * ```ts
   * const paymentsResponse =
   *   await client.payments.incrementalAuthorization(
   *     'payment_id',
   *     { amount: 6540 },
   *   );
   * ```
   */
  incrementalAuthorization(
    paymentID: string,
    body: PaymentIncrementalAuthorizationParams,
    options?: RequestOptions,
  ): APIPromise<PaymentsResponse> {
    return this._client.post(path`/payments/${paymentID}/incremental_authorization`, { body, ...options });
  }

  /**
   * Payments - Post Session Tokens
   *
   * @example
   * ```ts
   * const response = await client.payments.postSessionTokens(
   *   'payment_id',
   *   {
   *     client_secret: 'client_secret',
   *     payment_method: 'card',
   *     payment_method_type: 'ach',
   *   },
   * );
   * ```
   */
  postSessionTokens(
    paymentID: string,
    body: PaymentPostSessionTokensParams,
    options?: RequestOptions,
  ): APIPromise<PaymentPostSessionTokensResponse> {
    return this._client.post(path`/payments/${paymentID}/post_session_tokens`, { body, ...options });
  }

  /**
   * Payments - Update Metadata
   *
   * @example
   * ```ts
   * const response = await client.payments.updateMetadata(
   *   'payment_id',
   *   { metadata: {} },
   * );
   * ```
   */
  updateMetadata(
    paymentID: string,
    body: PaymentUpdateMetadataParams,
    options?: RequestOptions,
  ): APIPromise<PaymentUpdateMetadataResponse> {
    return this._client.post(path`/payments/${paymentID}/update_metadata`, { body, ...options });
  }
}

export interface Address {
  /**
   * Address details
   */
  address?: CustomersAPI.AddressDetails | null;

  email?: string | null;

  phone?: Address.Phone | null;
}

export namespace Address {
  export interface Phone {
    /**
     * The country code attached to the number
     */
    country_code?: string | null;

    /**
     * The contact number
     */
    number?: string | null;
  }
}

/**
 * Fee information for Split Payments to be charged on the payment being collected
 * for Adyen
 */
export interface AdyenSplitData {
  /**
   * Data for the split items
   */
  split_items: Array<AdyenSplitData.SplitItem>;

  /**
   * The store identifier
   */
  store?: string | null;
}

export namespace AdyenSplitData {
  /**
   * Data for the split items
   */
  export interface SplitItem {
    /**
     * The amount of the split item
     */
    amount: number;

    /**
     * Unique Identifier for the split item
     */
    reference: string;

    split_type:
      | 'BalanceAccount'
      | 'AcquiringFees'
      | 'PaymentFee'
      | 'AdyenFees'
      | 'AdyenCommission'
      | 'AdyenMarkup'
      | 'Interchange'
      | 'SchemeFee'
      | 'Commission'
      | 'TopUp'
      | 'Vat';

    /**
     * The unique identifier of the account to which the split amount is allocated.
     */
    account?: string | null;

    /**
     * Description for the part of the payment that will be allocated to the specified
     * account.
     */
    description?: string | null;
  }
}

export type ApplePayAddressParameters = 'postalAddress' | 'phone' | 'email';

/**
 * Specifies the type of cardholder authentication to be applied for a payment.
 *
 * - `ThreeDs`: Requests 3D Secure (3DS) authentication. If the card is enrolled,
 *   3DS authentication will be activated, potentially shifting chargeback
 *   liability to the issuer.
 * - `NoThreeDs`: Indicates that 3D Secure authentication should not be performed.
 *   The liability for chargebacks typically remains with the merchant. This is
 *   often the default if not specified.
 *
 * Note: The actual authentication behavior can also be influenced by merchant
 * configuration and specific connector defaults. Some connectors might still
 * enforce 3DS or bypass it regardless of this parameter.
 */
export type AuthenticationType = 'three_ds' | 'no_three_ds';

export interface BankDebitBilling {
  /**
   * Address details
   */
  address?: CustomersAPI.AddressDetails | null;

  /**
   * The billing email for bank debits
   */
  email?: string | null;

  /**
   * The billing name for bank debits
   */
  name?: string | null;
}

export interface BankRedirectBilling {
  /**
   * The name for which billing is issued
   */
  billing_name: string;

  /**
   * The billing email for bank redirect
   */
  email: string;
}

/**
 * Browser information to be used for 3DS 2.0
 */
export interface BrowserInformation {
  /**
   * List of headers that are accepted
   */
  accept_header?: string | null;

  /**
   * Color depth supported by the browser
   */
  color_depth?: number | null;

  /**
   * The device model of the client
   */
  device_model?: string | null;

  /**
   * Ip address of the client
   */
  ip_address?: string | null;

  /**
   * Whether java is enabled in the browser
   */
  java_enabled?: boolean | null;

  /**
   * Whether javascript is enabled in the browser
   */
  java_script_enabled?: boolean | null;

  /**
   * Language supported
   */
  language?: string | null;

  /**
   * The os type of the client device
   */
  os_type?: string | null;

  /**
   * The os version of the client device
   */
  os_version?: string | null;

  /**
   * The screen height in pixels
   */
  screen_height?: number | null;

  /**
   * The screen width in pixels
   */
  screen_width?: number | null;

  /**
   * Time zone of the client
   */
  time_zone?: number | null;

  /**
   * User-agent of the browser
   */
  user_agent?: string | null;
}

/**
 * Specifies how the payment is captured.
 *
 * - `automatic`: Funds are captured immediately after successful authorization.
 *   This is the default behavior if the field is omitted.
 * - `manual`: Funds are authorized but not captured. A separate request to the
 *   `/payments/{payment_id}/capture` endpoint is required to capture the funds.
 */
export type CaptureMethod = 'automatic' | 'manual' | 'manual_multiple' | 'scheduled' | 'sequential_automatic';

export interface CaptureResponse {
  /**
   * The capture amount. Amount for the payment in lowest denomination of the
   * currency. (i.e) in cents for USD denomination, in paisa for INR denomination
   * etc.,
   */
  amount: number;

  /**
   * The ID of the payment attempt that was successfully authorized and subsequently
   * captured by this operation.
   */
  authorized_attempt_id: string;

  /**
   * A unique identifier for this specific capture operation.
   */
  capture_id: string;

  /**
   * Sequence number of this capture, in the series of captures made for the parent
   * attempt
   */
  capture_sequence: number;

  /**
   * The name of the payment connector that processed this capture.
   */
  connector: string;

  status: 'started' | 'charged' | 'pending' | 'failed';

  /**
   * A unique identifier for this capture provided by the connector
   */
  connector_capture_id?: string | null;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency?: AccountsAPI.Currency | null;

  /**
   * The error code returned by the connector if this capture operation failed. This
   * code is connector-specific.
   */
  error_code?: string | null;

  /**
   * A human-readable message from the connector explaining why this capture
   * operation failed, if applicable.
   */
  error_message?: string | null;

  /**
   * A more detailed reason from the connector explaining the capture failure, if
   * available.
   */
  error_reason?: string | null;

  /**
   * The connector's own reference or transaction ID for this specific capture
   * operation. Useful for reconciliation.
   */
  reference_id?: string | null;
}

/**
 * Indicates the method by which a card is discovered during a payment
 */
export type CardDiscovery = 'manual' | 'saved_card' | 'click_to_pay';

export type CardRedirectData =
  | CardRedirectData.Knet
  | CardRedirectData.Benefit
  | CardRedirectData.MomoAtm
  | CardRedirectData.CardRedirect;

export namespace CardRedirectData {
  export interface Knet {
    knet: unknown;
  }

  export interface Benefit {
    benefit: unknown;
  }

  export interface MomoAtm {
    momo_atm: unknown;
  }

  export interface CardRedirect {
    card_redirect: unknown;
  }
}

/**
 * Charge Information
 */
export type ConnectorChargeResponseData =
  | ConnectorChargeResponseData.StripeSplitPayment
  | ConnectorChargeResponseData.AdyenSplitPayment
  | ConnectorChargeResponseData.XenditSplitPayment;

export namespace ConnectorChargeResponseData {
  export interface StripeSplitPayment {
    /**
     * Fee information to be charged on the payment being collected via Stripe
     */
    stripe_split_payment: StripeSplitPayment.StripeSplitPayment;
  }

  export namespace StripeSplitPayment {
    /**
     * Fee information to be charged on the payment being collected via Stripe
     */
    export interface StripeSplitPayment {
      /**
       * Platform fees collected on the payment
       */
      application_fees: number;

      charge_type: PaymentsAPI.PaymentChargeType;

      /**
       * Identifier for the reseller's account where the funds were transferred
       */
      transfer_account_id: string;

      /**
       * Identifier for charge created for the payment
       */
      charge_id?: string | null;
    }
  }

  export interface AdyenSplitPayment {
    /**
     * Fee information for Split Payments to be charged on the payment being collected
     * for Adyen
     */
    adyen_split_payment: PaymentsAPI.AdyenSplitData;
  }

  export interface XenditSplitPayment {
    /**
     * Charge Information
     */
    xendit_split_payment: XenditSplitPayment.MultipleSplits | XenditSplitPayment.SingleSplit;
  }

  export namespace XenditSplitPayment {
    export interface MultipleSplits {
      /**
       * Fee information charged on the payment being collected via xendit
       */
      multiple_splits: MultipleSplits.MultipleSplits;
    }

    export namespace MultipleSplits {
      /**
       * Fee information charged on the payment being collected via xendit
       */
      export interface MultipleSplits {
        /**
         * Description to identify fee rule
         */
        description: string;

        /**
         * Name to identify split rule. Not required to be unique. Typically based on
         * transaction and/or sub-merchant types.
         */
        name: string;

        /**
         * Array of objects that define how the platform wants to route the fees and to
         * which accounts.
         */
        routes: Array<PaymentsAPI.XenditSplitRoute>;

        /**
         * Identifier for split rule created for the payment
         */
        split_rule_id: string;

        /**
         * The sub-account user-id that you want to make this transaction for.
         */
        for_user_id?: string | null;
      }
    }

    export interface SingleSplit {
      /**
       * Fee information to be charged on the payment being collected for sub-merchant
       * via xendit
       */
      single_split: RefundsAPI.XenditSplitSubMerchantData;
    }
  }
}

/**
 * Some connectors like Apple Pay, Airwallex and Noon might require some additional
 * information, find specific details in the child attributes below.
 */
export interface ConnectorMetadata {
  adyen?: ConnectorMetadata.Adyen | null;

  airwallex?: ConnectorMetadata.Airwallex | null;

  apple_pay?: ConnectorMetadata.ApplePay | null;

  braintree?: ConnectorMetadata.Braintree | null;

  noon?: ConnectorMetadata.Noon | null;
}

export namespace ConnectorMetadata {
  export interface Adyen {
    testing: Adyen.Testing;
  }

  export namespace Adyen {
    export interface Testing {
      /**
       * Holder name to be sent to Adyen for a card payment(CIT) or a generic
       * payment(MIT). This value overrides the values for card.card_holder_name and
       * applies during both CIT and MIT payment transactions.
       */
      holder_name: string;
    }
  }

  export interface Airwallex {
    /**
     * payload required by airwallex
     */
    payload?: string | null;
  }

  export interface ApplePay {
    session_token_data?: ApplePay.UnionMember0 | ApplePay.UnionMember1 | null;
  }

  export namespace ApplePay {
    export interface UnionMember0 {
      payment_processing_certificate: string;

      payment_processing_certificate_key: string;

      payment_processing_details_at: 'Hyperswitch';

      certificate?: string;

      certificate_keys?: string;

      display_name?: string;

      initiative?: 'web' | 'ios';

      initiative_context?: string | null;

      merchant_business_country?: AccountsAPI.CountryAlpha2 | null;

      merchant_identifier?: string;
    }

    export interface UnionMember1 {
      payment_processing_details_at: 'Connector';

      certificate?: string;

      certificate_keys?: string;

      display_name?: string;

      initiative?: 'web' | 'ios';

      initiative_context?: string | null;

      merchant_business_country?: AccountsAPI.CountryAlpha2 | null;

      merchant_identifier?: string;
    }
  }

  export interface Braintree {
    /**
     * Information about the merchant_account_id that merchant wants to specify at
     * connector level.
     */
    merchant_account_id: string;

    /**
     * Information about the merchant_config_currency that merchant wants to specify at
     * connector level.
     */
    merchant_config_currency: string;
  }

  export interface Noon {
    /**
     * Information about the order category that merchant wants to specify at connector
     * level. (e.g. In Noon Payments it can take values like "pay", "food", or any
     * other custom string set by the merchant in Noon's Dashboard)
     */
    order_category?: string | null;
  }
}

export interface ConnectorVolumeSplit {
  /**
   * Routable Connector chosen for a payment
   */
  connector: DefaultAPI.RoutableConnectorChoice;

  split: number;
}

export interface CryptoData {
  network?: string | null;

  pay_currency?: string | null;
}

export interface CtpServiceDetails {
  /**
   * network transaction correlation id
   */
  correlation_id?: string | null;

  /**
   * Encrypted payload
   */
  encrypted_payload?: string | null;

  /**
   * merchant transaction id
   */
  merchant_transaction_id?: string | null;

  provider?: CtpServiceProvider | null;

  /**
   * session transaction flow id
   */
  x_src_flow_id?: string | null;
}

export type CtpServiceProvider = 'visa' | 'mastercard';

/**
 * This "CustomerAcceptance" object is passed during Payments-Confirm request, it
 * enlists the type, time, and mode of acceptance properties related to an
 * acceptance done by the customer. The customer_acceptance sub object is usually
 * passed by the SDK or client.
 */
export interface CustomerAcceptance {
  /**
   * This is used to indicate if the mandate was accepted online or offline
   */
  acceptance_type: 'online' | 'offline';

  /**
   * Specifying when the customer acceptance was provided
   */
  accepted_at?: string | null;

  /**
   * Details of online mandate
   */
  online?: CustomerAcceptance.Online | null;
}

export namespace CustomerAcceptance {
  /**
   * Details of online mandate
   */
  export interface Online {
    /**
     * Ip address of the customer machine from which the mandate was created
     */
    ip_address: string;

    /**
     * The user-agent of the customer's browser
     */
    user_agent: string;
  }
}

/**
 * Passing this object creates a new customer or attaches an existing customer to
 * the payment
 */
export interface CustomerDetails {
  /**
   * The identifier for the customer.
   */
  id: string;

  /**
   * The customer's email address
   */
  email?: string | null;

  /**
   * The customer's name
   */
  name?: string | null;

  /**
   * The customer's phone number
   */
  phone?: string | null;

  /**
   * The country code for the customer's phone number
   */
  phone_country_code?: string | null;
}

/**
 * Details of customer attached to this payment
 */
export interface CustomerDetailsResponse {
  /**
   * The identifier for the customer.
   */
  id?: string | null;

  /**
   * The customer's email address
   */
  email?: string | null;

  /**
   * The customer's name
   */
  name?: string | null;

  /**
   * The customer's phone number
   */
  phone?: string | null;

  /**
   * The country code for the customer's phone number
   */
  phone_country_code?: string | null;
}

export interface DisputeResponsePaymentsRetrieve {
  /**
   * Dispute id sent by connector
   */
  connector_dispute_id: string;

  /**
   * Status of the dispute sent by connector
   */
  connector_status: string;

  /**
   * Time at which dispute is received
   */
  created_at: string;

  /**
   * The identifier for dispute
   */
  dispute_id: string;

  /**
   * Stage of the dispute
   */
  dispute_stage: DisputesAPI.DisputeStage;

  /**
   * Status of the dispute
   */
  dispute_status: DisputesAPI.DisputeStatus;

  /**
   * Evidence deadline of dispute sent by connector
   */
  challenge_required_by?: string | null;

  /**
   * Dispute created time sent by connector
   */
  connector_created_at?: string | null;

  /**
   * Reason of dispute sent by connector
   */
  connector_reason?: string | null;

  /**
   * Reason code of dispute sent by connector
   */
  connector_reason_code?: string | null;

  /**
   * Dispute updated time sent by connector
   */
  connector_updated_at?: string | null;
}

export interface DokuBillingDetails {
  /**
   * The Email ID for Doku billing
   */
  email?: string | null;

  /**
   * The billing first name for Doku
   */
  first_name?: string | null;

  /**
   * The billing second name for Doku
   */
  last_name?: string | null;
}

/**
 * ephemeral_key for the customer_id mentioned
 */
export interface EphemeralKeyCreateResponse {
  /**
   * time at which this ephemeral key was created
   */
  created_at: number;

  /**
   * customer_id to which this ephemeral key belongs to
   */
  customer_id: string;

  /**
   * time at which this ephemeral key would expire
   */
  expires: number;

  /**
   * ephemeral key
   */
  secret: string;
}

/**
 * Details of external authentication
 */
export interface ExternalAuthenticationDetailsResponse {
  status: AuthenticationAPI.AuthenticationStatus;

  authentication_flow?: 'challenge' | 'frictionless' | null;

  /**
   * DS Transaction ID
   */
  ds_transaction_id?: string | null;

  /**
   * Electronic Commerce Indicator (eci)
   */
  electronic_commerce_indicator?: string | null;

  /**
   * Error Code
   */
  error_code?: string | null;

  /**
   * Error Message
   */
  error_message?: string | null;

  /**
   * Message Version
   */
  version?: string | null;
}

/**
 * additional data that might be required by hyperswitch
 */
export interface FeatureMetadata {
  apple_pay_recurring_details?: FeatureMetadata.ApplePayRecurringDetails | null;

  redirect_response?: FeatureMetadata.RedirectResponse | null;

  /**
   * Additional tags to be used for global search
   */
  search_tags?: Array<string> | null;
}

export namespace FeatureMetadata {
  export interface ApplePayRecurringDetails {
    /**
     * A URL to a web page where the user can update or delete the payment method for
     * the recurring payment
     */
    management_url: string;

    /**
     * A description of the recurring payment that Apple Pay displays to the user in
     * the payment sheet
     */
    payment_description: string;

    regular_billing: ApplePayRecurringDetails.RegularBilling;

    /**
     * A localized billing agreement that the payment sheet displays to the user before
     * the user authorizes the payment
     */
    billing_agreement?: string | null;
  }

  export namespace ApplePayRecurringDetails {
    export interface RegularBilling {
      /**
       * The label that Apple Pay displays to the user in the payment sheet with the
       * recurring details
       */
      label: string;

      /**
       * The date of the final payment
       */
      recurring_payment_end_date?: string | null;

      /**
       * The number of interval units that make up the total payment interval
       */
      recurring_payment_interval_count?: number | null;

      recurring_payment_interval_unit?: PaymentsAPI.RecurringPaymentIntervalUnit | null;

      /**
       * The date of the first payment
       */
      recurring_payment_start_date?: string | null;
    }
  }

  export interface RedirectResponse {
    json_payload?: unknown | null;

    param?: string | null;
  }
}

/**
 * frm message is an object sent inside the payments response...when frm is
 * invoked, its value is Some(...), else its None
 */
export interface FrmMessage {
  frm_name: string;

  frm_error?: string | null;

  frm_reason?: unknown;

  frm_score?: number | null;

  frm_status?: string | null;

  frm_transaction_id?: string | null;

  frm_transaction_type?: string | null;
}

/**
 * Specifies how the payment method can be used for future payments.
 *
 * - `off_session`: The payment method can be used for future payments when the
 *   customer is not present.
 * - `on_session`: The payment method is intended for use only when the customer is
 *   present during checkout. If omitted, defaults to `on_session`.
 */
export type FutureUsage = 'off_session' | 'on_session';

export interface IncrementalAuthorizationResponse {
  /**
   * Amount the authorization has been made for
   */
  amount: number;

  /**
   * The unique identifier of authorization
   */
  authorization_id: string;

  /**
   * This Unit struct represents MinorUnit in which core amount works
   */
  previously_authorized_amount: number;

  status: 'success' | 'failure' | 'processing' | 'unresolved';

  /**
   * Error code sent by the connector for authorization
   */
  error_code?: string | null;

  /**
   * Error message sent by the connector for authorization
   */
  error_message?: string | null;
}

/**
 * Represents the overall status of a payment intent. The status transitions
 * through various states depending on the payment method, confirmation, capture
 * method, and any subsequent actions (like customer authentication or manual
 * capture).
 */
export type IntentStatus =
  | 'succeeded'
  | 'failed'
  | 'cancelled'
  | 'processing'
  | 'requires_customer_action'
  | 'requires_merchant_action'
  | 'requires_payment_method'
  | 'requires_confirmation'
  | 'requires_capture'
  | 'partially_captured'
  | 'partially_captured_and_capturable'
  | 'conflicted';

export interface JcsVoucherData {
  /**
   * The Email ID for Japanese convenience stores
   */
  email?: string | null;

  /**
   * The billing first name for Japanese convenience stores
   */
  first_name?: string | null;

  /**
   * The billing second name Japanese convenience stores
   */
  last_name?: string | null;

  /**
   * The telephone number for Japanese convenience stores
   */
  phone_number?: string | null;
}

/**
 * Passing this object during payments creates a mandate. The mandate_type sub
 * object is passed by the server.
 */
export interface MandateData {
  /**
   * This "CustomerAcceptance" object is passed during Payments-Confirm request, it
   * enlists the type, time, and mode of acceptance properties related to an
   * acceptance done by the customer. The customer_acceptance sub object is usually
   * passed by the SDK or client.
   */
  customer_acceptance?: CustomerAcceptance | null;

  mandate_type?: AccountsAPI.MandateType | null;

  /**
   * A way to update the mandate's payment method details
   */
  update_mandate_id?: string | null;
}

/**
 * Merchant connector details used to make payments.
 */
export interface MerchantConnectorDetailsWrap {
  /**
   * Creds Identifier is to uniquely identify the credentials. Do not send any
   * sensitive info, like encoded_data in this field. And do not send the string
   * "null".
   */
  creds_identifier: string;

  encoded_data?: ConnectorsAPI.MerchantConnectorDetails | null;
}

export interface MobilePaymentData {
  direct_carrier_billing: MobilePaymentData.DirectCarrierBilling;
}

export namespace MobilePaymentData {
  export interface DirectCarrierBilling {
    /**
     * The phone number of the user
     */
    msisdn: string;

    /**
     * Unique user id
     */
    client_uid?: string | null;
  }
}

export type NextActionCall = 'post_session_tokens' | 'confirm' | 'sync' | 'complete_authorize';

/**
 * Contains the url for redirection flow
 */
export type NextActionData =
  | NextActionData.RedirectToURL
  | NextActionData.RedirectInsidePopup
  | NextActionData.DisplayBankTransferInformation
  | NextActionData.ThirdPartySDKSessionToken
  | NextActionData.QrCodeInformation
  | NextActionData.FetchQrCodeInformation
  | NextActionData.DisplayVoucherInformation
  | NextActionData.WaitScreenInformation
  | NextActionData.ThreeDSInvoke
  | NextActionData.InvokeSDKClient
  | NextActionData.CollectOtp
  | NextActionData.InvokeHiddenIframe;

export namespace NextActionData {
  /**
   * Contains the url for redirection flow
   */
  export interface RedirectToURL {
    redirect_to_url: string;

    type: 'redirect_to_url';
  }

  export interface RedirectInsidePopup {
    popup_url: string;

    redirect_response_url: string;

    type: 'redirect_inside_popup';
  }

  /**
   * Informs the next steps for bank transfer and also contains the charges details
   * (ex: amount received, amount charged etc)
   */
  export interface DisplayBankTransferInformation {
    bank_transfer_steps_and_charges_details:
      | DisplayBankTransferInformation.UnionMember0
      | DisplayBankTransferInformation.UnionMember1
      | DisplayBankTransferInformation.UnionMember2
      | DisplayBankTransferInformation.UnionMember3
      | DisplayBankTransferInformation.UnionMember4;

    type: 'display_bank_transfer_information';
  }

  export namespace DisplayBankTransferInformation {
    export interface UnionMember0 {
      doku_bank_transfer_instructions: UnionMember0.DokuBankTransferInstructions;

      receiver?: UnionMember0.Receiver | null;
    }

    export namespace UnionMember0 {
      export interface DokuBankTransferInstructions {
        expires_at: string;

        instructions_url: string;

        reference: string;
      }

      export interface Receiver {
        /**
         * The amount received by receiver
         */
        amount_received: number;

        /**
         * The amount charged by ACH
         */
        amount_charged?: number | null;

        /**
         * The amount remaining to be sent via ACH
         */
        amount_remaining?: number | null;
      }
    }

    export interface UnionMember1 {
      ach_credit_transfer: UnionMember1.ACHCreditTransfer;

      receiver?: UnionMember1.Receiver | null;
    }

    export namespace UnionMember1 {
      export interface ACHCreditTransfer {
        account_number: string;

        bank_name: string;

        routing_number: string;

        swift_code: string;
      }

      export interface Receiver {
        /**
         * The amount received by receiver
         */
        amount_received: number;

        /**
         * The amount charged by ACH
         */
        amount_charged?: number | null;

        /**
         * The amount remaining to be sent via ACH
         */
        amount_remaining?: number | null;
      }
    }

    export interface UnionMember2 {
      sepa_bank_instructions: UnionMember2.SepaBankInstructions;

      receiver?: UnionMember2.Receiver | null;
    }

    export namespace UnionMember2 {
      export interface SepaBankInstructions {
        account_holder_name: string;

        bic: string;

        country: string;

        iban: string;

        reference: string;
      }

      export interface Receiver {
        /**
         * The amount received by receiver
         */
        amount_received: number;

        /**
         * The amount charged by ACH
         */
        amount_charged?: number | null;

        /**
         * The amount remaining to be sent via ACH
         */
        amount_remaining?: number | null;
      }
    }

    export interface UnionMember3 {
      bacs_bank_instructions: UnionMember3.BacsBankInstructions;

      receiver?: UnionMember3.Receiver | null;
    }

    export namespace UnionMember3 {
      export interface BacsBankInstructions {
        account_holder_name: string;

        account_number: string;

        sort_code: string;
      }

      export interface Receiver {
        /**
         * The amount received by receiver
         */
        amount_received: number;

        /**
         * The amount charged by ACH
         */
        amount_charged?: number | null;

        /**
         * The amount remaining to be sent via ACH
         */
        amount_remaining?: number | null;
      }
    }

    export interface UnionMember4 {
      multibanco: UnionMember4.Multibanco;

      receiver?: UnionMember4.Receiver | null;
    }

    export namespace UnionMember4 {
      export interface Multibanco {
        entity: string;

        reference: string;
      }

      export interface Receiver {
        /**
         * The amount received by receiver
         */
        amount_received: number;

        /**
         * The amount charged by ACH
         */
        amount_charged?: number | null;

        /**
         * The amount remaining to be sent via ACH
         */
        amount_remaining?: number | null;
      }
    }
  }

  /**
   * Contains third party sdk session token response
   */
  export interface ThirdPartySDKSessionToken {
    type: 'third_party_sdk_session_token';

    session_token?: PaymentsAPI.SessionToken | null;
  }

  /**
   * Contains url for Qr code image, this qr code has to be shown in sdk
   */
  export interface QrCodeInformation {
    /**
     * Hyperswitch generated image data source url
     */
    image_data_url: string;

    /**
     * The url for Qr code given by the connector
     */
    qr_code_url: string;

    type: 'qr_code_information';

    border_color?: string | null;

    display_text?: string | null;

    display_to_timestamp?: number | null;
  }

  /**
   * Contains url to fetch Qr code data
   */
  export interface FetchQrCodeInformation {
    qr_code_fetch_url: string;

    type: 'fetch_qr_code_information';
  }

  /**
   * Contains the download url and the reference number for transaction
   */
  export interface DisplayVoucherInformation {
    type: 'display_voucher_information';

    voucher_details: string;
  }

  /**
   * Contains duration for displaying a wait screen, wait screen with timer is
   * displayed by sdk
   */
  export interface WaitScreenInformation {
    display_from_timestamp: number;

    type: 'wait_screen_information';

    display_to_timestamp?: number | null;

    poll_config?: WaitScreenInformation.PollConfig | null;
  }

  export namespace WaitScreenInformation {
    export interface PollConfig {
      /**
       * Interval of the poll
       */
      delay_in_secs: number;

      /**
       * Frequency of the poll
       */
      frequency: number;
    }
  }

  /**
   * Contains the information regarding three_ds_method_data submission, three_ds
   * authentication, and authorization flows
   */
  export interface ThreeDSInvoke {
    three_ds_data: ThreeDSInvoke.ThreeDSData;

    type: 'three_ds_invoke';
  }

  export namespace ThreeDSInvoke {
    export interface ThreeDSData {
      poll_config: ThreeDSData.PollConfig;

      /**
       * ThreeDS authentication url - to initiate authentication
       */
      three_ds_authentication_url: string;

      /**
       * ThreeDS authorize url - to complete the payment authorization after
       * authentication
       */
      three_ds_authorize_url: string;

      three_ds_method_details: ThreeDSData.ThreeDSMethodDetails;

      /**
       * Directory Server ID
       */
      directory_server_id?: string | null;

      /**
       * Message Version
       */
      message_version?: string | null;
    }

    export namespace ThreeDSData {
      export interface PollConfig {
        /**
         * Interval of the poll
         */
        delay_in_secs: number;

        /**
         * Frequency of the poll
         */
        frequency: number;

        /**
         * Poll Id
         */
        poll_id: string;
      }

      export interface ThreeDSMethodDetails {
        /**
         * Whether ThreeDS method data submission is required
         */
        three_ds_method_data_submission: boolean;

        three_ds_method_key: 'threeDSMethodData';

        /**
         * ThreeDS method data
         */
        three_ds_method_data?: string | null;

        /**
         * ThreeDS method url
         */
        three_ds_method_url?: string | null;
      }
    }
  }

  export interface InvokeSDKClient {
    next_action_data: InvokeSDKClient.NextActionData;

    type: 'invoke_sdk_client';
  }

  export namespace InvokeSDKClient {
    export interface NextActionData {
      next_action: PaymentsAPI.NextActionCall;

      order_id?: string | null;
    }
  }

  /**
   * Contains consent to collect otp for mobile payment
   */
  export interface CollectOtp {
    consent_data_required: 'consent_required' | 'consent_not_required' | 'consent_optional';

    type: 'collect_otp';
  }

  /**
   * Contains data required to invoke hidden iframe
   */
  export interface InvokeHiddenIframe {
    iframe_data: InvokeHiddenIframe.IframeData;

    type: 'invoke_hidden_iframe';
  }

  export namespace InvokeHiddenIframe {
    export interface IframeData {
      /**
       * ThreeDS Server ID
       */
      directory_server_id: string;

      method_key: 'threeDSMethodData';

      /**
       * Whether ThreeDS method data submission is required
       */
      three_ds_method_data_submission: boolean;

      /**
       * ThreeDS method url
       */
      three_ds_method_url: string;

      /**
       * ThreeDS Protocol version
       */
      message_version?: string | null;

      /**
       * ThreeDS method data
       */
      three_ds_method_data?: string | null;
    }
  }
}

export interface OpenBankingData {
  open_banking_pis: unknown;
}

export interface OrderDetailsWithAmount {
  /**
   * the amount per quantity of product
   */
  amount: number;

  /**
   * Name of the product that is being purchased
   */
  product_name: string;

  /**
   * The quantity of the product to be purchased
   */
  quantity: number;

  /**
   * Brand of the product that is being purchased
   */
  brand?: string | null;

  /**
   * Category of the product that is being purchased
   */
  category?: string | null;

  /**
   * ID of the product that is being purchased
   */
  product_id?: string | null;

  /**
   * The image URL of the product
   */
  product_img_link?: string | null;

  /**
   * The tax code for the product
   */
  product_tax_code?: string | null;

  product_type?: 'physical' | 'digital' | 'travel' | 'ride' | 'event' | 'accommodation' | null;

  requires_shipping?: boolean | null;

  /**
   * Sub category of the product that is being purchased
   */
  sub_category?: string | null;

  /**
   * tax rate applicable to the product
   */
  tax_rate?: number | null;

  /**
   * total tax amount applicable to the product
   */
  total_tax_amount?: number | null;
}

export interface PaymentAttemptResponse {
  /**
   * The payment attempt amount. Amount for the payment in lowest denomination of the
   * currency. (i.e) in cents for USD denomination, in paisa for INR denomination
   * etc.,
   */
  amount: number;

  /**
   * A unique identifier for this specific payment attempt.
   */
  attempt_id: string;

  /**
   * Time at which the payment attempt was created
   */
  created_at: string;

  /**
   * Time at which the payment attempt was last modified
   */
  modified_at: string;

  /**
   * The status of the attempt
   */
  status:
    | 'started'
    | 'authentication_failed'
    | 'router_declined'
    | 'authentication_pending'
    | 'authentication_successful'
    | 'authorized'
    | 'authorization_failed'
    | 'charged'
    | 'authorizing'
    | 'cod_initiated'
    | 'voided'
    | 'void_initiated'
    | 'capture_initiated'
    | 'capture_failed'
    | 'void_failed'
    | 'auto_refunded'
    | 'partial_charged'
    | 'partial_charged_and_chargeable'
    | 'unresolved'
    | 'pending'
    | 'failure'
    | 'payment_method_awaited'
    | 'confirmation_awaited'
    | 'device_data_collection_pending'
    | 'integrity_failure';

  /**
   * Specifies the type of cardholder authentication to be applied for a payment.
   *
   * - `ThreeDs`: Requests 3D Secure (3DS) authentication. If the card is enrolled,
   *   3DS authentication will be activated, potentially shifting chargeback
   *   liability to the issuer.
   * - `NoThreeDs`: Indicates that 3D Secure authentication should not be performed.
   *   The liability for chargebacks typically remains with the merchant. This is
   *   often the default if not specified.
   *
   * Note: The actual authentication behavior can also be influenced by merchant
   * configuration and specific connector defaults. Some connectors might still
   * enforce 3DS or bypass it regardless of this parameter.
   */
  authentication_type?: AuthenticationType | null;

  /**
   * If the payment was cancelled the reason will be provided here
   */
  cancellation_reason?: string | null;

  /**
   * Specifies how the payment is captured.
   *
   * - `automatic`: Funds are captured immediately after successful authorization.
   *   This is the default behavior if the field is omitted.
   * - `manual`: Funds are authorized but not captured. A separate request to the
   *   `/payments/{payment_id}/capture` endpoint is required to capture the funds.
   */
  capture_method?: CaptureMethod | null;

  /**
   * Value passed in X-CLIENT-SOURCE header during payments confirm request by the
   * client
   */
  client_source?: string | null;

  /**
   * Value passed in X-CLIENT-VERSION header during payments confirm request by the
   * client
   */
  client_version?: string | null;

  /**
   * The name of the payment connector (e.g., 'stripe', 'adyen') used for this
   * attempt.
   */
  connector?: string | null;

  /**
   * Additional data related to some connectors
   */
  connector_metadata?: unknown;

  /**
   * A unique identifier for a payment provided by the connector
   */
  connector_transaction_id?: string | null;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency?: AccountsAPI.Currency | null;

  /**
   * The error code returned by the connector if this payment attempt failed. This
   * code is specific to the connector.
   */
  error_code?: string | null;

  /**
   * A human-readable message from the connector explaining the error, if one
   * occurred during this payment attempt.
   */
  error_message?: string | null;

  /**
   * If this payment attempt is associated with a mandate (e.g., for a recurring or
   * subsequent payment), this field will contain the ID of that mandate.
   */
  mandate_id?: string | null;

  /**
   * The payment attempt tax_amount.
   */
  order_tax_amount?: number | null;

  /**
   * To indicate the type of payment experience that the customer would go through
   */
  payment_experience?: PaymentExperience | null;

  /**
   * Indicates the type of payment method. Eg: 'card', 'wallet', etc.
   */
  payment_method?:
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
    | 'mobile_payment'
    | null;

  /**
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type?: PaymentMethodType | null;

  /**
   * If a tokenized (saved) payment method was used for this attempt, this field
   * contains the payment token representing that payment method.
   */
  payment_token?: string | null;

  /**
   * The connector's own reference or transaction ID for this specific payment
   * attempt. Useful for reconciliation with the connector.
   */
  reference_id?: string | null;

  /**
   * (This field is not live yet)Error code unified across the connectors is received
   * here if there was an error while calling connector
   */
  unified_code?: string | null;

  /**
   * (This field is not live yet)Error message unified across the connectors is
   * received here if there was an error while calling connector
   */
  unified_message?: string | null;
}

export interface PaymentChargeType {
  Stripe: 'direct' | 'destination';
}

/**
 * Configure a custom payment link for the particular payment
 */
export interface PaymentCreatePaymentLinkConfig extends BusinessProfileAPI.PaymentLinkConfigRequest {}

/**
 * To indicate the type of payment experience that the customer would go through
 */
export type PaymentExperience =
  | 'redirect_to_url'
  | 'invoke_sdk_client'
  | 'display_qr_code'
  | 'one_click'
  | 'link_wallet'
  | 'invoke_payment_app'
  | 'display_wait_screen'
  | 'collect_otp';

export interface PaymentLinkResponse {
  /**
   * URL for rendering the open payment link
   */
  link: string;

  /**
   * Identifier for the payment link
   */
  payment_link_id: string;

  /**
   * URL for rendering the secure payment link
   */
  secure_link?: string | null;
}

/**
 * The payment method information provided for making a payment
 */
export type PaymentMethodDataRequest =
  | PaymentMethodDataRequest.Card
  | PaymentMethodDataRequest.CardRedirect
  | PaymentMethodDataRequest.Wallet
  | PaymentMethodDataRequest.PayLater
  | PaymentMethodDataRequest.BankRedirect
  | PaymentMethodDataRequest.BankDebit
  | PaymentMethodDataRequest.BankTransfer
  | PaymentMethodDataRequest.RealTimePayment
  | PaymentMethodDataRequest.Crypto
  | PaymentMethodDataRequest.MandatePayment
  | PaymentMethodDataRequest.Reward
  | PaymentMethodDataRequest.Upi
  | PaymentMethodDataRequest.Voucher
  | PaymentMethodDataRequest.GiftCard
  | PaymentMethodDataRequest.CardToken
  | PaymentMethodDataRequest.OpenBanking
  | PaymentMethodDataRequest.MobilePayment;

export namespace PaymentMethodDataRequest {
  export interface Card {
    card: Card.Card;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace Card {
    export interface Card {
      /**
       * The CVC number for the card
       */
      card_cvc: string;

      /**
       * The card's expiry month
       */
      card_exp_month: string;

      /**
       * The card's expiry year
       */
      card_exp_year: string;

      /**
       * The card holder's name
       */
      card_holder_name: string;

      /**
       * The card number
       */
      card_number: string;

      bank_code?: string | null;

      /**
       * The name of the issuer of card
       */
      card_issuer?: string | null;

      card_issuing_country?: string | null;

      /**
       * Indicates the card network.
       */
      card_network?: AccountsAPI.CardNetwork | null;

      card_type?: string | null;

      /**
       * The card holder's nick name
       */
      nick_name?: string | null;
    }
  }

  export interface CardRedirect {
    card_redirect: PaymentsAPI.CardRedirectData;

    billing?: PaymentsAPI.Address | null;
  }

  export interface Wallet {
    wallet:
      | Wallet.AliPayQr
      | Wallet.AliPayRedirect
      | Wallet.AliPayHkRedirect
      | Wallet.AmazonPayRedirect
      | Wallet.MomoRedirect
      | Wallet.KakaoPayRedirect
      | Wallet.GoPayRedirect
      | Wallet.GcashRedirect
      | Wallet.ApplePay
      | Wallet.ApplePayRedirect
      | Wallet.ApplePayThirdPartySDK
      | Wallet.DanaRedirect
      | Wallet.GooglePay
      | Wallet.GooglePayRedirect
      | Wallet.GooglePayThirdPartySDK
      | Wallet.MBWayRedirect
      | Wallet.MobilePayRedirect
      | Wallet.PaypalRedirect
      | Wallet.PaypalSDK
      | Wallet.Paze
      | Wallet.SamsungPay
      | Wallet.TwintRedirect
      | Wallet.VippsRedirect
      | Wallet.TouchNGoRedirect
      | Wallet.WeChatPayRedirect
      | Wallet.WeChatPayQr
      | Wallet.CashappQr
      | Wallet.SwishQr
      | Wallet.Mifinity
      | Wallet.RevolutPay;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace Wallet {
    export interface AliPayQr {
      ali_pay_qr: unknown;
    }

    export interface AliPayRedirect {
      ali_pay_redirect: unknown;
    }

    export interface AliPayHkRedirect {
      ali_pay_hk_redirect: unknown;
    }

    export interface AmazonPayRedirect {
      amazon_pay_redirect: unknown;
    }

    export interface MomoRedirect {
      momo_redirect: unknown;
    }

    export interface KakaoPayRedirect {
      kakao_pay_redirect: unknown;
    }

    export interface GoPayRedirect {
      go_pay_redirect: unknown;
    }

    export interface GcashRedirect {
      gcash_redirect: unknown;
    }

    export interface ApplePay {
      apple_pay: ApplePay.ApplePay;
    }

    export namespace ApplePay {
      export interface ApplePay {
        /**
         * The payment data of Apple pay
         */
        payment_data: string;

        payment_method: ApplePay.PaymentMethod;

        /**
         * The unique identifier for the transaction
         */
        transaction_identifier: string;
      }

      export namespace ApplePay {
        export interface PaymentMethod {
          /**
           * The name to be displayed on Apple Pay button
           */
          display_name: string;

          /**
           * The network of the Apple pay payment method
           */
          network: string;

          /**
           * The type of the payment method
           */
          type: string;
        }
      }
    }

    export interface ApplePayRedirect {
      apple_pay_redirect: unknown;
    }

    export interface ApplePayThirdPartySDK {
      apple_pay_third_party_sdk: unknown;
    }

    export interface DanaRedirect {
      /**
       * Wallet data for DANA redirect flow
       */
      dana_redirect: unknown;
    }

    export interface GooglePay {
      google_pay: GooglePay.GooglePay;
    }

    export namespace GooglePay {
      export interface GooglePay {
        /**
         * User-facing message to describe the payment method that funds this transaction.
         */
        description: string;

        info: GooglePay.Info;

        tokenization_data: GooglePay.TokenizationData;

        /**
         * The type of payment method
         */
        type: string;
      }

      export namespace GooglePay {
        export interface Info {
          /**
           * The details of the card
           */
          card_details: string;

          /**
           * The name of the card network
           */
          card_network: string;

          assurance_details?: Info.AssuranceDetails | null;
        }

        export namespace Info {
          export interface AssuranceDetails {
            /**
             * indicates that identification and verifications (ID&V) was performed
             */
            account_verified: boolean;

            /**
             * indicates that Cardholder possession validation has been performed
             */
            card_holder_authenticated: boolean;
          }
        }

        export interface TokenizationData {
          /**
           * Token generated for the wallet
           */
          token: string;

          /**
           * The type of the token
           */
          type: string;
        }
      }
    }

    export interface GooglePayRedirect {
      google_pay_redirect: unknown;
    }

    export interface GooglePayThirdPartySDK {
      google_pay_third_party_sdk: unknown;
    }

    export interface MBWayRedirect {
      mb_way_redirect: MBWayRedirect.MBWayRedirect;
    }

    export namespace MBWayRedirect {
      export interface MBWayRedirect {
        /**
         * Telephone number of the shopper. Should be Portuguese phone number.
         */
        telephone_number: string;
      }
    }

    export interface MobilePayRedirect {
      mobile_pay_redirect: unknown;
    }

    export interface PaypalRedirect {
      paypal_redirect: PaypalRedirect.PaypalRedirect;
    }

    export namespace PaypalRedirect {
      export interface PaypalRedirect {
        /**
         * paypal's email address
         */
        email?: string | null;
      }
    }

    export interface PaypalSDK {
      paypal_sdk: PaypalSDK.PaypalSDK;
    }

    export namespace PaypalSDK {
      export interface PaypalSDK {
        /**
         * Token generated for the Apple pay
         */
        token: string;
      }
    }

    export interface Paze {
      paze: Paze.Paze;
    }

    export namespace Paze {
      export interface Paze {
        complete_response: string;
      }
    }

    export interface SamsungPay {
      samsung_pay: SamsungPay.SamsungPay;
    }

    export namespace SamsungPay {
      export interface SamsungPay {
        payment_credential: SamsungPay.SamsungPayWebWalletData | SamsungPay.SamsungPayAppWalletData;
      }

      export namespace SamsungPay {
        export interface SamsungPayWebWalletData {
          '3_d_s': PaymentsAPI.SamsungPayTokenData;

          card_brand: PaymentsAPI.SamsungPayCardBrand;

          /**
           * Last 4 digits of the card number
           */
          card_last4digits: string;

          /**
           * Specifies authentication method used
           */
          method?: string | null;

          /**
           * Value if credential is enabled for recurring payment
           */
          recurring_payment?: boolean | null;
        }

        export interface SamsungPayAppWalletData {
          '3_d_s': PaymentsAPI.SamsungPayTokenData;

          payment_card_brand: PaymentsAPI.SamsungPayCardBrand;

          /**
           * Currency type of the payment
           */
          payment_currency_type: string;

          /**
           * Last 4 digits of the card number
           */
          payment_last4_fpan: string;

          /**
           * Merchant reference id that was passed in the session call request
           */
          merchant_ref?: string | null;

          /**
           * Specifies authentication method used
           */
          method?: string | null;

          /**
           * Last 4 digits of the device specific card number
           */
          payment_last4_dpan?: string | null;

          /**
           * Value if credential is enabled for recurring payment
           */
          recurring_payment?: boolean | null;
        }
      }
    }

    export interface TwintRedirect {
      /**
       * Wallet data for Twint Redirection
       */
      twint_redirect: unknown;
    }

    export interface VippsRedirect {
      /**
       * Wallet data for Vipps Redirection
       */
      vipps_redirect: unknown;
    }

    export interface TouchNGoRedirect {
      touch_n_go_redirect: unknown;
    }

    export interface WeChatPayRedirect {
      we_chat_pay_redirect: unknown;
    }

    export interface WeChatPayQr {
      we_chat_pay_qr: unknown;
    }

    export interface CashappQr {
      cashapp_qr: unknown;
    }

    export interface SwishQr {
      swish_qr: unknown;
    }

    export interface Mifinity {
      mifinity: Mifinity.Mifinity;
    }

    export namespace Mifinity {
      export interface Mifinity {
        date_of_birth: string;

        language_preference?: string | null;
      }
    }

    export interface RevolutPay {
      revolut_pay: unknown;
    }
  }

  export interface PayLater {
    pay_later:
      | PayLater.KlarnaRedirect
      | PayLater.KlarnaSDK
      | PayLater.AffirmRedirect
      | PayLater.AfterpayClearpayRedirect
      | PayLater.PayBrightRedirect
      | PayLater.WalleyRedirect
      | PayLater.AlmaRedirect
      | PayLater.AtomeRedirect;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace PayLater {
    export interface KlarnaRedirect {
      /**
       * For KlarnaRedirect as PayLater Option
       */
      klarna_redirect: KlarnaRedirect.KlarnaRedirect;
    }

    export namespace KlarnaRedirect {
      /**
       * For KlarnaRedirect as PayLater Option
       */
      export interface KlarnaRedirect {
        billing_country?: AccountsAPI.CountryAlpha2 | null;

        /**
         * The billing email
         */
        billing_email?: string | null;
      }
    }

    export interface KlarnaSDK {
      /**
       * For Klarna Sdk as PayLater Option
       */
      klarna_sdk: KlarnaSDK.KlarnaSDK;
    }

    export namespace KlarnaSDK {
      /**
       * For Klarna Sdk as PayLater Option
       */
      export interface KlarnaSDK {
        /**
         * The token for the sdk workflow
         */
        token: string;
      }
    }

    export interface AffirmRedirect {
      /**
       * For Affirm redirect as PayLater Option
       */
      affirm_redirect: unknown;
    }

    export interface AfterpayClearpayRedirect {
      /**
       * For AfterpayClearpay redirect as PayLater Option
       */
      afterpay_clearpay_redirect: AfterpayClearpayRedirect.AfterpayClearpayRedirect;
    }

    export namespace AfterpayClearpayRedirect {
      /**
       * For AfterpayClearpay redirect as PayLater Option
       */
      export interface AfterpayClearpayRedirect {
        /**
         * The billing email
         */
        billing_email?: string | null;

        /**
         * The billing name
         */
        billing_name?: string | null;
      }
    }

    export interface PayBrightRedirect {
      /**
       * For PayBright Redirect as PayLater Option
       */
      pay_bright_redirect: unknown;
    }

    export interface WalleyRedirect {
      /**
       * For WalleyRedirect as PayLater Option
       */
      walley_redirect: unknown;
    }

    export interface AlmaRedirect {
      /**
       * For Alma Redirection as PayLater Option
       */
      alma_redirect: unknown;
    }

    export interface AtomeRedirect {
      atome_redirect: unknown;
    }
  }

  export interface BankRedirect {
    bank_redirect:
      | BankRedirect.BancontactCard
      | BankRedirect.Bizum
      | BankRedirect.Blik
      | BankRedirect.Eps
      | BankRedirect.Giropay
      | BankRedirect.Ideal
      | BankRedirect.Interac
      | BankRedirect.OnlineBankingCzechRepublic
      | BankRedirect.OnlineBankingFinland
      | BankRedirect.OnlineBankingPoland
      | BankRedirect.OnlineBankingSlovakia
      | BankRedirect.OpenBankingUk
      | BankRedirect.Przelewy24
      | BankRedirect.Sofort
      | BankRedirect.Trustly
      | BankRedirect.OnlineBankingFpx
      | BankRedirect.OnlineBankingThailand
      | BankRedirect.LocalBankRedirect
      | BankRedirect.Eft;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace BankRedirect {
    export interface BancontactCard {
      bancontact_card: BancontactCard.BancontactCard;
    }

    export namespace BancontactCard {
      export interface BancontactCard {
        /**
         * The card's expiry month
         */
        card_exp_month: string;

        /**
         * The card's expiry year
         */
        card_exp_year: string;

        /**
         * The card holder's name
         */
        card_holder_name: string;

        /**
         * The card number
         */
        card_number: string;

        billing_details?: PaymentsAPI.BankRedirectBilling | null;
      }
    }

    export interface Bizum {
      bizum: unknown;
    }

    export interface Blik {
      blik: Blik.Blik;
    }

    export namespace Blik {
      export interface Blik {
        blik_code?: string | null;
      }
    }

    export interface Eps {
      eps: Eps.Eps;
    }

    export namespace Eps {
      export interface Eps {
        /**
         * Name of banks supported by Hyperswitch
         */
        bank_name: PayoutsAPI.BankNames;

        country: AccountsAPI.CountryAlpha2;

        billing_details?: PaymentsAPI.BankRedirectBilling | null;
      }
    }

    export interface Giropay {
      giropay: Giropay.Giropay;
    }

    export namespace Giropay {
      export interface Giropay {
        country: AccountsAPI.CountryAlpha2;

        /**
         * Bank account bic code
         */
        bank_account_bic?: string | null;

        /**
         * Bank account iban
         */
        bank_account_iban?: string | null;

        billing_details?: PaymentsAPI.BankRedirectBilling | null;
      }
    }

    export interface Ideal {
      ideal: Ideal.Ideal;
    }

    export namespace Ideal {
      export interface Ideal {
        /**
         * Name of banks supported by Hyperswitch
         */
        bank_name: PayoutsAPI.BankNames;

        country: AccountsAPI.CountryAlpha2;

        billing_details?: PaymentsAPI.BankRedirectBilling | null;
      }
    }

    export interface Interac {
      interac: Interac.Interac;
    }

    export namespace Interac {
      export interface Interac {
        country?: AccountsAPI.CountryAlpha2 | null;

        email?: string | null;
      }
    }

    export interface OnlineBankingCzechRepublic {
      online_banking_czech_republic: OnlineBankingCzechRepublic.OnlineBankingCzechRepublic;
    }

    export namespace OnlineBankingCzechRepublic {
      export interface OnlineBankingCzechRepublic {
        /**
         * Name of banks supported by Hyperswitch
         */
        issuer: PayoutsAPI.BankNames;
      }
    }

    export interface OnlineBankingFinland {
      online_banking_finland: OnlineBankingFinland.OnlineBankingFinland;
    }

    export namespace OnlineBankingFinland {
      export interface OnlineBankingFinland {
        email?: string | null;
      }
    }

    export interface OnlineBankingPoland {
      online_banking_poland: OnlineBankingPoland.OnlineBankingPoland;
    }

    export namespace OnlineBankingPoland {
      export interface OnlineBankingPoland {
        /**
         * Name of banks supported by Hyperswitch
         */
        issuer: PayoutsAPI.BankNames;
      }
    }

    export interface OnlineBankingSlovakia {
      online_banking_slovakia: OnlineBankingSlovakia.OnlineBankingSlovakia;
    }

    export namespace OnlineBankingSlovakia {
      export interface OnlineBankingSlovakia {
        /**
         * Name of banks supported by Hyperswitch
         */
        issuer: PayoutsAPI.BankNames;
      }
    }

    export interface OpenBankingUk {
      open_banking_uk: OpenBankingUk.OpenBankingUk;
    }

    export namespace OpenBankingUk {
      export interface OpenBankingUk {
        country: AccountsAPI.CountryAlpha2;

        /**
         * Name of banks supported by Hyperswitch
         */
        issuer: PayoutsAPI.BankNames;
      }
    }

    export interface Przelewy24 {
      przelewy24: Przelewy24.Przelewy24;
    }

    export namespace Przelewy24 {
      export interface Przelewy24 {
        /**
         * Name of banks supported by Hyperswitch
         */
        bank_name?: PayoutsAPI.BankNames | null;

        billing_details?: PaymentsAPI.BankRedirectBilling | null;
      }
    }

    export interface Sofort {
      sofort: Sofort.Sofort;
    }

    export namespace Sofort {
      export interface Sofort {
        country: AccountsAPI.CountryAlpha2;

        billing_details?: PaymentsAPI.BankRedirectBilling | null;

        /**
         * The preferred language
         */
        preferred_language?: string | null;
      }
    }

    export interface Trustly {
      trustly: Trustly.Trustly;
    }

    export namespace Trustly {
      export interface Trustly {
        country: AccountsAPI.CountryAlpha2;
      }
    }

    export interface OnlineBankingFpx {
      online_banking_fpx: OnlineBankingFpx.OnlineBankingFpx;
    }

    export namespace OnlineBankingFpx {
      export interface OnlineBankingFpx {
        /**
         * Name of banks supported by Hyperswitch
         */
        issuer: PayoutsAPI.BankNames;
      }
    }

    export interface OnlineBankingThailand {
      online_banking_thailand: OnlineBankingThailand.OnlineBankingThailand;
    }

    export namespace OnlineBankingThailand {
      export interface OnlineBankingThailand {
        /**
         * Name of banks supported by Hyperswitch
         */
        issuer: PayoutsAPI.BankNames;
      }
    }

    export interface LocalBankRedirect {
      local_bank_redirect: unknown;
    }

    export interface Eft {
      eft: Eft.Eft;
    }

    export namespace Eft {
      export interface Eft {
        /**
         * The preferred eft provider
         */
        provider: string;
      }
    }
  }

  export interface BankDebit {
    bank_debit:
      | BankDebit.ACHBankDebit
      | BankDebit.SepaBankDebit
      | BankDebit.BecsBankDebit
      | BankDebit.BacsBankDebit;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace BankDebit {
    export interface ACHBankDebit {
      /**
       * Payment Method data for Ach bank debit
       */
      ach_bank_debit: ACHBankDebit.ACHBankDebit;
    }

    export namespace ACHBankDebit {
      /**
       * Payment Method data for Ach bank debit
       */
      export interface ACHBankDebit {
        /**
         * Account number for ach bank debit payment
         */
        account_number: string;

        bank_account_holder_name: string;

        bank_holder_type: string;

        bank_name: string;

        bank_type: string;

        card_holder_name: string;

        /**
         * Routing number for ach bank debit payment
         */
        routing_number: string;

        billing_details?: PaymentsAPI.BankDebitBilling | null;
      }
    }

    export interface SepaBankDebit {
      sepa_bank_debit: SepaBankDebit.SepaBankDebit;
    }

    export namespace SepaBankDebit {
      export interface SepaBankDebit {
        /**
         * Owner name for bank debit
         */
        bank_account_holder_name: string;

        /**
         * International bank account number (iban) for SEPA
         */
        iban: string;

        billing_details?: PaymentsAPI.BankDebitBilling | null;
      }
    }

    export interface BecsBankDebit {
      becs_bank_debit: BecsBankDebit.BecsBankDebit;
    }

    export namespace BecsBankDebit {
      export interface BecsBankDebit {
        /**
         * Account number for Becs payment method
         */
        account_number: string;

        /**
         * Bank-State-Branch (bsb) number
         */
        bsb_number: string;

        /**
         * Owner name for bank debit
         */
        bank_account_holder_name?: string | null;

        billing_details?: PaymentsAPI.BankDebitBilling | null;
      }
    }

    export interface BacsBankDebit {
      bacs_bank_debit: BacsBankDebit.BacsBankDebit;
    }

    export namespace BacsBankDebit {
      export interface BacsBankDebit {
        /**
         * Account number for Bacs payment method
         */
        account_number: string;

        /**
         * holder name for bank debit
         */
        bank_account_holder_name: string;

        /**
         * Sort code for Bacs payment method
         */
        sort_code: string;

        billing_details?: PaymentsAPI.BankDebitBilling | null;
      }
    }
  }

  export interface BankTransfer {
    bank_transfer:
      | BankTransfer.ACHBankTransfer
      | BankTransfer.SepaBankTransfer
      | BankTransfer.BacsBankTransfer
      | BankTransfer.MultibancoBankTransfer
      | BankTransfer.PermataBankTransfer
      | BankTransfer.BcaBankTransfer
      | BankTransfer.BniVaBankTransfer
      | BankTransfer.BriVaBankTransfer
      | BankTransfer.CimbVaBankTransfer
      | BankTransfer.DanamonVaBankTransfer
      | BankTransfer.MandiriVaBankTransfer
      | BankTransfer.Pix
      | BankTransfer.Pse
      | BankTransfer.LocalBankTransfer
      | BankTransfer.InstantBankTransfer
      | BankTransfer.InstantBankTransferFinland
      | BankTransfer.InstantBankTransferPoland;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace BankTransfer {
    export interface ACHBankTransfer {
      ach_bank_transfer: ACHBankTransfer.ACHBankTransfer;
    }

    export namespace ACHBankTransfer {
      export interface ACHBankTransfer {
        billing_details?: ACHBankTransfer.BillingDetails | null;
      }

      export namespace ACHBankTransfer {
        export interface BillingDetails {
          /**
           * The Email ID for ACH billing
           */
          email?: string | null;
        }
      }
    }

    export interface SepaBankTransfer {
      sepa_bank_transfer: SepaBankTransfer.SepaBankTransfer;
    }

    export namespace SepaBankTransfer {
      export interface SepaBankTransfer {
        country: AccountsAPI.CountryAlpha2;

        billing_details?: PaymentsAPI.SepaAndBacsBillingDetails | null;
      }
    }

    export interface BacsBankTransfer {
      bacs_bank_transfer: BacsBankTransfer.BacsBankTransfer;
    }

    export namespace BacsBankTransfer {
      export interface BacsBankTransfer {
        billing_details?: PaymentsAPI.SepaAndBacsBillingDetails | null;
      }
    }

    export interface MultibancoBankTransfer {
      multibanco_bank_transfer: MultibancoBankTransfer.MultibancoBankTransfer;
    }

    export namespace MultibancoBankTransfer {
      export interface MultibancoBankTransfer {
        billing_details?: MultibancoBankTransfer.BillingDetails | null;
      }

      export namespace MultibancoBankTransfer {
        export interface BillingDetails {
          email?: string | null;
        }
      }
    }

    export interface PermataBankTransfer {
      permata_bank_transfer: PermataBankTransfer.PermataBankTransfer;
    }

    export namespace PermataBankTransfer {
      export interface PermataBankTransfer {
        billing_details?: PaymentsAPI.DokuBillingDetails | null;
      }
    }

    export interface BcaBankTransfer {
      bca_bank_transfer: BcaBankTransfer.BcaBankTransfer;
    }

    export namespace BcaBankTransfer {
      export interface BcaBankTransfer {
        billing_details?: PaymentsAPI.DokuBillingDetails | null;
      }
    }

    export interface BniVaBankTransfer {
      bni_va_bank_transfer: BniVaBankTransfer.BniVaBankTransfer;
    }

    export namespace BniVaBankTransfer {
      export interface BniVaBankTransfer {
        billing_details?: PaymentsAPI.DokuBillingDetails | null;
      }
    }

    export interface BriVaBankTransfer {
      bri_va_bank_transfer: BriVaBankTransfer.BriVaBankTransfer;
    }

    export namespace BriVaBankTransfer {
      export interface BriVaBankTransfer {
        billing_details?: PaymentsAPI.DokuBillingDetails | null;
      }
    }

    export interface CimbVaBankTransfer {
      cimb_va_bank_transfer: CimbVaBankTransfer.CimbVaBankTransfer;
    }

    export namespace CimbVaBankTransfer {
      export interface CimbVaBankTransfer {
        billing_details?: PaymentsAPI.DokuBillingDetails | null;
      }
    }

    export interface DanamonVaBankTransfer {
      danamon_va_bank_transfer: DanamonVaBankTransfer.DanamonVaBankTransfer;
    }

    export namespace DanamonVaBankTransfer {
      export interface DanamonVaBankTransfer {
        billing_details?: PaymentsAPI.DokuBillingDetails | null;
      }
    }

    export interface MandiriVaBankTransfer {
      mandiri_va_bank_transfer: MandiriVaBankTransfer.MandiriVaBankTransfer;
    }

    export namespace MandiriVaBankTransfer {
      export interface MandiriVaBankTransfer {
        billing_details?: PaymentsAPI.DokuBillingDetails | null;
      }
    }

    export interface Pix {
      pix: Pix.Pix;
    }

    export namespace Pix {
      export interface Pix {
        /**
         * CNPJ is a Brazilian company tax identification number
         */
        cnpj?: string | null;

        /**
         * CPF is a Brazilian tax identification number
         */
        cpf?: string | null;

        /**
         * Destination bank account number
         */
        destination_bank_account_id?: string | null;

        /**
         * Unique key for pix transfer
         */
        pix_key?: string | null;

        /**
         * Source bank account number
         */
        source_bank_account_id?: string | null;
      }
    }

    export interface Pse {
      pse: unknown;
    }

    export interface LocalBankTransfer {
      local_bank_transfer: LocalBankTransfer.LocalBankTransfer;
    }

    export namespace LocalBankTransfer {
      export interface LocalBankTransfer {
        bank_code?: string | null;
      }
    }

    export interface InstantBankTransfer {
      instant_bank_transfer: unknown;
    }

    export interface InstantBankTransferFinland {
      instant_bank_transfer_finland: unknown;
    }

    export interface InstantBankTransferPoland {
      instant_bank_transfer_poland: unknown;
    }
  }

  export interface RealTimePayment {
    real_time_payment: PaymentsAPI.RealTimePaymentData;

    billing?: PaymentsAPI.Address | null;
  }

  export interface Crypto {
    crypto: PaymentsAPI.CryptoData;

    billing?: PaymentsAPI.Address | null;
  }

  export interface MandatePayment {
    billing?: PaymentsAPI.Address | null;
  }

  export interface Reward {
    billing?: PaymentsAPI.Address | null;
  }

  export interface Upi {
    upi: Upi.UpiCollect | Upi.UpiIntent;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace Upi {
    export interface UpiCollect {
      upi_collect: UpiCollect.UpiCollect;
    }

    export namespace UpiCollect {
      export interface UpiCollect {
        vpa_id?: string | null;
      }
    }

    export interface UpiIntent {
      upi_intent: unknown;
    }
  }

  export interface Voucher {
    voucher: PaymentsAPI.VoucherData;

    billing?: PaymentsAPI.Address | null;
  }

  export interface GiftCard {
    gift_card: GiftCard.Givex | GiftCard.PaySafeCard;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace GiftCard {
    export interface Givex {
      givex: Givex.Givex;
    }

    export namespace Givex {
      export interface Givex {
        /**
         * The card verification code.
         */
        cvc: string;

        /**
         * The gift card number
         */
        number: string;
      }
    }

    export interface PaySafeCard {
      pay_safe_card: unknown;
    }
  }

  export interface CardToken {
    card_token: CardToken.CardToken;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace CardToken {
    export interface CardToken {
      /**
       * The card holder's name
       */
      card_holder_name: string;

      /**
       * The CVC number for the card
       */
      card_cvc?: string | null;
    }
  }

  export interface OpenBanking {
    open_banking: PaymentsAPI.OpenBankingData;

    billing?: PaymentsAPI.Address | null;
  }

  export interface MobilePayment {
    mobile_payment: PaymentsAPI.MobilePaymentData;

    billing?: PaymentsAPI.Address | null;
  }
}

export type PaymentMethodDataResponseWithBilling =
  | PaymentMethodDataResponseWithBilling.UnionMember0
  | PaymentMethodDataResponseWithBilling.UnionMember1
  | PaymentMethodDataResponseWithBilling.UnionMember2
  | PaymentMethodDataResponseWithBilling.UnionMember3
  | PaymentMethodDataResponseWithBilling.UnionMember4
  | PaymentMethodDataResponseWithBilling.UnionMember5
  | PaymentMethodDataResponseWithBilling.UnionMember6
  | PaymentMethodDataResponseWithBilling.UnionMember7
  | PaymentMethodDataResponseWithBilling.UnionMember8
  | PaymentMethodDataResponseWithBilling.UnionMember9
  | PaymentMethodDataResponseWithBilling.UnionMember10
  | PaymentMethodDataResponseWithBilling.UnionMember11
  | PaymentMethodDataResponseWithBilling.UnionMember12
  | PaymentMethodDataResponseWithBilling.UnionMember13
  | PaymentMethodDataResponseWithBilling.UnionMember14
  | PaymentMethodDataResponseWithBilling.UnionMember15
  | PaymentMethodDataResponseWithBilling.UnionMember16;

export namespace PaymentMethodDataResponseWithBilling {
  export interface UnionMember0 {
    card: UnionMember0.Card;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember0 {
    export interface Card {
      authentication_data?: unknown;

      card_exp_month?: string | null;

      card_exp_year?: string | null;

      card_extended_bin?: string | null;

      card_holder_name?: string | null;

      card_isin?: string | null;

      card_issuer?: string | null;

      card_issuing_country?: string | null;

      /**
       * Indicates the card network.
       */
      card_network?: AccountsAPI.CardNetwork | null;

      card_type?: string | null;

      last4?: string | null;

      payment_checks?: unknown;
    }
  }

  export interface UnionMember1 {
    bank_transfer:
      | UnionMember1.ACH
      | UnionMember1.Sepa
      | UnionMember1.Bacs
      | UnionMember1.Multibanco
      | UnionMember1.Permata
      | UnionMember1.Bca
      | UnionMember1.BniVa
      | UnionMember1.BriVa
      | UnionMember1.CimbVa
      | UnionMember1.DanamonVa
      | UnionMember1.MandiriVa
      | UnionMember1.Pix
      | UnionMember1.Pse
      | UnionMember1.LocalBankTransfer
      | UnionMember1.InstantBankTransfer
      | UnionMember1.InstantBankTransferFinland
      | UnionMember1.InstantBankTransferPoland;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember1 {
    export interface ACH {
      ach: unknown;
    }

    export interface Sepa {
      sepa: unknown;
    }

    export interface Bacs {
      bacs: unknown;
    }

    export interface Multibanco {
      multibanco: unknown;
    }

    export interface Permata {
      permata: unknown;
    }

    export interface Bca {
      bca: unknown;
    }

    export interface BniVa {
      bni_va: unknown;
    }

    export interface BriVa {
      bri_va: unknown;
    }

    export interface CimbVa {
      cimb_va: unknown;
    }

    export interface DanamonVa {
      danamon_va: unknown;
    }

    export interface MandiriVa {
      mandiri_va: unknown;
    }

    export interface Pix {
      pix: PayoutsAPI.PixBankTransferAdditionalData;
    }

    export interface Pse {
      pse: unknown;
    }

    export interface LocalBankTransfer {
      local_bank_transfer: LocalBankTransfer.LocalBankTransfer;
    }

    export namespace LocalBankTransfer {
      export interface LocalBankTransfer {
        /**
         * Partially masked bank code
         */
        bank_code?: string | null;
      }
    }

    export interface InstantBankTransfer {
      instant_bank_transfer: unknown;
    }

    export interface InstantBankTransferFinland {
      instant_bank_transfer_finland: unknown;
    }

    export interface InstantBankTransferPoland {
      instant_bank_transfer_poland: unknown;
    }
  }

  export interface UnionMember2 {
    wallet: UnionMember2.ApplePay | UnionMember2.GooglePay | UnionMember2.SamsungPay;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember2 {
    export interface ApplePay {
      apple_pay: PaymentsAPI.WalletAdditionalDataForCard;
    }

    export interface GooglePay {
      google_pay: PaymentsAPI.WalletAdditionalDataForCard;
    }

    export interface SamsungPay {
      samsung_pay: PaymentsAPI.WalletAdditionalDataForCard;
    }
  }

  export interface UnionMember3 {
    pay_later: UnionMember3.PayLater;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember3 {
    export interface PayLater {
      klarna_sdk?: PayLater.KlarnaSDK | null;
    }

    export namespace PayLater {
      export interface KlarnaSDK {
        payment_type?: string | null;
      }
    }
  }

  export interface UnionMember4 {
    bank_redirect: UnionMember4.UnionMember0 | UnionMember4.UnionMember1 | UnionMember4.UnionMember2;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember4 {
    export interface UnionMember0 {
      BancontactCard: UnionMember0.BancontactCard;

      /**
       * Name of banks supported by Hyperswitch
       */
      bank_name?: PayoutsAPI.BankNames | null;
    }

    export namespace UnionMember0 {
      export interface BancontactCard {
        /**
         * The card's expiry month
         */
        card_exp_month?: string | null;

        /**
         * The card's expiry year
         */
        card_exp_year?: string | null;

        /**
         * The card holder's name
         */
        card_holder_name?: string | null;

        /**
         * Last 4 digits of the card number
         */
        last4?: string | null;
      }
    }

    export interface UnionMember1 {
      Blik: UnionMember1.Blik;

      /**
       * Name of banks supported by Hyperswitch
       */
      bank_name?: PayoutsAPI.BankNames | null;
    }

    export namespace UnionMember1 {
      export interface Blik {
        blik_code?: string | null;
      }
    }

    export interface UnionMember2 {
      Giropay: UnionMember2.Giropay;

      /**
       * Name of banks supported by Hyperswitch
       */
      bank_name?: PayoutsAPI.BankNames | null;
    }

    export namespace UnionMember2 {
      export interface Giropay {
        /**
         * Masked bank account bic code
         */
        bic?: string | null;

        country?: AccountsAPI.CountryAlpha2 | null;

        /**
         * Partially masked international bank account number (iban) for SEPA
         */
        iban?: string | null;
      }
    }
  }

  export interface UnionMember5 {
    crypto: UnionMember5.Crypto;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember5 {
    export interface Crypto extends PaymentsAPI.CryptoData {}
  }

  export interface UnionMember6 {
    bank_debit: UnionMember6.ACH | UnionMember6.Bacs | UnionMember6.Becs | UnionMember6.Sepa;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember6 {
    export interface ACH {
      ach: ACH.ACH;
    }

    export namespace ACH {
      export interface ACH {
        /**
         * Partially masked account number for ach bank debit payment
         */
        account_number: string;

        /**
         * Partially masked routing number for ach bank debit payment
         */
        routing_number: string;

        /**
         * Bank account's owner name
         */
        bank_account_holder_name?: string | null;

        bank_holder_type?: 'personal' | 'business' | null;

        /**
         * Name of banks supported by Hyperswitch
         */
        bank_name?: PayoutsAPI.BankNames | null;

        bank_type?: 'checking' | 'savings' | null;

        /**
         * Card holder's name
         */
        card_holder_name?: string | null;
      }
    }

    export interface Bacs {
      bacs: Bacs.Bacs;
    }

    export namespace Bacs {
      export interface Bacs {
        /**
         * Partially masked account number for Bacs payment method
         */
        account_number: string;

        /**
         * Partially masked sort code for Bacs payment method
         */
        sort_code: string;

        /**
         * Bank account's owner name
         */
        bank_account_holder_name?: string | null;
      }
    }

    export interface Becs {
      becs: Becs.Becs;
    }

    export namespace Becs {
      export interface Becs {
        /**
         * Partially masked account number for Becs payment method
         */
        account_number: string;

        /**
         * Bank-State-Branch (bsb) number
         */
        bsb_number: string;

        /**
         * Bank account's owner name
         */
        bank_account_holder_name?: string | null;
      }
    }

    export interface Sepa {
      sepa: Sepa.Sepa;
    }

    export namespace Sepa {
      export interface Sepa {
        /**
         * Partially masked international bank account number (iban) for SEPA
         */
        iban: string;

        /**
         * Bank account's owner name
         */
        bank_account_holder_name?: string | null;
      }
    }
  }

  export interface UnionMember7 {
    mandate_payment: unknown;

    billing?: PaymentsAPI.Address | null;
  }

  export interface UnionMember8 {
    reward: unknown;

    billing?: PaymentsAPI.Address | null;
  }

  export interface UnionMember9 {
    real_time_payment: UnionMember9.Fps | UnionMember9.DuitNow | UnionMember9.PromptPay | UnionMember9.VietQr;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember9 {
    export interface Fps {
      fps: unknown;
    }

    export interface DuitNow {
      duit_now: unknown;
    }

    export interface PromptPay {
      prompt_pay: unknown;
    }

    export interface VietQr {
      viet_qr: unknown;
    }
  }

  export interface UnionMember10 {
    upi: UnionMember10.UpiCollect | UnionMember10.UpiIntent;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember10 {
    export interface UpiCollect {
      upi_collect: UpiCollect.UpiCollect;
    }

    export namespace UpiCollect {
      export interface UpiCollect {
        /**
         * Masked VPA ID
         */
        vpa_id?: string | null;
      }
    }

    export interface UpiIntent {
      upi_intent: unknown;
    }
  }

  export interface UnionMember11 {
    voucher:
      | 'efecty'
      | 'pago_efectivo'
      | 'red_compra'
      | 'red_pagos'
      | 'oxxo'
      | UnionMember11.Boleto
      | UnionMember11.Alfamart
      | UnionMember11.Indomaret
      | UnionMember11.SevenEleven
      | UnionMember11.Lawson
      | UnionMember11.MiniStop
      | UnionMember11.FamilyMart
      | UnionMember11.Seicomart
      | UnionMember11.PayEasy;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember11 {
    export interface Boleto {
      boleto: Boleto.Boleto;
    }

    export namespace Boleto {
      export interface Boleto {
        /**
         * The shopper's social security number
         */
        social_security_number?: string | null;
      }
    }

    export interface Alfamart {
      alfamart: Alfamart.Alfamart;
    }

    export namespace Alfamart {
      export interface Alfamart {
        /**
         * The Email ID for Alfamart
         */
        email?: string | null;

        /**
         * The billing first name for Alfamart
         */
        first_name?: string | null;

        /**
         * The billing second name for Alfamart
         */
        last_name?: string | null;
      }
    }

    export interface Indomaret {
      indomaret: Indomaret.Indomaret;
    }

    export namespace Indomaret {
      export interface Indomaret {
        /**
         * The Email ID for Alfamart
         */
        email?: string | null;

        /**
         * The billing first name for Alfamart
         */
        first_name?: string | null;

        /**
         * The billing second name for Alfamart
         */
        last_name?: string | null;
      }
    }

    export interface SevenEleven {
      seven_eleven: PaymentsAPI.JcsVoucherData;
    }

    export interface Lawson {
      lawson: PaymentsAPI.JcsVoucherData;
    }

    export interface MiniStop {
      mini_stop: PaymentsAPI.JcsVoucherData;
    }

    export interface FamilyMart {
      family_mart: PaymentsAPI.JcsVoucherData;
    }

    export interface Seicomart {
      seicomart: PaymentsAPI.JcsVoucherData;
    }

    export interface PayEasy {
      pay_easy: PaymentsAPI.JcsVoucherData;
    }
  }

  export interface UnionMember12 {
    gift_card: UnionMember12.Givex | UnionMember12.PaySafeCard;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember12 {
    export interface Givex {
      givex: Givex.Givex;
    }

    export namespace Givex {
      export interface Givex {
        /**
         * Last 4 digits of the gift card number
         */
        last4: string;
      }
    }

    export interface PaySafeCard {
      pay_safe_card: unknown;
    }
  }

  export interface UnionMember13 {
    card_redirect:
      | UnionMember13.Knet
      | UnionMember13.Benefit
      | UnionMember13.MomoAtm
      | UnionMember13.CardRedirect;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember13 {
    export interface Knet {
      knet: unknown;
    }

    export interface Benefit {
      benefit: unknown;
    }

    export interface MomoAtm {
      momo_atm: unknown;
    }

    export interface CardRedirect {
      card_redirect: unknown;
    }
  }

  export interface UnionMember14 {
    card_token: UnionMember14.CardToken;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember14 {
    export interface CardToken {
      /**
       * The card holder's name
       */
      card_holder_name: string;
    }
  }

  export interface UnionMember15 {
    open_banking: UnionMember15.OpenBanking;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember15 {
    export interface OpenBanking {
      open_banking_pis: unknown;
    }
  }

  export interface UnionMember16 {
    mobile_payment: UnionMember16.MobilePayment;

    billing?: PaymentsAPI.Address | null;
  }

  export namespace UnionMember16 {
    export interface MobilePayment {
      direct_carrier_billing: MobilePayment.DirectCarrierBilling;
    }

    export namespace MobilePayment {
      export interface DirectCarrierBilling {
        /**
         * The phone number of the user
         */
        msisdn: string;

        /**
         * Unique user id
         */
        client_uid?: string | null;
      }
    }
  }
}

/**
 * Payment Method Status
 */
export type PaymentMethodStatus = 'active' | 'inactive' | 'processing' | 'awaiting_data';

/**
 * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
 * wallets.
 */
export type PaymentMethodType =
  | 'ach'
  | 'affirm'
  | 'afterpay_clearpay'
  | 'alfamart'
  | 'ali_pay'
  | 'ali_pay_hk'
  | 'alma'
  | 'amazon_pay'
  | 'apple_pay'
  | 'atome'
  | 'bacs'
  | 'bancontact_card'
  | 'becs'
  | 'benefit'
  | 'bizum'
  | 'blik'
  | 'boleto'
  | 'bca_bank_transfer'
  | 'bni_va'
  | 'bri_va'
  | 'card_redirect'
  | 'cimb_va'
  | 'classic'
  | 'credit'
  | 'crypto_currency'
  | 'cashapp'
  | 'dana'
  | 'danamon_va'
  | 'debit'
  | 'duit_now'
  | 'efecty'
  | 'eft'
  | 'eps'
  | 'fps'
  | 'evoucher'
  | 'giropay'
  | 'givex'
  | 'google_pay'
  | 'go_pay'
  | 'gcash'
  | 'ideal'
  | 'interac'
  | 'indomaret'
  | 'klarna'
  | 'kakao_pay'
  | 'local_bank_redirect'
  | 'mandiri_va'
  | 'knet'
  | 'mb_way'
  | 'mobile_pay'
  | 'momo'
  | 'momo_atm'
  | 'multibanco'
  | 'online_banking_thailand'
  | 'online_banking_czech_republic'
  | 'online_banking_finland'
  | 'online_banking_fpx'
  | 'online_banking_poland'
  | 'online_banking_slovakia'
  | 'oxxo'
  | 'pago_efectivo'
  | 'permata_bank_transfer'
  | 'open_banking_uk'
  | 'pay_bright'
  | 'paypal'
  | 'paze'
  | 'pix'
  | 'pay_safe_card'
  | 'przelewy24'
  | 'prompt_pay'
  | 'pse'
  | 'red_compra'
  | 'red_pagos'
  | 'samsung_pay'
  | 'sepa'
  | 'sepa_bank_transfer'
  | 'sofort'
  | 'swish'
  | 'touch_n_go'
  | 'trustly'
  | 'twint'
  | 'upi_collect'
  | 'upi_intent'
  | 'vipps'
  | 'viet_qr'
  | 'venmo'
  | 'walley'
  | 'we_chat_pay'
  | 'seven_eleven'
  | 'lawson'
  | 'mini_stop'
  | 'family_mart'
  | 'seicomart'
  | 'pay_easy'
  | 'local_bank_transfer'
  | 'mifinity'
  | 'open_banking_pis'
  | 'direct_carrier_billing'
  | 'instant_bank_transfer'
  | 'instant_bank_transfer_finland'
  | 'instant_bank_transfer_poland'
  | 'revolut_pay';

/**
 * The type of the payment that differentiates between normal and various types of
 * mandate payments. Use 'setup_mandate' in case of zero auth flow.
 */
export type PaymentType = 'normal' | 'new_mandate' | 'setup_mandate' | 'recurring_mandate';

export interface PaymentsCreateResponseOpenAPI {
  /**
   * The payment amount. Amount for the payment in lowest denomination of the
   * currency. (i.e) in cents for USD denomination, in paisa for INR denomination
   * etc.,
   */
  amount: number;

  /**
   * The amount (in minor units) that can still be captured for this payment. This is
   * relevant when `capture_method` is `manual`. Once fully captured, or if
   * `capture_method` is `automatic` and payment succeeded, this will be 0.
   */
  amount_capturable: number;

  /**
   * Total number of attempts associated with this payment
   */
  attempt_count: number;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  /**
   * This is an identifier for the merchant account. This is inferred from the API
   * key provided during the request
   */
  merchant_id: string;

  /**
   * The payment net amount. net_amount = amount +
   * surcharge_details.surcharge_amount + surcharge_details.tax_amount +
   * shipping_cost + order_tax_amount, If no surcharge_details, shipping_cost,
   * order_tax_amount, net_amount = amount
   */
  net_amount: number;

  /**
   * Unique identifier for the payment. This ensures idempotency for multiple
   * payments that have been done by a single merchant.
   */
  payment_id: string;

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
   * Represents the overall status of a payment intent. The status transitions
   * through various states depending on the payment method, confirmation, capture
   * method, and any subsequent actions (like customer authentication or manual
   * capture).
   */
  status: IntentStatus;

  /**
   * Allowed Payment Method Types for a given PaymentIntent
   */
  allowed_payment_method_types?: Array<PaymentMethodType> | null;

  /**
   * The total amount (in minor units) that has been captured for this payment. For
   * `fauxpay` sandbox connector, this might reflect the authorized amount if
   * `status` is `succeeded` even if `capture_method` was `manual`.
   */
  amount_received?: number | null;

  /**
   * List of attempts that happened on this intent
   */
  attempts?: Array<PaymentAttemptResponse> | null;

  /**
   * Specifies the type of cardholder authentication to be applied for a payment.
   *
   * - `ThreeDs`: Requests 3D Secure (3DS) authentication. If the card is enrolled,
   *   3DS authentication will be activated, potentially shifting chargeback
   *   liability to the issuer.
   * - `NoThreeDs`: Indicates that 3D Secure authentication should not be performed.
   *   The liability for chargebacks typically remains with the merchant. This is
   *   often the default if not specified.
   *
   * Note: The actual authentication behavior can also be influenced by merchant
   * configuration and specific connector defaults. Some connectors might still
   * enforce 3DS or bypass it regardless of this parameter.
   */
  authentication_type?: AuthenticationType | null;

  /**
   * Total number of authorizations happened in an incremental_authorization payment
   */
  authorization_count?: number | null;

  billing?: Address | null;

  /**
   * Browser information to be used for 3DS 2.0
   */
  browser_info?: BrowserInformation | null;

  business_country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * The label identifying the specific business unit or profile under which this
   * payment was processed by the merchant.
   */
  business_label?: string | null;

  /**
   * An optional sub-label for further categorization of the business unit or profile
   * used for this payment.
   */
  business_sub_label?: string | null;

  /**
   * If the payment intent was cancelled, this field provides a textual reason for
   * the cancellation (e.g., "requested_by_customer", "abandoned").
   */
  cancellation_reason?: string | null;

  /**
   * date and time after which this payment cannot be captured
   */
  capture_before?: string | null;

  /**
   * Specifies how the payment is captured.
   *
   * - `automatic`: Funds are captured immediately after successful authorization.
   *   This is the default behavior if the field is omitted.
   * - `manual`: Funds are authorized but not captured. A separate request to the
   *   `/payments/{payment_id}/capture` endpoint is required to capture the funds.
   */
  capture_method?: CaptureMethod | null;

  /**
   * List of captures done on latest attempt
   */
  captures?: Array<CaptureResponse> | null;

  /**
   * Indicates the method by which a card is discovered during a payment
   */
  card_discovery?: CardDiscovery | null;

  /**
   * A secret token unique to this payment intent. It is primarily used by
   * client-side applications (e.g., Hyperswitch SDKs) to authenticate actions like
   * confirming the payment or handling next actions. This secret should be handled
   * carefully and not exposed publicly beyond its intended client-side use.
   */
  client_secret?: string | null;

  /**
   * The name of the payment connector (e.g., 'stripe', 'adyen') that processed or is
   * processing this payment.
   */
  connector?: string | null;

  /**
   * A label identifying the specific merchant connector account (MCA) used for this
   * payment. This often combines the connector name, business country, and a custom
   * label (e.g., "stripe_US_primary").
   */
  connector_label?: string | null;

  /**
   * Connector Identifier for the payment method
   */
  connector_mandate_id?: string | null;

  /**
   * Some connectors like Apple Pay, Airwallex and Noon might require some additional
   * information, find specific details in the child attributes below.
   */
  connector_metadata?: ConnectorMetadata | null;

  /**
   * A unique identifier for a payment provided by the connector
   */
  connector_transaction_id?: string | null;

  /**
   * Timestamp indicating when this payment intent was created, in ISO 8601 format.
   */
  created?: string | null;

  /**
   * @deprecated The identifier for the customer object. If not provided the customer
   * ID will be autogenerated. This field will be deprecated soon. Please refer to
   * `customer.id`
   */
  customer_id?: string | null;

  /**
   * An arbitrary string providing a description for the payment, often useful for
   * display or internal record-keeping.
   */
  description?: string | null;

  /**
   * List of disputes that happened on this intent
   */
  disputes?: Array<DisputeResponsePaymentsRetrieve> | null;

  /**
   * @deprecated description: The customer's email address This field will be
   * deprecated soon. Please refer to `customer.email` object
   */
  email?: string | null;

  /**
   * ephemeral_key for the customer_id mentioned
   */
  ephemeral_key?: EphemeralKeyCreateResponse | null;

  /**
   * The connector-specific error code from the last failed payment attempt
   * associated with this payment intent.
   */
  error_code?: string | null;

  /**
   * A human-readable error message from the last failed payment attempt associated
   * with this payment intent.
   */
  error_message?: string | null;

  /**
   * Date Time for expiry of the payment
   */
  expires_on?: string | null;

  /**
   * flag that indicates if extended authorization is applied on this payment or not
   */
  extended_authorization_applied?: boolean | null;

  /**
   * Flag indicating if external 3ds authentication is made or not
   */
  external_3ds_authentication_attempted?: boolean | null;

  /**
   * Details of external authentication
   */
  external_authentication_details?: ExternalAuthenticationDetailsResponse | null;

  /**
   * additional data that might be required by hyperswitch
   */
  feature_metadata?: FeatureMetadata | null;

  /**
   * Payment Fingerprint, to identify a particular card. It is a 20 character long
   * alphanumeric code.
   */
  fingerprint?: string | null;

  /**
   * Indicates if 3ds challenge is forced
   */
  force_3ds_challenge?: boolean | null;

  /**
   * Indicates if 3ds challenge is triggered
   */
  force_3ds_challenge_trigger?: boolean | null;

  /**
   * frm message is an object sent inside the payments response...when frm is
   * invoked, its value is Some(...), else its None
   */
  frm_message?: FrmMessage | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. FRM Metadata is useful for storing additional,
   * structured information on an object related to FRM.
   */
  frm_metadata?: unknown | null;

  /**
   * If true, incremental authorization can be performed on this payment, in case the
   * funds authorized initially fall short.
   */
  incremental_authorization_allowed?: boolean | null;

  /**
   * List of incremental authorizations happened to the payment
   */
  incremental_authorizations?: Array<IncrementalAuthorizationResponse> | null;

  /**
   * Indicates if the redirection has to open in the iframe
   */
  is_iframe_redirection_enabled?: boolean | null;

  /**
   * Error code received from the issuer in case of failed payments
   */
  issuer_error_code?: string | null;

  /**
   * Error message received from the issuer in case of failed payments
   */
  issuer_error_message?: string | null;

  /**
   * Passing this object during payments creates a mandate. The mandate_type sub
   * object is passed by the server.
   */
  mandate_data?: MandateData | null;

  /**
   * A unique identifier to link the payment to a mandate, can be used instead of
   * payment_method_data, in case of setting up recurring payments
   */
  mandate_id?: string | null;

  /**
   * If true the payment can be retried with same or different payment method which
   * means the confirm call can be made again.
   */
  manual_retry_allowed?: boolean | null;

  /**
   * Identifier of the connector ( merchant connector account ) which was chosen to
   * make the payment
   */
  merchant_connector_id?: string | null;

  /**
   * Denotes the action(approve or reject) taken by merchant in case of manual
   * review. Manual review can occur when the transaction is marked as risky by the
   * frm_processor, payment processor or when there is underpayment/over payment
   * incase of crypto payment
   */
  merchant_decision?: string | null;

  /**
   * Merchant's identifier for the payment/invoice. This will be sent to the
   * connector if the connector provides support to accept multiple reference ids. In
   * case the connector supports only one reference id, Hyperswitch's Payment ID will
   * be sent as reference.
   */
  merchant_order_reference_id?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * @deprecated description: The customer's name This field will be deprecated soon.
   * Please refer to `customer.name` object
   */
  name?: string | null;

  /**
   * Contains the url for redirection flow
   */
  next_action?: NextActionData | null;

  /**
   * Set to true to indicate that the customer is not in your checkout flow during
   * this payment, and therefore is unable to authenticate. This parameter is
   * intended for scenarios where you collect card details and charge them later.
   * This parameter can only be used with confirm=true.
   */
  off_session?: boolean | null;

  /**
   * Information about the product , quantity and amount for connectors. (e.g.
   * Klarna)
   */
  order_details?: Array<OrderDetailsWithAmount> | null;

  /**
   * This Unit struct represents MinorUnit in which core amount works
   */
  order_tax_amount?: number | null;

  /**
   * To indicate the type of payment experience that the customer would go through
   */
  payment_experience?: PaymentExperience | null;

  payment_link?: PaymentLinkResponse | null;

  payment_method_data?: PaymentMethodDataResponseWithBilling | null;

  /**
   * A unique identifier for the payment method used in this payment. If the payment
   * method was saved or tokenized, this ID can be used to reference it for future
   * transactions or recurring payments.
   */
  payment_method_id?: string | null;

  /**
   * Payment Method Status
   */
  payment_method_status?: PaymentMethodStatus | null;

  /**
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type?: PaymentMethodType | null;

  /**
   * Provide a reference to a stored payment method
   */
  payment_token?: string | null;

  /**
   * @deprecated The customer's phone number This field will be deprecated soon.
   * Please refer to `customer.phone` object
   */
  phone?: string | null;

  /**
   * The business profile that is associated with this payment
   */
  profile_id?: string | null;

  /**
   * reference(Identifier) to the payment at connector side
   */
  reference_id?: string | null;

  /**
   * An array of refund objects associated with this payment. Empty or null if no
   * refunds have been processed.
   */
  refunds?: Array<RefundsAPI.RefundResponse> | null;

  /**
   * The URL to redirect after the completion of the operation
   */
  return_url?: string | null;

  /**
   * Specifies how the payment method can be used for future payments.
   *
   * - `off_session`: The payment method can be used for future payments when the
   *   customer is not present.
   * - `on_session`: The payment method is intended for use only when the customer is
   *   present during checkout. If omitted, defaults to `on_session`.
   */
  setup_future_usage?: FutureUsage | null;

  shipping?: Address | null;

  /**
   * The shipping cost for the payment.
   */
  shipping_cost?: number | null;

  /**
   * Charge Information
   */
  split_payments?: ConnectorChargeResponseData | null;

  /**
   * For non-card charges, you can use this value as the complete description that
   * appears on your customers’ statements. Must contain at least one letter, maximum
   * 22 characters.
   */
  statement_descriptor_name?: string | null;

  /**
   * Provides information about a card payment that customers see on their
   * statements. Concatenated with the prefix (shortened descriptor) or statement
   * descriptor that’s set on the account to form the complete statement descriptor.
   * Maximum 255 characters for the concatenated descriptor.
   */
  statement_descriptor_suffix?: string | null;

  /**
   * Details of surcharge applied on this payment, if applicable
   */
  surcharge_details?: RequestSurchargeDetails | null;

  /**
   * Date time at which payment was updated
   */
  updated?: string | null;

  /**
   * Contains whole connector response
   */
  whole_connector_response?: string | null;
}

export interface PaymentsResponse {
  /**
   * The payment amount. Amount for the payment in lowest denomination of the
   * currency. (i.e) in cents for USD denomination, in paisa for INR denomination
   * etc.,
   */
  amount: number;

  /**
   * The amount (in minor units) that can still be captured for this payment. This is
   * relevant when `capture_method` is `manual`. Once fully captured, or if
   * `capture_method` is `automatic` and payment succeeded, this will be 0.
   */
  amount_capturable: number;

  /**
   * Total number of attempts associated with this payment
   */
  attempt_count: number;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  /**
   * This is an identifier for the merchant account. This is inferred from the API
   * key provided during the request
   */
  merchant_id: string;

  /**
   * The payment net amount. net_amount = amount +
   * surcharge_details.surcharge_amount + surcharge_details.tax_amount +
   * shipping_cost + order_tax_amount, If no surcharge_details, shipping_cost,
   * order_tax_amount, net_amount = amount
   */
  net_amount: number;

  /**
   * Unique identifier for the payment. This ensures idempotency for multiple
   * payments that have been done by a single merchant.
   */
  payment_id: string;

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
   * Represents the overall status of a payment intent. The status transitions
   * through various states depending on the payment method, confirmation, capture
   * method, and any subsequent actions (like customer authentication or manual
   * capture).
   */
  status: IntentStatus;

  /**
   * Allowed Payment Method Types for a given PaymentIntent
   */
  allowed_payment_method_types?: Array<PaymentMethodType> | null;

  /**
   * The total amount (in minor units) that has been captured for this payment. For
   * `fauxpay` sandbox connector, this might reflect the authorized amount if
   * `status` is `succeeded` even if `capture_method` was `manual`.
   */
  amount_received?: number | null;

  /**
   * List of attempts that happened on this intent
   */
  attempts?: Array<PaymentAttemptResponse> | null;

  /**
   * Specifies the type of cardholder authentication to be applied for a payment.
   *
   * - `ThreeDs`: Requests 3D Secure (3DS) authentication. If the card is enrolled,
   *   3DS authentication will be activated, potentially shifting chargeback
   *   liability to the issuer.
   * - `NoThreeDs`: Indicates that 3D Secure authentication should not be performed.
   *   The liability for chargebacks typically remains with the merchant. This is
   *   often the default if not specified.
   *
   * Note: The actual authentication behavior can also be influenced by merchant
   * configuration and specific connector defaults. Some connectors might still
   * enforce 3DS or bypass it regardless of this parameter.
   */
  authentication_type?: AuthenticationType | null;

  /**
   * Total number of authorizations happened in an incremental_authorization payment
   */
  authorization_count?: number | null;

  billing?: Address | null;

  /**
   * Browser information to be used for 3DS 2.0
   */
  browser_info?: BrowserInformation | null;

  business_country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * The label identifying the specific business unit or profile under which this
   * payment was processed by the merchant.
   */
  business_label?: string | null;

  /**
   * An optional sub-label for further categorization of the business unit or profile
   * used for this payment.
   */
  business_sub_label?: string | null;

  /**
   * If the payment intent was cancelled, this field provides a textual reason for
   * the cancellation (e.g., "requested_by_customer", "abandoned").
   */
  cancellation_reason?: string | null;

  /**
   * date and time after which this payment cannot be captured
   */
  capture_before?: string | null;

  /**
   * Specifies how the payment is captured.
   *
   * - `automatic`: Funds are captured immediately after successful authorization.
   *   This is the default behavior if the field is omitted.
   * - `manual`: Funds are authorized but not captured. A separate request to the
   *   `/payments/{payment_id}/capture` endpoint is required to capture the funds.
   */
  capture_method?: CaptureMethod | null;

  /**
   * A timestamp (ISO 8601 code) that determines when the payment should be captured.
   * Providing this field will automatically set `capture` to true
   */
  capture_on?: string | null;

  /**
   * List of captures done on latest attempt
   */
  captures?: Array<CaptureResponse> | null;

  /**
   * Indicates the method by which a card is discovered during a payment
   */
  card_discovery?: CardDiscovery | null;

  /**
   * A secret token unique to this payment intent. It is primarily used by
   * client-side applications (e.g., Hyperswitch SDKs) to authenticate actions like
   * confirming the payment or handling next actions. This secret should be handled
   * carefully and not exposed publicly beyond its intended client-side use.
   */
  client_secret?: string | null;

  /**
   * The name of the payment connector (e.g., 'stripe', 'adyen') that processed or is
   * processing this payment.
   */
  connector?: string | null;

  /**
   * A label identifying the specific merchant connector account (MCA) used for this
   * payment. This often combines the connector name, business country, and a custom
   * label (e.g., "stripe_US_primary").
   */
  connector_label?: string | null;

  /**
   * Connector Identifier for the payment method
   */
  connector_mandate_id?: string | null;

  /**
   * Some connectors like Apple Pay, Airwallex and Noon might require some additional
   * information, find specific details in the child attributes below.
   */
  connector_metadata?: ConnectorMetadata | null;

  /**
   * A unique identifier for a payment provided by the connector
   */
  connector_transaction_id?: string | null;

  /**
   * Timestamp indicating when this payment intent was created, in ISO 8601 format.
   */
  created?: string | null;

  /**
   * Details of customer attached to this payment
   */
  customer?: CustomerDetailsResponse | null;

  /**
   * @deprecated The identifier for the customer object. If not provided the customer
   * ID will be autogenerated. This field will be deprecated soon. Please refer to
   * `customer.id`
   */
  customer_id?: string | null;

  /**
   * An arbitrary string providing a description for the payment, often useful for
   * display or internal record-keeping.
   */
  description?: string | null;

  /**
   * List of disputes that happened on this intent
   */
  disputes?: Array<DisputeResponsePaymentsRetrieve> | null;

  /**
   * @deprecated description: The customer's email address This field will be
   * deprecated soon. Please refer to `customer.email` object
   */
  email?: string | null;

  /**
   * ephemeral_key for the customer_id mentioned
   */
  ephemeral_key?: EphemeralKeyCreateResponse | null;

  /**
   * The connector-specific error code from the last failed payment attempt
   * associated with this payment intent.
   */
  error_code?: string | null;

  /**
   * A human-readable error message from the last failed payment attempt associated
   * with this payment intent.
   */
  error_message?: string | null;

  /**
   * Date Time for expiry of the payment
   */
  expires_on?: string | null;

  /**
   * flag that indicates if extended authorization is applied on this payment or not
   */
  extended_authorization_applied?: boolean | null;

  /**
   * Flag indicating if external 3ds authentication is made or not
   */
  external_3ds_authentication_attempted?: boolean | null;

  /**
   * Details of external authentication
   */
  external_authentication_details?: ExternalAuthenticationDetailsResponse | null;

  /**
   * additional data that might be required by hyperswitch
   */
  feature_metadata?: FeatureMetadata | null;

  /**
   * Payment Fingerprint, to identify a particular card. It is a 20 character long
   * alphanumeric code.
   */
  fingerprint?: string | null;

  /**
   * Indicates if 3ds challenge is forced
   */
  force_3ds_challenge?: boolean | null;

  /**
   * Indicates if 3ds challenge is triggered
   */
  force_3ds_challenge_trigger?: boolean | null;

  /**
   * frm message is an object sent inside the payments response...when frm is
   * invoked, its value is Some(...), else its None
   */
  frm_message?: FrmMessage | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. FRM Metadata is useful for storing additional,
   * structured information on an object related to FRM.
   */
  frm_metadata?: unknown | null;

  /**
   * If true, incremental authorization can be performed on this payment, in case the
   * funds authorized initially fall short.
   */
  incremental_authorization_allowed?: boolean | null;

  /**
   * List of incremental authorizations happened to the payment
   */
  incremental_authorizations?: Array<IncrementalAuthorizationResponse> | null;

  /**
   * Indicates if the redirection has to open in the iframe
   */
  is_iframe_redirection_enabled?: boolean | null;

  /**
   * Error code received from the issuer in case of failed payments
   */
  issuer_error_code?: string | null;

  /**
   * Error message received from the issuer in case of failed payments
   */
  issuer_error_message?: string | null;

  /**
   * Passing this object during payments creates a mandate. The mandate_type sub
   * object is passed by the server.
   */
  mandate_data?: MandateData | null;

  /**
   * A unique identifier to link the payment to a mandate, can be used instead of
   * payment_method_data, in case of setting up recurring payments
   */
  mandate_id?: string | null;

  /**
   * If true the payment can be retried with same or different payment method which
   * means the confirm call can be made again.
   */
  manual_retry_allowed?: boolean | null;

  /**
   * Identifier of the connector ( merchant connector account ) which was chosen to
   * make the payment
   */
  merchant_connector_id?: string | null;

  /**
   * Denotes the action(approve or reject) taken by merchant in case of manual
   * review. Manual review can occur when the transaction is marked as risky by the
   * frm_processor, payment processor or when there is underpayment/over payment
   * incase of crypto payment
   */
  merchant_decision?: string | null;

  /**
   * Merchant's identifier for the payment/invoice. This will be sent to the
   * connector if the connector provides support to accept multiple reference ids. In
   * case the connector supports only one reference id, Hyperswitch's Payment ID will
   * be sent as reference.
   */
  merchant_order_reference_id?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * @deprecated description: The customer's name This field will be deprecated soon.
   * Please refer to `customer.name` object
   */
  name?: string | null;

  /**
   * Contains the url for redirection flow
   */
  next_action?: NextActionData | null;

  /**
   * Set to true to indicate that the customer is not in your checkout flow during
   * this payment, and therefore is unable to authenticate. This parameter is
   * intended for scenarios where you collect card details and charge them later.
   * This parameter can only be used with confirm=true.
   */
  off_session?: boolean | null;

  /**
   * Information about the product , quantity and amount for connectors. (e.g.
   * Klarna)
   */
  order_details?: Array<OrderDetailsWithAmount> | null;

  /**
   * This Unit struct represents MinorUnit in which core amount works
   */
  order_tax_amount?: number | null;

  /**
   * To indicate the type of payment experience that the customer would go through
   */
  payment_experience?: PaymentExperience | null;

  payment_link?: PaymentLinkResponse | null;

  payment_method_data?: PaymentMethodDataResponseWithBilling | null;

  /**
   * A unique identifier for the payment method used in this payment. If the payment
   * method was saved or tokenized, this ID can be used to reference it for future
   * transactions or recurring payments.
   */
  payment_method_id?: string | null;

  /**
   * Payment Method Status
   */
  payment_method_status?: PaymentMethodStatus | null;

  /**
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type?: PaymentMethodType | null;

  /**
   * Provide a reference to a stored payment method
   */
  payment_token?: string | null;

  /**
   * @deprecated The customer's phone number This field will be deprecated soon.
   * Please refer to `customer.phone` object
   */
  phone?: string | null;

  /**
   * The business profile that is associated with this payment
   */
  profile_id?: string | null;

  /**
   * reference(Identifier) to the payment at connector side
   */
  reference_id?: string | null;

  /**
   * An array of refund objects associated with this payment. Empty or null if no
   * refunds have been processed.
   */
  refunds?: Array<RefundsAPI.RefundResponse> | null;

  /**
   * The URL to redirect after the completion of the operation
   */
  return_url?: string | null;

  /**
   * Specifies how the payment method can be used for future payments.
   *
   * - `off_session`: The payment method can be used for future payments when the
   *   customer is not present.
   * - `on_session`: The payment method is intended for use only when the customer is
   *   present during checkout. If omitted, defaults to `on_session`.
   */
  setup_future_usage?: FutureUsage | null;

  shipping?: Address | null;

  /**
   * The shipping cost for the payment.
   */
  shipping_cost?: number | null;

  /**
   * Charge Information
   */
  split_payments?: ConnectorChargeResponseData | null;

  /**
   * For non-card charges, you can use this value as the complete description that
   * appears on your customers’ statements. Must contain at least one letter, maximum
   * 22 characters.
   */
  statement_descriptor_name?: string | null;

  /**
   * Provides information about a card payment that customers see on their
   * statements. Concatenated with the prefix (shortened descriptor) or statement
   * descriptor that’s set on the account to form the complete statement descriptor.
   * Maximum 255 characters for the concatenated descriptor.
   */
  statement_descriptor_suffix?: string | null;

  /**
   * Details of surcharge applied on this payment, if applicable
   */
  surcharge_details?: RequestSurchargeDetails | null;

  /**
   * error code unified across the connectors is received here if there was an error
   * while calling connector
   */
  unified_code?: string | null;

  /**
   * error message unified across the connectors is received here if there was an
   * error while calling connector
   */
  unified_message?: string | null;

  /**
   * Date time at which payment was updated
   */
  updated?: string | null;

  /**
   * Contains whole connector response
   */
  whole_connector_response?: string | null;
}

export type RealTimePaymentData =
  | RealTimePaymentData.Fps
  | RealTimePaymentData.DuitNow
  | RealTimePaymentData.PromptPay
  | RealTimePaymentData.VietQr;

export namespace RealTimePaymentData {
  export interface Fps {
    fps: unknown;
  }

  export interface DuitNow {
    duit_now: unknown;
  }

  export interface PromptPay {
    prompt_pay: unknown;
  }

  export interface VietQr {
    viet_qr: unknown;
  }
}

/**
 * Details required for recurring payment
 */
export type RecurringDetails =
  | RecurringDetails.MandateID
  | RecurringDetails.PaymentMethodID
  | RecurringDetails.ProcessorPaymentToken
  | RecurringDetails.NetworkTransactionIDAndCardDetails;

export namespace RecurringDetails {
  export interface MandateID {
    data: string;

    type: 'mandate_id';
  }

  export interface PaymentMethodID {
    data: string;

    type: 'payment_method_id';
  }

  export interface ProcessorPaymentToken {
    /**
     * Processor payment token for MIT payments where payment_method_data is not
     * available
     */
    data: ProcessorPaymentToken.Data;

    type: 'processor_payment_token';
  }

  export namespace ProcessorPaymentToken {
    /**
     * Processor payment token for MIT payments where payment_method_data is not
     * available
     */
    export interface Data {
      processor_payment_token: string;

      merchant_connector_id?: string | null;
    }
  }

  export interface NetworkTransactionIDAndCardDetails {
    data: NetworkTransactionIDAndCardDetails.Data;

    type: 'network_transaction_id_and_card_details';
  }

  export namespace NetworkTransactionIDAndCardDetails {
    export interface Data {
      /**
       * The card's expiry month
       */
      card_exp_month: string;

      /**
       * The card's expiry year
       */
      card_exp_year: string;

      /**
       * The card holder's name
       */
      card_holder_name: string;

      /**
       * The card number
       */
      card_number: string;

      /**
       * The network transaction ID provided by the card network during a CIT (Customer
       * Initiated Transaction), where `setup_future_usage` is set to `off_session`.
       */
      network_transaction_id: string;

      bank_code?: string | null;

      /**
       * The name of the issuer of card
       */
      card_issuer?: string | null;

      card_issuing_country?: string | null;

      /**
       * Indicates the card network.
       */
      card_network?: AccountsAPI.CardNetwork | null;

      card_type?: string | null;

      /**
       * The card holder's nick name
       */
      nick_name?: string | null;
    }
  }
}

export type RecurringPaymentIntervalUnit = 'year' | 'month' | 'day' | 'hour' | 'minute';

/**
 * Details of surcharge applied on this payment, if applicable
 */
export interface RequestSurchargeDetails {
  surcharge_amount: number;

  /**
   * This Unit struct represents MinorUnit in which core amount works
   */
  tax_amount?: number | null;
}

/**
 * Denotes the retry action
 */
export type RetryAction = 'manual_retry' | 'requeue';

export type SamsungPayCardBrand = 'visa' | 'mastercard' | 'amex' | 'discover' | 'unknown';

export interface SamsungPayTokenData {
  /**
   * Samsung Pay encrypted payment credential data
   */
  data: string;

  /**
   * 3DS version used by Samsung Pay
   */
  version: string;

  /**
   * 3DS type used by Samsung Pay
   */
  type?: string | null;
}

/**
 * SCA Exemptions types available for authentication
 */
export type ScaExemptionType = 'low_value' | 'transaction_risk_analysis';

export interface SDKNextAction {
  next_action: NextActionCall;
}

export interface SecretInfoToInitiateSDK {
  display: string;

  payment: string;
}

export interface SepaAndBacsBillingDetails {
  /**
   * The Email ID for SEPA and BACS billing
   */
  email?: string | null;

  /**
   * The billing name for SEPA and BACS billing
   */
  name?: string | null;
}

export type SessionToken =
  | SessionToken.GooglePayThirdPartySDK
  | SessionToken.GooglePaySessionResponse
  | SessionToken.SamsungPay
  | SessionToken.Klarna
  | SessionToken.Paypal
  | SessionToken.ApplePay
  | SessionToken.OpenBanking
  | SessionToken.Paze
  | SessionToken.ClickToPay
  | SessionToken.NoSessionTokenReceived;

export namespace SessionToken {
  export interface GooglePayThirdPartySDK {
    /**
     * The name of the connector
     */
    connector: string;

    /**
     * Identifier for the delayed session response
     */
    delayed_session_token: boolean;

    sdk_next_action: PaymentsAPI.SDKNextAction;

    wallet_name?: 'google_pay';
  }

  export interface GooglePaySessionResponse {
    /**
     * List of the allowed payment meythods
     */
    allowed_payment_methods: Array<GooglePaySessionResponse.AllowedPaymentMethod>;

    /**
     * The name of the connector
     */
    connector: string;

    /**
     * Identifier for the delayed session response
     */
    delayed_session_token: boolean;

    /**
     * Is email required
     */
    email_required: boolean;

    merchant_info: GooglePaySessionResponse.MerchantInfo;

    sdk_next_action: PaymentsAPI.SDKNextAction;

    shipping_address_parameters: GooglePaySessionResponse.ShippingAddressParameters;

    /**
     * Is shipping address required
     */
    shipping_address_required: boolean;

    transaction_info: GooglePaySessionResponse.TransactionInfo;

    secrets?: PaymentsAPI.SecretInfoToInitiateSDK | null;

    wallet_name?: 'google_pay';
  }

  export namespace GooglePaySessionResponse {
    export interface AllowedPaymentMethod {
      parameters: AllowedPaymentMethod.Parameters;

      tokenization_specification: AllowedPaymentMethod.TokenizationSpecification;

      /**
       * The type of payment method
       */
      type: string;
    }

    export namespace AllowedPaymentMethod {
      export interface Parameters {
        /**
         * The list of allowed auth methods (ex: 3DS, No3DS, PAN_ONLY etc)
         */
        allowed_auth_methods: Array<string>;

        /**
         * The list of allowed card networks (ex: AMEX,JCB etc)
         */
        allowed_card_networks: Array<string>;

        /**
         * Whether assurance details are required
         */
        assurance_details_required?: boolean | null;

        billing_address_parameters?: Parameters.BillingAddressParameters | null;

        /**
         * Is billing address required
         */
        billing_address_required?: boolean | null;
      }

      export namespace Parameters {
        export interface BillingAddressParameters {
          format: 'FULL' | 'MIN';

          /**
           * Is billing phone number required
           */
          phone_number_required: boolean;
        }
      }

      export interface TokenizationSpecification {
        parameters: TokenizationSpecification.Parameters;

        /**
         * The token specification type(ex: PAYMENT_GATEWAY)
         */
        type: string;
      }

      export namespace TokenizationSpecification {
        export interface Parameters {
          /**
           * The name of the connector
           */
          gateway?: string | null;

          /**
           * The merchant ID registered in the connector associated
           */
          gateway_merchant_id?: string | null;

          /**
           * The protocol version for encryption
           */
          protocol_version?: string | null;

          /**
           * The public key provided by the merchant
           */
          public_key?: string | null;

          'stripe:publishableKey'?: string | null;

          'stripe:version'?: string | null;
        }
      }
    }

    export interface MerchantInfo {
      /**
       * The name of the merchant that needs to be displayed on Gpay PopUp
       */
      merchant_name: string;

      /**
       * The merchant Identifier that needs to be passed while invoking Gpay SDK
       */
      merchant_id?: string | null;
    }

    export interface ShippingAddressParameters {
      /**
       * Is shipping phone number required
       */
      phone_number_required: boolean;
    }

    export interface TransactionInfo {
      country_code: AccountsAPI.CountryAlpha2;

      /**
       * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
       * amount. This field is mandatory for creating a payment.
       */
      currency_code: AccountsAPI.Currency;

      /**
       * The total price
       */
      total_price: string;

      /**
       * The total price status (ex: 'FINAL')
       */
      total_price_status: string;
    }
  }

  export interface SamsungPay {
    /**
     * List of supported card brands
     */
    allowed_brands: Array<string>;

    amount: SamsungPay.Amount;

    /**
     * Is billing address required to be collected from wallet
     */
    billing_address_required: boolean;

    merchant: SamsungPay.Merchant;

    /**
     * Order number of the transaction
     */
    order_number: string;

    protocol: 'PROTOCOL3DS';

    /**
     * Samsung Pay service ID to which session call needs to be made
     */
    service_id: string;

    /**
     * Is shipping address required to be collected from wallet
     */
    shipping_address_required: boolean;

    /**
     * Samsung Pay API version
     */
    version: string;

    wallet_name: 'samsung_pay';
  }

  export namespace SamsungPay {
    export interface Amount {
      /**
       * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
       * amount. This field is mandatory for creating a payment.
       */
      currency_code: AccountsAPI.Currency;

      option: 'FORMAT_TOTAL_PRICE_ONLY' | 'FORMAT_TOTAL_ESTIMATED_AMOUNT';

      /**
       * The total amount of the transaction
       */
      total: string;
    }

    export interface Merchant {
      country_code: AccountsAPI.CountryAlpha2;

      /**
       * Merchant name, this will be displayed on the Samsung Pay screen
       */
      name: string;

      /**
       * Merchant domain that process payments, required for web payments
       */
      url?: string | null;
    }
  }

  export interface Klarna {
    /**
     * The identifier for the session
     */
    session_id: string;

    /**
     * The session token for Klarna
     */
    session_token: string;

    wallet_name: 'klarna';
  }

  export interface Paypal {
    /**
     * Name of the connector
     */
    connector: string;

    sdk_next_action: PaymentsAPI.SDKNextAction;

    /**
     * The session token for PayPal
     */
    session_token: string;

    wallet_name: 'paypal';
  }

  export interface ApplePay {
    /**
     * The session token is w.r.t this connector
     */
    connector: string;

    /**
     * Identifier for the delayed session response
     */
    delayed_session_token: boolean;

    sdk_next_action: PaymentsAPI.SDKNextAction;

    wallet_name: 'apple_pay';

    /**
     * The connector merchant id
     */
    connector_merchant_id?: string | null;

    /**
     * The connector transaction id
     */
    connector_reference_id?: string | null;

    /**
     * The public key id is to invoke third party sdk
     */
    connector_sdk_public_key?: string | null;

    payment_request_data?: ApplePay.PaymentRequestData | null;

    session_token_data?:
      | ApplePay.ThirdPartySDKSessionResponse
      | ApplePay.NoThirdPartySDKSessionResponse
      | null;
  }

  export namespace ApplePay {
    export interface PaymentRequestData {
      country_code: AccountsAPI.CountryAlpha2;

      /**
       * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
       * amount. This field is mandatory for creating a payment.
       */
      currency_code: AccountsAPI.Currency;

      total: PaymentRequestData.Total;

      /**
       * The list of merchant capabilities(ex: whether capable of 3ds or no-3ds)
       */
      merchant_capabilities?: Array<string> | null;

      merchant_identifier?: string | null;

      recurring_payment_request?: PaymentRequestData.RecurringPaymentRequest | null;

      required_billing_contact_fields?: Array<PaymentsAPI.ApplePayAddressParameters> | null;

      required_shipping_contact_fields?: Array<PaymentsAPI.ApplePayAddressParameters> | null;

      /**
       * The list of supported networks
       */
      supported_networks?: Array<string> | null;
    }

    export namespace PaymentRequestData {
      export interface Total {
        /**
         * The total amount for the payment in majot unit string (Ex: 38.02)
         */
        amount: string;

        /**
         * The label must be the name of the merchant.
         */
        label: string;

        /**
         * A value that indicates whether the line item(Ex: total, tax, discount, or grand
         * total) is final or pending.
         */
        type?: string | null;
      }

      export interface RecurringPaymentRequest {
        /**
         * A URL to a web page where the user can update or delete the payment method for
         * the recurring payment
         */
        management_u_r_l: string;

        /**
         * A description of the recurring payment that Apple Pay displays to the user in
         * the payment sheet
         */
        payment_description: string;

        regular_billing: RecurringPaymentRequest.RegularBilling;

        /**
         * A localized billing agreement that the payment sheet displays to the user before
         * the user authorizes the payment
         */
        billing_agreement?: string | null;
      }

      export namespace RecurringPaymentRequest {
        export interface RegularBilling {
          /**
           * The amount of the recurring payment
           */
          amount: string;

          /**
           * The label that Apple Pay displays to the user in the payment sheet with the
           * recurring details
           */
          label: string;

          payment_timing: 'immediate' | 'recurring';

          /**
           * The date of the final payment
           */
          recurring_payment_end_date?: string | null;

          /**
           * The number of interval units that make up the total payment interval
           */
          recurring_payment_interval_count?: number | null;

          recurring_payment_interval_unit?: PaymentsAPI.RecurringPaymentIntervalUnit | null;

          /**
           * The date of the first payment
           */
          recurring_payment_start_date?: string | null;
        }
      }
    }

    export interface ThirdPartySDKSessionResponse {
      secrets: PaymentsAPI.SecretInfoToInitiateSDK;
    }

    export interface NoThirdPartySDKSessionResponse {
      /**
       * The name to be displayed on Apple Pay button
       */
      display_name: string;

      /**
       * The domain name of the merchant which is registered in Apple Pay
       */
      domain_name: string;

      /**
       * Timestamp at which session is requested
       */
      epoch_timestamp: number;

      /**
       * Timestamp at which session expires
       */
      expires_at: number;

      /**
       * The identifier for the merchant
       */
      merchant_identifier: string;

      /**
       * The identifier for the merchant session
       */
      merchant_session_identifier: string;

      /**
       * Apple pay generated unique ID (UUID) value
       */
      nonce: string;

      /**
       * The identifier for the operational analytics
       */
      operational_analytics_identifier: string;

      /**
       * The identifier for the connector transaction
       */
      psp_id: string;

      /**
       * The number of retries to get the session response
       */
      retries: number;

      /**
       * A string which represents the properties of a payment
       */
      signature: string;
    }
  }

  export interface OpenBanking {
    /**
     * The session token for OpenBanking Connectors
     */
    open_banking_session_token: string;

    wallet_name: 'open_banking';
  }

  export interface Paze {
    /**
     * Paze Client ID
     */
    client_id: string;

    /**
     * Client Name to be displayed on the Paze screen
     */
    client_name: string;

    /**
     * Paze Client Profile ID
     */
    client_profile_id: string;

    /**
     * The transaction amount
     */
    transaction_amount: string;

    /**
     * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
     * amount. This field is mandatory for creating a payment.
     */
    transaction_currency_code: AccountsAPI.Currency;

    wallet_name: 'paze';

    /**
     * Email Address
     */
    email_address?: string | null;
  }

  export interface ClickToPay {
    acquirer_bin: string;

    acquirer_merchant_id: string;

    card_brands: Array<AccountsAPI.CardNetwork>;

    dpa_id: string;

    dpa_name: string;

    locale: string;

    merchant_category_code: string;

    merchant_country_code: string;

    transaction_amount: string;

    /**
     * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
     * amount. This field is mandatory for creating a payment.
     */
    transaction_currency_code: AccountsAPI.Currency;

    wallet_name: 'click_to_pay';

    dpa_client_id?: string | null;

    email?: string | null;

    phone_country_code?: string | null;

    phone_number?: string | null;

    provider?: PaymentsAPI.CtpServiceProvider | null;
  }

  export interface NoSessionTokenReceived {
    wallet_name: 'no_session_token_received';
  }
}

/**
 * Fee information for Split Payments to be charged on the payment being collected
 */
export type SplitPaymentsRequest =
  | SplitPaymentsRequest.StripeSplitPayment
  | SplitPaymentsRequest.AdyenSplitPayment
  | SplitPaymentsRequest.XenditSplitPayment;

export namespace SplitPaymentsRequest {
  export interface StripeSplitPayment {
    /**
     * Fee information for Split Payments to be charged on the payment being collected
     * for Stripe
     */
    stripe_split_payment: StripeSplitPayment.StripeSplitPayment;
  }

  export namespace StripeSplitPayment {
    /**
     * Fee information for Split Payments to be charged on the payment being collected
     * for Stripe
     */
    export interface StripeSplitPayment {
      /**
       * Platform fees to be collected on the payment
       */
      application_fees: number;

      charge_type: PaymentsAPI.PaymentChargeType;

      /**
       * Identifier for the reseller's account where the funds were transferred
       */
      transfer_account_id: string;
    }
  }

  export interface AdyenSplitPayment {
    /**
     * Fee information for Split Payments to be charged on the payment being collected
     * for Adyen
     */
    adyen_split_payment: PaymentsAPI.AdyenSplitData;
  }

  export interface XenditSplitPayment {
    /**
     * Xendit Charge Request
     */
    xendit_split_payment: XenditSplitPayment.MultipleSplits | XenditSplitPayment.SingleSplit;
  }

  export namespace XenditSplitPayment {
    export interface MultipleSplits {
      /**
       * Fee information to be charged on the payment being collected via xendit
       */
      multiple_splits: MultipleSplits.MultipleSplits;
    }

    export namespace MultipleSplits {
      /**
       * Fee information to be charged on the payment being collected via xendit
       */
      export interface MultipleSplits {
        /**
         * Description to identify fee rule
         */
        description: string;

        /**
         * Name to identify split rule. Not required to be unique. Typically based on
         * transaction and/or sub-merchant types.
         */
        name: string;

        /**
         * Array of objects that define how the platform wants to route the fees and to
         * which accounts.
         */
        routes: Array<PaymentsAPI.XenditSplitRoute>;

        /**
         * The sub-account user-id that you want to make this transaction for.
         */
        for_user_id?: string | null;
      }
    }

    export interface SingleSplit {
      /**
       * Fee information to be charged on the payment being collected for sub-merchant
       * via xendit
       */
      single_split: RefundsAPI.XenditSplitSubMerchantData;
    }
  }
}

export type StraightThroughAlgorithm =
  | StraightThroughAlgorithm.Single
  | StraightThroughAlgorithm.Priority
  | StraightThroughAlgorithm.VolumeSplit;

export namespace StraightThroughAlgorithm {
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
}

export type VoucherData =
  | 'efecty'
  | 'pago_efectivo'
  | 'red_compra'
  | 'red_pagos'
  | 'oxxo'
  | VoucherData.Boleto
  | VoucherData.Alfamart
  | VoucherData.Indomaret
  | VoucherData.SevenEleven
  | VoucherData.Lawson
  | VoucherData.MiniStop
  | VoucherData.FamilyMart
  | VoucherData.Seicomart
  | VoucherData.PayEasy;

export namespace VoucherData {
  export interface Boleto {
    boleto: Boleto.Boleto;
  }

  export namespace Boleto {
    export interface Boleto {
      /**
       * The shopper's social security number
       */
      social_security_number?: string | null;
    }
  }

  export interface Alfamart {
    alfamart: Alfamart.Alfamart;
  }

  export namespace Alfamart {
    export interface Alfamart {
      /**
       * The Email ID for Alfamart
       */
      email?: string | null;

      /**
       * The billing first name for Alfamart
       */
      first_name?: string | null;

      /**
       * The billing second name for Alfamart
       */
      last_name?: string | null;
    }
  }

  export interface Indomaret {
    indomaret: Indomaret.Indomaret;
  }

  export namespace Indomaret {
    export interface Indomaret {
      /**
       * The Email ID for Alfamart
       */
      email?: string | null;

      /**
       * The billing first name for Alfamart
       */
      first_name?: string | null;

      /**
       * The billing second name for Alfamart
       */
      last_name?: string | null;
    }
  }

  export interface SevenEleven {
    seven_eleven: PaymentsAPI.JcsVoucherData;
  }

  export interface Lawson {
    lawson: PaymentsAPI.JcsVoucherData;
  }

  export interface MiniStop {
    mini_stop: PaymentsAPI.JcsVoucherData;
  }

  export interface FamilyMart {
    family_mart: PaymentsAPI.JcsVoucherData;
  }

  export interface Seicomart {
    seicomart: PaymentsAPI.JcsVoucherData;
  }

  export interface PayEasy {
    pay_easy: PaymentsAPI.JcsVoucherData;
  }
}

export interface WalletAdditionalDataForCard {
  /**
   * The information of the payment method
   */
  card_network: string;

  /**
   * Last 4 digits of the card number
   */
  last4: string;

  /**
   * The type of payment method
   */
  type?: string | null;
}

/**
 * Fee information to be charged on the payment being collected via xendit
 */
export interface XenditSplitRoute {
  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  /**
   * ID of the destination account where the amount will be routed to
   */
  destination_account_id: string;

  /**
   * Reference ID which acts as an identifier of the route itself
   */
  reference_id: string;

  /**
   * This Unit struct represents MinorUnit in which core amount works
   */
  flat_amount?: number | null;

  /**
   * Amount of payments to be split, using a percent rate as unit
   */
  percent_amount?: number | null;
}

export type PaymentListResponse = Array<PaymentListResponse.PaymentListResponseItem>;

export namespace PaymentListResponse {
  export interface PaymentListResponseItem {
    data: Array<PaymentsAPI.PaymentsResponse>;

    /**
     * The number of payments included in the list
     */
    size: number;
  }
}

export interface PaymentCreateSessionTokenResponse {
  /**
   * This is a token which expires after 15 minutes, used from the client to
   * authenticate and create sessions from the SDK
   */
  client_secret: string;

  /**
   * The identifier for the payment
   */
  payment_id: string;

  /**
   * The list of session token object
   */
  session_token: Array<SessionToken>;
}

export interface PaymentPostSessionTokensResponse {
  /**
   * The identifier for the payment
   */
  payment_id: string;

  /**
   * Represents the overall status of a payment intent. The status transitions
   * through various states depending on the payment method, confirmation, capture
   * method, and any subsequent actions (like customer authentication or manual
   * capture).
   */
  status: IntentStatus;

  /**
   * Contains the url for redirection flow
   */
  next_action?: NextActionData | null;
}

export interface PaymentUpdateMetadataResponse {
  /**
   * The identifier for the payment
   */
  payment_id: string;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;
}

export interface PaymentCreateParams {
  /**
   * The primary amount for the payment, provided in the lowest denomination of the
   * specified currency (e.g., 6540 for $65.40 USD). This field is mandatory for
   * creating a payment.
   */
  amount: number;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency: AccountsAPI.Currency;

  /**
   * If enabled, provides whole connector response
   */
  all_keys_required?: boolean | null;

  /**
   * Use this parameter to restrict the Payment Method Types to show for a given
   * PaymentIntent
   */
  allowed_payment_method_types?: Array<PaymentMethodType> | null;

  /**
   * The amount to be captured from the user's payment method, in the lowest
   * denomination. If not provided, and `capture_method` is `automatic`, the full
   * payment `amount` will be captured. If `capture_method` is `manual`, this can be
   * specified in the `/capture` call. Must be less than or equal to the authorized
   * amount.
   */
  amount_to_capture?: number | null;

  /**
   * Specifies the type of cardholder authentication to be applied for a payment.
   *
   * - `ThreeDs`: Requests 3D Secure (3DS) authentication. If the card is enrolled,
   *   3DS authentication will be activated, potentially shifting chargeback
   *   liability to the issuer.
   * - `NoThreeDs`: Indicates that 3D Secure authentication should not be performed.
   *   The liability for chargebacks typically remains with the merchant. This is
   *   often the default if not specified.
   *
   * Note: The actual authentication behavior can also be influenced by merchant
   * configuration and specific connector defaults. Some connectors might still
   * enforce 3DS or bypass it regardless of this parameter.
   */
  authentication_type?: AuthenticationType | null;

  billing?: Address | null;

  /**
   * Browser information to be used for 3DS 2.0
   */
  browser_info?: BrowserInformation | null;

  business_country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * Business label of the merchant for this payment. To be deprecated soon. Pass the
   * profile_id instead
   */
  business_label?: string | null;

  /**
   * Specifies how the payment is captured.
   *
   * - `automatic`: Funds are captured immediately after successful authorization.
   *   This is the default behavior if the field is omitted.
   * - `manual`: Funds are authorized but not captured. A separate request to the
   *   `/payments/{payment_id}/capture` endpoint is required to capture the funds.
   */
  capture_method?: CaptureMethod | null;

  /**
   * If set to `true`, Hyperswitch attempts to confirm and authorize the payment
   * immediately after creation, provided sufficient payment method details are
   * included. If `false` or omitted (default is `false`), the payment is created
   * with a status such as `requires_payment_method` or `requires_confirmation`, and
   * a separate `POST /payments/{payment_id}/confirm` call is necessary to proceed
   * with authorization.
   */
  confirm?: boolean | null;

  /**
   * This allows to manually select a connector with which the payment can go
   * through.
   */
  connector?: Array<ConnectorsAPI.Connector> | null;

  /**
   * Some connectors like Apple Pay, Airwallex and Noon might require some additional
   * information, find specific details in the child attributes below.
   */
  connector_metadata?: ConnectorMetadata | null;

  ctp_service_details?: CtpServiceDetails | null;

  /**
   * Passing this object creates a new customer or attaches an existing customer to
   * the payment
   */
  customer?: CustomerDetails | null;

  /**
   * This "CustomerAcceptance" object is passed during Payments-Confirm request, it
   * enlists the type, time, and mode of acceptance properties related to an
   * acceptance done by the customer. The customer_acceptance sub object is usually
   * passed by the SDK or client.
   */
  customer_acceptance?: CustomerAcceptance | null;

  /**
   * The identifier for the customer
   */
  customer_id?: string | null;

  /**
   * An arbitrary string attached to the payment. Often useful for displaying to
   * users or for your own internal record-keeping.
   */
  description?: string | null;

  /**
   * Indicates if 3ds challenge is forced
   */
  force_3ds_challenge?: boolean | null;

  /**
   * Additional data related to some frm(Fraud Risk Management) connectors
   */
  frm_metadata?: unknown | null;

  /**
   * Indicates if the redirection has to open in the iframe
   */
  is_iframe_redirection_enabled?: boolean | null;

  /**
   * Passing this object during payments creates a mandate. The mandate_type sub
   * object is passed by the server.
   */
  mandate_data?: MandateData | null;

  /**
   * A unique identifier to link the payment to a mandate. To do Recurring payments
   * after a mandate has been created, pass the mandate_id instead of
   * payment_method_data
   */
  mandate_id?: string | null;

  /**
   * Merchant connector details used to make payments.
   */
  merchant_connector_details?: MerchantConnectorDetailsWrap | null;

  /**
   * Your unique identifier for this payment or order. This ID helps you reconcile
   * payments on your system. If provided, it is passed to the connector if
   * supported.
   */
  merchant_order_reference_id?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * Set to true to indicate that the customer is not in your checkout flow during
   * this payment, and therefore is unable to authenticate. This parameter is
   * intended for scenarios where you collect card details and charge them later.
   * When making a recurring payment by passing a mandate_id, this parameter is
   * mandatory
   */
  off_session?: boolean | null;

  /**
   * Use this object to capture the details about the different products for which
   * the payment is being made. The sum of amount across different products here
   * should be equal to the overall payment amount
   */
  order_details?: Array<OrderDetailsWithAmount> | null;

  /**
   * Total tax amount applicable to the order, in the lowest denomination of the
   * currency.
   */
  order_tax_amount?: number | null;

  /**
   * To indicate the type of payment experience that the customer would go through
   */
  payment_experience?: PaymentExperience | null;

  /**
   * Optional. A merchant-provided unique identifier for the payment, contains 30
   * characters long (e.g., "pay_mbabizu24mvu3mela5njyhpit4"). If provided, it
   * ensures idempotency for the payment creation request. If omitted, Hyperswitch
   * generates a unique ID for the payment.
   */
  payment_id?: string | null;

  /**
   * Whether to generate the payment link for this payment or not (if applicable)
   */
  payment_link?: boolean | null;

  /**
   * Configure a custom payment link for the particular payment
   */
  payment_link_config?: PaymentCreatePaymentLinkConfig | null;

  /**
   * Custom payment link config id set at business profile, send only if
   * business_specific_configs is configured
   */
  payment_link_config_id?: string | null;

  /**
   * Indicates the type of payment method. Eg: 'card', 'wallet', etc.
   */
  payment_method?:
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
    | 'mobile_payment'
    | null;

  /**
   * The payment method information provided for making a payment
   */
  payment_method_data?: PaymentMethodDataRequest | null;

  /**
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type?: PaymentMethodType | null;

  /**
   * As Hyperswitch tokenises the sensitive details about the payments method, it
   * provides the payment_token as a reference to a stored payment method, ensuring
   * that the sensitive details are not exposed in any manner.
   */
  payment_token?: string | null;

  /**
   * The type of the payment that differentiates between normal and various types of
   * mandate payments. Use 'setup_mandate' in case of zero auth flow.
   */
  payment_type?: PaymentType | null;

  /**
   * The business profile to be used for this payment, if not passed the default
   * business profile associated with the merchant account will be used. It is
   * mandatory in case multiple business profiles have been set up.
   */
  profile_id?: string | null;

  /**
   * SCA Exemptions types available for authentication
   */
  psd2_sca_exemption_type?: ScaExemptionType | null;

  /**
   * Details required for recurring payment
   */
  recurring_details?: RecurringDetails | null;

  /**
   * Optional boolean value to extent authorization period of this payment
   *
   * capture method must be manual or manual_multiple
   */
  request_extended_authorization?: boolean | null;

  /**
   * Whether to perform external authentication (if applicable)
   */
  request_external_three_ds_authentication?: boolean | null;

  /**
   * Request an incremental authorization, i.e., increase the authorized amount on a
   * confirmed payment before you capture it.
   */
  request_incremental_authorization?: boolean | null;

  /**
   * The URL to redirect the customer to after they complete the payment process or
   * authentication. This is crucial for flows that involve off-site redirection
   * (e.g., 3DS, some bank redirects, wallet payments).
   */
  return_url?: string | null;

  routing?: StraightThroughAlgorithm | null;

  /**
   * Will be used to expire client secret after certain amount of time to be supplied
   * in seconds (900) for 15 mins
   */
  session_expiry?: number | null;

  /**
   * Specifies how the payment method can be used for future payments.
   *
   * - `off_session`: The payment method can be used for future payments when the
   *   customer is not present.
   * - `on_session`: The payment method is intended for use only when the customer is
   *   present during checkout. If omitted, defaults to `on_session`.
   */
  setup_future_usage?: FutureUsage | null;

  shipping?: Address | null;

  /**
   * The shipping cost for the payment. This is required for tax calculation in some
   * regions.
   */
  shipping_cost?: number | null;

  /**
   * Whether to calculate tax for this payment intent
   */
  skip_external_tax_calculation?: boolean | null;

  /**
   * Fee information for Split Payments to be charged on the payment being collected
   */
  split_payments?: SplitPaymentsRequest | null;

  /**
   * For non-card charges, you can use this value as the complete description that
   * appears on your customers’ statements. Must contain at least one letter, maximum
   * 22 characters.
   */
  statement_descriptor_name?: string | null;

  /**
   * Provides information about a card payment that customers see on their
   * statements. Concatenated with the prefix (shortened descriptor) or statement
   * descriptor that’s set on the account to form the complete statement descriptor.
   * Maximum 22 characters for the concatenated descriptor.
   */
  statement_descriptor_suffix?: string | null;

  /**
   * Details of surcharge applied on this payment, if applicable
   */
  surcharge_details?: RequestSurchargeDetails | null;

  /**
   * Indicates if 3DS method data was successfully completed or not
   */
  threeds_method_comp_ind?: Number3DSAPI.ThreeDSCompletionIndicator | null;
}

export interface PaymentRetrieveParams {
  /**
   * This is a token which expires after 15 minutes, used from the client to
   * authenticate and create sessions from the SDK
   */
  client_secret?: string | null;

  /**
   * If enabled provides list of attempts linked to payment intent
   */
  expand_attempts?: boolean | null;

  /**
   * If enabled provides list of captures linked to latest attempt
   */
  expand_captures?: boolean | null;

  /**
   * Decider to enable or disable the connector call for retrieve request
   */
  force_sync?: boolean | null;
}

export interface PaymentUpdateParams {
  /**
   * If enabled, provides whole connector response
   */
  all_keys_required?: boolean | null;

  /**
   * Use this parameter to restrict the Payment Method Types to show for a given
   * PaymentIntent
   */
  allowed_payment_method_types?: Array<PaymentMethodType> | null;

  /**
   * The primary amount for the payment, provided in the lowest denomination of the
   * specified currency (e.g., 6540 for $65.40 USD). This field is mandatory for
   * creating a payment.
   */
  amount?: number | null;

  /**
   * The amount to be captured from the user's payment method, in the lowest
   * denomination. If not provided, and `capture_method` is `automatic`, the full
   * payment `amount` will be captured. If `capture_method` is `manual`, this can be
   * specified in the `/capture` call. Must be less than or equal to the authorized
   * amount.
   */
  amount_to_capture?: number | null;

  /**
   * Specifies the type of cardholder authentication to be applied for a payment.
   *
   * - `ThreeDs`: Requests 3D Secure (3DS) authentication. If the card is enrolled,
   *   3DS authentication will be activated, potentially shifting chargeback
   *   liability to the issuer.
   * - `NoThreeDs`: Indicates that 3D Secure authentication should not be performed.
   *   The liability for chargebacks typically remains with the merchant. This is
   *   often the default if not specified.
   *
   * Note: The actual authentication behavior can also be influenced by merchant
   * configuration and specific connector defaults. Some connectors might still
   * enforce 3DS or bypass it regardless of this parameter.
   */
  authentication_type?: AuthenticationType | null;

  billing?: Address | null;

  /**
   * Browser information to be used for 3DS 2.0
   */
  browser_info?: BrowserInformation | null;

  /**
   * Specifies how the payment is captured.
   *
   * - `automatic`: Funds are captured immediately after successful authorization.
   *   This is the default behavior if the field is omitted.
   * - `manual`: Funds are authorized but not captured. A separate request to the
   *   `/payments/{payment_id}/capture` endpoint is required to capture the funds.
   */
  capture_method?: CaptureMethod | null;

  /**
   * If set to `true`, Hyperswitch attempts to confirm and authorize the payment
   * immediately after creation, provided sufficient payment method details are
   * included. If `false` or omitted (default is `false`), the payment is created
   * with a status such as `requires_payment_method` or `requires_confirmation`, and
   * a separate `POST /payments/{payment_id}/confirm` call is necessary to proceed
   * with authorization.
   */
  confirm?: boolean | null;

  /**
   * This allows to manually select a connector with which the payment can go
   * through.
   */
  connector?: Array<ConnectorsAPI.Connector> | null;

  /**
   * Some connectors like Apple Pay, Airwallex and Noon might require some additional
   * information, find specific details in the child attributes below.
   */
  connector_metadata?: ConnectorMetadata | null;

  ctp_service_details?: CtpServiceDetails | null;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency?: AccountsAPI.Currency | null;

  /**
   * Passing this object creates a new customer or attaches an existing customer to
   * the payment
   */
  customer?: CustomerDetails | null;

  /**
   * This "CustomerAcceptance" object is passed during Payments-Confirm request, it
   * enlists the type, time, and mode of acceptance properties related to an
   * acceptance done by the customer. The customer_acceptance sub object is usually
   * passed by the SDK or client.
   */
  customer_acceptance?: CustomerAcceptance | null;

  /**
   * The identifier for the customer
   */
  customer_id?: string | null;

  /**
   * An arbitrary string attached to the payment. Often useful for displaying to
   * users or for your own internal record-keeping.
   */
  description?: string | null;

  /**
   * Indicates if 3ds challenge is forced
   */
  force_3ds_challenge?: boolean | null;

  /**
   * Additional data related to some frm(Fraud Risk Management) connectors
   */
  frm_metadata?: unknown | null;

  /**
   * Indicates if the redirection has to open in the iframe
   */
  is_iframe_redirection_enabled?: boolean | null;

  /**
   * Passing this object during payments creates a mandate. The mandate_type sub
   * object is passed by the server.
   */
  mandate_data?: MandateData | null;

  /**
   * Merchant connector details used to make payments.
   */
  merchant_connector_details?: MerchantConnectorDetailsWrap | null;

  /**
   * Your unique identifier for this payment or order. This ID helps you reconcile
   * payments on your system. If provided, it is passed to the connector if
   * supported.
   */
  merchant_order_reference_id?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * Set to true to indicate that the customer is not in your checkout flow during
   * this payment, and therefore is unable to authenticate. This parameter is
   * intended for scenarios where you collect card details and charge them later.
   * When making a recurring payment by passing a mandate_id, this parameter is
   * mandatory
   */
  off_session?: boolean | null;

  /**
   * Use this object to capture the details about the different products for which
   * the payment is being made. The sum of amount across different products here
   * should be equal to the overall payment amount
   */
  order_details?: Array<OrderDetailsWithAmount> | null;

  /**
   * Total tax amount applicable to the order, in the lowest denomination of the
   * currency.
   */
  order_tax_amount?: number | null;

  /**
   * To indicate the type of payment experience that the customer would go through
   */
  payment_experience?: PaymentExperience | null;

  /**
   * Optional. A merchant-provided unique identifier for the payment, contains 30
   * characters long (e.g., "pay_mbabizu24mvu3mela5njyhpit4"). If provided, it
   * ensures idempotency for the payment creation request. If omitted, Hyperswitch
   * generates a unique ID for the payment.
   */
  body_payment_id?: string | null;

  /**
   * Whether to generate the payment link for this payment or not (if applicable)
   */
  payment_link?: boolean | null;

  /**
   * Configure a custom payment link for the particular payment
   */
  payment_link_config?: PaymentCreatePaymentLinkConfig | null;

  /**
   * Custom payment link config id set at business profile, send only if
   * business_specific_configs is configured
   */
  payment_link_config_id?: string | null;

  /**
   * Indicates the type of payment method. Eg: 'card', 'wallet', etc.
   */
  payment_method?:
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
    | 'mobile_payment'
    | null;

  /**
   * The payment method information provided for making a payment
   */
  payment_method_data?: PaymentMethodDataRequest | null;

  /**
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type?: PaymentMethodType | null;

  /**
   * As Hyperswitch tokenises the sensitive details about the payments method, it
   * provides the payment_token as a reference to a stored payment method, ensuring
   * that the sensitive details are not exposed in any manner.
   */
  payment_token?: string | null;

  /**
   * The type of the payment that differentiates between normal and various types of
   * mandate payments. Use 'setup_mandate' in case of zero auth flow.
   */
  payment_type?: PaymentType | null;

  /**
   * SCA Exemptions types available for authentication
   */
  psd2_sca_exemption_type?: ScaExemptionType | null;

  /**
   * Details required for recurring payment
   */
  recurring_details?: RecurringDetails | null;

  /**
   * Optional boolean value to extent authorization period of this payment
   *
   * capture method must be manual or manual_multiple
   */
  request_extended_authorization?: boolean | null;

  /**
   * Whether to perform external authentication (if applicable)
   */
  request_external_three_ds_authentication?: boolean | null;

  /**
   * Request an incremental authorization, i.e., increase the authorized amount on a
   * confirmed payment before you capture it.
   */
  request_incremental_authorization?: boolean | null;

  /**
   * Denotes the retry action
   */
  retry_action?: RetryAction | null;

  /**
   * The URL to redirect the customer to after they complete the payment process or
   * authentication. This is crucial for flows that involve off-site redirection
   * (e.g., 3DS, some bank redirects, wallet payments).
   */
  return_url?: string | null;

  routing?: StraightThroughAlgorithm | null;

  /**
   * Will be used to expire client secret after certain amount of time to be supplied
   * in seconds (900) for 15 mins
   */
  session_expiry?: number | null;

  /**
   * Specifies how the payment method can be used for future payments.
   *
   * - `off_session`: The payment method can be used for future payments when the
   *   customer is not present.
   * - `on_session`: The payment method is intended for use only when the customer is
   *   present during checkout. If omitted, defaults to `on_session`.
   */
  setup_future_usage?: FutureUsage | null;

  shipping?: Address | null;

  /**
   * The shipping cost for the payment. This is required for tax calculation in some
   * regions.
   */
  shipping_cost?: number | null;

  /**
   * Whether to calculate tax for this payment intent
   */
  skip_external_tax_calculation?: boolean | null;

  /**
   * Fee information for Split Payments to be charged on the payment being collected
   */
  split_payments?: SplitPaymentsRequest | null;

  /**
   * For non-card charges, you can use this value as the complete description that
   * appears on your customers’ statements. Must contain at least one letter, maximum
   * 22 characters.
   */
  statement_descriptor_name?: string | null;

  /**
   * Provides information about a card payment that customers see on their
   * statements. Concatenated with the prefix (shortened descriptor) or statement
   * descriptor that’s set on the account to form the complete statement descriptor.
   * Maximum 22 characters for the concatenated descriptor.
   */
  statement_descriptor_suffix?: string | null;

  /**
   * Details of surcharge applied on this payment, if applicable
   */
  surcharge_details?: RequestSurchargeDetails | null;

  /**
   * Indicates if 3DS method data was successfully completed or not
   */
  threeds_method_comp_ind?: Number3DSAPI.ThreeDSCompletionIndicator | null;
}

export interface PaymentListParams {
  /**
   * The time at which payment is created
   */
  created?: string | null;

  /**
   * Time greater than the payment created time
   */
  created_gt?: string | null;

  /**
   * Time greater than or equals to the payment created time
   */
  created_gte?: string | null;

  /**
   * Time less than the payment created time
   */
  created_lt?: string | null;

  /**
   * Time less than or equals to the payment created time
   */
  created_lte?: string | null;

  /**
   * The identifier for the customer
   */
  customer_id?: string | null;

  /**
   * A cursor for use in pagination, fetch the previous list before some object
   */
  ending_before?: string | null;

  /**
   * Limit on the number of objects to return
   */
  limit?: number | null;

  /**
   * A cursor for use in pagination, fetch the next list after some object
   */
  starting_after?: string | null;
}

export interface PaymentCancelParams {
  /**
   * The reason for the payment cancel
   */
  cancellation_reason?: string | null;

  /**
   * Merchant connector details used to make payments.
   */
  merchant_connector_details?: MerchantConnectorDetailsWrap | null;
}

export interface PaymentCaptureParams {
  /**
   * The amount to capture, in the lowest denomination of the currency. If omitted,
   * the entire `amount_capturable` of the payment will be captured. Must be less
   * than or equal to the current `amount_capturable`.
   */
  amount_to_capture?: number | null;

  /**
   * Merchant connector details used to make payments.
   */
  merchant_connector_details?: MerchantConnectorDetailsWrap | null;

  /**
   * The unique identifier for the merchant. This is usually inferred from the API
   * key.
   */
  merchant_id?: string | null;

  /**
   * Decider to refund the uncaptured amount. (Currently not fully supported or
   * behavior may vary by connector).
   */
  refund_uncaptured_amount?: boolean | null;

  /**
   * An optional prefix for the statement descriptor that appears on your customer's
   * credit card statement. This can override the default prefix set on your merchant
   * account. The combined length of prefix and suffix should not exceed
   * connector-specific limits (typically 22 characters).
   */
  statement_descriptor_prefix?: string | null;

  /**
   * A dynamic suffix that appears on your customer's credit card statement. This is
   * concatenated with the (shortened) descriptor prefix set on your account to form
   * the complete statement descriptor. The combined length should not exceed
   * connector-specific limits (typically 22 characters).
   */
  statement_descriptor_suffix?: string | null;
}

export interface PaymentCompleteAuthorizeParams {
  /**
   * Client Secret
   */
  client_secret: string;

  shipping?: Address | null;

  /**
   * Indicates if 3DS method data was successfully completed or not
   */
  threeds_method_comp_ind?: Number3DSAPI.ThreeDSCompletionIndicator | null;
}

export interface PaymentConfirmParams {
  /**
   * If enabled, provides whole connector response
   */
  all_keys_required?: boolean | null;

  /**
   * Use this parameter to restrict the Payment Method Types to show for a given
   * PaymentIntent
   */
  allowed_payment_method_types?: Array<PaymentMethodType> | null;

  /**
   * The primary amount for the payment, provided in the lowest denomination of the
   * specified currency (e.g., 6540 for $65.40 USD). This field is mandatory for
   * creating a payment.
   */
  amount?: number | null;

  /**
   * The amount to be captured from the user's payment method, in the lowest
   * denomination. If not provided, and `capture_method` is `automatic`, the full
   * payment `amount` will be captured. If `capture_method` is `manual`, this can be
   * specified in the `/capture` call. Must be less than or equal to the authorized
   * amount.
   */
  amount_to_capture?: number | null;

  /**
   * Specifies the type of cardholder authentication to be applied for a payment.
   *
   * - `ThreeDs`: Requests 3D Secure (3DS) authentication. If the card is enrolled,
   *   3DS authentication will be activated, potentially shifting chargeback
   *   liability to the issuer.
   * - `NoThreeDs`: Indicates that 3D Secure authentication should not be performed.
   *   The liability for chargebacks typically remains with the merchant. This is
   *   often the default if not specified.
   *
   * Note: The actual authentication behavior can also be influenced by merchant
   * configuration and specific connector defaults. Some connectors might still
   * enforce 3DS or bypass it regardless of this parameter.
   */
  authentication_type?: AuthenticationType | null;

  billing?: Address | null;

  /**
   * Browser information to be used for 3DS 2.0
   */
  browser_info?: BrowserInformation | null;

  /**
   * Specifies how the payment is captured.
   *
   * - `automatic`: Funds are captured immediately after successful authorization.
   *   This is the default behavior if the field is omitted.
   * - `manual`: Funds are authorized but not captured. A separate request to the
   *   `/payments/{payment_id}/capture` endpoint is required to capture the funds.
   */
  capture_method?: CaptureMethod | null;

  /**
   * It's a token used for client side verification.
   */
  client_secret?: string | null;

  /**
   * If set to `true`, Hyperswitch attempts to confirm and authorize the payment
   * immediately after creation, provided sufficient payment method details are
   * included. If `false` or omitted (default is `false`), the payment is created
   * with a status such as `requires_payment_method` or `requires_confirmation`, and
   * a separate `POST /payments/{payment_id}/confirm` call is necessary to proceed
   * with authorization.
   */
  confirm?: boolean | null;

  /**
   * This allows to manually select a connector with which the payment can go
   * through.
   */
  connector?: Array<ConnectorsAPI.Connector> | null;

  /**
   * Some connectors like Apple Pay, Airwallex and Noon might require some additional
   * information, find specific details in the child attributes below.
   */
  connector_metadata?: ConnectorMetadata | null;

  ctp_service_details?: CtpServiceDetails | null;

  /**
   * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
   * amount. This field is mandatory for creating a payment.
   */
  currency?: AccountsAPI.Currency | null;

  /**
   * Passing this object creates a new customer or attaches an existing customer to
   * the payment
   */
  customer?: CustomerDetails | null;

  /**
   * This "CustomerAcceptance" object is passed during Payments-Confirm request, it
   * enlists the type, time, and mode of acceptance properties related to an
   * acceptance done by the customer. The customer_acceptance sub object is usually
   * passed by the SDK or client.
   */
  customer_acceptance?: CustomerAcceptance | null;

  /**
   * The identifier for the customer
   */
  customer_id?: string | null;

  /**
   * An arbitrary string attached to the payment. Often useful for displaying to
   * users or for your own internal record-keeping.
   */
  description?: string | null;

  /**
   * Indicates if 3ds challenge is forced
   */
  force_3ds_challenge?: boolean | null;

  /**
   * Additional data related to some frm(Fraud Risk Management) connectors
   */
  frm_metadata?: unknown | null;

  /**
   * Indicates if the redirection has to open in the iframe
   */
  is_iframe_redirection_enabled?: boolean | null;

  /**
   * Passing this object during payments creates a mandate. The mandate_type sub
   * object is passed by the server.
   */
  mandate_data?: MandateData | null;

  /**
   * A unique identifier to link the payment to a mandate. To do Recurring payments
   * after a mandate has been created, pass the mandate_id instead of
   * payment_method_data
   */
  mandate_id?: string | null;

  /**
   * Merchant connector details used to make payments.
   */
  merchant_connector_details?: MerchantConnectorDetailsWrap | null;

  /**
   * Your unique identifier for this payment or order. This ID helps you reconcile
   * payments on your system. If provided, it is passed to the connector if
   * supported.
   */
  merchant_order_reference_id?: string | null;

  /**
   * You can specify up to 50 keys, with key names up to 40 characters long and
   * values up to 500 characters long. Metadata is useful for storing additional,
   * structured information on an object.
   */
  metadata?: unknown | null;

  /**
   * Set to true to indicate that the customer is not in your checkout flow during
   * this payment, and therefore is unable to authenticate. This parameter is
   * intended for scenarios where you collect card details and charge them later.
   * When making a recurring payment by passing a mandate_id, this parameter is
   * mandatory
   */
  off_session?: boolean | null;

  /**
   * Use this object to capture the details about the different products for which
   * the payment is being made. The sum of amount across different products here
   * should be equal to the overall payment amount
   */
  order_details?: Array<OrderDetailsWithAmount> | null;

  /**
   * Total tax amount applicable to the order, in the lowest denomination of the
   * currency.
   */
  order_tax_amount?: number | null;

  /**
   * To indicate the type of payment experience that the customer would go through
   */
  payment_experience?: PaymentExperience | null;

  /**
   * Optional. A merchant-provided unique identifier for the payment, contains 30
   * characters long (e.g., "pay_mbabizu24mvu3mela5njyhpit4"). If provided, it
   * ensures idempotency for the payment creation request. If omitted, Hyperswitch
   * generates a unique ID for the payment.
   */
  body_payment_id?: string | null;

  /**
   * Whether to generate the payment link for this payment or not (if applicable)
   */
  payment_link?: boolean | null;

  /**
   * Configure a custom payment link for the particular payment
   */
  payment_link_config?: PaymentCreatePaymentLinkConfig | null;

  /**
   * Custom payment link config id set at business profile, send only if
   * business_specific_configs is configured
   */
  payment_link_config_id?: string | null;

  /**
   * Indicates the type of payment method. Eg: 'card', 'wallet', etc.
   */
  payment_method?:
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
    | 'mobile_payment'
    | null;

  /**
   * The payment method information provided for making a payment
   */
  payment_method_data?: PaymentMethodDataRequest | null;

  /**
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type?: PaymentMethodType | null;

  /**
   * As Hyperswitch tokenises the sensitive details about the payments method, it
   * provides the payment_token as a reference to a stored payment method, ensuring
   * that the sensitive details are not exposed in any manner.
   */
  payment_token?: string | null;

  /**
   * The type of the payment that differentiates between normal and various types of
   * mandate payments. Use 'setup_mandate' in case of zero auth flow.
   */
  payment_type?: PaymentType | null;

  /**
   * SCA Exemptions types available for authentication
   */
  psd2_sca_exemption_type?: ScaExemptionType | null;

  /**
   * Details required for recurring payment
   */
  recurring_details?: RecurringDetails | null;

  /**
   * Optional boolean value to extent authorization period of this payment
   *
   * capture method must be manual or manual_multiple
   */
  request_extended_authorization?: boolean | null;

  /**
   * Whether to perform external authentication (if applicable)
   */
  request_external_three_ds_authentication?: boolean | null;

  /**
   * Request an incremental authorization, i.e., increase the authorized amount on a
   * confirmed payment before you capture it.
   */
  request_incremental_authorization?: boolean | null;

  /**
   * Denotes the retry action
   */
  retry_action?: RetryAction | null;

  /**
   * The URL to redirect the customer to after they complete the payment process or
   * authentication. This is crucial for flows that involve off-site redirection
   * (e.g., 3DS, some bank redirects, wallet payments).
   */
  return_url?: string | null;

  routing?: StraightThroughAlgorithm | null;

  /**
   * Will be used to expire client secret after certain amount of time to be supplied
   * in seconds (900) for 15 mins
   */
  session_expiry?: number | null;

  /**
   * Specifies how the payment method can be used for future payments.
   *
   * - `off_session`: The payment method can be used for future payments when the
   *   customer is not present.
   * - `on_session`: The payment method is intended for use only when the customer is
   *   present during checkout. If omitted, defaults to `on_session`.
   */
  setup_future_usage?: FutureUsage | null;

  shipping?: Address | null;

  /**
   * The shipping cost for the payment. This is required for tax calculation in some
   * regions.
   */
  shipping_cost?: number | null;

  /**
   * Whether to calculate tax for this payment intent
   */
  skip_external_tax_calculation?: boolean | null;

  /**
   * Fee information for Split Payments to be charged on the payment being collected
   */
  split_payments?: SplitPaymentsRequest | null;

  /**
   * For non-card charges, you can use this value as the complete description that
   * appears on your customers’ statements. Must contain at least one letter, maximum
   * 22 characters.
   */
  statement_descriptor_name?: string | null;

  /**
   * Provides information about a card payment that customers see on their
   * statements. Concatenated with the prefix (shortened descriptor) or statement
   * descriptor that’s set on the account to form the complete statement descriptor.
   * Maximum 22 characters for the concatenated descriptor.
   */
  statement_descriptor_suffix?: string | null;

  /**
   * Indicates if 3DS method data was successfully completed or not
   */
  threeds_method_comp_ind?: Number3DSAPI.ThreeDSCompletionIndicator | null;
}

export interface PaymentCreateSessionTokenParams {
  /**
   * This is a token which expires after 15 minutes, used from the client to
   * authenticate and create sessions from the SDK
   */
  client_secret: string;

  /**
   * The identifier for the payment
   */
  payment_id: string;

  /**
   * The list of the supported wallets
   */
  wallets: Array<PaymentMethodType>;

  /**
   * Merchant connector details used to make payments.
   */
  merchant_connector_details?: MerchantConnectorDetailsWrap | null;
}

export interface PaymentIncrementalAuthorizationParams {
  /**
   * The total amount including previously authorized amount and additional amount
   */
  amount: number;

  /**
   * Reason for incremental authorization
   */
  reason?: string | null;
}

export interface PaymentPostSessionTokensParams {
  /**
   * It's a token used for client side verification.
   */
  client_secret: string;

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
   * Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for
   * wallets.
   */
  payment_method_type: PaymentMethodType;
}

export interface PaymentUpdateMetadataParams {
  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata: unknown;
}

Payments.Number3DS = Number3DS;

export declare namespace Payments {
  export {
    type Address as Address,
    type AdyenSplitData as AdyenSplitData,
    type ApplePayAddressParameters as ApplePayAddressParameters,
    type AuthenticationType as AuthenticationType,
    type BankDebitBilling as BankDebitBilling,
    type BankRedirectBilling as BankRedirectBilling,
    type BrowserInformation as BrowserInformation,
    type CaptureMethod as CaptureMethod,
    type CaptureResponse as CaptureResponse,
    type CardDiscovery as CardDiscovery,
    type CardRedirectData as CardRedirectData,
    type ConnectorChargeResponseData as ConnectorChargeResponseData,
    type ConnectorMetadata as ConnectorMetadata,
    type ConnectorVolumeSplit as ConnectorVolumeSplit,
    type CryptoData as CryptoData,
    type CtpServiceDetails as CtpServiceDetails,
    type CtpServiceProvider as CtpServiceProvider,
    type CustomerAcceptance as CustomerAcceptance,
    type CustomerDetails as CustomerDetails,
    type CustomerDetailsResponse as CustomerDetailsResponse,
    type DisputeResponsePaymentsRetrieve as DisputeResponsePaymentsRetrieve,
    type DokuBillingDetails as DokuBillingDetails,
    type EphemeralKeyCreateResponse as EphemeralKeyCreateResponse,
    type ExternalAuthenticationDetailsResponse as ExternalAuthenticationDetailsResponse,
    type FeatureMetadata as FeatureMetadata,
    type FrmMessage as FrmMessage,
    type FutureUsage as FutureUsage,
    type IncrementalAuthorizationResponse as IncrementalAuthorizationResponse,
    type IntentStatus as IntentStatus,
    type JcsVoucherData as JcsVoucherData,
    type MandateData as MandateData,
    type MerchantConnectorDetailsWrap as MerchantConnectorDetailsWrap,
    type MobilePaymentData as MobilePaymentData,
    type NextActionCall as NextActionCall,
    type NextActionData as NextActionData,
    type OpenBankingData as OpenBankingData,
    type OrderDetailsWithAmount as OrderDetailsWithAmount,
    type PaymentAttemptResponse as PaymentAttemptResponse,
    type PaymentChargeType as PaymentChargeType,
    type PaymentCreatePaymentLinkConfig as PaymentCreatePaymentLinkConfig,
    type PaymentExperience as PaymentExperience,
    type PaymentLinkResponse as PaymentLinkResponse,
    type PaymentMethodDataRequest as PaymentMethodDataRequest,
    type PaymentMethodDataResponseWithBilling as PaymentMethodDataResponseWithBilling,
    type PaymentMethodStatus as PaymentMethodStatus,
    type PaymentMethodType as PaymentMethodType,
    type PaymentType as PaymentType,
    type PaymentsCreateResponseOpenAPI as PaymentsCreateResponseOpenAPI,
    type PaymentsResponse as PaymentsResponse,
    type RealTimePaymentData as RealTimePaymentData,
    type RecurringDetails as RecurringDetails,
    type RecurringPaymentIntervalUnit as RecurringPaymentIntervalUnit,
    type RequestSurchargeDetails as RequestSurchargeDetails,
    type RetryAction as RetryAction,
    type SamsungPayCardBrand as SamsungPayCardBrand,
    type SamsungPayTokenData as SamsungPayTokenData,
    type ScaExemptionType as ScaExemptionType,
    type SDKNextAction as SDKNextAction,
    type SecretInfoToInitiateSDK as SecretInfoToInitiateSDK,
    type SepaAndBacsBillingDetails as SepaAndBacsBillingDetails,
    type SessionToken as SessionToken,
    type SplitPaymentsRequest as SplitPaymentsRequest,
    type StraightThroughAlgorithm as StraightThroughAlgorithm,
    type VoucherData as VoucherData,
    type WalletAdditionalDataForCard as WalletAdditionalDataForCard,
    type XenditSplitRoute as XenditSplitRoute,
    type PaymentListResponse as PaymentListResponse,
    type PaymentCreateSessionTokenResponse as PaymentCreateSessionTokenResponse,
    type PaymentPostSessionTokensResponse as PaymentPostSessionTokensResponse,
    type PaymentUpdateMetadataResponse as PaymentUpdateMetadataResponse,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentRetrieveParams as PaymentRetrieveParams,
    type PaymentUpdateParams as PaymentUpdateParams,
    type PaymentListParams as PaymentListParams,
    type PaymentCancelParams as PaymentCancelParams,
    type PaymentCaptureParams as PaymentCaptureParams,
    type PaymentCompleteAuthorizeParams as PaymentCompleteAuthorizeParams,
    type PaymentConfirmParams as PaymentConfirmParams,
    type PaymentCreateSessionTokenParams as PaymentCreateSessionTokenParams,
    type PaymentIncrementalAuthorizationParams as PaymentIncrementalAuthorizationParams,
    type PaymentPostSessionTokensParams as PaymentPostSessionTokensParams,
    type PaymentUpdateMetadataParams as PaymentUpdateMetadataParams,
  };

  export {
    Number3DS as Number3DS,
    type ThreeDSCompletionIndicator as ThreeDSCompletionIndicator,
    type Number3DSAuthenticateResponse as Number3DSAuthenticateResponse,
    type Number3DSAuthenticateParams as Number3DSAuthenticateParams,
  };
}
