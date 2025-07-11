// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/events/{merchant_id}/{event_id}/attempts',
  operationId: 'List all delivery attempts for an Event',
};

export const tool: Tool = {
  name: 'delivery_attempts_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all delivery attempts for the specified Event.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/event_retrieve'\n  },\n  $defs: {\n    event_retrieve: {\n      allOf: [        {\n          $ref: '#/$defs/event_list_item'\n        }\n      ],\n      description: 'The response body for retrieving an event.'\n    },\n    event_list_item: {\n      type: 'object',\n      description: 'The response body for each item when listing events.',\n      properties: {\n        created: {\n          type: 'string',\n          description: 'Time at which the event was created.',\n          format: 'date-time'\n        },\n        event_class: {\n          $ref: '#/$defs/event_class'\n        },\n        event_id: {\n          type: 'string',\n          description: 'The identifier for the Event.'\n        },\n        event_type: {\n          $ref: '#/$defs/event_type'\n        },\n        initial_attempt_id: {\n          type: 'string',\n          description: 'The identifier for the initial delivery attempt. This will be the same as `event_id` for\\nthe initial delivery attempt.'\n        },\n        merchant_id: {\n          type: 'string',\n          description: 'The identifier for the Merchant Account.'\n        },\n        object_id: {\n          type: 'string',\n          description: 'The identifier for the object (Payment Intent ID, Refund ID, etc.)'\n        },\n        profile_id: {\n          type: 'string',\n          description: 'The identifier for the Business Profile.'\n        },\n        is_delivery_successful: {\n          type: 'boolean',\n          description: 'Indicates whether the webhook was ultimately delivered or not.'\n        }\n      },\n      required: [        'created',\n        'event_class',\n        'event_id',\n        'event_type',\n        'initial_attempt_id',\n        'merchant_id',\n        'object_id',\n        'profile_id'\n      ]\n    },\n    event_class: {\n      type: 'string',\n      enum: [        'payments',\n        'refunds',\n        'disputes',\n        'mandates',\n        'payouts'\n      ]\n    },\n    event_type: {\n      type: 'string',\n      enum: [        'payment_succeeded',\n        'payment_failed',\n        'payment_processing',\n        'payment_cancelled',\n        'payment_authorized',\n        'payment_captured',\n        'action_required',\n        'refund_succeeded',\n        'refund_failed',\n        'dispute_opened',\n        'dispute_expired',\n        'dispute_accepted',\n        'dispute_cancelled',\n        'dispute_challenged',\n        'dispute_won',\n        'dispute_lost',\n        'mandate_active',\n        'mandate_revoked',\n        'payout_success',\n        'payout_failed',\n        'payout_initiated',\n        'payout_processing',\n        'payout_cancelled',\n        'payout_expired',\n        'payout_reversed'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      merchant_id: {
        type: 'string',
      },
      event_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { event_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.events.deliveryAttempts(event_id, body)));
};

export default { metadata, tool, handler };
