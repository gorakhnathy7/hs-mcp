// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'routing',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/routing/{routing_algorithm_id}/activate',
  operationId: 'Activate a routing config',
};

export const tool: Tool = {
  name: 'activate_routing',
  description: 'Activate a routing config',
  inputSchema: {
    type: 'object',
    properties: {
      routing_algorithm_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { routing_algorithm_id, ...body } = args as any;
  return asTextContentResult(await client.routing.activate(routing_algorithm_id));
};

export default { metadata, tool, handler };
