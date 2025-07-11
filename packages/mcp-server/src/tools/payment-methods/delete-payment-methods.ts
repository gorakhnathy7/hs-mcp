// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/payment_methods/{method_id}',
  operationId: 'Delete a Payment method',
};

export const tool: Tool = {
  name: 'delete_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a payment method of a customer.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    deleted: {\n      type: 'boolean',\n      description: 'Whether payment method was deleted or not'\n    },\n    payment_method_id: {\n      type: 'string',\n      description: 'The unique identifier of the Payment method'\n    }\n  },\n  required: [    'deleted',\n    'payment_method_id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      method_id: {
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
  const { method_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.paymentMethods.delete(method_id)));
};

export default { metadata, tool, handler };
