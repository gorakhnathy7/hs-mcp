// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.business_profile',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/account/{account_id}/business_profile',
  operationId: 'List Profiles',
};

export const tool: Tool = {
  name: 'list_accounts_business_profile',
  description: 'Lists all the *profiles* under a merchant',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.businessProfile.list(account_id));
};

export default { metadata, tool, handler };
