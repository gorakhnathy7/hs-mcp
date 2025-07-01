// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/events/{merchant_id}/{event_id}/attempts',
  operationId: 'List all delivery attempts for an Event',
};

export const tool: Tool = {
  name: 'delivery_attempts_events',
  description: 'List all delivery attempts for the specified Event.',
  inputSchema: {
    type: 'object',
    properties: {
      merchant_id: {
        type: 'string',
      },
      event_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { event_id, ...body } = args as any;
  return asTextContentResult(await client.events.deliveryAttempts(event_id, body));
};

export default { metadata, tool, handler };
