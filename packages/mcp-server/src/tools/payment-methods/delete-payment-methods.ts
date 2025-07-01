// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/payment_methods/{method_id}',
  operationId: 'Delete a Payment method',
};

export const tool: Tool = {
  name: 'delete_payment_methods',
  description: 'Deletes a payment method of a customer.',
  inputSchema: {
    type: 'object',
    properties: {
      method_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { method_id, ...body } = args as any;
  return asTextContentResult(await client.paymentMethods.delete(method_id));
};

export default { metadata, tool, handler };
