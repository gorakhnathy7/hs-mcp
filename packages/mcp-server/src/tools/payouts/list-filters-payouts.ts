// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payouts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payouts/filter',
  operationId: 'List available payout filters',
};

export const tool: Tool = {
  name: 'list_filters_payouts',
  description: 'Payouts - List available filters',
  inputSchema: {
    type: 'object',
    properties: {
      start_time: {
        type: 'string',
        description:
          'The start time to filter payments list or to get list of filters. To get list of filters start time is needed to be passed',
        format: 'date-time',
      },
      end_time: {
        type: 'string',
        description:
          'The end time to filter payments list or to get list of filters. If not passed the default time is now',
        format: 'date-time',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.payouts.listFilters(body));
};

export default { metadata, tool, handler };
