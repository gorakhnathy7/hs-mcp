// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/customers/{customer_id}/mandates',
  operationId: 'List Mandates for a Customer',
};

export const tool: Tool = {
  name: 'list_mandates_customers',
  description: 'Lists all the mandates for a particular customer id.',
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
  return asTextContentResult(await client.customers.listMandates(customer_id));
};

export default { metadata, tool, handler };
