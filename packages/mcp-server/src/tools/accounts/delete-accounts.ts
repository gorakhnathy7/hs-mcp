// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}',
  operationId: 'Delete a Merchant Account',
};

export const tool: Tool = {
  name: 'delete_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a *merchant* account\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    deleted: {\n      type: 'boolean',\n      description: 'If the connector is deleted or not'\n    },\n    merchant_id: {\n      type: 'string',\n      description: 'The identifier for the Merchant Account'\n    }\n  },\n  required: [    'deleted',\n    'merchant_id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
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
  const { account_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.accounts.delete(account_id)));
};

export default { metadata, tool, handler };
