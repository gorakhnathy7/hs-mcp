// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.business_profile.dynamic_routing.success_based',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath:
    '/account/{account_id}/business_profile/{profile_id}/dynamic_routing/success_based/config/{algorithm_id}',
  operationId: 'Update success based dynamic routing configs',
};

export const tool: Tool = {
  name: 'update_config_dynamic_routing_business_profile_accounts_success_based',
  description: 'Update success based dynamic routing algorithm',
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
      decision_engine_configs: {
        type: 'object',
        properties: {
          defaultBucketSize: {
            type: 'integer',
          },
          defaultGatewayExtraScore: {
            type: 'array',
            items: {
              $ref: '#/$defs/decision_engine_gateway_wise_extra_score',
            },
          },
          defaultHedgingPercent: {
            type: 'number',
          },
          defaultLatencyThreshold: {
            type: 'number',
          },
          defaultLowerResetFactor: {
            type: 'number',
          },
          defaultUpperResetFactor: {
            type: 'number',
          },
          subLevelInputConfig: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                bucketSize: {
                  type: 'integer',
                },
                gatewayExtraScore: {
                  type: 'array',
                  items: {
                    $ref: '#/$defs/decision_engine_gateway_wise_extra_score',
                  },
                },
                hedgingPercent: {
                  type: 'number',
                },
                latencyThreshold: {
                  type: 'number',
                },
                lowerResetFactor: {
                  type: 'number',
                },
                paymentMethod: {
                  type: 'string',
                },
                paymentMethodType: {
                  type: 'string',
                },
                upperResetFactor: {
                  type: 'number',
                },
              },
              required: [],
            },
          },
        },
        required: [],
      },
      config: {
        type: 'object',
        properties: {
          current_block_threshold: {
            type: 'object',
            properties: {
              duration_in_mins: {
                type: 'integer',
              },
              max_total_count: {
                type: 'integer',
              },
            },
            required: [],
          },
          default_success_rate: {
            type: 'number',
          },
          exploration_percent: {
            type: 'number',
          },
          max_aggregates_size: {
            type: 'integer',
          },
          min_aggregates_size: {
            type: 'integer',
          },
          shuffle_on_tie_during_exploitation: {
            type: 'boolean',
          },
          specificity_level: {
            type: 'string',
            enum: ['merchant', 'global'],
          },
        },
        required: [],
      },
      params: {
        type: 'array',
        items: {
          $ref: '#/$defs/dynamic_routing_config_params',
        },
      },
    },
    $defs: {
      decision_engine_gateway_wise_extra_score: {
        type: 'object',
        properties: {
          gatewayName: {
            type: 'string',
          },
          gatewaySigmaFactor: {
            type: 'number',
          },
        },
        required: ['gatewayName', 'gatewaySigmaFactor'],
      },
      dynamic_routing_config_params: {
        type: 'string',
        enum: [
          'PaymentMethod',
          'PaymentMethodType',
          'AuthenticationType',
          'Currency',
          'Country',
          'CardNetwork',
          'CardBin',
        ],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { algorithm_id, ...body } = args as any;
  return asTextContentResult(
    await client.accounts.businessProfile.dynamicRouting.successBased.updateConfig(algorithm_id, body),
  );
};

export default { metadata, tool, handler };
