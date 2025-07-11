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
  httpPath: '/account/{account_id}/business_profile/{profile_id}',
  operationId: 'Retrieve a Profile',
};

export const tool: Tool = {
  name: 'retrieve_accounts_business_profile',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve existing *profile*",
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
  return asTextContentResult(await client.accounts.businessProfile.retrieve(profile_id, body));
};

export default { metadata, tool, handler };
