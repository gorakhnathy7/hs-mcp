// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/events/{merchant_id}/{event_id}/retry',
  operationId: 'Manually retry the delivery of an Event',
};

export const tool: Tool = {
  name: 'retry_events',
  description: 'Manually retry the delivery of the specified Event.',
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
  return asTextContentResult(await client.events.retry(event_id, body));
};

export default { metadata, tool, handler };
