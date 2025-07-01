// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api_keys/{merchant_id}/list',
  operationId: 'List all API Keys associated with a merchant account',
};

export const tool: Tool = {
  name: 'list_api_keys',
  description: 'List all the API Keys associated to a merchant account.',
  inputSchema: {
    type: 'object',
    properties: {
      merchant_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of API Keys to include in the response',
      },
      skip: {
        type: 'integer',
        description: 'The number of API Keys to skip when retrieving the list of API keys.',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { merchant_id, ...body } = args as any;
  return asTextContentResult(await client.apiKeys.list(merchant_id, body));
};

export default { metadata, tool, handler };
