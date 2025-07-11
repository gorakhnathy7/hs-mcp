// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'blocklist',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/blocklist',
  operationId: 'List Blocked fingerprints of a particular kind',
};

export const tool: Tool = {
  name: 'retrieve_blocklist',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/blocklist_response',\n  $defs: {\n    blocklist_response: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        data_kind: {\n          $ref: '#/$defs/blocklist_data_kind'\n        },\n        fingerprint_id: {\n          type: 'string'\n        }\n      },\n      required: [        'created_at',\n        'data_kind',\n        'fingerprint_id'\n      ]\n    },\n    blocklist_data_kind: {\n      type: 'string',\n      enum: [        'payment_method',\n        'card_bin',\n        'extended_card_bin'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data_kind: {
        $ref: '#/$defs/blocklist_data_kind',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      blocklist_data_kind: {
        type: 'string',
        enum: ['payment_method', 'card_bin', 'extended_card_bin'],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.blocklist.retrieve(body)));
};

export default { metadata, tool, handler };
