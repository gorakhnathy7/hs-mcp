// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payments/{payment_id}/update_metadata',
  operationId: 'Update Metadata for a Payment',
};

export const tool: Tool = {
  name: 'update_metadata_payments',
  description: 'Payments - Update Metadata',
  inputSchema: {
    type: 'object',
    properties: {
      payment_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description: 'Metadata is useful for storing additional, unstructured information on an object.',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { payment_id, ...body } = args as any;
  return asTextContentResult(await client.payments.updateMetadata(payment_id, body));
};

export default { metadata, tool, handler };
