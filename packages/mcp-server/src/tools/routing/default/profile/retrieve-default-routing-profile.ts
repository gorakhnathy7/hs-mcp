// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'routing.default.profile',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/routing/default/profile',
  operationId: 'Retrieve default configs for all profiles',
};

export const tool: Tool = {
  name: 'retrieve_default_routing_profile',
  description: 'Retrieve default config for profiles',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.routing.default.profile.retrieve());
};

export default { metadata, tool, handler };
