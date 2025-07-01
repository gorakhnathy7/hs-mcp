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
  httpPath: '/routing',
  operationId: 'List routing configs',
};

export const tool: Tool = {
  name: 'list_routing',
  description: 'List all routing configs',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of records to be returned',
      },
      offset: {
        type: 'integer',
        description: 'The record offset from which to start gathering of results',
      },
      profile_id: {
        type: 'string',
        description: 'The unique identifier for a merchant profile',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.routing.list(body));
};

export default { metadata, tool, handler };
