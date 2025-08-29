// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.connectors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/account/{account_id}/connectors',
  operationId: 'List all Merchant Connectors',
};

export const tool: Tool = {
  name: 'list_accounts_connectors',
  description: 'List Merchant Connector Details for the merchant',
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
  return asTextContentResult(await client.accounts.connectors.list(account_id));
};

export default { metadata, tool, handler };
