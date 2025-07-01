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
  httpPath: '/api_keys/{merchant_id}/{key_id}',
  operationId: 'Retrieve an API Key',
};

export const tool: Tool = {
  name: 'retrieve_api_keys',
  description: 'Retrieve information about the specified API Key.',
  inputSchema: {
    type: 'object',
    properties: {
      merchant_id: {
        type: 'string',
      },
      key_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { key_id, ...body } = args as any;
  return asTextContentResult(await client.apiKeys.retrieve(key_id, body));
};

export default { metadata, tool, handler };
