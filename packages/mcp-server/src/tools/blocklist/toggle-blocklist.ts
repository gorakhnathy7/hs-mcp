// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'blocklist',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/blocklist/toggle',
  operationId: 'Toggle blocklist guard for a particular merchant',
};

export const tool: Tool = {
  name: 'toggle_blocklist',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    blocklist_guard_status: {\n      type: 'string'\n    }\n  },\n  required: [    'blocklist_guard_status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'boolean',
        description: 'Boolean value to enable/disable blocklist',
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
  return asTextContentResult(await maybeFilter(args, await client.blocklist.toggle(body)));
};

export default { metadata, tool, handler };
