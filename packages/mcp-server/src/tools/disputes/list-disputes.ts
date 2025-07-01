// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'disputes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/disputes/list',
  operationId: 'List Disputes',
};

export const tool: Tool = {
  name: 'list_disputes',
  description: 'Lists all the Disputes for a merchant',
  inputSchema: {
    type: 'object',
    properties: {
      connector: {
        type: 'string',
        description: 'The connector linked to dispute',
      },
      dispute_stage: {
        $ref: '#/$defs/dispute_stage',
      },
      dispute_status: {
        $ref: '#/$defs/dispute_status',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of Dispute Objects to include in the response',
      },
      reason: {
        type: 'string',
        description: 'The reason for dispute',
      },
      received_time: {
        type: 'object',
        properties: {
          gt: {
            type: 'string',
            description: 'Time greater than the dispute received time',
            format: 'date-time',
          },
          gte: {
            type: 'string',
            description: 'Time greater than or equals to the dispute received time',
            format: 'date-time',
          },
          lt: {
            type: 'string',
            description: 'Time less than the dispute received time',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description: 'Time less than or equals to the dispute received time',
            format: 'date-time',
          },
        },
        required: [],
      },
    },
    $defs: {
      dispute_stage: {
        type: 'string',
        description: 'Stage of the dispute',
        enum: ['pre_dispute', 'dispute', 'pre_arbitration'],
      },
      dispute_status: {
        type: 'string',
        description: 'Status of the dispute',
        enum: [
          'dispute_opened',
          'dispute_expired',
          'dispute_accepted',
          'dispute_cancelled',
          'dispute_challenged',
          'dispute_won',
          'dispute_lost',
        ],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.disputes.list(body));
};

export default { metadata, tool, handler };
