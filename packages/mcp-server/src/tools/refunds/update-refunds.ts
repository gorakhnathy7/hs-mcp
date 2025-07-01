// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'refunds',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/refunds/{refund_id}',
  operationId: 'Update a Refund',
};

export const tool: Tool = {
  name: 'update_refunds',
  description:
    'Updates the properties of a Refund object. This API can be used to attach a reason for the refund or metadata fields',
  inputSchema: {
    type: 'object',
    properties: {
      refund_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long. Metadata is useful for storing additional, structured information on an object.',
      },
      reason: {
        type: 'string',
        description:
          'An arbitrary string attached to the object. Often useful for displaying to users and your customer support executive',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { refund_id, ...body } = args as any;
  return asTextContentResult(await client.refunds.update(refund_id, body));
};

export default { metadata, tool, handler };
