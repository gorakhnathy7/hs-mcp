// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'profile_acquirers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/profile_acquirers/{profile_id}/{profile_acquirer_id}',
  operationId: 'Update a Profile Acquirer',
};

export const tool: Tool = {
  name: 'update_profile_acquirers',
  description: 'Update a Profile Acquirer for accessing our APIs from your servers.',
  inputSchema: {
    type: 'object',
    properties: {
      profile_id: {
        type: 'string',
      },
      profile_acquirer_id: {
        type: 'string',
      },
      acquirer_assigned_merchant_id: {
        type: 'string',
      },
      acquirer_bin: {
        type: 'string',
      },
      acquirer_fraud_rate: {
        type: 'number',
      },
      acquirer_ica: {
        type: 'string',
      },
      merchant_country_code: {
        type: 'string',
      },
      merchant_name: {
        type: 'string',
      },
      network: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { profile_acquirer_id, ...body } = args as any;
  return asTextContentResult(await client.profileAcquirers.update(profile_acquirer_id, body));
};

export default { metadata, tool, handler };
