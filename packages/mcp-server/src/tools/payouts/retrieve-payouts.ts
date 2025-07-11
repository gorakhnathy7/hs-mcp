// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payouts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payouts/{payout_id}',
  operationId: 'Retrieve a Payout',
};

export const tool: Tool = {
  name: 'retrieve_payouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPayouts - Retrieve",
  inputSchema: {
    type: 'object',
    properties: {
      payout_id: {
        type: 'string',
      },
      force_sync: {
        type: 'boolean',
        description: 'Sync with the connector to get the payout details (defaults to false)',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { payout_id, ...body } = args as any;
  return asTextContentResult(await client.payouts.retrieve(payout_id, body));
};

export default { metadata, tool, handler };
