// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.business_profile',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/account/{account_id}/business_profile',
  operationId: 'Create A Profile',
};

export const tool: Tool = {
  name: 'create_accounts_business_profile',
  description: 'Creates a new *profile* for a merchant',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      always_collect_billing_details_from_wallet_connector: {
        type: 'boolean',
        description:
          'A boolean value to indicate if customer billing details needs to be collected from wallet\nconnector irrespective of connector required fields (Eg. Apple pay, Google pay etc)',
      },
      always_collect_shipping_details_from_wallet_connector: {
        type: 'boolean',
        description:
          'A boolean value to indicate if customer shipping details needs to be collected from wallet\nconnector irrespective of connector required fields (Eg. Apple pay, Google pay etc)',
      },
      always_request_extended_authorization: {
        type: 'boolean',
        description: 'Bool indicating if extended authentication must be requested for all payments',
      },
      applepay_verified_domains: {
        type: 'array',
        description: 'Verified Apple Pay domains for a particular profile',
        items: {
          type: 'string',
        },
      },
      authentication_connector_details: {
        $ref: '#/$defs/authentication_connector_details',
      },
      authentication_product_ids: {
        type: 'object',
        description: 'Product authentication ids',
      },
      card_testing_guard_config: {
        $ref: '#/$defs/card_testing_guard_config',
      },
      collect_billing_details_from_wallet_connector: {
        type: 'boolean',
        description:
          'A boolean value to indicate if customer billing details needs to be collected from wallet\nconnector only if it is required field for connector (Eg. Apple Pay, Google Pay etc)',
      },
      collect_shipping_details_from_wallet_connector: {
        type: 'boolean',
        description:
          'A boolean value to indicate if customer shipping details needs to be collected from wallet\nconnector only if it is required field for connector (Eg. Apple Pay, Google Pay etc)',
      },
      enable_payment_response_hash: {
        type: 'boolean',
        description: 'A boolean value to indicate if payment response hash needs to be enabled',
      },
      force_3ds_challenge: {
        type: 'boolean',
        description: 'Indicates if 3ds challenge is forced',
      },
      frm_routing_algorithm: {
        type: 'object',
        description: "The frm routing algorithm to be used for routing payments to desired FRM's",
      },
      intent_fulfillment_time: {
        type: 'integer',
        description:
          'Will be used to determine the time till which your payment will be active once the payment session starts',
      },
      is_auto_retries_enabled: {
        type: 'boolean',
        description: 'Indicates if is_auto_retries_enabled is enabled or not.',
      },
      is_clear_pan_retries_enabled: {
        type: 'boolean',
        description: 'Indicates if clear pan retries is enabled or not.',
      },
      is_click_to_pay_enabled: {
        type: 'boolean',
        description: 'Indicates if click to pay is enabled or not.',
      },
      is_connector_agnostic_mit_enabled: {
        type: 'boolean',
        description:
          'Indicates if the MIT (merchant initiated transaction) payments can be made connector\nagnostic, i.e., MITs may be processed through different connector than CIT (customer\ninitiated transaction) based on the routing rules.\nIf set to `false`, MIT will go through the same connector as the CIT.',
      },
      is_debit_routing_enabled: {
        type: 'boolean',
        description: 'Indicates if debit routing is enabled or not',
      },
      is_iframe_redirection_enabled: {
        type: 'boolean',
        description: 'Indicates if the redirection has to open in the iframe',
      },
      is_network_tokenization_enabled: {
        type: 'boolean',
        description: 'Indicates if network tokenization is enabled or not.',
      },
      is_pre_network_tokenization_enabled: {
        type: 'boolean',
        description: 'Indicates if pre network tokenization is enabled or not',
      },
      is_tax_connector_enabled: {
        type: 'boolean',
        description:
          'Indicates if tax_calculator connector is enabled or not.\nIf set to `true` tax_connector_id will be checked.',
      },
      max_auto_retries_enabled: {
        type: 'integer',
        description: 'Maximum number of auto retries allowed for a payment',
      },
      merchant_business_country: {
        $ref: '#/$defs/country_alpha2',
      },
      merchant_category_code: {
        $ref: '#/$defs/merchant_category_code',
      },
      metadata: {
        type: 'object',
        description: 'Metadata is useful for storing additional, unstructured information on an object.',
      },
      outgoing_webhook_custom_http_headers: {
        type: 'object',
        description:
          'These key-value pairs are sent as additional custom headers in the outgoing webhook request. It is recommended not to use more than four key-value pairs.',
      },
      payment_link_config: {
        $ref: '#/$defs/business_payment_link_config',
      },
      payment_response_hash_key: {
        type: 'string',
        description:
          'Refers to the hash key used for calculating the signature for webhooks and redirect response. If the value is not provided, a value is automatically generated.',
      },
      payout_link_config: {
        $ref: '#/$defs/business_payout_link_config',
      },
      payout_routing_algorithm: {
        $ref: '#/$defs/static_routing_algorithm',
      },
      profile_name: {
        type: 'string',
        description: 'The name of profile',
      },
      redirect_to_merchant_with_http_post: {
        type: 'boolean',
        description: 'A boolean value to indicate if redirect to merchant with http post needs to be enabled',
      },
      return_url: {
        type: 'string',
        description: 'The URL to redirect after the completion of the operation',
      },
      routing_algorithm: {
        type: 'object',
        description: 'The routing algorithm to be used for routing payments to desired connectors',
      },
      session_expiry: {
        type: 'integer',
        description: 'Client Secret Default expiry for all payments created under this profile',
      },
      tax_connector_id: {
        type: 'string',
        description: 'Merchant Connector id to be stored for tax_calculator connector',
      },
      use_billing_as_payment_method_billing: {
        type: 'boolean',
        description:
          'Whether to use the billing details passed when creating the intent as payment method billing',
      },
      webhook_details: {
        $ref: '#/$defs/webhook_details',
      },
    },
    $defs: {
      authentication_connector_details: {
        type: 'object',
        properties: {
          authentication_connectors: {
            type: 'array',
            description: 'List of authentication connectors',
            items: {
              $ref: '#/$defs/authentication_connectors',
            },
          },
          three_ds_requestor_url: {
            type: 'string',
            description:
              'URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process.',
          },
          three_ds_requestor_app_url: {
            type: 'string',
            description:
              'Merchant app declaring their URL within the CReq message so that the Authentication app can call the Merchant app after OOB authentication has occurred.',
          },
        },
        required: ['authentication_connectors', 'three_ds_requestor_url'],
      },
      authentication_connectors: {
        type: 'string',
        enum: [
          'threedsecureio',
          'netcetera',
          'gpayments',
          'ctp_mastercard',
          'unified_authentication_service',
          'juspaythreedsserver',
          'ctp_visa',
        ],
      },
      card_testing_guard_config: {
        type: 'object',
        properties: {
          card_ip_blocking_status: {
            $ref: '#/$defs/card_testing_guard_status',
          },
          card_ip_blocking_threshold: {
            type: 'integer',
            description: 'Determines the unsuccessful payment threshold for Card IP Blocking for profile',
          },
          card_testing_guard_expiry: {
            type: 'integer',
            description: 'Determines Redis Expiry for Card Testing Guard for profile',
          },
          customer_id_blocking_status: {
            $ref: '#/$defs/card_testing_guard_status',
          },
          customer_id_blocking_threshold: {
            type: 'integer',
            description: 'Determines the unsuccessful payment threshold for Customer Id Blocking for profile',
          },
          guest_user_card_blocking_status: {
            $ref: '#/$defs/card_testing_guard_status',
          },
          guest_user_card_blocking_threshold: {
            type: 'integer',
            description:
              'Determines the unsuccessful payment threshold for Guest User Card Blocking for profile',
          },
        },
        required: [
          'card_ip_blocking_status',
          'card_ip_blocking_threshold',
          'card_testing_guard_expiry',
          'customer_id_blocking_status',
          'customer_id_blocking_threshold',
          'guest_user_card_blocking_status',
          'guest_user_card_blocking_threshold',
        ],
      },
      card_testing_guard_status: {
        type: 'string',
        enum: ['enabled', 'disabled'],
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
      merchant_category_code: {
        type: 'string',
        enum: ['5411', '7011', '0763', '8111', '5021', '4816', '5661'],
      },
      business_payment_link_config: {
        allOf: [
          {
            $ref: '#/$defs/payment_link_config_request',
          },
        ],
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
      business_payout_link_config: {
        allOf: [
          {
            $ref: '#/$defs/business_generic_link_config',
          },
        ],
        description: 'Object for GenericLinkUiConfig',
      },
      business_generic_link_config: {
        allOf: [
          {
            $ref: '#/$defs/generic_link_ui_config',
          },
        ],
        description: 'Object for GenericLinkUiConfig',
      },
      generic_link_ui_config: {
        type: 'object',
        description: 'Object for GenericLinkUiConfig',
        properties: {
          logo: {
            type: 'string',
            description: "Merchant's display logo",
          },
          merchant_name: {
            type: 'string',
            description: 'Custom merchant name for the link',
          },
          theme: {
            type: 'string',
            description: 'Primary color to be used in the form represented in hex format',
          },
        },
        required: [],
      },
      static_routing_algorithm: {
        anyOf: [
          {
            type: 'object',
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
          {
            type: 'object',
            properties: {
              data: {
                type: 'object',
                description:
                  'The program, having a default connector selection and\na bunch of rules. Also can hold arbitrary metadata.',
                properties: {
                  defaultSelection: {
                    $ref: '#/$defs/connector_selection',
                  },
                  metadata: {
                    type: 'object',
                  },
                  rules: {
                    type: 'object',
                    description:
                      'Represents a rule\n\n```text\nrule_name: [stripe, adyen, checkout]\n{\npayment.method = card {\npayment.method.cardtype = (credit, debit) {\npayment.method.network = (amex, rupay, diners)\n}\n\npayment.method.cardtype = credit\n}\n}\n```',
                    properties: {
                      connectorSelection: {
                        $ref: '#/$defs/connector_selection',
                      },
                      name: {
                        type: 'string',
                      },
                      statements: {
                        type: 'array',
                        items: {
                          $ref: '#/$defs/if_statement',
                        },
                      },
                    },
                    required: ['connectorSelection', 'name', 'statements'],
                  },
                },
                required: ['defaultSelection', 'metadata', 'rules'],
              },
              type: {
                type: 'string',
                enum: ['advanced'],
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
                  defaultSelection: {
                    type: 'object',
                    description:
                      'Struct representing the output configuration for the 3DS Decision Rule Engine.',
                    properties: {
                      decision: {
                        $ref: '#/$defs/three_ds_decision',
                      },
                    },
                    required: ['decision'],
                  },
                  metadata: {
                    type: 'object',
                  },
                  rules: {
                    type: 'object',
                    properties: {
                      connectorSelection: {
                        $ref: '#/$defs/three_ds_decision',
                      },
                      name: {
                        type: 'string',
                      },
                      statements: {
                        type: 'array',
                        items: {
                          $ref: '#/$defs/if_statement',
                        },
                      },
                    },
                    required: ['connectorSelection', 'name', 'statements'],
                  },
                },
                required: ['defaultSelection', 'metadata', 'rules'],
              },
              type: {
                type: 'string',
                enum: ['three_ds_decision_rule'],
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
      connector_selection: {
        anyOf: [
          {
            type: 'object',
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
      if_statement: {
        type: 'object',
        description:
          'Represents an IF statement with conditions and optional nested IF statements\n\n```text\npayment.method = card {\npayment.method.cardtype = (credit, debit) {\npayment.method.network = (amex, rupay, diners)\n}\n}\n```',
        properties: {
          condition: {
            type: 'array',
            items: {
              type: 'object',
              description: 'Represents a single comparison condition.',
              properties: {
                comparison: {
                  type: 'string',
                  description: 'Conditional comparison type',
                  enum: [
                    'equal',
                    'not_equal',
                    'less_than',
                    'less_than_equal',
                    'greater_than',
                    'greater_than_equal',
                  ],
                },
                lhs: {
                  type: 'string',
                  description:
                    'The left hand side which will always be a domain input identifier like "payment.method.cardtype"',
                },
                metadata: {
                  type: 'object',
                  description:
                    'Additional metadata that the Static Analyzer and Backend does not touch.\nThis can be used to store useful information for the frontend and is required for communication\nbetween the static analyzer and the frontend.',
                },
                value: {
                  anyOf: [
                    {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['number'],
                        },
                        value: {
                          type: 'integer',
                          description: 'This Unit struct represents MinorUnit in which core amount works',
                        },
                      },
                      required: ['type', 'value'],
                    },
                    {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['enum_variant'],
                        },
                        value: {
                          type: 'string',
                          description: 'Represents an enum variant',
                        },
                      },
                      required: ['type', 'value'],
                    },
                    {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['metadata_variant'],
                        },
                        value: {
                          type: 'object',
                          properties: {
                            key: {
                              type: 'string',
                            },
                            value: {
                              type: 'string',
                            },
                          },
                          required: ['key', 'value'],
                        },
                      },
                      required: ['type', 'value'],
                    },
                    {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['str_value'],
                        },
                        value: {
                          type: 'string',
                          description: 'Represents a arbitrary String value',
                        },
                      },
                      required: ['type', 'value'],
                    },
                    {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['number_array'],
                        },
                        value: {
                          type: 'array',
                          description:
                            'Represents an array of numbers. This is basically used for\n"one of the given numbers" operations\neg: payment.method.amount = (1, 2, 3)',
                          items: {
                            type: 'integer',
                            description: 'This Unit struct represents MinorUnit in which core amount works',
                          },
                        },
                      },
                      required: ['type', 'value'],
                    },
                    {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['enum_variant_array'],
                        },
                        value: {
                          type: 'array',
                          description:
                            'Similar to NumberArray but for enum variants\neg: payment.method.cardtype = (debit, credit)',
                          items: {
                            type: 'string',
                          },
                        },
                      },
                      required: ['type', 'value'],
                    },
                    {
                      type: 'object',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['number_comparison_array'],
                        },
                        value: {
                          type: 'array',
                          description:
                            'Like a number array but can include comparisons. Useful for\nconditions like "500 < amount < 1000"\neg: payment.amount = (> 500, < 1000)',
                          items: {
                            type: 'object',
                            description: 'Represents a number comparison for "NumberComparisonArrayValue"',
                            properties: {
                              comparisonType: {
                                type: 'string',
                                description: 'Conditional comparison type',
                                enum: [
                                  'equal',
                                  'not_equal',
                                  'less_than',
                                  'less_than_equal',
                                  'greater_than',
                                  'greater_than_equal',
                                ],
                              },
                              number: {
                                type: 'integer',
                                description:
                                  'This Unit struct represents MinorUnit in which core amount works',
                              },
                            },
                            required: ['comparisonType', 'number'],
                          },
                        },
                      },
                      required: ['type', 'value'],
                    },
                  ],
                  description: 'Represents a value in the DSL',
                },
              },
              required: ['comparison', 'lhs', 'metadata', 'value'],
            },
          },
          nested: {
            type: 'array',
            items: {
              $ref: '#/$defs/if_statement',
            },
          },
        },
        required: ['condition'],
      },
      three_ds_decision: {
        type: 'string',
        description: 'Enum representing the possible outcomes of the 3DS Decision Rule Engine.',
        enum: [
          'no_three_ds',
          'challenge_requested',
          'challenge_preferred',
          'three_ds_exemption_requested_tra',
          'three_ds_exemption_requested_low_value',
          'issuer_three_ds_exemption_requested',
        ],
      },
      webhook_details: {
        type: 'object',
        properties: {
          payment_statuses_enabled: {
            type: 'array',
            description: 'List of payment statuses that triggers a webhook for payment intents',
            items: {
              $ref: '#/$defs/intent_status',
            },
          },
          refund_statuses_enabled: {
            type: 'array',
            description: 'List of refund statuses that triggers a webhook for refunds',
            items: {
              $ref: '#/$defs/intent_status',
            },
          },
          payment_created_enabled: {
            type: 'boolean',
            description:
              'If this property is true, a webhook message is posted whenever a new payment is created',
          },
          payment_failed_enabled: {
            type: 'boolean',
            description: 'If this property is true, a webhook message is posted whenever a payment fails',
          },
          payment_succeeded_enabled: {
            type: 'boolean',
            description:
              'If this property is true, a webhook message is posted whenever a payment is successful',
          },
          payout_statuses_enabled: {
            type: 'array',
            description: 'List of payout statuses that triggers a webhook for payouts',
            items: {
              $ref: '#/$defs/status',
            },
          },
          webhook_password: {
            type: 'string',
            description: 'The password for Webhook login',
          },
          webhook_url: {
            type: 'string',
            description: 'The url for the webhook endpoint',
          },
          webhook_username: {
            type: 'string',
            description: 'The user name for Webhook login',
          },
          webhook_version: {
            type: 'string',
            description: 'The version for Webhook',
          },
        },
        required: ['payment_statuses_enabled', 'refund_statuses_enabled'],
      },
      intent_status: {
        type: 'string',
        description:
          'Represents the overall status of a payment intent.\nThe status transitions through various states depending on the payment method, confirmation, capture method, and any subsequent actions (like customer authentication or manual capture).',
        enum: [
          'succeeded',
          'failed',
          'cancelled',
          'processing',
          'requires_customer_action',
          'requires_merchant_action',
          'requires_payment_method',
          'requires_confirmation',
          'requires_capture',
          'partially_captured',
          'partially_captured_and_capturable',
          'conflicted',
        ],
      },
      status: {
        type: 'string',
        enum: [
          'success',
          'failed',
          'cancelled',
          'initiated',
          'expired',
          'reversed',
          'pending',
          'ineligible',
          'requires_creation',
          'requires_confirmation',
          'requires_payout_method_data',
          'requires_fulfillment',
          'requires_vendor_account_creation',
        ],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.businessProfile.create(account_id, body));
};

export default { metadata, tool, handler };
