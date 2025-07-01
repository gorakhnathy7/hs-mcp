// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'blocklist',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/blocklist/toggle',
  operationId: 'Toggle blocklist guard for a particular merchant',
};

export const tool: Tool = {
  name: 'toggle_blocklist',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'boolean',
        description: 'Boolean value to enable/disable blocklist',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.blocklist.toggle(body));
};

export default { metadata, tool, handler };
