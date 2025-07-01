// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/customers/{customer_id}',
  operationId: 'Delete a Customer',
};

export const tool: Tool = {
  name: 'delete_customers',
  description: 'Delete a customer record.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { customer_id, ...body } = args as any;
  return asTextContentResult(await client.customers.delete(customer_id));
};

export default { metadata, tool, handler };
