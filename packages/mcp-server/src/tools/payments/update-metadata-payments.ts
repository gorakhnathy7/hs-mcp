// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payments/{payment_id}/update_metadata',
  operationId: 'Update Metadata for a Payment',
};

export const tool: Tool = {
  name: 'update_metadata_payments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPayments - Update Metadata\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    payment_id: {\n      type: 'string',\n      description: 'The identifier for the payment'\n    },\n    metadata: {\n      type: 'object',\n      description: 'Metadata is useful for storing additional, unstructured information on an object.'\n    }\n  },\n  required: [    'payment_id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      payment_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description: 'Metadata is useful for storing additional, unstructured information on an object.',
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
  const { payment_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.payments.updateMetadata(payment_id, body)));
};

export default { metadata, tool, handler };
