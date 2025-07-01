// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'routing.default',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/routing/default',
  operationId: 'Retrieve default fallback config',
};

export const tool: Tool = {
  name: 'retrieve_routing_default',
  description: 'Retrieve default fallback config',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.routing.default.retrieve());
};

export default { metadata, tool, handler };
