// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'events.profile',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/events/profile/list',
  operationId: 'List all Events associated with a Profile',
};

export const tool: Tool = {
  name: 'list_events_profile',
  description: 'List all Events associated with a Profile.',
  inputSchema: {
    type: 'object',
    properties: {
      created_after: {
        type: 'string',
        description: 'Filter events created after the specified time.',
        format: 'date-time',
      },
      created_before: {
        type: 'string',
        description: 'Filter events created before the specified time.',
        format: 'date-time',
      },
      event_classes: {
        type: 'array',
        description: 'Filter events by their class.',
        items: {
          $ref: '#/$defs/event_class',
        },
      },
      event_types: {
        type: 'array',
        description: 'Filter events by their type.',
        items: {
          $ref: '#/$defs/event_type',
        },
      },
      is_delivered: {
        type: 'boolean',
        description: 'Filter all events by `is_overall_delivery_successful` field of the event.',
      },
      limit: {
        type: 'integer',
        description: 'Include at most the specified number of events.',
      },
      object_id: {
        type: 'string',
        description:
          'Filter all events associated with the specified object identifier (Payment Intent ID,\nRefund ID, etc.)',
      },
      offset: {
        type: 'integer',
        description: 'Include events after the specified offset.',
      },
      profile_id: {
        type: 'string',
        description: 'Filter all events associated with the specified business profile ID.',
      },
    },
    $defs: {
      event_class: {
        type: 'string',
        enum: ['payments', 'refunds', 'disputes', 'mandates', 'payouts'],
      },
      event_type: {
        type: 'string',
        enum: [
          'payment_succeeded',
          'payment_failed',
          'payment_processing',
          'payment_cancelled',
          'payment_authorized',
          'payment_captured',
          'action_required',
          'refund_succeeded',
          'refund_failed',
          'dispute_opened',
          'dispute_expired',
          'dispute_accepted',
          'dispute_cancelled',
          'dispute_challenged',
          'dispute_won',
          'dispute_lost',
          'mandate_active',
          'mandate_revoked',
          'payout_success',
          'payout_failed',
          'payout_initiated',
          'payout_processing',
          'payout_cancelled',
          'payout_expired',
          'payout_reversed',
        ],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.events.profile.list(body));
};

export default { metadata, tool, handler };
