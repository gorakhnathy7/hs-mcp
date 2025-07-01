// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api_keys/{merchant_id}/{key_id}',
  operationId: 'Update an API Key',
};

export const tool: Tool = {
  name: 'update_api_keys',
  description: 'Update information for the specified API Key.',
  inputSchema: {
    type: 'object',
    properties: {
      merchant_id: {
        type: 'string',
      },
      key_id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'A description to provide more context about the API Key.',
      },
      expiration: {
        $ref: '#/$defs/api_key_expiration',
      },
      name: {
        type: 'string',
        description: 'A unique name for the API Key to help you identify it.',
      },
    },
    $defs: {
      api_key_expiration: {
        anyOf: [
          {
            type: 'string',
            enum: ['never'],
          },
          {
            type: 'string',
            format: 'date-time',
          },
        ],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { key_id, ...body } = args as any;
  return asTextContentResult(await client.apiKeys.update(key_id, body));
};

export default { metadata, tool, handler };
