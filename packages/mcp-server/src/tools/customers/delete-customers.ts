// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/customers/{customer_id}',
  operationId: 'Delete a Customer',
};

export const tool: Tool = {
  name: 'delete_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a customer record.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    address_deleted: {\n      type: 'boolean',\n      description: 'Whether address was deleted or not'\n    },\n    customer_deleted: {\n      type: 'boolean',\n      description: 'Whether customer was deleted or not'\n    },\n    customer_id: {\n      type: 'string',\n      description: 'The identifier for the customer object'\n    },\n    payment_methods_deleted: {\n      type: 'boolean',\n      description: 'Whether payment methods deleted or not'\n    }\n  },\n  required: [    'address_deleted',\n    'customer_deleted',\n    'customer_id',\n    'payment_methods_deleted'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
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
  const { customer_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.customers.delete(customer_id)));
};

export default { metadata, tool, handler };
