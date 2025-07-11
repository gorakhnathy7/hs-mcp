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
  httpMethod: 'post',
  httpPath: '/api_keys/{merchant_id}/{key_id}',
  operationId: 'Update an API Key',
};

export const tool: Tool = {
  name: 'update_api_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate information for the specified API Key.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/retrieve_api_key',\n  $defs: {\n    retrieve_api_key: {\n      type: 'object',\n      description: 'The response body for retrieving an API Key.',\n      properties: {\n        created: {\n          type: 'string',\n          description: 'The time at which the API Key was created.',\n          format: 'date-time'\n        },\n        expiration: {\n          $ref: '#/$defs/api_key_expiration'\n        },\n        key_id: {\n          type: 'string',\n          description: 'The identifier for the API Key.'\n        },\n        merchant_id: {\n          type: 'string',\n          description: 'The identifier for the Merchant Account.'\n        },\n        name: {\n          type: 'string',\n          description: 'The unique name for the API Key to help you identify it.'\n        },\n        prefix: {\n          type: 'string',\n          description: 'The first few characters of the plaintext API Key to help you identify it.'\n        },\n        description: {\n          type: 'string',\n          description: 'The description to provide more context about the API Key.'\n        }\n      },\n      required: [        'created',\n        'expiration',\n        'key_id',\n        'merchant_id',\n        'name',\n        'prefix'\n      ]\n    },\n    api_key_expiration: {\n      anyOf: [        {\n          type: 'string',\n          enum: [            'never'\n          ]\n        },\n        {\n          type: 'string',\n          format: 'date-time'\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      merchant_id: {
        type: 'string',
      },
      key_id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'A description to provide more context about the API Key.',
      },
      expiration: {
        $ref: '#/$defs/api_key_expiration',
      },
      name: {
        type: 'string',
        description: 'A unique name for the API Key to help you identify it.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      api_key_expiration: {
        anyOf: [
          {
            type: 'string',
            enum: ['never'],
          },
          {
            type: 'string',
            format: 'date-time',
          },
        ],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { key_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.apiKeys.update(key_id, body)));
};

export default { metadata, tool, handler };
