// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthenticationAPI from '../../authentication';
import * as ProfileAcquirersAPI from '../../profile-acquirers';
import * as AccountsAPI from '../accounts';
import * as DynamicRoutingAPI from './dynamic-routing/dynamic-routing';
import { DynamicRouting } from './dynamic-routing/dynamic-routing';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BusinessProfile extends APIResource {
  dynamicRouting: DynamicRoutingAPI.DynamicRouting = new DynamicRoutingAPI.DynamicRouting(this._client);

  /**
   * Creates a new _profile_ for a merchant
   *
   * @example
   * ```ts
   * const profileResponse =
   *   await client.accounts.businessProfile.create(
   *     'account_id',
   *   );
   * ```
   */
  create(
    accountID: string,
    body: BusinessProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileResponse> {
    return this._client.post(path`/account/${accountID}/business_profile`, { body, ...options });
  }

  /**
   * Retrieve existing _profile_
   *
   * @example
   * ```ts
   * const profileResponse =
   *   await client.accounts.businessProfile.retrieve(
   *     'profile_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  retrieve(
    profileID: string,
    params: BusinessProfileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ProfileResponse> {
    const { account_id } = params;
    return this._client.get(path`/account/${account_id}/business_profile/${profileID}`, options);
  }

  /**
   * Update the _profile_
   *
   * @example
   * ```ts
   * const profileResponse =
   *   await client.accounts.businessProfile.update(
   *     'profile_id',
   *     {
   *       account_id: 'account_id',
   *       profile_name: 'shoe_business',
   *     },
   *   );
   * ```
   */
  update(
    profileID: string,
    params: BusinessProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/account/${account_id}/business_profile/${profileID}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all the _profiles_ under a merchant
   *
   * @example
   * ```ts
   * const profileResponses =
   *   await client.accounts.businessProfile.list('account_id');
   * ```
   */
  list(accountID: string, options?: RequestOptions): APIPromise<BusinessProfileListResponse> {
    return this._client.get(path`/account/${accountID}/business_profile`, options);
  }

  /**
   * Delete the _profile_
   *
   * @example
   * ```ts
   * const businessProfile =
   *   await client.accounts.businessProfile.delete(
   *     'profile_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    profileID: string,
    params: BusinessProfileDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BusinessProfileDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/account/${account_id}/business_profile/${profileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export interface AuthenticationConnectorDetails {
  /**
   * List of authentication connectors
   */
  authentication_connectors: Array<AuthenticationAPI.AuthenticationConnectors>;

  /**
   * URL of the (customer service) website that will be shown to the shopper in case
   * of technical errors during the 3D Secure 2 process.
   */
  three_ds_requestor_url: string;

  /**
   * Merchant app declaring their URL within the CReq message so that the
   * Authentication app can call the Merchant app after OOB authentication has
   * occurred.
   */
  three_ds_requestor_app_url?: string | null;
}

export interface BusinessPaymentLinkConfig extends PaymentLinkConfigRequest {
  /**
   * A list of allowed domains (glob patterns) where this link can be embedded /
   * opened from
   */
  allowed_domains?: Array<string> | null;

  /**
   * Toggle for HyperSwitch branding visibility
   */
  branding_visibility?: boolean | null;

  /**
   * list of configs for multi theme setup
   */
  business_specific_configs?: { [key: string]: PaymentLinkConfigRequest } | null;

  /**
   * Custom domain name to be used for hosting the link in your own domain
   */
  domain_name?: string | null;
}

/**
 * Object for GenericLinkUiConfig
 */
export interface BusinessPayoutLinkConfig extends AccountsAPI.BusinessGenericLinkConfig {
  form_layout?: UiWidgetFormLayout | null;

  /**
   * Allows for removing any validations / pre-requisites which are necessary in a
   * production environment
   */
  payout_test_mode?: boolean | null;
}

export interface CardTestingGuardConfig {
  card_ip_blocking_status: CardTestingGuardStatus;

  /**
   * Determines the unsuccessful payment threshold for Card IP Blocking for profile
   */
  card_ip_blocking_threshold: number;

  /**
   * Determines Redis Expiry for Card Testing Guard for profile
   */
  card_testing_guard_expiry: number;

  customer_id_blocking_status: CardTestingGuardStatus;

  /**
   * Determines the unsuccessful payment threshold for Customer Id Blocking for
   * profile
   */
  customer_id_blocking_threshold: number;

  guest_user_card_blocking_status: CardTestingGuardStatus;

  /**
   * Determines the unsuccessful payment threshold for Guest User Card Blocking for
   * profile
   */
  guest_user_card_blocking_threshold: number;
}

export type CardTestingGuardStatus = 'enabled' | 'disabled';

export type MerchantCategoryCode = '5411' | '7011' | '0763' | '8111' | '5021' | '4816' | '5661';

export interface PaymentLinkConfigRequest {
  /**
   * Custom background colour for the payment link
   */
  background_colour?: string | null;

  background_image?: PaymentLinkConfigRequest.BackgroundImage | null;

  /**
   * Hex color for the CVC icon during error state
   */
  color_icon_card_cvc_error?: string | null;

  /**
   * Text for customizing message for card terms
   */
  custom_message_for_card_terms?: string | null;

  details_layout?: 'layout1' | 'layout2' | null;

  /**
   * Display only the sdk for payment link
   */
  display_sdk_only?: boolean | null;

  /**
   * Flag to enable the button only when the payment form is ready for submission
   */
  enable_button_only_on_form_ready?: boolean | null;

  /**
   * Enable saved payment method option for payment link
   */
  enabled_saved_payment_method?: boolean | null;

  /**
   * Hide card nickname field option for payment link
   */
  hide_card_nickname_field?: boolean | null;

  /**
   * Boolean to control payment button text for setup mandate calls
   */
  is_setup_mandate_flow?: boolean | null;

  /**
   * merchant display logo
   */
  logo?: string | null;

  /**
   * Custom background colour for payment link's handle confirm button
   */
  payment_button_colour?: string | null;

  /**
   * Text for payment link's handle confirm button
   */
  payment_button_text?: string | null;

  /**
   * Custom text colour for payment link's handle confirm button
   */
  payment_button_text_colour?: string | null;

  /**
   * Optional header for the SDK's payment form
   */
  payment_form_header_text?: string | null;

  payment_form_label_type?: 'above' | 'floating' | 'never' | null;

  /**
   * Payment link configuration rules
   */
  payment_link_ui_rules?: { [key: string]: { [key: string]: string } } | null;

  /**
   * Custom layout for sdk
   */
  sdk_layout?: string | null;

  /**
   * SDK configuration rules
   */
  sdk_ui_rules?: { [key: string]: { [key: string]: string } } | null;

  /**
   * Custom merchant name for payment link
   */
  seller_name?: string | null;

  /**
   * Show card form by default for payment link
   */
  show_card_form_by_default?: boolean | null;

  show_card_terms?: 'always' | 'auto' | 'never' | null;

  /**
   * Skip the status screen after payment completion
   */
  skip_status_screen?: boolean | null;

  /**
   * custom theme for the payment link
   */
  theme?: string | null;

  /**
   * Dynamic details related to merchant to be rendered in payment link
   */
  transaction_details?: Array<PaymentLinkConfigRequest.TransactionDetail> | null;
}

export namespace PaymentLinkConfigRequest {
  export interface BackgroundImage {
    /**
     * URL of the image
     */
    url: string;

    position?:
      | 'left'
      | 'top left'
      | 'top'
      | 'top right'
      | 'right'
      | 'bottom right'
      | 'bottom'
      | 'bottom left'
      | 'center'
      | null;

    size?: BackgroundImage.Variants | BackgroundImage.Percentage | BackgroundImage.Pixels | null;
  }

  export namespace BackgroundImage {
    export interface Variants {
      Variants: 'cover' | 'contain';
    }

    export interface Percentage {
      Percentage: number;
    }

    export interface Pixels {
      Pixels: number;
    }
  }

  export interface TransactionDetail {
    /**
     * Key for the transaction details
     */
    key: string;

    /**
     * Value for the transaction details
     */
    value: string;

    ui_configuration?: TransactionDetail.UiConfiguration | null;
  }

  export namespace TransactionDetail {
    export interface UiConfiguration {
      /**
       * Whether the key should be bold
       */
      is_key_bold?: boolean | null;

      /**
       * Whether the value should be bold
       */
      is_value_bold?: boolean | null;

      /**
       * Position of the key-value pair in the UI
       */
      position?: number | null;
    }
  }
}

export interface ProfileCreate {
  /**
   * A boolean value to indicate if customer billing details needs to be collected
   * from wallet connector irrespective of connector required fields (Eg. Apple pay,
   * Google pay etc)
   */
  always_collect_billing_details_from_wallet_connector?: boolean | null;

  /**
   * A boolean value to indicate if customer shipping details needs to be collected
   * from wallet connector irrespective of connector required fields (Eg. Apple pay,
   * Google pay etc)
   */
  always_collect_shipping_details_from_wallet_connector?: boolean | null;

  /**
   * Bool indicating if extended authentication must be requested for all payments
   */
  always_request_extended_authorization?: boolean | null;

  /**
   * Verified Apple Pay domains for a particular profile
   */
  applepay_verified_domains?: Array<string> | null;

  authentication_connector_details?: AuthenticationConnectorDetails | null;

  /**
   * Product authentication ids
   */
  authentication_product_ids?: unknown | null;

  card_testing_guard_config?: CardTestingGuardConfig | null;

  /**
   * A boolean value to indicate if customer billing details needs to be collected
   * from wallet connector only if it is required field for connector (Eg. Apple Pay,
   * Google Pay etc)
   */
  collect_billing_details_from_wallet_connector?: boolean | null;

  /**
   * A boolean value to indicate if customer shipping details needs to be collected
   * from wallet connector only if it is required field for connector (Eg. Apple Pay,
   * Google Pay etc)
   */
  collect_shipping_details_from_wallet_connector?: boolean | null;

  /**
   * A boolean value to indicate if payment response hash needs to be enabled
   */
  enable_payment_response_hash?: boolean | null;

  /**
   * Indicates if 3ds challenge is forced
   */
  force_3ds_challenge?: boolean | null;

  /**
   * The frm routing algorithm to be used for routing payments to desired FRM's
   */
  frm_routing_algorithm?: unknown | null;

  /**
   * Will be used to determine the time till which your payment will be active once
   * the payment session starts
   */
  intent_fulfillment_time?: number | null;

  /**
   * Indicates if is_auto_retries_enabled is enabled or not.
   */
  is_auto_retries_enabled?: boolean | null;

  /**
   * Indicates if clear pan retries is enabled or not.
   */
  is_clear_pan_retries_enabled?: boolean | null;

  /**
   * Indicates if click to pay is enabled or not.
   */
  is_click_to_pay_enabled?: boolean;

  /**
   * Indicates if the MIT (merchant initiated transaction) payments can be made
   * connector agnostic, i.e., MITs may be processed through different connector than
   * CIT (customer initiated transaction) based on the routing rules. If set to
   * `false`, MIT will go through the same connector as the CIT.
   */
  is_connector_agnostic_mit_enabled?: boolean | null;

  /**
   * Indicates if debit routing is enabled or not
   */
  is_debit_routing_enabled?: boolean | null;

  /**
   * Indicates if the redirection has to open in the iframe
   */
  is_iframe_redirection_enabled?: boolean | null;

  /**
   * Indicates if network tokenization is enabled or not.
   */
  is_network_tokenization_enabled?: boolean;

  /**
   * Indicates if pre network tokenization is enabled or not
   */
  is_pre_network_tokenization_enabled?: boolean | null;

  /**
   * Indicates if tax_calculator connector is enabled or not. If set to `true`
   * tax_connector_id will be checked.
   */
  is_tax_connector_enabled?: boolean;

  /**
   * Maximum number of auto retries allowed for a payment
   */
  max_auto_retries_enabled?: number | null;

  merchant_business_country?: AccountsAPI.CountryAlpha2 | null;

  merchant_category_code?: MerchantCategoryCode | null;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * These key-value pairs are sent as additional custom headers in the outgoing
   * webhook request. It is recommended not to use more than four key-value pairs.
   */
  outgoing_webhook_custom_http_headers?: unknown | null;

  payment_link_config?: BusinessPaymentLinkConfig | null;

  /**
   * Refers to the hash key used for calculating the signature for webhooks and
   * redirect response. If the value is not provided, a value is automatically
   * generated.
   */
  payment_response_hash_key?: string | null;

  /**
   * Object for GenericLinkUiConfig
   */
  payout_link_config?: BusinessPayoutLinkConfig | null;

  payout_routing_algorithm?: AccountsAPI.StaticRoutingAlgorithm | null;

  /**
   * The name of profile
   */
  profile_name?: string | null;

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
   * The routing algorithm to be used for routing payments to desired connectors
   */
  routing_algorithm?: unknown | null;

  /**
   * Client Secret Default expiry for all payments created under this profile
   */
  session_expiry?: number | null;

  /**
   * Merchant Connector id to be stored for tax_calculator connector
   */
  tax_connector_id?: string | null;

  /**
   * Whether to use the billing details passed when creating the intent as payment
   * method billing
   */
  use_billing_as_payment_method_billing?: boolean | null;

  webhook_details?: AccountsAPI.WebhookDetails | null;
}

export interface ProfileResponse {
  /**
   * A boolean value to indicate if payment response hash needs to be enabled
   */
  enable_payment_response_hash: boolean;

  /**
   * Indicates if 3ds challenge is forced
   */
  force_3ds_challenge: boolean;

  /**
   * Indicates if is_auto_retries_enabled is enabled or not.
   */
  is_auto_retries_enabled: boolean;

  /**
   * Indicates if clear pan retries is enabled or not.
   */
  is_clear_pan_retries_enabled: boolean;

  /**
   * Indicates if click to pay is enabled or not.
   */
  is_click_to_pay_enabled: boolean;

  /**
   * Indicates if network tokenization is enabled or not.
   */
  is_network_tokenization_enabled: boolean;

  /**
   * Indicates if pre network tokenization is enabled or not
   */
  is_pre_network_tokenization_enabled: boolean;

  /**
   * Indicates if tax_calculator connector is enabled or not. If set to `true`
   * tax_connector_id will be checked.
   */
  is_tax_connector_enabled: boolean;

  /**
   * The identifier for Merchant Account
   */
  merchant_id: string;

  /**
   * The identifier for profile. This must be used for creating merchant accounts,
   * payments and payouts
   */
  profile_id: string;

  /**
   * Name of the profile
   */
  profile_name: string;

  /**
   * A boolean value to indicate if redirect to merchant with http post needs to be
   * enabled
   */
  redirect_to_merchant_with_http_post: boolean;

  /**
   * Acquirer configs
   */
  acquirer_configs?: Array<ProfileAcquirersAPI.ProfileAcquirer> | null;

  /**
   * A boolean value to indicate if customer billing details needs to be collected
   * from wallet connector irrespective of connector required fields (Eg. Apple pay,
   * Google pay etc)
   */
  always_collect_billing_details_from_wallet_connector?: boolean | null;

  /**
   * A boolean value to indicate if customer shipping details needs to be collected
   * from wallet connector irrespective of connector required fields (Eg. Apple pay,
   * Google pay etc)
   */
  always_collect_shipping_details_from_wallet_connector?: boolean | null;

  /**
   * Bool indicating if extended authentication must be requested for all payments
   */
  always_request_extended_authorization?: boolean | null;

  /**
   * Verified Apple Pay domains for a particular profile
   */
  applepay_verified_domains?: Array<string> | null;

  authentication_connector_details?: AuthenticationConnectorDetails | null;

  /**
   * Product authentication ids
   */
  authentication_product_ids?: unknown | null;

  card_testing_guard_config?: CardTestingGuardConfig | null;

  /**
   * A boolean value to indicate if customer billing details needs to be collected
   * from wallet connector only if it is required field for connector (Eg. Apple Pay,
   * Google Pay etc)
   */
  collect_billing_details_from_wallet_connector?: boolean | null;

  /**
   * A boolean value to indicate if customer shipping details needs to be collected
   * from wallet connector only if it is required field for connector (Eg. Apple Pay,
   * Google Pay etc)
   */
  collect_shipping_details_from_wallet_connector?: boolean | null;

  extended_card_info_config?: ProfileResponse.ExtendedCardInfoConfig | null;

  /**
   * The routing algorithm to be used to process the incoming request from merchant
   * to outgoing payment processor or payment method. The default is 'Custom'
   */
  frm_routing_algorithm?: unknown | null;

  /**
   * Will be used to determine the time till which your payment will be active once
   * the payment session starts
   */
  intent_fulfillment_time?: number | null;

  /**
   * Indicates if the MIT (merchant initiated transaction) payments can be made
   * connector agnostic, i.e., MITs may be processed through different connector than
   * CIT (customer initiated transaction) based on the routing rules. If set to
   * `false`, MIT will go through the same connector as the CIT.
   */
  is_connector_agnostic_mit_enabled?: boolean | null;

  /**
   * Indicates if debit routing is enabled or not
   */
  is_debit_routing_enabled?: boolean | null;

  /**
   * Indicates if the redirection has to open in the iframe
   */
  is_iframe_redirection_enabled?: boolean | null;

  /**
   * Maximum number of auto retries allowed for a payment
   */
  max_auto_retries_enabled?: number | null;

  merchant_business_country?: AccountsAPI.CountryAlpha2 | null;

  merchant_category_code?: MerchantCategoryCode | null;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * These key-value pairs are sent as additional custom headers in the outgoing
   * webhook request.
   */
  outgoing_webhook_custom_http_headers?: unknown | null;

  payment_link_config?: BusinessPaymentLinkConfig | null;

  /**
   * Refers to the hash key used for calculating the signature for webhooks and
   * redirect response. If the value is not provided, a value is automatically
   * generated.
   */
  payment_response_hash_key?: string | null;

  /**
   * Object for GenericLinkUiConfig
   */
  payout_link_config?: BusinessPayoutLinkConfig | null;

  payout_routing_algorithm?: AccountsAPI.StaticRoutingAlgorithm | null;

  /**
   * The URL to redirect after the completion of the operation
   */
  return_url?: string | null;

  /**
   * The routing algorithm to be used for routing payments to desired connectors
   */
  routing_algorithm?: unknown | null;

  /**
   * Client Secret Default expiry for all payments created under this profile
   */
  session_expiry?: number | null;

  /**
   * Merchant Connector id to be stored for tax_calculator connector
   */
  tax_connector_id?: string | null;

  use_billing_as_payment_method_billing?: boolean | null;

  webhook_details?: AccountsAPI.WebhookDetails | null;
}

export namespace ProfileResponse {
  export interface ExtendedCardInfoConfig {
    /**
     * Merchant public key
     */
    public_key: string;

    /**
     * TTL for extended card info
     */
    ttl_in_secs?: number;
  }
}

export type UiWidgetFormLayout = 'tabs' | 'journey';

export type BusinessProfileListResponse = Array<ProfileResponse>;

export type BusinessProfileDeleteResponse = boolean;

export interface BusinessProfileCreateParams {
  /**
   * A boolean value to indicate if customer billing details needs to be collected
   * from wallet connector irrespective of connector required fields (Eg. Apple pay,
   * Google pay etc)
   */
  always_collect_billing_details_from_wallet_connector?: boolean | null;

  /**
   * A boolean value to indicate if customer shipping details needs to be collected
   * from wallet connector irrespective of connector required fields (Eg. Apple pay,
   * Google pay etc)
   */
  always_collect_shipping_details_from_wallet_connector?: boolean | null;

  /**
   * Bool indicating if extended authentication must be requested for all payments
   */
  always_request_extended_authorization?: boolean | null;

  /**
   * Verified Apple Pay domains for a particular profile
   */
  applepay_verified_domains?: Array<string> | null;

  authentication_connector_details?: AuthenticationConnectorDetails | null;

  /**
   * Product authentication ids
   */
  authentication_product_ids?: unknown | null;

  card_testing_guard_config?: CardTestingGuardConfig | null;

  /**
   * A boolean value to indicate if customer billing details needs to be collected
   * from wallet connector only if it is required field for connector (Eg. Apple Pay,
   * Google Pay etc)
   */
  collect_billing_details_from_wallet_connector?: boolean | null;

  /**
   * A boolean value to indicate if customer shipping details needs to be collected
   * from wallet connector only if it is required field for connector (Eg. Apple Pay,
   * Google Pay etc)
   */
  collect_shipping_details_from_wallet_connector?: boolean | null;

  /**
   * A boolean value to indicate if payment response hash needs to be enabled
   */
  enable_payment_response_hash?: boolean | null;

  /**
   * Indicates if 3ds challenge is forced
   */
  force_3ds_challenge?: boolean | null;

  /**
   * The frm routing algorithm to be used for routing payments to desired FRM's
   */
  frm_routing_algorithm?: unknown | null;

  /**
   * Will be used to determine the time till which your payment will be active once
   * the payment session starts
   */
  intent_fulfillment_time?: number | null;

  /**
   * Indicates if is_auto_retries_enabled is enabled or not.
   */
  is_auto_retries_enabled?: boolean | null;

  /**
   * Indicates if clear pan retries is enabled or not.
   */
  is_clear_pan_retries_enabled?: boolean | null;

  /**
   * Indicates if click to pay is enabled or not.
   */
  is_click_to_pay_enabled?: boolean;

  /**
   * Indicates if the MIT (merchant initiated transaction) payments can be made
   * connector agnostic, i.e., MITs may be processed through different connector than
   * CIT (customer initiated transaction) based on the routing rules. If set to
   * `false`, MIT will go through the same connector as the CIT.
   */
  is_connector_agnostic_mit_enabled?: boolean | null;

  /**
   * Indicates if debit routing is enabled or not
   */
  is_debit_routing_enabled?: boolean | null;

  /**
   * Indicates if the redirection has to open in the iframe
   */
  is_iframe_redirection_enabled?: boolean | null;

  /**
   * Indicates if network tokenization is enabled or not.
   */
  is_network_tokenization_enabled?: boolean;

  /**
   * Indicates if pre network tokenization is enabled or not
   */
  is_pre_network_tokenization_enabled?: boolean | null;

  /**
   * Indicates if tax_calculator connector is enabled or not. If set to `true`
   * tax_connector_id will be checked.
   */
  is_tax_connector_enabled?: boolean;

  /**
   * Maximum number of auto retries allowed for a payment
   */
  max_auto_retries_enabled?: number | null;

  merchant_business_country?: AccountsAPI.CountryAlpha2 | null;

  merchant_category_code?: MerchantCategoryCode | null;

  /**
   * Metadata is useful for storing additional, unstructured information on an
   * object.
   */
  metadata?: unknown | null;

  /**
   * These key-value pairs are sent as additional custom headers in the outgoing
   * webhook request. It is recommended not to use more than four key-value pairs.
   */
  outgoing_webhook_custom_http_headers?: unknown | null;

  payment_link_config?: BusinessPaymentLinkConfig | null;

  /**
   * Refers to the hash key used for calculating the signature for webhooks and
   * redirect response. If the value is not provided, a value is automatically
   * generated.
   */
  payment_response_hash_key?: string | null;

  /**
   * Object for GenericLinkUiConfig
   */
  payout_link_config?: BusinessPayoutLinkConfig | null;

  payout_routing_algorithm?: AccountsAPI.StaticRoutingAlgorithm | null;

  /**
   * The name of profile
   */
  profile_name?: string | null;

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
   * The routing algorithm to be used for routing payments to desired connectors
   */
  routing_algorithm?: unknown | null;

  /**
   * Client Secret Default expiry for all payments created under this profile
   */
  session_expiry?: number | null;

  /**
   * Merchant Connector id to be stored for tax_calculator connector
   */
  tax_connector_id?: string | null;

  /**
   * Whether to use the billing details passed when creating the intent as payment
   * method billing
   */
  use_billing_as_payment_method_billing?: boolean | null;

  webhook_details?: AccountsAPI.WebhookDetails | null;
}

export interface BusinessProfileRetrieveParams {
  /**
   * The unique identifier for the merchant account
   */
  account_id: string;
}

export interface BusinessProfileUpdateParams {
  /**
   * Path param: The unique identifier for the merchant account
   */
  account_id: string;

  /**
   * Body param: A boolean value to indicate if customer billing details needs to be
   * collected from wallet connector irrespective of connector required fields (Eg.
   * Apple pay, Google pay etc)
   */
  always_collect_billing_details_from_wallet_connector?: boolean | null;

  /**
   * Body param: A boolean value to indicate if customer shipping details needs to be
   * collected from wallet connector irrespective of connector required fields (Eg.
   * Apple pay, Google pay etc)
   */
  always_collect_shipping_details_from_wallet_connector?: boolean | null;

  /**
   * Body param: Bool indicating if extended authentication must be requested for all
   * payments
   */
  always_request_extended_authorization?: boolean | null;

  /**
   * Body param: Verified Apple Pay domains for a particular profile
   */
  applepay_verified_domains?: Array<string> | null;

  /**
   * Body param:
   */
  authentication_connector_details?: AuthenticationConnectorDetails | null;

  /**
   * Body param: Product authentication ids
   */
  authentication_product_ids?: unknown | null;

  /**
   * Body param:
   */
  card_testing_guard_config?: CardTestingGuardConfig | null;

  /**
   * Body param: A boolean value to indicate if customer billing details needs to be
   * collected from wallet connector only if it is required field for connector (Eg.
   * Apple Pay, Google Pay etc)
   */
  collect_billing_details_from_wallet_connector?: boolean | null;

  /**
   * Body param: A boolean value to indicate if customer shipping details needs to be
   * collected from wallet connector only if it is required field for connector (Eg.
   * Apple Pay, Google Pay etc)
   */
  collect_shipping_details_from_wallet_connector?: boolean | null;

  /**
   * Body param: A boolean value to indicate if payment response hash needs to be
   * enabled
   */
  enable_payment_response_hash?: boolean | null;

  /**
   * Body param: Indicates if 3ds challenge is forced
   */
  force_3ds_challenge?: boolean | null;

  /**
   * Body param: The frm routing algorithm to be used for routing payments to desired
   * FRM's
   */
  frm_routing_algorithm?: unknown | null;

  /**
   * Body param: Will be used to determine the time till which your payment will be
   * active once the payment session starts
   */
  intent_fulfillment_time?: number | null;

  /**
   * Body param: Indicates if is_auto_retries_enabled is enabled or not.
   */
  is_auto_retries_enabled?: boolean | null;

  /**
   * Body param: Indicates if clear pan retries is enabled or not.
   */
  is_clear_pan_retries_enabled?: boolean | null;

  /**
   * Body param: Indicates if click to pay is enabled or not.
   */
  is_click_to_pay_enabled?: boolean;

  /**
   * Body param: Indicates if the MIT (merchant initiated transaction) payments can
   * be made connector agnostic, i.e., MITs may be processed through different
   * connector than CIT (customer initiated transaction) based on the routing rules.
   * If set to `false`, MIT will go through the same connector as the CIT.
   */
  is_connector_agnostic_mit_enabled?: boolean | null;

  /**
   * Body param: Indicates if debit routing is enabled or not
   */
  is_debit_routing_enabled?: boolean | null;

  /**
   * Body param: Indicates if the redirection has to open in the iframe
   */
  is_iframe_redirection_enabled?: boolean | null;

  /**
   * Body param: Indicates if network tokenization is enabled or not.
   */
  is_network_tokenization_enabled?: boolean;

  /**
   * Body param: Indicates if pre network tokenization is enabled or not
   */
  is_pre_network_tokenization_enabled?: boolean | null;

  /**
   * Body param: Indicates if tax_calculator connector is enabled or not. If set to
   * `true` tax_connector_id will be checked.
   */
  is_tax_connector_enabled?: boolean;

  /**
   * Body param: Maximum number of auto retries allowed for a payment
   */
  max_auto_retries_enabled?: number | null;

  /**
   * Body param:
   */
  merchant_business_country?: AccountsAPI.CountryAlpha2 | null;

  /**
   * Body param:
   */
  merchant_category_code?: MerchantCategoryCode | null;

  /**
   * Body param: Metadata is useful for storing additional, unstructured information
   * on an object.
   */
  metadata?: unknown | null;

  /**
   * Body param: These key-value pairs are sent as additional custom headers in the
   * outgoing webhook request. It is recommended not to use more than four key-value
   * pairs.
   */
  outgoing_webhook_custom_http_headers?: unknown | null;

  /**
   * Body param:
   */
  payment_link_config?: BusinessPaymentLinkConfig | null;

  /**
   * Body param: Refers to the hash key used for calculating the signature for
   * webhooks and redirect response. If the value is not provided, a value is
   * automatically generated.
   */
  payment_response_hash_key?: string | null;

  /**
   * Body param: Object for GenericLinkUiConfig
   */
  payout_link_config?: BusinessPayoutLinkConfig | null;

  /**
   * Body param:
   */
  payout_routing_algorithm?: AccountsAPI.StaticRoutingAlgorithm | null;

  /**
   * Body param: The name of profile
   */
  profile_name?: string | null;

  /**
   * Body param: A boolean value to indicate if redirect to merchant with http post
   * needs to be enabled
   */
  redirect_to_merchant_with_http_post?: boolean | null;

  /**
   * Body param: The URL to redirect after the completion of the operation
   */
  return_url?: string | null;

  /**
   * Body param: The routing algorithm to be used for routing payments to desired
   * connectors
   */
  routing_algorithm?: unknown | null;

  /**
   * Body param: Client Secret Default expiry for all payments created under this
   * profile
   */
  session_expiry?: number | null;

  /**
   * Body param: Merchant Connector id to be stored for tax_calculator connector
   */
  tax_connector_id?: string | null;

  /**
   * Body param: Whether to use the billing details passed when creating the intent
   * as payment method billing
   */
  use_billing_as_payment_method_billing?: boolean | null;

  /**
   * Body param:
   */
  webhook_details?: AccountsAPI.WebhookDetails | null;
}

export interface BusinessProfileDeleteParams {
  /**
   * The unique identifier for the merchant account
   */
  account_id: string;
}

BusinessProfile.DynamicRouting = DynamicRouting;

export declare namespace BusinessProfile {
  export {
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

  export { DynamicRouting as DynamicRouting };
}
