// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'mandates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/mandates/revoke/{mandate_id}',
  operationId: 'Revoke a Mandate',
};

export const tool: Tool = {
  name: 'revoke_mandates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRevokes a mandate created using the Payments/Create API\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    mandate_id: {\n      type: 'string',\n      description: 'The identifier for mandate'\n    },\n    status: {\n      $ref: '#/$defs/mandate_status'\n    },\n    error_code: {\n      type: 'string',\n      description: 'If there was an error while calling the connectors the code is received here'\n    },\n    error_message: {\n      type: 'string',\n      description: 'If there was an error while calling the connector the error message is received here'\n    }\n  },\n  required: [    'mandate_id',\n    'status'\n  ],\n  $defs: {\n    mandate_status: {\n      type: 'string',\n      description: 'The status of the mandate, which indicates whether it can be used to initiate a payment.',\n      enum: [        'active',\n        'inactive',\n        'pending',\n        'revoked'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      mandate_id: {
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
  const { mandate_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.mandates.revoke(mandate_id)));
};

export default { metadata, tool, handler };
