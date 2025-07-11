// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api_keys/{merchant_id}/{key_id}',
  operationId: 'Revoke an API Key',
};

export const tool: Tool = {
  name: 'revoke_api_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRevoke the specified API Key. Once revoked, the API Key can no longer be used for\nauthenticating with our APIs.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The response body for revoking an API Key.',\n  properties: {\n    key_id: {\n      type: 'string',\n      description: 'The identifier for the API Key.'\n    },\n    merchant_id: {\n      type: 'string',\n      description: 'The identifier for the Merchant Account.'\n    },\n    revoked: {\n      type: 'boolean',\n      description: 'Indicates whether the API key was revoked or not.'\n    }\n  },\n  required: [    'key_id',\n    'merchant_id',\n    'revoked'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      merchant_id: {
        type: 'string',
      },
      key_id: {
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
  const { key_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.apiKeys.revoke(key_id, body)));
};

export default { metadata, tool, handler };
