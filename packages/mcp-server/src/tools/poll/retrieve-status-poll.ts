// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Poll - Retrieve Poll Status',
  inputSchema: {
    type: 'object',
    properties: {
      poll_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { poll_id, ...body } = args as any;
  return asTextContentResult(await client.poll.retrieveStatus(poll_id));
};

export default { metadata, tool, handler };
