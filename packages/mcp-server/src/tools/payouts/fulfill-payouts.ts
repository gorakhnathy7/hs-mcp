// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payouts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payouts/{payout_id}/fulfill',
  operationId: 'Fulfill a Payout',
};

export const tool: Tool = {
  name: 'fulfill_payouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPayouts - Fulfill",
  inputSchema: {
    type: 'object',
    properties: {
      path_payout_id: {
        type: 'string',
      },
      body_payout_id: {
        type: 'string',
        description:
          'Unique identifier for the payout. This ensures idempotency for multiple payouts\nthat have been done by a single merchant. This field is auto generated and is returned in the API response.',
      },
    },
    required: ['path_payout_id', 'body_payout_id'],
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { payout_id, ...body } = args as any;
  return asTextContentResult(await client.payouts.fulfill(payout_id, body));
};

export default { metadata, tool, handler };
