// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.business_profile.dynamic_routing.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath:
    '/account/{account_id}/business_profile/{profile_id}/dynamic_routing/contracts/config/{algorithm_id}',
  operationId: 'Update contract based dynamic routing configs',
};

export const tool: Tool = {
  name: 'update_config_dynamic_routing_business_profile_accounts_contracts',
  description: 'Update contract based dynamic routing algorithm',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
      },
      algorithm_id: {
        type: 'string',
      },
      config: {
        type: 'object',
        properties: {
          constants: {
            type: 'array',
            items: {
              type: 'number',
            },
          },
          time_scale: {
            type: 'string',
            enum: ['day', 'month'],
          },
        },
        required: [],
      },
      label_info: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            label: {
              type: 'string',
            },
            mca_id: {
              type: 'string',
            },
            target_count: {
              type: 'integer',
            },
            target_time: {
              type: 'integer',
            },
          },
          required: ['label', 'mca_id', 'target_count', 'target_time'],
        },
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { algorithm_id, ...body } = args as any;
  return asTextContentResult(
    await client.accounts.businessProfile.dynamicRouting.contracts.updateConfig(algorithm_id, body),
  );
};

export default { metadata, tool, handler };
