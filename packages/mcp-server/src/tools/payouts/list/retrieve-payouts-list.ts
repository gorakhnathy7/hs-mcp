// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payouts.list',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payouts/list',
  operationId: 'List payouts using generic constraints',
};

export const tool: Tool = {
  name: 'retrieve_payouts_list',
  description: 'Payouts - List',
  inputSchema: {
    type: 'object',
    properties: {
      created: {
        type: 'string',
        description: 'The time at which payout is created',
      },
      customer_id: {
        type: 'string',
        description: 'The identifier for customer',
      },
      ending_before: {
        type: 'string',
        description: 'A cursor for use in pagination, fetch the previous list before some object',
      },
      limit: {
        type: 'string',
        description: 'limit on the number of objects to return',
      },
      starting_after: {
        type: 'string',
        description: 'A cursor for use in pagination, fetch the next list after some object',
      },
      time_range: {
        type: 'string',
        description:
          'The time range for which objects are needed. TimeRange has two fields start_time and end_time from which objects can be filtered as per required scenarios (created_at, time less than, greater than etc).',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.payouts.list.retrieve(body));
};

export default { metadata, tool, handler };
