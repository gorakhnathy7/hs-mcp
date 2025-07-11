// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'routing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/routing',
  operationId: 'List routing configs',
};

export const tool: Tool = {
  name: 'list_routing',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all routing configs\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'object',\n      properties: {\n        merchant_id: {\n          type: 'string'\n        },\n        records: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/routing_dictionary_record'\n          }\n        },\n        active_id: {\n          type: 'string'\n        }\n      },\n      required: [        'merchant_id',\n        'records'\n      ]\n    },\n    {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/routing_dictionary_record'\n      }\n    }\n  ],\n  $defs: {\n    routing_dictionary_record: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'integer'\n        },\n        description: {\n          type: 'string'\n        },\n        kind: {\n          type: 'string',\n          enum: [            'single',\n            'priority',\n            'volume_split',\n            'advanced',\n            'dynamic',\n            'three_ds_decision_rule'\n          ]\n        },\n        modified_at: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        },\n        profile_id: {\n          type: 'string'\n        },\n        algorithm_for: {\n          $ref: '#/$defs/transaction_type'\n        },\n        decision_engine_routing_id: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'description',\n        'kind',\n        'modified_at',\n        'name',\n        'profile_id'\n      ]\n    },\n    transaction_type: {\n      type: 'string',\n      enum: [        'payment',\n        'payout',\n        'three_ds_authentication'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of records to be returned',
      },
      offset: {
        type: 'integer',
        description: 'The record offset from which to start gathering of results',
      },
      profile_id: {
        type: 'string',
        description: 'The unique identifier for a merchant profile',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.routing.list(body)));
};

export default { metadata, tool, handler };
