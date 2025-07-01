// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'disputes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/disputes/{dispute_id}',
  operationId: 'Retrieve a Dispute',
};

export const tool: Tool = {
  name: 'retrieve_disputes',
  description: 'Retrieves a dispute',
  inputSchema: {
    type: 'object',
    properties: {
      dispute_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { dispute_id, ...body } = args as any;
  return asTextContentResult(await client.disputes.retrieve(dispute_id));
};

export default { metadata, tool, handler };
