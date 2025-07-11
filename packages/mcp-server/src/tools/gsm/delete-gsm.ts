// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'gsm',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/gsm/delete',
  operationId: 'Delete Gsm Rule',
};

export const tool: Tool = {
  name: 'delete_gsm',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a Gsm Rule\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'string',\n      description: 'code received from the connector'\n    },\n    connector: {\n      type: 'string',\n      description: 'The connector through which payment has gone through'\n    },\n    flow: {\n      type: 'string',\n      description: 'The flow in which the code and message occurred for a connector'\n    },\n    gsm_rule_delete: {\n      type: 'boolean'\n    },\n    sub_flow: {\n      type: 'string',\n      description: 'The sub_flow in which the code and message occurred  for a connector'\n    }\n  },\n  required: [    'code',\n    'connector',\n    'flow',\n    'gsm_rule_delete',\n    'sub_flow'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
        description: 'code received from the connector',
      },
      connector: {
        type: 'string',
        description: 'The connector through which payment has gone through',
      },
      flow: {
        type: 'string',
        description: 'The flow in which the code and message occurred for a connector',
      },
      message: {
        type: 'string',
        description: 'message received from the connector',
      },
      sub_flow: {
        type: 'string',
        description: 'The sub_flow in which the code and message occurred  for a connector',
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
  return asTextContentResult(await maybeFilter(args, await client.gsm.delete(body)));
};

export default { metadata, tool, handler };
