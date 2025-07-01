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
  httpPath: '/payments/{payment_id}/incremental_authorization',
  operationId: 'Increment authorized amount for a Payment',
};

export const tool: Tool = {
  name: 'incremental_authorization_payments',
  description: 'Authorized amount for a payment can be incremented if it is in status: requires_capture',
  inputSchema: {
    type: 'object',
    properties: {
      payment_id: {
        type: 'string',
      },
      amount: {
        type: 'integer',
        description: 'The total amount including previously authorized amount and additional amount',
      },
      reason: {
        type: 'string',
        description: 'Reason for incremental authorization',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { payment_id, ...body } = args as any;
  return asTextContentResult(await client.payments.incrementalAuthorization(payment_id, body));
};

export default { metadata, tool, handler };
