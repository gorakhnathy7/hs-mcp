// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payments',
  operationId: 'Create a Payment',
};

export const tool: Tool = {
  name: 'create_payments',
  description:
    "Creates a payment resource, which represents a customer's intent to pay.\nThis endpoint is the starting point for various payment flows:\n",
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        description:
          'The primary amount for the payment, provided in the lowest denomination of the specified currency (e.g., 6540 for $65.40 USD). This field is mandatory for creating a payment.',
      },
      currency: {
        $ref: '#/$defs/currency',
      },
      all_keys_required: {
        type: 'boolean',
        description: 'If enabled, provides whole connector response',
      },
      allowed_payment_method_types: {
        type: 'array',
        description:
          'Use this parameter to restrict the Payment Method Types to show for a given PaymentIntent',
        items: {
          $ref: '#/$defs/payment_method_type',
        },
      },
      amount_to_capture: {
        type: 'integer',
        description:
          "The amount to be captured from the user's payment method, in the lowest denomination. If not provided, and `capture_method` is `automatic`, the full payment `amount` will be captured. If `capture_method` is `manual`, this can be specified in the `/capture` call. Must be less than or equal to the authorized amount.",
      },
      authentication_type: {
        $ref: '#/$defs/authentication_type',
      },
      billing: {
        $ref: '#/$defs/address',
      },
      browser_info: {
        $ref: '#/$defs/browser_information',
      },
      business_country: {
        $ref: '#/$defs/country_alpha2',
      },
      business_label: {
        type: 'string',
        description:
          'Business label of the merchant for this payment.\nTo be deprecated soon. Pass the profile_id instead',
      },
      capture_method: {
        $ref: '#/$defs/capture_method',
      },
      confirm: {
        type: 'boolean',
        description:
          'If set to `true`, Hyperswitch attempts to confirm and authorize the payment immediately after creation, provided sufficient payment method details are included. If `false` or omitted (default is `false`), the payment is created with a status such as `requires_payment_method` or `requires_confirmation`, and a separate `POST /payments/{payment_id}/confirm` call is necessary to proceed with authorization.',
      },
      connector: {
        type: 'array',
        description: 'This allows to manually select a connector with which the payment can go through.',
        items: {
          $ref: '#/$defs/connector',
        },
      },
      connector_metadata: {
        $ref: '#/$defs/connector_metadata',
      },
      ctp_service_details: {
        $ref: '#/$defs/ctp_service_details',
      },
      customer: {
        $ref: '#/$defs/customer_details',
      },
      customer_acceptance: {
        $ref: '#/$defs/customer_acceptance',
      },
      customer_id: {
        type: 'string',
        description: 'The identifier for the customer',
      },
      description: {
        type: 'string',
        description:
          'An arbitrary string attached to the payment. Often useful for displaying to users or for your own internal record-keeping.',
      },
      force_3ds_challenge: {
        type: 'boolean',
        description: 'Indicates if 3ds challenge is forced',
      },
      frm_metadata: {
        type: 'object',
        description: 'Additional data related to some frm(Fraud Risk Management) connectors',
      },
      is_iframe_redirection_enabled: {
        type: 'boolean',
        description: 'Indicates if the redirection has to open in the iframe',
      },
      mandate_data: {
        $ref: '#/$defs/mandate_data',
      },
      mandate_id: {
        type: 'string',
        description:
          'A unique identifier to link the payment to a mandate. To do Recurring payments after a mandate has been created, pass the mandate_id instead of payment_method_data',
      },
      merchant_connector_details: {
        $ref: '#/$defs/merchant_connector_details_wrap',
      },
      merchant_order_reference_id: {
        type: 'string',
        description:
          'Your unique identifier for this payment or order. This ID helps you reconcile payments on your system. If provided, it is passed to the connector if supported.',
      },
      metadata: {
        type: 'object',
        description:
          'You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long. Metadata is useful for storing additional, structured information on an object.',
      },
      off_session: {
        type: 'boolean',
        description:
          'Set to true to indicate that the customer is not in your checkout flow during this payment, and therefore is unable to authenticate. This parameter is intended for scenarios where you collect card details and charge them later. When making a recurring payment by passing a mandate_id, this parameter is mandatory',
      },
      order_details: {
        type: 'array',
        description:
          'Use this object to capture the details about the different products for which the payment is being made. The sum of amount across different products here should be equal to the overall payment amount',
        items: {
          $ref: '#/$defs/order_details_with_amount',
        },
      },
      order_tax_amount: {
        type: 'integer',
        description: 'Total tax amount applicable to the order, in the lowest denomination of the currency.',
      },
      payment_experience: {
        $ref: '#/$defs/payment_experience',
      },
      payment_id: {
        type: 'string',
        description:
          'Optional. A merchant-provided unique identifier for the payment, contains 30 characters long (e.g., "pay_mbabizu24mvu3mela5njyhpit4"). If provided, it ensures idempotency for the payment creation request. If omitted, Hyperswitch generates a unique ID for the payment.',
      },
      payment_link: {
        type: 'boolean',
        description: 'Whether to generate the payment link for this payment or not (if applicable)',
      },
      payment_link_config: {
        $ref: '#/$defs/payment_create_payment_link_config',
      },
      payment_link_config_id: {
        type: 'string',
        description:
          'Custom payment link config id set at business profile, send only if business_specific_configs is configured',
      },
      payment_method: {
        type: 'string',
        description: "Indicates the type of payment method. Eg: 'card', 'wallet', etc.",
        enum: [
          'card',
          'card_redirect',
          'pay_later',
          'wallet',
          'bank_redirect',
          'bank_transfer',
          'crypto',
          'bank_debit',
          'reward',
          'real_time_payment',
          'upi',
          'voucher',
          'gift_card',
          'open_banking',
          'mobile_payment',
        ],
      },
      payment_method_data: {
        $ref: '#/$defs/payment_method_data_request',
      },
      payment_method_type: {
        $ref: '#/$defs/payment_method_type',
      },
      payment_token: {
        type: 'string',
        description:
          'As Hyperswitch tokenises the sensitive details about the payments method, it provides the payment_token as a reference to a stored payment method, ensuring that the sensitive details are not exposed in any manner.',
      },
      payment_type: {
        $ref: '#/$defs/payment_type',
      },
      profile_id: {
        type: 'string',
        description:
          'The business profile to be used for this payment, if not passed the default business profile associated with the merchant account will be used. It is mandatory in case multiple business profiles have been set up.',
      },
      psd2_sca_exemption_type: {
        $ref: '#/$defs/sca_exemption_type',
      },
      recurring_details: {
        $ref: '#/$defs/recurring_details',
      },
      request_extended_authorization: {
        type: 'boolean',
        description:
          'Optional boolean value to extent authorization period of this payment\n\ncapture method must be manual or manual_multiple',
      },
      request_external_three_ds_authentication: {
        type: 'boolean',
        description: 'Whether to perform external authentication (if applicable)',
      },
      request_incremental_authorization: {
        type: 'boolean',
        description:
          'Request an incremental authorization, i.e., increase the authorized amount on a confirmed payment before you capture it.',
      },
      return_url: {
        type: 'string',
        description:
          'The URL to redirect the customer to after they complete the payment process or authentication. This is crucial for flows that involve off-site redirection (e.g., 3DS, some bank redirects, wallet payments).',
      },
      routing: {
        $ref: '#/$defs/straight_through_algorithm',
      },
      session_expiry: {
        type: 'integer',
        description:
          'Will be used to expire client secret after certain amount of time to be supplied in seconds\n(900) for 15 mins',
      },
      setup_future_usage: {
        $ref: '#/$defs/future_usage',
      },
      shipping: {
        $ref: '#/$defs/address',
      },
      shipping_cost: {
        type: 'integer',
        description:
          'The shipping cost for the payment. This is required for tax calculation in some regions.',
      },
      skip_external_tax_calculation: {
        type: 'boolean',
        description: 'Whether to calculate tax for this payment intent',
      },
      split_payments: {
        $ref: '#/$defs/split_payments_request',
      },
      statement_descriptor_name: {
        type: 'string',
        description:
          'For non-card charges, you can use this value as the complete description that appears on your customers’ statements. Must contain at least one letter, maximum 22 characters.',
      },
      statement_descriptor_suffix: {
        type: 'string',
        description:
          'Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.',
      },
      surcharge_details: {
        $ref: '#/$defs/request_surcharge_details',
      },
      threeds_method_comp_ind: {
        $ref: '#/$defs/three_ds_completion_indicator',
      },
    },
    $defs: {
      currency: {
        type: 'string',
        description:
          'The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment amount. This field is mandatory for creating a payment.',
        enum: [
          'AED',
          'AFN',
          'ALL',
          'AMD',
          'ANG',
          'AOA',
          'ARS',
          'AUD',
          'AWG',
          'AZN',
          'BAM',
          'BBD',
          'BDT',
          'BGN',
          'BHD',
          'BIF',
          'BMD',
          'BND',
          'BOB',
          'BRL',
          'BSD',
          'BTN',
          'BWP',
          'BYN',
          'BZD',
          'CAD',
          'CDF',
          'CHF',
          'CLF',
          'CLP',
          'CNY',
          'COP',
          'CRC',
          'CUC',
          'CUP',
          'CVE',
          'CZK',
          'DJF',
          'DKK',
          'DOP',
          'DZD',
          'EGP',
          'ERN',
          'ETB',
          'EUR',
          'FJD',
          'FKP',
          'GBP',
          'GEL',
          'GHS',
          'GIP',
          'GMD',
          'GNF',
          'GTQ',
          'GYD',
          'HKD',
          'HNL',
          'HRK',
          'HTG',
          'HUF',
          'IDR',
          'ILS',
          'INR',
          'IQD',
          'IRR',
          'ISK',
          'JMD',
          'JOD',
          'JPY',
          'KES',
          'KGS',
          'KHR',
          'KMF',
          'KPW',
          'KRW',
          'KWD',
          'KYD',
          'KZT',
          'LAK',
          'LBP',
          'LKR',
          'LRD',
          'LSL',
          'LYD',
          'MAD',
          'MDL',
          'MGA',
          'MKD',
          'MMK',
          'MNT',
          'MOP',
          'MRU',
          'MUR',
          'MVR',
          'MWK',
          'MXN',
          'MYR',
          'MZN',
          'NAD',
          'NGN',
          'NIO',
          'NOK',
          'NPR',
          'NZD',
          'OMR',
          'PAB',
          'PEN',
          'PGK',
          'PHP',
          'PKR',
          'PLN',
          'PYG',
          'QAR',
          'RON',
          'RSD',
          'RUB',
          'RWF',
          'SAR',
          'SBD',
          'SCR',
          'SDG',
          'SEK',
          'SGD',
          'SHP',
          'SLE',
          'SLL',
          'SOS',
          'SRD',
          'SSP',
          'STD',
          'STN',
          'SVC',
          'SYP',
          'SZL',
          'THB',
          'TJS',
          'TMT',
          'TND',
          'TOP',
          'TRY',
          'TTD',
          'TWD',
          'TZS',
          'UAH',
          'UGX',
          'USD',
          'UYU',
          'UZS',
          'VES',
          'VND',
          'VUV',
          'WST',
          'XAF',
          'XCD',
          'XOF',
          'XPF',
          'YER',
          'ZAR',
          'ZMW',
          'ZWL',
        ],
      },
      payment_method_type: {
        type: 'string',
        description: "Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for wallets.",
        enum: [
          'ach',
          'affirm',
          'afterpay_clearpay',
          'alfamart',
          'ali_pay',
          'ali_pay_hk',
          'alma',
          'amazon_pay',
          'apple_pay',
          'atome',
          'bacs',
          'bancontact_card',
          'becs',
          'benefit',
          'bizum',
          'blik',
          'boleto',
          'bca_bank_transfer',
          'bni_va',
          'bri_va',
          'card_redirect',
          'cimb_va',
          'classic',
          'credit',
          'crypto_currency',
          'cashapp',
          'dana',
          'danamon_va',
          'debit',
          'duit_now',
          'efecty',
          'eft',
          'eps',
          'fps',
          'evoucher',
          'giropay',
          'givex',
          'google_pay',
          'go_pay',
          'gcash',
          'ideal',
          'interac',
          'indomaret',
          'klarna',
          'kakao_pay',
          'local_bank_redirect',
          'mandiri_va',
          'knet',
          'mb_way',
          'mobile_pay',
          'momo',
          'momo_atm',
          'multibanco',
          'online_banking_thailand',
          'online_banking_czech_republic',
          'online_banking_finland',
          'online_banking_fpx',
          'online_banking_poland',
          'online_banking_slovakia',
          'oxxo',
          'pago_efectivo',
          'permata_bank_transfer',
          'open_banking_uk',
          'pay_bright',
          'paypal',
          'paze',
          'pix',
          'pay_safe_card',
          'przelewy24',
          'prompt_pay',
          'pse',
          'red_compra',
          'red_pagos',
          'samsung_pay',
          'sepa',
          'sepa_bank_transfer',
          'sofort',
          'swish',
          'touch_n_go',
          'trustly',
          'twint',
          'upi_collect',
          'upi_intent',
          'vipps',
          'viet_qr',
          'venmo',
          'walley',
          'we_chat_pay',
          'seven_eleven',
          'lawson',
          'mini_stop',
          'family_mart',
          'seicomart',
          'pay_easy',
          'local_bank_transfer',
          'mifinity',
          'open_banking_pis',
          'direct_carrier_billing',
          'instant_bank_transfer',
          'instant_bank_transfer_finland',
          'instant_bank_transfer_poland',
          'revolut_pay',
        ],
      },
      authentication_type: {
        type: 'string',
        description:
          'Specifies the type of cardholder authentication to be applied for a payment.\n\n- `ThreeDs`: Requests 3D Secure (3DS) authentication. If the card is enrolled, 3DS authentication will be activated, potentially shifting chargeback liability to the issuer.\n- `NoThreeDs`: Indicates that 3D Secure authentication should not be performed. The liability for chargebacks typically remains with the merchant. This is often the default if not specified.\n\nNote: The actual authentication behavior can also be influenced by merchant configuration and specific connector defaults. Some connectors might still enforce 3DS or bypass it regardless of this parameter.',
        enum: ['three_ds', 'no_three_ds'],
      },
      address: {
        type: 'object',
        properties: {
          address: {
            $ref: '#/$defs/address_details',
          },
          email: {
            type: 'string',
          },
          phone: {
            type: 'object',
            properties: {
              country_code: {
                type: 'string',
                description: 'The country code attached to the number',
              },
              number: {
                type: 'string',
                description: 'The contact number',
              },
            },
            required: [],
          },
        },
        required: [],
      },
      address_details: {
        type: 'object',
        description: 'Address details',
        properties: {
          city: {
            type: 'string',
            description: 'The city, district, suburb, town, or village of the address.',
          },
          country: {
            $ref: '#/$defs/country_alpha2',
          },
          first_name: {
            type: 'string',
            description: 'The first name for the address',
          },
          last_name: {
            type: 'string',
            description: 'The last name for the address',
          },
          line1: {
            type: 'string',
            description: 'The first line of the street address or P.O. Box.',
          },
          line2: {
            type: 'string',
            description:
              'The second line of the street address or P.O. Box (e.g., apartment, suite, unit, or building).',
          },
          line3: {
            type: 'string',
            description: 'The third line of the street address, if applicable.',
          },
          state: {
            type: 'string',
            description: 'The address state',
          },
          zip: {
            type: 'string',
            description: 'The zip/postal code for the address',
          },
        },
        required: [],
      },
      country_alpha2: {
        type: 'string',
        enum: [
          'AF',
          'AX',
          'AL',
          'DZ',
          'AS',
          'AD',
          'AO',
          'AI',
          'AQ',
          'AG',
          'AR',
          'AM',
          'AW',
          'AU',
          'AT',
          'AZ',
          'BS',
          'BH',
          'BD',
          'BB',
          'BY',
          'BE',
          'BZ',
          'BJ',
          'BM',
          'BT',
          'BO',
          'BQ',
          'BA',
          'BW',
          'BV',
          'BR',
          'IO',
          'BN',
          'BG',
          'BF',
          'BI',
          'KH',
          'CM',
          'CA',
          'CV',
          'KY',
          'CF',
          'TD',
          'CL',
          'CN',
          'CX',
          'CC',
          'CO',
          'KM',
          'CG',
          'CD',
          'CK',
          'CR',
          'CI',
          'HR',
          'CU',
          'CW',
          'CY',
          'CZ',
          'DK',
          'DJ',
          'DM',
          'DO',
          'EC',
          'EG',
          'SV',
          'GQ',
          'ER',
          'EE',
          'ET',
          'FK',
          'FO',
          'FJ',
          'FI',
          'FR',
          'GF',
          'PF',
          'TF',
          'GA',
          'GM',
          'GE',
          'DE',
          'GH',
          'GI',
          'GR',
          'GL',
          'GD',
          'GP',
          'GU',
          'GT',
          'GG',
          'GN',
          'GW',
          'GY',
          'HT',
          'HM',
          'VA',
          'HN',
          'HK',
          'HU',
          'IS',
          'IN',
          'ID',
          'IR',
          'IQ',
          'IE',
          'IM',
          'IL',
          'IT',
          'JM',
          'JP',
          'JE',
          'JO',
          'KZ',
          'KE',
          'KI',
          'KP',
          'KR',
          'KW',
          'KG',
          'LA',
          'LV',
          'LB',
          'LS',
          'LR',
          'LY',
          'LI',
          'LT',
          'LU',
          'MO',
          'MK',
          'MG',
          'MW',
          'MY',
          'MV',
          'ML',
          'MT',
          'MH',
          'MQ',
          'MR',
          'MU',
          'YT',
          'MX',
          'FM',
          'MD',
          'MC',
          'MN',
          'ME',
          'MS',
          'MA',
          'MZ',
          'MM',
          'NA',
          'NR',
          'NP',
          'NL',
          'NC',
          'NZ',
          'NI',
          'NE',
          'NG',
          'NU',
          'NF',
          'MP',
          'NO',
          'OM',
          'PK',
          'PW',
          'PS',
          'PA',
          'PG',
          'PY',
          'PE',
          'PH',
          'PN',
          'PL',
          'PT',
          'PR',
          'QA',
          'RE',
          'RO',
          'RU',
          'RW',
          'BL',
          'SH',
          'KN',
          'LC',
          'MF',
          'PM',
          'VC',
          'WS',
          'SM',
          'ST',
          'SA',
          'SN',
          'RS',
          'SC',
          'SL',
          'SG',
          'SX',
          'SK',
          'SI',
          'SB',
          'SO',
          'ZA',
          'GS',
          'SS',
          'ES',
          'LK',
          'SD',
          'SR',
          'SJ',
          'SZ',
          'SE',
          'CH',
          'SY',
          'TW',
          'TJ',
          'TZ',
          'TH',
          'TL',
          'TG',
          'TK',
          'TO',
          'TT',
          'TN',
          'TR',
          'TM',
          'TC',
          'TV',
          'UG',
          'UA',
          'AE',
          'GB',
          'UM',
          'UY',
          'UZ',
          'VU',
          'VE',
          'VN',
          'VG',
          'VI',
          'WF',
          'EH',
          'YE',
          'ZM',
          'ZW',
          'US',
        ],
      },
      browser_information: {
        type: 'object',
        description: 'Browser information to be used for 3DS 2.0',
        properties: {
          accept_header: {
            type: 'string',
            description: 'List of headers that are accepted',
          },
          color_depth: {
            type: 'integer',
            description: 'Color depth supported by the browser',
          },
          device_model: {
            type: 'string',
            description: 'The device model of the client',
          },
          ip_address: {
            type: 'string',
            description: 'Ip address of the client',
          },
          java_enabled: {
            type: 'boolean',
            description: 'Whether java is enabled in the browser',
          },
          java_script_enabled: {
            type: 'boolean',
            description: 'Whether javascript is enabled in the browser',
          },
          language: {
            type: 'string',
            description: 'Language supported',
          },
          os_type: {
            type: 'string',
            description: 'The os type of the client device',
          },
          os_version: {
            type: 'string',
            description: 'The os version of the client device',
          },
          screen_height: {
            type: 'integer',
            description: 'The screen height in pixels',
          },
          screen_width: {
            type: 'integer',
            description: 'The screen width in pixels',
          },
          time_zone: {
            type: 'integer',
            description: 'Time zone of the client',
          },
          user_agent: {
            type: 'string',
            description: 'User-agent of the browser',
          },
        },
        required: [],
      },
      capture_method: {
        type: 'string',
        description:
          'Specifies how the payment is captured.\n- `automatic`: Funds are captured immediately after successful authorization. This is the default behavior if the field is omitted.\n- `manual`: Funds are authorized but not captured. A separate request to the `/payments/{payment_id}/capture` endpoint is required to capture the funds.',
        enum: ['automatic', 'manual', 'manual_multiple', 'scheduled', 'sequential_automatic'],
      },
      connector: {
        type: 'string',
        enum: [
          'adyenplatform',
          'stripe_billing_test',
          'phonypay',
          'fauxpay',
          'pretendpay',
          'stripe_test',
          'adyen_test',
          'checkout_test',
          'paypal_test',
          'aci',
          'adyen',
          'airwallex',
          'archipel',
          'authorizedotnet',
          'bambora',
          'bamboraapac',
          'bankofamerica',
          'barclaycard',
          'billwerk',
          'bitpay',
          'bluesnap',
          'boku',
          'braintree',
          'cashtocode',
          'chargebee',
          'checkout',
          'coinbase',
          'coingate',
          'cryptopay',
          'ctp_mastercard',
          'ctp_visa',
          'cybersource',
          'datatrans',
          'deutschebank',
          'digitalvirgo',
          'dlocal',
          'ebanx',
          'elavon',
          'facilitapay',
          'fiserv',
          'fiservemea',
          'fiuu',
          'forte',
          'getnet',
          'globalpay',
          'globepay',
          'gocardless',
          'gpayments',
          'hipay',
          'helcim',
          'hyperswitch_vault',
          'inespay',
          'iatapay',
          'itaubank',
          'jpmorgan',
          'juspaythreedsserver',
          'klarna',
          'mifinity',
          'mollie',
          'moneris',
          'multisafepay',
          'netcetera',
          'nexinets',
          'nexixpay',
          'nmi',
          'nomupay',
          'noon',
          'novalnet',
          'nuvei',
          'opennode',
          'paybox',
          'payme',
          'payone',
          'paypal',
          'paystack',
          'payu',
          'placetopay',
          'powertranz',
          'prophetpay',
          'rapyd',
          'razorpay',
          'recurly',
          'redsys',
          'shift4',
          'square',
          'stax',
          'stripe',
          'stripebilling',
          'taxjar',
          'threedsecureio',
          'tokenio',
          'trustpay',
          'tsys',
          'vgs',
          'volt',
          'wellsfargo',
          'wise',
          'worldline',
          'worldpay',
          'worldpayvantiv',
          'worldpayxml',
          'signifyd',
          'plaid',
          'riskified',
          'xendit',
          'zen',
          'zsl',
        ],
      },
      connector_metadata: {
        type: 'object',
        description:
          'Some connectors like Apple Pay, Airwallex and Noon might require some additional information, find specific details in the child attributes below.',
        properties: {
          adyen: {
            type: 'object',
            properties: {
              testing: {
                type: 'object',
                properties: {
                  holder_name: {
                    type: 'string',
                    description:
                      'Holder name to be sent to Adyen for a card payment(CIT) or a generic payment(MIT). This value overrides the values for card.card_holder_name and applies during both CIT and MIT payment transactions.',
                  },
                },
                required: ['holder_name'],
              },
            },
            required: ['testing'],
          },
          airwallex: {
            type: 'object',
            properties: {
              payload: {
                type: 'string',
                description: 'payload required by airwallex',
              },
            },
            required: [],
          },
          apple_pay: {
            type: 'object',
            properties: {
              session_token_data: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      payment_processing_certificate: {
                        type: 'string',
                      },
                      payment_processing_certificate_key: {
                        type: 'string',
                      },
                      payment_processing_details_at: {
                        type: 'string',
                        enum: ['Hyperswitch'],
                      },
                      certificate: {
                        type: 'string',
                      },
                      certificate_keys: {
                        type: 'string',
                      },
                      display_name: {
                        type: 'string',
                      },
                      initiative: {
                        type: 'string',
                        enum: ['web', 'ios'],
                      },
                      initiative_context: {
                        type: 'string',
                      },
                      merchant_business_country: {
                        $ref: '#/$defs/country_alpha2',
                      },
                      merchant_identifier: {
                        type: 'string',
                      },
                    },
                    required: [
                      'payment_processing_certificate',
                      'payment_processing_certificate_key',
                      'payment_processing_details_at',
                    ],
                  },
                  {
                    type: 'object',
                    properties: {
                      payment_processing_details_at: {
                        type: 'string',
                        enum: ['Connector'],
                      },
                      certificate: {
                        type: 'string',
                      },
                      certificate_keys: {
                        type: 'string',
                      },
                      display_name: {
                        type: 'string',
                      },
                      initiative: {
                        type: 'string',
                        enum: ['web', 'ios'],
                      },
                      initiative_context: {
                        type: 'string',
                      },
                      merchant_business_country: {
                        $ref: '#/$defs/country_alpha2',
                      },
                      merchant_identifier: {
                        type: 'string',
                      },
                    },
                    required: ['payment_processing_details_at'],
                  },
                ],
              },
            },
            required: [],
          },
          braintree: {
            type: 'object',
            properties: {
              merchant_account_id: {
                type: 'string',
                description:
                  'Information about the merchant_account_id that merchant wants to specify at connector level.',
              },
              merchant_config_currency: {
                type: 'string',
                description:
                  'Information about the merchant_config_currency that merchant wants to specify at connector level.',
              },
            },
            required: ['merchant_account_id', 'merchant_config_currency'],
          },
          noon: {
            type: 'object',
            properties: {
              order_category: {
                type: 'string',
                description:
                  'Information about the order category that merchant wants to specify at connector level. (e.g. In Noon Payments it can take values like "pay", "food", or any other custom string set by the merchant in Noon\'s Dashboard)',
              },
            },
            required: [],
          },
        },
        required: [],
      },
      ctp_service_details: {
        type: 'object',
        properties: {
          correlation_id: {
            type: 'string',
            description: 'network transaction correlation id',
          },
          encrypted_payload: {
            type: 'string',
            description: 'Encrypted payload',
          },
          merchant_transaction_id: {
            type: 'string',
            description: 'merchant transaction id',
          },
          provider: {
            $ref: '#/$defs/ctp_service_provider',
          },
          x_src_flow_id: {
            type: 'string',
            description: 'session transaction flow id',
          },
        },
        required: [],
      },
      ctp_service_provider: {
        type: 'string',
        enum: ['visa', 'mastercard'],
      },
      customer_details: {
        type: 'object',
        description:
          'Passing this object creates a new customer or attaches an existing customer to the payment',
        properties: {
          id: {
            type: 'string',
            description: 'The identifier for the customer.',
          },
          email: {
            type: 'string',
            description: "The customer's email address",
          },
          name: {
            type: 'string',
            description: "The customer's name",
          },
          phone: {
            type: 'string',
            description: "The customer's phone number",
          },
          phone_country_code: {
            type: 'string',
            description: "The country code for the customer's phone number",
          },
        },
        required: ['id'],
      },
      customer_acceptance: {
        type: 'object',
        description:
          'This "CustomerAcceptance" object is passed during Payments-Confirm request, it enlists the type, time, and mode of acceptance properties related to an acceptance done by the customer. The customer_acceptance sub object is usually passed by the SDK or client.',
        properties: {
          acceptance_type: {
            type: 'string',
            description: 'This is used to indicate if the mandate was accepted online or offline',
            enum: ['online', 'offline'],
          },
          accepted_at: {
            type: 'string',
            description: 'Specifying when the customer acceptance was provided',
            format: 'date-time',
          },
          online: {
            type: 'object',
            description: 'Details of online mandate',
            properties: {
              ip_address: {
                type: 'string',
                description: 'Ip address of the customer machine from which the mandate was created',
              },
              user_agent: {
                type: 'string',
                description: "The user-agent of the customer's browser",
              },
            },
            required: ['ip_address', 'user_agent'],
          },
        },
        required: ['acceptance_type'],
      },
      mandate_data: {
        type: 'object',
        description:
          'Passing this object during payments creates a mandate. The mandate_type sub object is passed by the server.',
        properties: {
          customer_acceptance: {
            $ref: '#/$defs/customer_acceptance',
          },
          mandate_type: {
            $ref: '#/$defs/mandate_type',
          },
          update_mandate_id: {
            type: 'string',
            description: "A way to update the mandate's payment method details",
          },
        },
        required: [],
      },
      mandate_type: {
        anyOf: [
          {
            type: 'object',
            properties: {
              single_use: {
                $ref: '#/$defs/mandate_amount_data',
              },
            },
            required: ['single_use'],
          },
          {
            type: 'object',
            properties: {
              multi_use: {
                $ref: '#/$defs/mandate_amount_data',
              },
            },
            required: ['multi_use'],
          },
        ],
      },
      mandate_amount_data: {
        type: 'object',
        properties: {
          amount: {
            type: 'integer',
            description: 'The maximum amount to be debited for the mandate transaction',
          },
          currency: {
            $ref: '#/$defs/currency',
          },
          end_date: {
            type: 'string',
            description: 'Specifying end date of the mandate',
            format: 'date-time',
          },
          metadata: {
            type: 'object',
            description: 'Additional details required by mandate',
          },
          start_date: {
            type: 'string',
            description: 'Specifying start date of the mandate',
            format: 'date-time',
          },
        },
        required: ['amount', 'currency'],
      },
      merchant_connector_details_wrap: {
        type: 'object',
        description: 'Merchant connector details used to make payments.',
        properties: {
          creds_identifier: {
            type: 'string',
            description:
              'Creds Identifier is to uniquely identify the credentials. Do not send any sensitive info, like encoded_data in this field. And do not send the string "null".',
          },
          encoded_data: {
            $ref: '#/$defs/merchant_connector_details',
          },
        },
        required: ['creds_identifier'],
      },
      merchant_connector_details: {
        type: 'object',
        properties: {
          connector_account_details: {
            type: 'object',
            description:
              'Account details of the Connector. You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long. Useful for storing additional, structured information on an object.',
          },
          metadata: {
            type: 'object',
            description: 'Metadata is useful for storing additional, unstructured information on an object.',
          },
        },
        required: [],
      },
      order_details_with_amount: {
        type: 'object',
        properties: {
          amount: {
            type: 'integer',
            description: 'the amount per quantity of product',
          },
          product_name: {
            type: 'string',
            description: 'Name of the product that is being purchased',
          },
          quantity: {
            type: 'integer',
            description: 'The quantity of the product to be purchased',
          },
          brand: {
            type: 'string',
            description: 'Brand of the product that is being purchased',
          },
          category: {
            type: 'string',
            description: 'Category of the product that is being purchased',
          },
          product_id: {
            type: 'string',
            description: 'ID of the product that is being purchased',
          },
          product_img_link: {
            type: 'string',
            description: 'The image URL of the product',
          },
          product_tax_code: {
            type: 'string',
            description: 'The tax code for the product',
          },
          product_type: {
            type: 'string',
            enum: ['physical', 'digital', 'travel', 'ride', 'event', 'accommodation'],
          },
          requires_shipping: {
            type: 'boolean',
          },
          sub_category: {
            type: 'string',
            description: 'Sub category of the product that is being purchased',
          },
          tax_rate: {
            type: 'number',
            description: 'tax rate applicable to the product',
          },
          total_tax_amount: {
            type: 'integer',
            description: 'total tax amount applicable to the product',
          },
        },
        required: ['amount', 'product_name', 'quantity'],
      },
      payment_experience: {
        type: 'string',
        description: 'To indicate the type of payment experience that the customer would go through',
        enum: [
          'redirect_to_url',
          'invoke_sdk_client',
          'display_qr_code',
          'one_click',
          'link_wallet',
          'invoke_payment_app',
          'display_wait_screen',
          'collect_otp',
        ],
      },
      payment_create_payment_link_config: {
        allOf: [
          {
            $ref: '#/$defs/payment_link_config_request',
          },
        ],
        description: 'Configure a custom payment link for the particular payment',
      },
      payment_link_config_request: {
        type: 'object',
        properties: {
          background_colour: {
            type: 'string',
            description: 'Custom background colour for the payment link',
          },
          background_image: {
            type: 'object',
            properties: {
              url: {
                type: 'string',
                description: 'URL of the image',
              },
              position: {
                type: 'string',
                enum: [
                  'left',
                  'top left',
                  'top',
                  'top right',
                  'right',
                  'bottom right',
                  'bottom',
                  'bottom left',
                  'center',
                ],
              },
              size: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      Variants: {
                        type: 'string',
                        enum: ['cover', 'contain'],
                      },
                    },
                    required: ['Variants'],
                  },
                  {
                    type: 'object',
                    properties: {
                      Percentage: {
                        type: 'integer',
                      },
                    },
                    required: ['Percentage'],
                  },
                  {
                    type: 'object',
                    properties: {
                      Pixels: {
                        type: 'integer',
                      },
                    },
                    required: ['Pixels'],
                  },
                ],
              },
            },
            required: ['url'],
          },
          color_icon_card_cvc_error: {
            type: 'string',
            description: 'Hex color for the CVC icon during error state',
          },
          custom_message_for_card_terms: {
            type: 'string',
            description: 'Text for customizing message for card terms',
          },
          details_layout: {
            type: 'string',
            enum: ['layout1', 'layout2'],
          },
          display_sdk_only: {
            type: 'boolean',
            description: 'Display only the sdk for payment link',
          },
          enable_button_only_on_form_ready: {
            type: 'boolean',
            description: 'Flag to enable the button only when the payment form is ready for submission',
          },
          enabled_saved_payment_method: {
            type: 'boolean',
            description: 'Enable saved payment method option for payment link',
          },
          hide_card_nickname_field: {
            type: 'boolean',
            description: 'Hide card nickname field option for payment link',
          },
          is_setup_mandate_flow: {
            type: 'boolean',
            description: 'Boolean to control payment button text for setup mandate calls',
          },
          logo: {
            type: 'string',
            description: 'merchant display logo',
          },
          payment_button_colour: {
            type: 'string',
            description: "Custom background colour for payment link's handle confirm button",
          },
          payment_button_text: {
            type: 'string',
            description: "Text for payment link's handle confirm button",
          },
          payment_button_text_colour: {
            type: 'string',
            description: "Custom text colour for payment link's handle confirm button",
          },
          payment_form_header_text: {
            type: 'string',
            description: "Optional header for the SDK's payment form",
          },
          payment_form_label_type: {
            type: 'string',
            enum: ['above', 'floating', 'never'],
          },
          payment_link_ui_rules: {
            type: 'object',
            description: 'Payment link configuration rules',
          },
          sdk_layout: {
            type: 'string',
            description: 'Custom layout for sdk',
          },
          sdk_ui_rules: {
            type: 'object',
            description: 'SDK configuration rules',
          },
          seller_name: {
            type: 'string',
            description: 'Custom merchant name for payment link',
          },
          show_card_form_by_default: {
            type: 'boolean',
            description: 'Show card form by default for payment link',
          },
          show_card_terms: {
            type: 'string',
            enum: ['always', 'auto', 'never'],
          },
          skip_status_screen: {
            type: 'boolean',
            description: 'Skip the status screen after payment completion',
          },
          theme: {
            type: 'string',
            description: 'custom theme for the payment link',
          },
          transaction_details: {
            type: 'array',
            description: 'Dynamic details related to merchant to be rendered in payment link',
            items: {
              type: 'object',
              properties: {
                key: {
                  type: 'string',
                  description: 'Key for the transaction details',
                },
                value: {
                  type: 'string',
                  description: 'Value for the transaction details',
                },
                ui_configuration: {
                  type: 'object',
                  properties: {
                    is_key_bold: {
                      type: 'boolean',
                      description: 'Whether the key should be bold',
                    },
                    is_value_bold: {
                      type: 'boolean',
                      description: 'Whether the value should be bold',
                    },
                    position: {
                      type: 'integer',
                      description: 'Position of the key-value pair in the UI',
                    },
                  },
                  required: [],
                },
              },
              required: ['key', 'value'],
            },
          },
        },
        required: [],
      },
      payment_method_data_request: {
        anyOf: [
          {
            type: 'object',
            title: 'Card',
            properties: {
              card: {
                type: 'object',
                properties: {
                  card_cvc: {
                    type: 'string',
                    description: 'The CVC number for the card',
                  },
                  card_exp_month: {
                    type: 'string',
                    description: "The card's expiry month",
                  },
                  card_exp_year: {
                    type: 'string',
                    description: "The card's expiry year",
                  },
                  card_holder_name: {
                    type: 'string',
                    description: "The card holder's name",
                  },
                  card_number: {
                    type: 'string',
                    description: 'The card number',
                  },
                  bank_code: {
                    type: 'string',
                  },
                  card_issuer: {
                    type: 'string',
                    description: 'The name of the issuer of card',
                  },
                  card_issuing_country: {
                    type: 'string',
                  },
                  card_network: {
                    $ref: '#/$defs/card_network',
                  },
                  card_type: {
                    type: 'string',
                  },
                  nick_name: {
                    type: 'string',
                    description: "The card holder's nick name",
                  },
                },
                required: ['card_cvc', 'card_exp_month', 'card_exp_year', 'card_holder_name', 'card_number'],
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['card'],
          },
          {
            type: 'object',
            title: 'CardRedirect',
            properties: {
              card_redirect: {
                $ref: '#/$defs/card_redirect_data',
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['card_redirect'],
          },
          {
            type: 'object',
            title: 'Wallet',
            properties: {
              wallet: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      ali_pay_qr: {
                        type: 'object',
                      },
                    },
                    required: ['ali_pay_qr'],
                  },
                  {
                    type: 'object',
                    properties: {
                      ali_pay_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['ali_pay_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      ali_pay_hk_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['ali_pay_hk_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      amazon_pay_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['amazon_pay_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      momo_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['momo_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      kakao_pay_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['kakao_pay_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      go_pay_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['go_pay_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      gcash_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['gcash_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      apple_pay: {
                        type: 'object',
                        properties: {
                          payment_data: {
                            type: 'string',
                            description: 'The payment data of Apple pay',
                          },
                          payment_method: {
                            type: 'object',
                            properties: {
                              display_name: {
                                type: 'string',
                                description: 'The name to be displayed on Apple Pay button',
                              },
                              network: {
                                type: 'string',
                                description: 'The network of the Apple pay payment method',
                              },
                              type: {
                                type: 'string',
                                description: 'The type of the payment method',
                              },
                            },
                            required: ['display_name', 'network', 'type'],
                          },
                          transaction_identifier: {
                            type: 'string',
                            description: 'The unique identifier for the transaction',
                          },
                        },
                        required: ['payment_data', 'payment_method', 'transaction_identifier'],
                      },
                    },
                    required: ['apple_pay'],
                  },
                  {
                    type: 'object',
                    properties: {
                      apple_pay_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['apple_pay_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      apple_pay_third_party_sdk: {
                        type: 'object',
                      },
                    },
                    required: ['apple_pay_third_party_sdk'],
                  },
                  {
                    type: 'object',
                    properties: {
                      dana_redirect: {
                        type: 'object',
                        description: 'Wallet data for DANA redirect flow',
                      },
                    },
                    required: ['dana_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      google_pay: {
                        type: 'object',
                        properties: {
                          description: {
                            type: 'string',
                            description:
                              'User-facing message to describe the payment method that funds this transaction.',
                          },
                          info: {
                            type: 'object',
                            properties: {
                              card_details: {
                                type: 'string',
                                description: 'The details of the card',
                              },
                              card_network: {
                                type: 'string',
                                description: 'The name of the card network',
                              },
                              assurance_details: {
                                type: 'object',
                                properties: {
                                  account_verified: {
                                    type: 'boolean',
                                    description:
                                      'indicates that identification and verifications (ID&V) was performed',
                                  },
                                  card_holder_authenticated: {
                                    type: 'boolean',
                                    description:
                                      'indicates that Cardholder possession validation has been performed',
                                  },
                                },
                                required: ['account_verified', 'card_holder_authenticated'],
                              },
                            },
                            required: ['card_details', 'card_network'],
                          },
                          tokenization_data: {
                            type: 'object',
                            properties: {
                              token: {
                                type: 'string',
                                description: 'Token generated for the wallet',
                              },
                              type: {
                                type: 'string',
                                description: 'The type of the token',
                              },
                            },
                            required: ['token', 'type'],
                          },
                          type: {
                            type: 'string',
                            description: 'The type of payment method',
                          },
                        },
                        required: ['description', 'info', 'tokenization_data', 'type'],
                      },
                    },
                    required: ['google_pay'],
                  },
                  {
                    type: 'object',
                    properties: {
                      google_pay_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['google_pay_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      google_pay_third_party_sdk: {
                        type: 'object',
                      },
                    },
                    required: ['google_pay_third_party_sdk'],
                  },
                  {
                    type: 'object',
                    properties: {
                      mb_way_redirect: {
                        type: 'object',
                        properties: {
                          telephone_number: {
                            type: 'string',
                            description:
                              'Telephone number of the shopper. Should be Portuguese phone number.',
                          },
                        },
                        required: ['telephone_number'],
                      },
                    },
                    required: ['mb_way_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      mobile_pay_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['mobile_pay_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      paypal_redirect: {
                        type: 'object',
                        properties: {
                          email: {
                            type: 'string',
                            description: "paypal's email address",
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['paypal_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      paypal_sdk: {
                        type: 'object',
                        properties: {
                          token: {
                            type: 'string',
                            description: 'Token generated for the Apple pay',
                          },
                        },
                        required: ['token'],
                      },
                    },
                    required: ['paypal_sdk'],
                  },
                  {
                    type: 'object',
                    properties: {
                      paze: {
                        type: 'object',
                        properties: {
                          complete_response: {
                            type: 'string',
                          },
                        },
                        required: ['complete_response'],
                      },
                    },
                    required: ['paze'],
                  },
                  {
                    type: 'object',
                    properties: {
                      samsung_pay: {
                        type: 'object',
                        properties: {
                          payment_credential: {
                            anyOf: [
                              {
                                type: 'object',
                                properties: {
                                  '3_d_s': {
                                    $ref: '#/$defs/samsung_pay_token_data',
                                  },
                                  card_brand: {
                                    $ref: '#/$defs/samsung_pay_card_brand',
                                  },
                                  card_last4digits: {
                                    type: 'string',
                                    description: 'Last 4 digits of the card number',
                                  },
                                  method: {
                                    type: 'string',
                                    description: 'Specifies authentication method used',
                                  },
                                  recurring_payment: {
                                    type: 'boolean',
                                    description: 'Value if credential is enabled for recurring payment',
                                  },
                                },
                                required: ['3_d_s', 'card_brand', 'card_last4digits'],
                              },
                              {
                                type: 'object',
                                properties: {
                                  '3_d_s': {
                                    $ref: '#/$defs/samsung_pay_token_data',
                                  },
                                  payment_card_brand: {
                                    $ref: '#/$defs/samsung_pay_card_brand',
                                  },
                                  payment_currency_type: {
                                    type: 'string',
                                    description: 'Currency type of the payment',
                                  },
                                  payment_last4_fpan: {
                                    type: 'string',
                                    description: 'Last 4 digits of the card number',
                                  },
                                  merchant_ref: {
                                    type: 'string',
                                    description:
                                      'Merchant reference id that was passed in the session call request',
                                  },
                                  method: {
                                    type: 'string',
                                    description: 'Specifies authentication method used',
                                  },
                                  payment_last4_dpan: {
                                    type: 'string',
                                    description: 'Last 4 digits of the device specific card number',
                                  },
                                  recurring_payment: {
                                    type: 'boolean',
                                    description: 'Value if credential is enabled for recurring payment',
                                  },
                                },
                                required: [
                                  '3_d_s',
                                  'payment_card_brand',
                                  'payment_currency_type',
                                  'payment_last4_fpan',
                                ],
                              },
                            ],
                          },
                        },
                        required: ['payment_credential'],
                      },
                    },
                    required: ['samsung_pay'],
                  },
                  {
                    type: 'object',
                    properties: {
                      twint_redirect: {
                        type: 'object',
                        description: 'Wallet data for Twint Redirection',
                      },
                    },
                    required: ['twint_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      vipps_redirect: {
                        type: 'object',
                        description: 'Wallet data for Vipps Redirection',
                      },
                    },
                    required: ['vipps_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      touch_n_go_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['touch_n_go_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      we_chat_pay_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['we_chat_pay_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      we_chat_pay_qr: {
                        type: 'object',
                      },
                    },
                    required: ['we_chat_pay_qr'],
                  },
                  {
                    type: 'object',
                    properties: {
                      cashapp_qr: {
                        type: 'object',
                      },
                    },
                    required: ['cashapp_qr'],
                  },
                  {
                    type: 'object',
                    properties: {
                      swish_qr: {
                        type: 'object',
                      },
                    },
                    required: ['swish_qr'],
                  },
                  {
                    type: 'object',
                    properties: {
                      mifinity: {
                        type: 'object',
                        properties: {
                          date_of_birth: {
                            type: 'string',
                            format: 'date',
                          },
                          language_preference: {
                            type: 'string',
                          },
                        },
                        required: ['date_of_birth'],
                      },
                    },
                    required: ['mifinity'],
                  },
                  {
                    type: 'object',
                    properties: {
                      revolut_pay: {
                        type: 'object',
                      },
                    },
                    required: ['revolut_pay'],
                  },
                ],
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['wallet'],
          },
          {
            type: 'object',
            title: 'PayLater',
            properties: {
              pay_later: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      klarna_redirect: {
                        type: 'object',
                        description: 'For KlarnaRedirect as PayLater Option',
                        properties: {
                          billing_country: {
                            $ref: '#/$defs/country_alpha2',
                          },
                          billing_email: {
                            type: 'string',
                            description: 'The billing email',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['klarna_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      klarna_sdk: {
                        type: 'object',
                        description: 'For Klarna Sdk as PayLater Option',
                        properties: {
                          token: {
                            type: 'string',
                            description: 'The token for the sdk workflow',
                          },
                        },
                        required: ['token'],
                      },
                    },
                    required: ['klarna_sdk'],
                  },
                  {
                    type: 'object',
                    properties: {
                      affirm_redirect: {
                        type: 'object',
                        description: 'For Affirm redirect as PayLater Option',
                      },
                    },
                    required: ['affirm_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      afterpay_clearpay_redirect: {
                        type: 'object',
                        description: 'For AfterpayClearpay redirect as PayLater Option',
                        properties: {
                          billing_email: {
                            type: 'string',
                            description: 'The billing email',
                          },
                          billing_name: {
                            type: 'string',
                            description: 'The billing name',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['afterpay_clearpay_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      pay_bright_redirect: {
                        type: 'object',
                        description: 'For PayBright Redirect as PayLater Option',
                      },
                    },
                    required: ['pay_bright_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      walley_redirect: {
                        type: 'object',
                        description: 'For WalleyRedirect as PayLater Option',
                      },
                    },
                    required: ['walley_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      alma_redirect: {
                        type: 'object',
                        description: 'For Alma Redirection as PayLater Option',
                      },
                    },
                    required: ['alma_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      atome_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['atome_redirect'],
                  },
                ],
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['pay_later'],
          },
          {
            type: 'object',
            title: 'BankRedirect',
            properties: {
              bank_redirect: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      bancontact_card: {
                        type: 'object',
                        properties: {
                          card_exp_month: {
                            type: 'string',
                            description: "The card's expiry month",
                          },
                          card_exp_year: {
                            type: 'string',
                            description: "The card's expiry year",
                          },
                          card_holder_name: {
                            type: 'string',
                            description: "The card holder's name",
                          },
                          card_number: {
                            type: 'string',
                            description: 'The card number',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_redirect_billing',
                          },
                        },
                        required: ['card_exp_month', 'card_exp_year', 'card_holder_name', 'card_number'],
                      },
                    },
                    required: ['bancontact_card'],
                  },
                  {
                    type: 'object',
                    properties: {
                      bizum: {
                        type: 'object',
                      },
                    },
                    required: ['bizum'],
                  },
                  {
                    type: 'object',
                    properties: {
                      blik: {
                        type: 'object',
                        properties: {
                          blik_code: {
                            type: 'string',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['blik'],
                  },
                  {
                    type: 'object',
                    properties: {
                      eps: {
                        type: 'object',
                        properties: {
                          bank_name: {
                            $ref: '#/$defs/bank_names',
                          },
                          country: {
                            $ref: '#/$defs/country_alpha2',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_redirect_billing',
                          },
                        },
                        required: ['bank_name', 'country'],
                      },
                    },
                    required: ['eps'],
                  },
                  {
                    type: 'object',
                    properties: {
                      giropay: {
                        type: 'object',
                        properties: {
                          country: {
                            $ref: '#/$defs/country_alpha2',
                          },
                          bank_account_bic: {
                            type: 'string',
                            description: 'Bank account bic code',
                          },
                          bank_account_iban: {
                            type: 'string',
                            description: 'Bank account iban',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_redirect_billing',
                          },
                        },
                        required: ['country'],
                      },
                    },
                    required: ['giropay'],
                  },
                  {
                    type: 'object',
                    properties: {
                      ideal: {
                        type: 'object',
                        properties: {
                          bank_name: {
                            $ref: '#/$defs/bank_names',
                          },
                          country: {
                            $ref: '#/$defs/country_alpha2',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_redirect_billing',
                          },
                        },
                        required: ['bank_name', 'country'],
                      },
                    },
                    required: ['ideal'],
                  },
                  {
                    type: 'object',
                    properties: {
                      interac: {
                        type: 'object',
                        properties: {
                          country: {
                            $ref: '#/$defs/country_alpha2',
                          },
                          email: {
                            type: 'string',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['interac'],
                  },
                  {
                    type: 'object',
                    properties: {
                      online_banking_czech_republic: {
                        type: 'object',
                        properties: {
                          issuer: {
                            $ref: '#/$defs/bank_names',
                          },
                        },
                        required: ['issuer'],
                      },
                    },
                    required: ['online_banking_czech_republic'],
                  },
                  {
                    type: 'object',
                    properties: {
                      online_banking_finland: {
                        type: 'object',
                        properties: {
                          email: {
                            type: 'string',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['online_banking_finland'],
                  },
                  {
                    type: 'object',
                    properties: {
                      online_banking_poland: {
                        type: 'object',
                        properties: {
                          issuer: {
                            $ref: '#/$defs/bank_names',
                          },
                        },
                        required: ['issuer'],
                      },
                    },
                    required: ['online_banking_poland'],
                  },
                  {
                    type: 'object',
                    properties: {
                      online_banking_slovakia: {
                        type: 'object',
                        properties: {
                          issuer: {
                            $ref: '#/$defs/bank_names',
                          },
                        },
                        required: ['issuer'],
                      },
                    },
                    required: ['online_banking_slovakia'],
                  },
                  {
                    type: 'object',
                    properties: {
                      open_banking_uk: {
                        type: 'object',
                        properties: {
                          country: {
                            $ref: '#/$defs/country_alpha2',
                          },
                          issuer: {
                            $ref: '#/$defs/bank_names',
                          },
                        },
                        required: ['country', 'issuer'],
                      },
                    },
                    required: ['open_banking_uk'],
                  },
                  {
                    type: 'object',
                    properties: {
                      przelewy24: {
                        type: 'object',
                        properties: {
                          bank_name: {
                            $ref: '#/$defs/bank_names',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_redirect_billing',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['przelewy24'],
                  },
                  {
                    type: 'object',
                    properties: {
                      sofort: {
                        type: 'object',
                        properties: {
                          country: {
                            $ref: '#/$defs/country_alpha2',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_redirect_billing',
                          },
                          preferred_language: {
                            type: 'string',
                            description: 'The preferred language',
                          },
                        },
                        required: ['country'],
                      },
                    },
                    required: ['sofort'],
                  },
                  {
                    type: 'object',
                    properties: {
                      trustly: {
                        type: 'object',
                        properties: {
                          country: {
                            $ref: '#/$defs/country_alpha2',
                          },
                        },
                        required: ['country'],
                      },
                    },
                    required: ['trustly'],
                  },
                  {
                    type: 'object',
                    properties: {
                      online_banking_fpx: {
                        type: 'object',
                        properties: {
                          issuer: {
                            $ref: '#/$defs/bank_names',
                          },
                        },
                        required: ['issuer'],
                      },
                    },
                    required: ['online_banking_fpx'],
                  },
                  {
                    type: 'object',
                    properties: {
                      online_banking_thailand: {
                        type: 'object',
                        properties: {
                          issuer: {
                            $ref: '#/$defs/bank_names',
                          },
                        },
                        required: ['issuer'],
                      },
                    },
                    required: ['online_banking_thailand'],
                  },
                  {
                    type: 'object',
                    properties: {
                      local_bank_redirect: {
                        type: 'object',
                      },
                    },
                    required: ['local_bank_redirect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      eft: {
                        type: 'object',
                        properties: {
                          provider: {
                            type: 'string',
                            description: 'The preferred eft provider',
                          },
                        },
                        required: ['provider'],
                      },
                    },
                    required: ['eft'],
                  },
                ],
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['bank_redirect'],
          },
          {
            type: 'object',
            title: 'BankDebit',
            properties: {
              bank_debit: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      ach_bank_debit: {
                        type: 'object',
                        description: 'Payment Method data for Ach bank debit',
                        properties: {
                          account_number: {
                            type: 'string',
                            description: 'Account number for ach bank debit payment',
                          },
                          bank_account_holder_name: {
                            type: 'string',
                          },
                          bank_holder_type: {
                            type: 'string',
                          },
                          bank_name: {
                            type: 'string',
                          },
                          bank_type: {
                            type: 'string',
                          },
                          card_holder_name: {
                            type: 'string',
                          },
                          routing_number: {
                            type: 'string',
                            description: 'Routing number for ach bank debit payment',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_debit_billing',
                          },
                        },
                        required: [
                          'account_number',
                          'bank_account_holder_name',
                          'bank_holder_type',
                          'bank_name',
                          'bank_type',
                          'card_holder_name',
                          'routing_number',
                        ],
                      },
                    },
                    required: ['ach_bank_debit'],
                  },
                  {
                    type: 'object',
                    properties: {
                      sepa_bank_debit: {
                        type: 'object',
                        properties: {
                          bank_account_holder_name: {
                            type: 'string',
                            description: 'Owner name for bank debit',
                          },
                          iban: {
                            type: 'string',
                            description: 'International bank account number (iban) for SEPA',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_debit_billing',
                          },
                        },
                        required: ['bank_account_holder_name', 'iban'],
                      },
                    },
                    required: ['sepa_bank_debit'],
                  },
                  {
                    type: 'object',
                    properties: {
                      becs_bank_debit: {
                        type: 'object',
                        properties: {
                          account_number: {
                            type: 'string',
                            description: 'Account number for Becs payment method',
                          },
                          bsb_number: {
                            type: 'string',
                            description: 'Bank-State-Branch (bsb) number',
                          },
                          bank_account_holder_name: {
                            type: 'string',
                            description: 'Owner name for bank debit',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_debit_billing',
                          },
                        },
                        required: ['account_number', 'bsb_number'],
                      },
                    },
                    required: ['becs_bank_debit'],
                  },
                  {
                    type: 'object',
                    properties: {
                      bacs_bank_debit: {
                        type: 'object',
                        properties: {
                          account_number: {
                            type: 'string',
                            description: 'Account number for Bacs payment method',
                          },
                          bank_account_holder_name: {
                            type: 'string',
                            description: 'holder name for bank debit',
                          },
                          sort_code: {
                            type: 'string',
                            description: 'Sort code for Bacs payment method',
                          },
                          billing_details: {
                            $ref: '#/$defs/bank_debit_billing',
                          },
                        },
                        required: ['account_number', 'bank_account_holder_name', 'sort_code'],
                      },
                    },
                    required: ['bacs_bank_debit'],
                  },
                ],
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['bank_debit'],
          },
          {
            type: 'object',
            title: 'BankTransfer',
            properties: {
              bank_transfer: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      ach_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            type: 'object',
                            properties: {
                              email: {
                                type: 'string',
                                description: 'The Email ID for ACH billing',
                              },
                            },
                            required: [],
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['ach_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      sepa_bank_transfer: {
                        type: 'object',
                        properties: {
                          country: {
                            $ref: '#/$defs/country_alpha2',
                          },
                          billing_details: {
                            $ref: '#/$defs/sepa_and_bacs_billing_details',
                          },
                        },
                        required: ['country'],
                      },
                    },
                    required: ['sepa_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      bacs_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            $ref: '#/$defs/sepa_and_bacs_billing_details',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['bacs_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      multibanco_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            type: 'object',
                            properties: {
                              email: {
                                type: 'string',
                              },
                            },
                            required: [],
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['multibanco_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      permata_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            $ref: '#/$defs/doku_billing_details',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['permata_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      bca_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            $ref: '#/$defs/doku_billing_details',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['bca_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      bni_va_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            $ref: '#/$defs/doku_billing_details',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['bni_va_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      bri_va_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            $ref: '#/$defs/doku_billing_details',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['bri_va_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      cimb_va_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            $ref: '#/$defs/doku_billing_details',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['cimb_va_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      danamon_va_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            $ref: '#/$defs/doku_billing_details',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['danamon_va_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      mandiri_va_bank_transfer: {
                        type: 'object',
                        properties: {
                          billing_details: {
                            $ref: '#/$defs/doku_billing_details',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['mandiri_va_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      pix: {
                        type: 'object',
                        properties: {
                          cnpj: {
                            type: 'string',
                            description: 'CNPJ is a Brazilian company tax identification number',
                          },
                          cpf: {
                            type: 'string',
                            description: 'CPF is a Brazilian tax identification number',
                          },
                          destination_bank_account_id: {
                            type: 'string',
                            description: 'Destination bank account number',
                          },
                          pix_key: {
                            type: 'string',
                            description: 'Unique key for pix transfer',
                          },
                          source_bank_account_id: {
                            type: 'string',
                            description: 'Source bank account number',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['pix'],
                  },
                  {
                    type: 'object',
                    properties: {
                      pse: {
                        type: 'object',
                      },
                    },
                    required: ['pse'],
                  },
                  {
                    type: 'object',
                    properties: {
                      local_bank_transfer: {
                        type: 'object',
                        properties: {
                          bank_code: {
                            type: 'string',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['local_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      instant_bank_transfer: {
                        type: 'object',
                      },
                    },
                    required: ['instant_bank_transfer'],
                  },
                  {
                    type: 'object',
                    properties: {
                      instant_bank_transfer_finland: {
                        type: 'object',
                      },
                    },
                    required: ['instant_bank_transfer_finland'],
                  },
                  {
                    type: 'object',
                    properties: {
                      instant_bank_transfer_poland: {
                        type: 'object',
                      },
                    },
                    required: ['instant_bank_transfer_poland'],
                  },
                ],
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['bank_transfer'],
          },
          {
            type: 'object',
            title: 'RealTimePayment',
            properties: {
              real_time_payment: {
                $ref: '#/$defs/real_time_payment_data',
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['real_time_payment'],
          },
          {
            type: 'object',
            title: 'Crypto',
            properties: {
              crypto: {
                $ref: '#/$defs/crypto_data',
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['crypto'],
          },
          {
            type: 'object',
            title: 'MandatePayment',
            properties: {
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: [],
          },
          {
            type: 'object',
            title: 'Reward',
            properties: {
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: [],
          },
          {
            type: 'object',
            title: 'Upi',
            properties: {
              upi: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      upi_collect: {
                        type: 'object',
                        properties: {
                          vpa_id: {
                            type: 'string',
                          },
                        },
                        required: [],
                      },
                    },
                    required: ['upi_collect'],
                  },
                  {
                    type: 'object',
                    properties: {
                      upi_intent: {
                        type: 'object',
                      },
                    },
                    required: ['upi_intent'],
                  },
                ],
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['upi'],
          },
          {
            type: 'object',
            title: 'Voucher',
            properties: {
              voucher: {
                $ref: '#/$defs/voucher_data',
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['voucher'],
          },
          {
            type: 'object',
            title: 'GiftCard',
            properties: {
              gift_card: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      givex: {
                        type: 'object',
                        properties: {
                          cvc: {
                            type: 'string',
                            description: 'The card verification code.',
                          },
                          number: {
                            type: 'string',
                            description: 'The gift card number',
                          },
                        },
                        required: ['cvc', 'number'],
                      },
                    },
                    required: ['givex'],
                  },
                  {
                    type: 'object',
                    properties: {
                      pay_safe_card: {
                        type: 'object',
                      },
                    },
                    required: ['pay_safe_card'],
                  },
                ],
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['gift_card'],
          },
          {
            type: 'object',
            title: 'CardToken',
            properties: {
              card_token: {
                type: 'object',
                properties: {
                  card_holder_name: {
                    type: 'string',
                    description: "The card holder's name",
                  },
                  card_cvc: {
                    type: 'string',
                    description: 'The CVC number for the card',
                  },
                },
                required: ['card_holder_name'],
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['card_token'],
          },
          {
            type: 'object',
            title: 'OpenBanking',
            properties: {
              open_banking: {
                $ref: '#/$defs/open_banking_data',
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['open_banking'],
          },
          {
            type: 'object',
            title: 'MobilePayment',
            properties: {
              mobile_payment: {
                $ref: '#/$defs/mobile_payment_data',
              },
              billing: {
                $ref: '#/$defs/address',
              },
            },
            required: ['mobile_payment'],
          },
        ],
        description: 'The payment method information provided for making a payment',
      },
      card_network: {
        type: 'string',
        description: 'Indicates the card network.',
        enum: [
          'Visa',
          'Mastercard',
          'AmericanExpress',
          'JCB',
          'DinersClub',
          'Discover',
          'CartesBancaires',
          'UnionPay',
          'Interac',
          'RuPay',
          'Maestro',
          'Star',
          'Pulse',
          'Accel',
          'Nyce',
        ],
      },
      card_redirect_data: {
        anyOf: [
          {
            type: 'object',
            properties: {
              knet: {
                type: 'object',
              },
            },
            required: ['knet'],
          },
          {
            type: 'object',
            properties: {
              benefit: {
                type: 'object',
              },
            },
            required: ['benefit'],
          },
          {
            type: 'object',
            properties: {
              momo_atm: {
                type: 'object',
              },
            },
            required: ['momo_atm'],
          },
          {
            type: 'object',
            properties: {
              card_redirect: {
                type: 'object',
              },
            },
            required: ['card_redirect'],
          },
        ],
      },
      samsung_pay_token_data: {
        type: 'object',
        properties: {
          data: {
            type: 'string',
            description: 'Samsung Pay encrypted payment credential data',
          },
          version: {
            type: 'string',
            description: '3DS version used by Samsung Pay',
          },
          type: {
            type: 'string',
            description: '3DS type used by Samsung Pay',
          },
        },
        required: ['data', 'version'],
      },
      samsung_pay_card_brand: {
        type: 'string',
        enum: ['visa', 'mastercard', 'amex', 'discover', 'unknown'],
      },
      bank_redirect_billing: {
        type: 'object',
        properties: {
          billing_name: {
            type: 'string',
            description: 'The name for which billing is issued',
          },
          email: {
            type: 'string',
            description: 'The billing email for bank redirect',
          },
        },
        required: ['billing_name', 'email'],
      },
      bank_names: {
        type: 'string',
        description: 'Name of banks supported by Hyperswitch',
        enum: [
          'american_express',
          'affin_bank',
          'agro_bank',
          'alliance_bank',
          'am_bank',
          'bank_of_america',
          'bank_of_china',
          'bank_islam',
          'bank_muamalat',
          'bank_rakyat',
          'bank_simpanan_nasional',
          'barclays',
          'blik_p_s_p',
          'capital_one',
          'chase',
          'citi',
          'cimb_bank',
          'discover',
          'navy_federal_credit_union',
          'pentagon_federal_credit_union',
          'synchrony_bank',
          'wells_fargo',
          'abn_amro',
          'asn_bank',
          'bunq',
          'handelsbanken',
          'hong_leong_bank',
          'hsbc_bank',
          'ing',
          'knab',
          'kuwait_finance_house',
          'moneyou',
          'rabobank',
          'regiobank',
          'revolut',
          'sns_bank',
          'triodos_bank',
          'van_lanschot',
          'arzte_und_apotheker_bank',
          'austrian_anadi_bank_ag',
          'bank_austria',
          'bank99_ag',
          'bankhaus_carl_spangler',
          'bankhaus_schelhammer_und_schattera_ag',
          'bank_millennium',
          'bank_p_e_k_a_o_s_a',
          'bawag_psk_ag',
          'bks_bank_ag',
          'brull_kallmus_bank_ag',
          'btv_vier_lander_bank',
          'capital_bank_grawe_gruppe_ag',
          'ceska_sporitelna',
          'dolomitenbank',
          'easybank_ag',
          'e_platby_v_u_b',
          'erste_bank_und_sparkassen',
          'friesland_bank',
          'hypo_alpeadriabank_international_ag',
          'hypo_noe_lb_fur_niederosterreich_u_wien',
          'hypo_oberosterreich_salzburg_steiermark',
          'hypo_tirol_bank_ag',
          'hypo_vorarlberg_bank_ag',
          'hypo_bank_burgenland_aktiengesellschaft',
          'komercni_banka',
          'm_bank',
          'marchfelder_bank',
          'maybank',
          'oberbank_ag',
          'osterreichische_arzte_und_apothekerbank',
          'ocbc_bank',
          'pay_with_i_n_g',
          'place_z_i_p_k_o',
          'platnosc_online_karta_platnicza',
          'posojilnica_bank_e_gen',
          'postova_banka',
          'public_bank',
          'raiffeisen_bankengruppe_osterreich',
          'rhb_bank',
          'schelhammer_capital_bank_ag',
          'standard_chartered_bank',
          'schoellerbank_ag',
          'sparda_bank_wien',
          'sporo_pay',
          'santander_przelew24',
          'tatra_pay',
          'viamo',
          'volksbank_gruppe',
          'volkskreditbank_ag',
          'vr_bank_braunau',
          'uob_bank',
          'pay_with_alior_bank',
          'banki_spoldzielcze',
          'pay_with_inteligo',
          'b_n_p_paribas_poland',
          'bank_nowy_s_a',
          'credit_agricole',
          'pay_with_b_o_s',
          'pay_with_citi_handlowy',
          'pay_with_plus_bank',
          'toyota_bank',
          'velo_bank',
          'e_transfer_pocztowy24',
          'plus_bank',
          'etransfer_pocztowy24',
          'banki_spbdzielcze',
          'bank_nowy_bfg_sa',
          'getin_bank',
          'blik',
          'noble_pay',
          'idea_bank',
          'envelo_bank',
          'nest_przelew',
          'mbank_mtransfer',
          'inteligo',
          'pbac_z_ipko',
          'bnp_paribas',
          'bank_pekao_sa',
          'volkswagen_bank',
          'alior_bank',
          'boz',
          'bangkok_bank',
          'krungsri_bank',
          'krung_thai_bank',
          'the_siam_commercial_bank',
          'kasikorn_bank',
          'open_bank_success',
          'open_bank_failure',
          'open_bank_cancelled',
          'aib',
          'bank_of_scotland',
          'danske_bank',
          'first_direct',
          'first_trust',
          'halifax',
          'lloyds',
          'monzo',
          'nat_west',
          'nationwide_bank',
          'royal_bank_of_scotland',
          'starling',
          'tsb_bank',
          'tesco_bank',
          'ulster_bank',
          'yoursafe',
          'n26',
          'nationale_nederlanden',
        ],
      },
      bank_debit_billing: {
        type: 'object',
        properties: {
          address: {
            $ref: '#/$defs/address_details',
          },
          email: {
            type: 'string',
            description: 'The billing email for bank debits',
          },
          name: {
            type: 'string',
            description: 'The billing name for bank debits',
          },
        },
        required: [],
      },
      sepa_and_bacs_billing_details: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'The Email ID for SEPA and BACS billing',
          },
          name: {
            type: 'string',
            description: 'The billing name for SEPA and BACS billing',
          },
        },
        required: [],
      },
      doku_billing_details: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'The Email ID for Doku billing',
          },
          first_name: {
            type: 'string',
            description: 'The billing first name for Doku',
          },
          last_name: {
            type: 'string',
            description: 'The billing second name for Doku',
          },
        },
        required: [],
      },
      real_time_payment_data: {
        anyOf: [
          {
            type: 'object',
            properties: {
              fps: {
                type: 'object',
              },
            },
            required: ['fps'],
          },
          {
            type: 'object',
            properties: {
              duit_now: {
                type: 'object',
              },
            },
            required: ['duit_now'],
          },
          {
            type: 'object',
            properties: {
              prompt_pay: {
                type: 'object',
              },
            },
            required: ['prompt_pay'],
          },
          {
            type: 'object',
            properties: {
              viet_qr: {
                type: 'object',
              },
            },
            required: ['viet_qr'],
          },
        ],
      },
      crypto_data: {
        type: 'object',
        properties: {
          network: {
            type: 'string',
          },
          pay_currency: {
            type: 'string',
          },
        },
        required: [],
      },
      voucher_data: {
        anyOf: [
          {
            type: 'string',
            enum: ['efecty', 'pago_efectivo', 'red_compra', 'red_pagos', 'oxxo'],
          },
          {
            type: 'object',
            properties: {
              boleto: {
                type: 'object',
                properties: {
                  social_security_number: {
                    type: 'string',
                    description: "The shopper's social security number",
                  },
                },
                required: [],
              },
            },
            required: ['boleto'],
          },
          {
            type: 'object',
            properties: {
              alfamart: {
                type: 'object',
                properties: {
                  email: {
                    type: 'string',
                    description: 'The Email ID for Alfamart',
                  },
                  first_name: {
                    type: 'string',
                    description: 'The billing first name for Alfamart',
                  },
                  last_name: {
                    type: 'string',
                    description: 'The billing second name for Alfamart',
                  },
                },
                required: [],
              },
            },
            required: ['alfamart'],
          },
          {
            type: 'object',
            properties: {
              indomaret: {
                type: 'object',
                properties: {
                  email: {
                    type: 'string',
                    description: 'The Email ID for Alfamart',
                  },
                  first_name: {
                    type: 'string',
                    description: 'The billing first name for Alfamart',
                  },
                  last_name: {
                    type: 'string',
                    description: 'The billing second name for Alfamart',
                  },
                },
                required: [],
              },
            },
            required: ['indomaret'],
          },
          {
            type: 'object',
            properties: {
              seven_eleven: {
                $ref: '#/$defs/jcs_voucher_data',
              },
            },
            required: ['seven_eleven'],
          },
          {
            type: 'object',
            properties: {
              lawson: {
                $ref: '#/$defs/jcs_voucher_data',
              },
            },
            required: ['lawson'],
          },
          {
            type: 'object',
            properties: {
              mini_stop: {
                $ref: '#/$defs/jcs_voucher_data',
              },
            },
            required: ['mini_stop'],
          },
          {
            type: 'object',
            properties: {
              family_mart: {
                $ref: '#/$defs/jcs_voucher_data',
              },
            },
            required: ['family_mart'],
          },
          {
            type: 'object',
            properties: {
              seicomart: {
                $ref: '#/$defs/jcs_voucher_data',
              },
            },
            required: ['seicomart'],
          },
          {
            type: 'object',
            properties: {
              pay_easy: {
                $ref: '#/$defs/jcs_voucher_data',
              },
            },
            required: ['pay_easy'],
          },
        ],
      },
      jcs_voucher_data: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'The Email ID for Japanese convenience stores',
          },
          first_name: {
            type: 'string',
            description: 'The billing first name for Japanese convenience stores',
          },
          last_name: {
            type: 'string',
            description: 'The billing second name Japanese convenience stores',
          },
          phone_number: {
            type: 'string',
            description: 'The telephone number for Japanese convenience stores',
          },
        },
        required: [],
      },
      open_banking_data: {
        type: 'object',
        properties: {
          open_banking_pis: {
            type: 'object',
          },
        },
        required: ['open_banking_pis'],
      },
      mobile_payment_data: {
        type: 'object',
        properties: {
          direct_carrier_billing: {
            type: 'object',
            properties: {
              msisdn: {
                type: 'string',
                description: 'The phone number of the user',
              },
              client_uid: {
                type: 'string',
                description: 'Unique user id',
              },
            },
            required: ['msisdn'],
          },
        },
        required: ['direct_carrier_billing'],
      },
      payment_type: {
        type: 'string',
        description:
          "The type of the payment that differentiates between normal and various types of mandate payments. Use 'setup_mandate' in case of zero auth flow.",
        enum: ['normal', 'new_mandate', 'setup_mandate', 'recurring_mandate'],
      },
      sca_exemption_type: {
        type: 'string',
        description: 'SCA Exemptions types available for authentication',
        enum: ['low_value', 'transaction_risk_analysis'],
      },
      recurring_details: {
        anyOf: [
          {
            type: 'object',
            properties: {
              data: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['mandate_id'],
              },
            },
            required: ['data', 'type'],
          },
          {
            type: 'object',
            properties: {
              data: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['payment_method_id'],
              },
            },
            required: ['data', 'type'],
          },
          {
            type: 'object',
            properties: {
              data: {
                type: 'object',
                description:
                  'Processor payment token for MIT payments where payment_method_data is not available',
                properties: {
                  processor_payment_token: {
                    type: 'string',
                  },
                  merchant_connector_id: {
                    type: 'string',
                  },
                },
                required: ['processor_payment_token'],
              },
              type: {
                type: 'string',
                enum: ['processor_payment_token'],
              },
            },
            required: ['data', 'type'],
          },
          {
            type: 'object',
            properties: {
              data: {
                type: 'object',
                properties: {
                  card_exp_month: {
                    type: 'string',
                    description: "The card's expiry month",
                  },
                  card_exp_year: {
                    type: 'string',
                    description: "The card's expiry year",
                  },
                  card_holder_name: {
                    type: 'string',
                    description: "The card holder's name",
                  },
                  card_number: {
                    type: 'string',
                    description: 'The card number',
                  },
                  network_transaction_id: {
                    type: 'string',
                    description:
                      'The network transaction ID provided by the card network during a CIT (Customer Initiated Transaction),\nwhere `setup_future_usage` is set to `off_session`.',
                  },
                  bank_code: {
                    type: 'string',
                  },
                  card_issuer: {
                    type: 'string',
                    description: 'The name of the issuer of card',
                  },
                  card_issuing_country: {
                    type: 'string',
                  },
                  card_network: {
                    $ref: '#/$defs/card_network',
                  },
                  card_type: {
                    type: 'string',
                  },
                  nick_name: {
                    type: 'string',
                    description: "The card holder's nick name",
                  },
                },
                required: [
                  'card_exp_month',
                  'card_exp_year',
                  'card_holder_name',
                  'card_number',
                  'network_transaction_id',
                ],
              },
              type: {
                type: 'string',
                enum: ['network_transaction_id_and_card_details'],
              },
            },
            required: ['data', 'type'],
          },
        ],
        description: 'Details required for recurring payment',
      },
      straight_through_algorithm: {
        anyOf: [
          {
            type: 'object',
            title: 'Single',
            properties: {
              data: {
                $ref: '#/$defs/routable_connector_choice',
              },
              type: {
                type: 'string',
                enum: ['single'],
              },
            },
            required: ['data', 'type'],
          },
          {
            type: 'object',
            title: 'Priority',
            properties: {
              data: {
                type: 'array',
                items: {
                  $ref: '#/$defs/routable_connector_choice',
                },
              },
              type: {
                type: 'string',
                enum: ['priority'],
              },
            },
            required: ['data', 'type'],
          },
          {
            type: 'object',
            title: 'VolumeSplit',
            properties: {
              data: {
                type: 'array',
                items: {
                  $ref: '#/$defs/connector_volume_split',
                },
              },
              type: {
                type: 'string',
                enum: ['volume_split'],
              },
            },
            required: ['data', 'type'],
          },
        ],
      },
      routable_connector_choice: {
        type: 'object',
        description: 'Routable Connector chosen for a payment',
        properties: {
          connector: {
            type: 'string',
            description:
              'RoutableConnectors are the subset of Connectors that are eligible for payments routing',
            enum: [
              'adyenplatform',
              'stripe_billing_test',
              'phonypay',
              'fauxpay',
              'pretendpay',
              'stripe_test',
              'adyen_test',
              'checkout_test',
              'paypal_test',
              'aci',
              'adyen',
              'airwallex',
              'archipel',
              'authorizedotnet',
              'bankofamerica',
              'barclaycard',
              'billwerk',
              'bitpay',
              'bambora',
              'bamboraapac',
              'bluesnap',
              'boku',
              'braintree',
              'cashtocode',
              'chargebee',
              'checkout',
              'coinbase',
              'coingate',
              'cryptopay',
              'cybersource',
              'datatrans',
              'deutschebank',
              'digitalvirgo',
              'dlocal',
              'ebanx',
              'elavon',
              'facilitapay',
              'fiserv',
              'fiservemea',
              'fiuu',
              'forte',
              'getnet',
              'globalpay',
              'globepay',
              'gocardless',
              'hipay',
              'helcim',
              'iatapay',
              'inespay',
              'itaubank',
              'jpmorgan',
              'klarna',
              'mifinity',
              'mollie',
              'moneris',
              'multisafepay',
              'nexinets',
              'nexixpay',
              'nmi',
              'nomupay',
              'noon',
              'novalnet',
              'nuvei',
              'opennode',
              'paybox',
              'payme',
              'payone',
              'paypal',
              'paystack',
              'payu',
              'placetopay',
              'powertranz',
              'prophetpay',
              'rapyd',
              'razorpay',
              'recurly',
              'redsys',
              'riskified',
              'shift4',
              'signifyd',
              'square',
              'stax',
              'stripe',
              'stripebilling',
              'trustpay',
              'tokenio',
              'tsys',
              'volt',
              'wellsfargo',
              'wise',
              'worldline',
              'worldpay',
              'worldpayvantiv',
              'worldpayxml',
              'xendit',
              'zen',
              'plaid',
              'zsl',
            ],
          },
          merchant_connector_id: {
            type: 'string',
          },
        },
        required: ['connector'],
      },
      connector_volume_split: {
        type: 'object',
        properties: {
          connector: {
            $ref: '#/$defs/routable_connector_choice',
          },
          split: {
            type: 'integer',
          },
        },
        required: ['connector', 'split'],
      },
      future_usage: {
        type: 'string',
        description:
          'Specifies how the payment method can be used for future payments.\n- `off_session`: The payment method can be used for future payments when the customer is not present.\n- `on_session`: The payment method is intended for use only when the customer is present during checkout.\nIf omitted, defaults to `on_session`.',
        enum: ['off_session', 'on_session'],
      },
      split_payments_request: {
        anyOf: [
          {
            type: 'object',
            properties: {
              stripe_split_payment: {
                type: 'object',
                description:
                  'Fee information for Split Payments to be charged on the payment being collected for Stripe',
                properties: {
                  application_fees: {
                    type: 'integer',
                    description: 'Platform fees to be collected on the payment',
                  },
                  charge_type: {
                    $ref: '#/$defs/payment_charge_type',
                  },
                  transfer_account_id: {
                    type: 'string',
                    description: "Identifier for the reseller's account where the funds were transferred",
                  },
                },
                required: ['application_fees', 'charge_type', 'transfer_account_id'],
              },
            },
            required: ['stripe_split_payment'],
          },
          {
            type: 'object',
            properties: {
              adyen_split_payment: {
                $ref: '#/$defs/adyen_split_data',
              },
            },
            required: ['adyen_split_payment'],
          },
          {
            type: 'object',
            properties: {
              xendit_split_payment: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      multiple_splits: {
                        type: 'object',
                        description:
                          'Fee information to be charged on the payment being collected via xendit',
                        properties: {
                          description: {
                            type: 'string',
                            description: 'Description to identify fee rule',
                          },
                          name: {
                            type: 'string',
                            description:
                              'Name to identify split rule. Not required to be unique. Typically based on transaction and/or sub-merchant types.',
                          },
                          routes: {
                            type: 'array',
                            description:
                              'Array of objects that define how the platform wants to route the fees and to which accounts.',
                            items: {
                              $ref: '#/$defs/xendit_split_route',
                            },
                          },
                          for_user_id: {
                            type: 'string',
                            description:
                              'The sub-account user-id that you want to make this transaction for.',
                          },
                        },
                        required: ['description', 'name', 'routes'],
                      },
                    },
                    required: ['multiple_splits'],
                  },
                  {
                    type: 'object',
                    properties: {
                      single_split: {
                        $ref: '#/$defs/xendit_split_sub_merchant_data',
                      },
                    },
                    required: ['single_split'],
                  },
                ],
                description: 'Xendit Charge Request',
              },
            },
            required: ['xendit_split_payment'],
          },
        ],
        description: 'Fee information for Split Payments to be charged on the payment being collected',
      },
      payment_charge_type: {
        type: 'object',
        properties: {
          Stripe: {
            type: 'string',
            enum: ['direct', 'destination'],
          },
        },
        required: ['Stripe'],
      },
      adyen_split_data: {
        type: 'object',
        description:
          'Fee information for Split Payments to be charged on the payment being collected for Adyen',
        properties: {
          split_items: {
            type: 'array',
            description: 'Data for the split items',
            items: {
              type: 'object',
              description: 'Data for the split items',
              properties: {
                amount: {
                  type: 'integer',
                  description: 'The amount of the split item',
                },
                reference: {
                  type: 'string',
                  description: 'Unique Identifier for the split item',
                },
                split_type: {
                  type: 'string',
                  enum: [
                    'BalanceAccount',
                    'AcquiringFees',
                    'PaymentFee',
                    'AdyenFees',
                    'AdyenCommission',
                    'AdyenMarkup',
                    'Interchange',
                    'SchemeFee',
                    'Commission',
                    'TopUp',
                    'Vat',
                  ],
                },
                account: {
                  type: 'string',
                  description: 'The unique identifier of the account to which the split amount is allocated.',
                },
                description: {
                  type: 'string',
                  description:
                    'Description for the part of the payment that will be allocated to the specified account.',
                },
              },
              required: ['amount', 'reference', 'split_type'],
            },
          },
          store: {
            type: 'string',
            description: 'The store identifier',
          },
        },
        required: ['split_items'],
      },
      xendit_split_route: {
        type: 'object',
        description: 'Fee information to be charged on the payment being collected via xendit',
        properties: {
          currency: {
            $ref: '#/$defs/currency',
          },
          destination_account_id: {
            type: 'string',
            description: 'ID of the destination account where the amount will be routed to',
          },
          reference_id: {
            type: 'string',
            description: 'Reference ID which acts as an identifier of the route itself',
          },
          flat_amount: {
            type: 'integer',
            description: 'This Unit struct represents MinorUnit in which core amount works',
          },
          percent_amount: {
            type: 'integer',
            description: 'Amount of payments to be split, using a percent rate as unit',
          },
        },
        required: ['currency', 'destination_account_id', 'reference_id'],
      },
      xendit_split_sub_merchant_data: {
        type: 'object',
        description:
          'Fee information to be charged on the payment being collected for sub-merchant via xendit',
        properties: {
          for_user_id: {
            type: 'string',
            description: 'The sub-account user-id that you want to make this transaction for.',
          },
        },
        required: ['for_user_id'],
      },
      request_surcharge_details: {
        type: 'object',
        description: 'Details of surcharge applied on this payment, if applicable',
        properties: {
          surcharge_amount: {
            type: 'integer',
          },
          tax_amount: {
            type: 'integer',
            description: 'This Unit struct represents MinorUnit in which core amount works',
          },
        },
        required: ['surcharge_amount'],
      },
      three_ds_completion_indicator: {
        type: 'string',
        description: 'Indicates if 3DS method data was successfully completed or not',
        enum: ['Y', 'N', 'U'],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.payments.create(body));
};

export default { metadata, tool, handler };
