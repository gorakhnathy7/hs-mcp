// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.business_profile',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/account/{account_id}/business_profile/{profile_id}',
  operationId: 'Delete the Profile',
};

export const tool: Tool = {
  name: 'delete_accounts_business_profile',
  description: 'Delete the *profile*',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { profile_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.businessProfile.delete(profile_id, body));
};

export default { metadata, tool, handler };
