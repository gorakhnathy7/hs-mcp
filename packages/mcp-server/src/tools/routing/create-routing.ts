// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'routing',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/routing',
  operationId: 'Create a routing config',
};

export const tool: Tool = {
  name: 'create_routing',
  description: 'Create a routing config',
  inputSchema: {
    type: 'object',
    properties: {
      algorithm: {
        $ref: '#/$defs/static_routing_algorithm',
      },
      description: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
      },
      transaction_type: {
        $ref: '#/$defs/transaction_type',
      },
    },
    $defs: {
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
      transaction_type: {
        type: 'string',
        enum: ['payment', 'payout', 'three_ds_authentication'],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.routing.create(body));
};

export default { metadata, tool, handler };
