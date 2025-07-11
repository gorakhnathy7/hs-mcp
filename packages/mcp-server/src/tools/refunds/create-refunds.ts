// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'refunds',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/refunds',
  operationId: 'Create a Refund',
};

export const tool: Tool = {
  name: 'create_refunds',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a refund against an already processed payment. In case of some processors, you can even opt to refund only a partial amount multiple times until the original charge amount has been refunded",
  inputSchema: {
    type: 'object',
    properties: {
      payment_id: {
        type: 'string',
        description: 'The payment id against which refund is to be initiated',
      },
      amount: {
        type: 'integer',
        description:
          'Total amount for which the refund is to be initiated. Amount for the payment in lowest denomination of the currency. (i.e) in cents for USD denomination, in paisa for INR denomination etc., If not provided, this will default to the full payment amount',
      },
      merchant_connector_details: {
        $ref: '#/$defs/merchant_connector_details_wrap',
      },
      merchant_id: {
        type: 'string',
        description: 'The identifier for the Merchant Account',
      },
      metadata: {
        type: 'object',
        description:
          'You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long. Metadata is useful for storing additional, structured information on an object.',
      },
      reason: {
        type: 'string',
        description:
          'Reason for the refund. Often useful for displaying to users and your customer support executive. In case the payment went through Stripe, this field needs to be passed with one of these enums: `duplicate`, `fraudulent`, or `requested_by_customer`',
      },
      refund_id: {
        type: 'string',
        description:
          'Unique Identifier for the Refund. This is to ensure idempotency for multiple partial refunds initiated against the same payment. If this is not passed by the merchant, this field shall be auto generated and provided in the API response. It is recommended to generate uuid(v4) as the refund_id.',
      },
      refund_type: {
        type: 'string',
        description: 'To indicate whether to refund needs to be instant or scheduled',
        enum: ['scheduled', 'instant'],
      },
      split_refunds: {
        $ref: '#/$defs/split_refund',
      },
    },
    $defs: {
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
      split_refund: {
        anyOf: [
          {
            type: 'object',
            properties: {
              stripe_split_refund: {
                type: 'object',
                description:
                  'Charge specific fields for controlling the revert of funds from either platform or connected account for Stripe. Check sub-fields for more details.',
                properties: {
                  revert_platform_fee: {
                    type: 'boolean',
                    description:
                      'Toggle for reverting the application fee that was collected for the payment.\nIf set to false, the funds are pulled from the destination account.',
                  },
                  revert_transfer: {
                    type: 'boolean',
                    description:
                      "Toggle for reverting the transfer that was made during the charge.\nIf set to false, the funds are pulled from the main platform's account.",
                  },
                },
                required: [],
              },
            },
            required: ['stripe_split_refund'],
          },
          {
            type: 'object',
            properties: {
              adyen_split_refund: {
                $ref: '#/$defs/adyen_split_data',
              },
            },
            required: ['adyen_split_refund'],
          },
          {
            type: 'object',
            properties: {
              xendit_split_refund: {
                $ref: '#/$defs/xendit_split_sub_merchant_data',
              },
            },
            required: ['xendit_split_refund'],
          },
        ],
        description:
          'Charge specific fields for controlling the revert of funds from either platform or connected account. Check sub-fields for more details.',
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
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.refunds.create(body));
};

export default { metadata, tool, handler };
