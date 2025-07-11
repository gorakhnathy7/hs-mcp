// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'mandates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/mandates/{mandate_id}',
  operationId: 'Retrieve a Mandate',
};

export const tool: Tool = {
  name: 'retrieve_mandates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a mandate created using the Payments/Create API\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/mandate_response',\n  $defs: {\n    mandate_response: {\n      type: 'object',\n      properties: {\n        mandate_id: {\n          type: 'string',\n          description: 'The identifier for mandate'\n        },\n        payment_method: {\n          type: 'string',\n          description: 'The payment method'\n        },\n        payment_method_id: {\n          type: 'string',\n          description: 'The identifier for payment method'\n        },\n        status: {\n          $ref: '#/$defs/mandate_status'\n        },\n        card: {\n          type: 'object',\n          properties: {\n            card_exp_month: {\n              type: 'string',\n              description: 'The expiry month of card'\n            },\n            card_exp_year: {\n              type: 'string',\n              description: 'The expiry year of card'\n            },\n            card_fingerprint: {\n              type: 'string',\n              description: 'A unique identifier alias to identify a particular card'\n            },\n            card_holder_name: {\n              type: 'string',\n              description: 'The card holder name'\n            },\n            card_isin: {\n              type: 'string',\n              description: 'The first 6 digits of card'\n            },\n            card_issuer: {\n              type: 'string',\n              description: 'The bank that issued the card'\n            },\n            card_network: {\n              $ref: '#/$defs/card_network'\n            },\n            card_token: {\n              type: 'string',\n              description: 'The token from card locker'\n            },\n            card_type: {\n              type: 'string',\n              description: 'The type of the payment card'\n            },\n            issuer_country: {\n              type: 'string',\n              description: 'The country code in in which the card was issued'\n            },\n            last4_digits: {\n              type: 'string',\n              description: 'The last 4 digits of card'\n            },\n            nick_name: {\n              type: 'string',\n              description: 'The nick_name of the card holder'\n            },\n            scheme: {\n              type: 'string',\n              description: 'The card scheme network for the particular card'\n            }\n          },\n          required: []\n        },\n        customer_acceptance: {\n          $ref: '#/$defs/customer_acceptance'\n        },\n        payment_method_type: {\n          type: 'string',\n          description: 'The payment method type'\n        }\n      },\n      required: [        'mandate_id',\n        'payment_method',\n        'payment_method_id',\n        'status'\n      ]\n    },\n    mandate_status: {\n      type: 'string',\n      description: 'The status of the mandate, which indicates whether it can be used to initiate a payment.',\n      enum: [        'active',\n        'inactive',\n        'pending',\n        'revoked'\n      ]\n    },\n    card_network: {\n      type: 'string',\n      description: 'Indicates the card network.',\n      enum: [        'Visa',\n        'Mastercard',\n        'AmericanExpress',\n        'JCB',\n        'DinersClub',\n        'Discover',\n        'CartesBancaires',\n        'UnionPay',\n        'Interac',\n        'RuPay',\n        'Maestro',\n        'Star',\n        'Pulse',\n        'Accel',\n        'Nyce'\n      ]\n    },\n    customer_acceptance: {\n      type: 'object',\n      description: 'This \"CustomerAcceptance\" object is passed during Payments-Confirm request, it enlists the type, time, and mode of acceptance properties related to an acceptance done by the customer. The customer_acceptance sub object is usually passed by the SDK or client.',\n      properties: {\n        acceptance_type: {\n          type: 'string',\n          description: 'This is used to indicate if the mandate was accepted online or offline',\n          enum: [            'online',\n            'offline'\n          ]\n        },\n        accepted_at: {\n          type: 'string',\n          description: 'Specifying when the customer acceptance was provided',\n          format: 'date-time'\n        },\n        online: {\n          type: 'object',\n          description: 'Details of online mandate',\n          properties: {\n            ip_address: {\n              type: 'string',\n              description: 'Ip address of the customer machine from which the mandate was created'\n            },\n            user_agent: {\n              type: 'string',\n              description: 'The user-agent of the customer\\'s browser'\n            }\n          },\n          required: [            'ip_address',\n            'user_agent'\n          ]\n        }\n      },\n      required: [        'acceptance_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      mandate_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { mandate_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.mandates.retrieve(mandate_id)));
};

export default { metadata, tool, handler };
