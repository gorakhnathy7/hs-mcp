// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.business_profile.dynamic_routing.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/account/{account_id}/business_profile/{profile_id}/dynamic_routing/contracts/toggle',
  operationId: 'Toggle contract routing algorithm',
};

export const tool: Tool = {
  name: 'toggle_dynamic_routing_business_profile_accounts_contracts',
  description: 'Create a Contract based dynamic routing algorithm',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
      },
      enable: {
        $ref: '#/$defs/dynamic_routing_features',
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
    $defs: {
      dynamic_routing_features: {
        type: 'string',
        enum: ['metrics', 'dynamic_connector_selection', 'none'],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { profile_id, ...body } = args as any;
  return asTextContentResult(
    await client.accounts.businessProfile.dynamicRouting.contracts.toggle(profile_id, body),
  );
};

export default { metadata, tool, handler };
