// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payments/list',
  operationId: 'List all Payments',
};

export const tool: Tool = {
  name: 'list_payments',
  description: 'To list the *payments*',
  inputSchema: {
    type: 'object',
    properties: {
      created: {
        type: 'string',
        description: 'The time at which payment is created',
        format: 'date-time',
      },
      created_gt: {
        type: 'string',
        description: 'Time greater than the payment created time',
        format: 'date-time',
      },
      created_gte: {
        type: 'string',
        description: 'Time greater than or equals to the payment created time',
        format: 'date-time',
      },
      created_lt: {
        type: 'string',
        description: 'Time less than the payment created time',
        format: 'date-time',
      },
      created_lte: {
        type: 'string',
        description: 'Time less than or equals to the payment created time',
        format: 'date-time',
      },
      customer_id: {
        type: 'string',
        description: 'The identifier for the customer',
      },
      ending_before: {
        type: 'string',
        description: 'A cursor for use in pagination, fetch the previous list before some object',
      },
      limit: {
        type: 'integer',
        description: 'Limit on the number of objects to return',
      },
      starting_after: {
        type: 'string',
        description: 'A cursor for use in pagination, fetch the next list after some object',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.payments.list(body));
};

export default { metadata, tool, handler };
