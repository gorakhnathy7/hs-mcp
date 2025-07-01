// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'relay',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/relay/{relay_id}',
  operationId: 'Retrieve a Relay details',
};

export const tool: Tool = {
  name: 'retrieve_relay',
  description: 'Retrieves a relay details.',
  inputSchema: {
    type: 'object',
    properties: {
      relay_id: {
        type: 'string',
      },
      'X-Profile-Id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { relay_id, ...body } = args as any;
  return asTextContentResult(await client.relay.retrieve(relay_id, body));
};

export default { metadata, tool, handler };
