// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'refunds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/refunds/{refund_id}',
  operationId: 'Retrieve a Refund',
};

export const tool: Tool = {
  name: 'retrieve_refunds',
  description: 'Retrieves a Refund. This may be used to get the status of a previously initiated refund',
  inputSchema: {
    type: 'object',
    properties: {
      refund_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { refund_id, ...body } = args as any;
  return asTextContentResult(await client.refunds.retrieve(refund_id));
};

export default { metadata, tool, handler };
