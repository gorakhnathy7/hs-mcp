// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/kv',
  operationId: 'Enable/Disable KV for a Merchant Account',
};

export const tool: Tool = {
  name: 'kv_accounts',
  description: 'Toggle KV mode for the Merchant Account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      kv_enabled: {
        type: 'boolean',
        description: 'Status of KV for the specific merchant',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.kv(account_id, body));
};

export default { metadata, tool, handler };
