// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'routing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/routing/{routing_algorithm_id}',
  operationId: 'Retrieve a routing config',
};

export const tool: Tool = {
  name: 'retrieve_routing',
  description: 'Retrieve a routing algorithm',
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
  return asTextContentResult(await client.routing.retrieve(routing_algorithm_id));
};

export default { metadata, tool, handler };
