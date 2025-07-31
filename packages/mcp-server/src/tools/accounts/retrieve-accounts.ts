// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}',
  operationId: 'Retrieve a Merchant Account',
};

export const tool: Tool = {
  name: 'retrieve_accounts',
  description: 'Retrieve a *merchant* account details.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.retrieve(account_id));
};

export default { metadata, tool, handler };
