// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payment_methods/{method_id}/update',
  operationId: 'Update a Payment method',
};

export const tool: Tool = {
  name: 'update_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing payment method of a customer.\nThis API is useful for use cases such as updating the card number for expired cards to prevent discontinuity in recurring payments.",
  inputSchema: {
    type: 'object',
    properties: {
      method_id: {
        type: 'string',
      },
      card: {
        type: 'object',
        properties: {
          card_exp_month: {
            type: 'string',
            description: 'Card Expiry Month',
          },
          card_exp_year: {
            type: 'string',
            description: 'Card Expiry Year',
          },
          card_holder_name: {
            type: 'string',
            description: 'Card Holder Name',
          },
          nick_name: {
            type: 'string',
            description: "Card Holder's Nick Name",
          },
        },
        required: ['card_exp_month', 'card_exp_year', 'card_holder_name'],
      },
      client_secret: {
        type: 'string',
        description:
          'This is a 15 minute expiry token which shall be used from the client to authenticate and perform sessions from the SDK',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { method_id, ...body } = args as any;
  return asTextContentResult(await client.paymentMethods.update(method_id, body));
};

export default { metadata, tool, handler };
