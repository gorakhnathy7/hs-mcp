// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}',
  operationId: 'Update a Merchant Account',
};

export const tool: Tool = {
  name: 'update_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates details of an existing merchant account. Helpful in updating merchant details such as email, contact details, or other configuration details like webhook, routing algorithm etc",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      merchant_id: {
        type: 'string',
        description: 'The identifier for the Merchant Account',
      },
      default_profile: {
        type: 'string',
        description: 'The default profile that must be used for creating merchant accounts and payments',
      },
      enable_payment_response_hash: {
        type: 'boolean',
        description: 'A boolean value to indicate if payment response hash needs to be enabled',
      },
      frm_routing_algorithm: {
        type: 'object',
        description: "The frm routing algorithm to be used for routing payments to desired FRM's",
      },
      locker_id: {
        type: 'string',
        description: 'An identifier for the vault used to store payment method information.',
      },
      merchant_details: {
        $ref: '#/$defs/merchant_details',
      },
      merchant_name: {
        type: 'string',
        description: 'Name of the Merchant Account',
      },
      metadata: {
        type: 'object',
        description: 'Metadata is useful for storing additional, unstructured information on an object.',
      },
      parent_merchant_id: {
        type: 'string',
        description: 'Refers to the Parent Merchant ID if the merchant being created is a sub-merchant',
      },
      payment_response_hash_key: {
        type: 'string',
        description:
          'Refers to the hash key used for calculating the signature for webhooks and redirect response.',
      },
      payout_routing_algorithm: {
        $ref: '#/$defs/static_routing_algorithm',
      },
      pm_collect_link_config: {
        $ref: '#/$defs/business_collect_link_config',
      },
      primary_business_details: {
        type: 'array',
        description: 'Details about the primary business unit of the merchant account',
        items: {
          $ref: '#/$defs/primary_business_details',
        },
      },
      publishable_key: {
        type: 'string',
        description: 'API key that will be used for server side API access',
      },
      redirect_to_merchant_with_http_post: {
        type: 'boolean',
        description: 'A boolean value to indicate if redirect to merchant with http post needs to be enabled',
      },
      return_url: {
        type: 'string',
        description: 'The URL to redirect after the completion of the operation',
      },
      sub_merchants_enabled: {
        type: 'boolean',
        description:
          'A boolean value to indicate if the merchant is a sub-merchant under a master or a parent merchant. By default, its value is false.',
      },
      webhook_details: {
        $ref: '#/$defs/webhook_details',
      },
    },
    $defs: {
      merchant_details: {
        type: 'object',
        properties: {
          about_business: {
            type: 'string',
            description: "A brief description about merchant's business",
          },
          address: {
            $ref: '#/$defs/address_details',
          },
          primary_contact_person: {
            type: 'string',
            description: "The merchant's primary contact name",
          },
          primary_email: {
            type: 'string',
            description: "The merchant's primary email address",
          },
          primary_phone: {
            type: 'string',
            description: "The merchant's primary phone number",
          },
          secondary_contact_person: {
            type: 'string',
            description: "The merchant's secondary contact name",
          },
          secondary_email: {
            type: 'string',
            description: "The merchant's secondary email address",
          },
          secondary_phone: {
            type: 'string',
            description: "The merchant's secondary phone number",
          },
          website: {
            type: 'string',
            description: 'The business website of the merchant',
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
      business_collect_link_config: {
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
      primary_business_details: {
        type: 'object',
        properties: {
          business: {
            type: 'string',
          },
          country: {
            $ref: '#/$defs/country_alpha2',
          },
        },
        required: ['business', 'country'],
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
  return asTextContentResult(await client.accounts.update(account_id, body));
};

export default { metadata, tool, handler };
