// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payment_methods/{method_id}',
  operationId: 'Retrieve a Payment method',
};

export const tool: Tool = {
  name: 'retrieve_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a payment method of a customer.",
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
  return asTextContentResult(await client.paymentMethods.retrieve(method_id));
};

export default { metadata, tool, handler };
