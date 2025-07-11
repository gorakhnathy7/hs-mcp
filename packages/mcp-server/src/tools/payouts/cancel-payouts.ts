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
  httpPath: '/payouts/{payout_id}/cancel',
  operationId: 'Cancel a Payout',
};

export const tool: Tool = {
  name: 'cancel_payouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPayouts - Cancel",
  inputSchema: {
    type: 'object',
    properties: {
      payout_id: {
        type: 'string',
        description:
          'Unique identifier for the payout. This ensures idempotency for multiple payouts\nthat have been done by a single merchant. This field is auto generated and is returned in the API response.',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { payout_id, ...body } = args as any;
  return asTextContentResult(await client.payouts.cancel(payout_id, body));
};

export default { metadata, tool, handler };
