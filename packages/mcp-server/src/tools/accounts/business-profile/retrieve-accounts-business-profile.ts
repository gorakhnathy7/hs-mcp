// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.business_profile',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/account/{account_id}/business_profile/{profile_id}',
  operationId: 'Retrieve a Profile',
};

export const tool: Tool = {
  name: 'retrieve_accounts_business_profile',
  description: 'Retrieve existing *profile*',
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
    required: ['account_id', 'profile_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { profile_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.businessProfile.retrieve(profile_id, body));
};

export default { metadata, tool, handler };
