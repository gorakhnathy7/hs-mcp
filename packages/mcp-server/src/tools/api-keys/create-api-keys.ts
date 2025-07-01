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
  httpPath: '/api_keys/{merchant_id}',
  operationId: 'Create an API Key',
};

export const tool: Tool = {
  name: 'create_api_keys',
  description:
    'Create a new API Key for accessing our APIs from your servers. The plaintext API Key will be\ndisplayed only once on creation, so ensure you store it securely.',
  inputSchema: {
    type: 'object',
    properties: {
      merchant_id: {
        type: 'string',
      },
      expiration: {
        $ref: '#/$defs/api_key_expiration',
      },
      name: {
        type: 'string',
        description: 'A unique name for the API Key to help you identify it.',
      },
      description: {
        type: 'string',
        description: 'A description to provide more context about the API Key.',
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
  const { merchant_id, ...body } = args as any;
  return asTextContentResult(await client.apiKeys.create(merchant_id, body));
};

export default { metadata, tool, handler };
