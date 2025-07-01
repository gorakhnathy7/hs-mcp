// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api_keys/{merchant_id}/{key_id}',
  operationId: 'Revoke an API Key',
};

export const tool: Tool = {
  name: 'revoke_api_keys',
  description:
    'Revoke the specified API Key. Once revoked, the API Key can no longer be used for\nauthenticating with our APIs.',
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
  return asTextContentResult(await client.apiKeys.revoke(key_id, body));
};

export default { metadata, tool, handler };
