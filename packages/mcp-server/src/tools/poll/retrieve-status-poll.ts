// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'poll',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/poll/status/{poll_id}',
  operationId: 'Retrieve Poll Status',
};

export const tool: Tool = {
  name: 'retrieve_status_poll',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPoll - Retrieve Poll Status\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    poll_id: {\n      type: 'string',\n      description: 'The poll id'\n    },\n    status: {\n      type: 'string',\n      enum: [        'pending',\n        'completed',\n        'not_found'\n      ]\n    }\n  },\n  required: [    'poll_id',\n    'status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      poll_id: {
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
  const { poll_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.poll.retrieveStatus(poll_id)));
};

export default { metadata, tool, handler };
