// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'blocklist',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/blocklist',
  operationId: 'Block a Fingerprint',
};

export const tool: Tool = {
  name: 'create_blocklist',
  description: '',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          data: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['card_bin'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          data: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['fingerprint'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          data: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['extended_card_bin'],
          },
        },
      },
    ],
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.blocklist.create(body));
};

export default { metadata, tool, handler };
