// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'blocklist',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/blocklist',
  operationId: 'List Blocked fingerprints of a particular kind',
};

export const tool: Tool = {
  name: 'retrieve_blocklist',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data_kind: {
        $ref: '#/$defs/blocklist_data_kind',
      },
    },
    $defs: {
      blocklist_data_kind: {
        type: 'string',
        enum: ['payment_method', 'card_bin', 'extended_card_bin'],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.blocklist.retrieve(body));
};

export default { metadata, tool, handler };
