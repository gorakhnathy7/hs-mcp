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
  httpPath: '/customers/{customer_id}',
  operationId: 'Retrieve a Customer',
};

export const tool: Tool = {
  name: 'retrieve_customers',
  description: "Retrieves a customer's details.",
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
  return asTextContentResult(await client.customers.retrieve(customer_id));
};

export default { metadata, tool, handler };
