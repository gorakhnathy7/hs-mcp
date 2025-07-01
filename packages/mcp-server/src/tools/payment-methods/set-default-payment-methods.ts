// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/{customer_id}/payment_methods/{payment_method_id}/default',
  operationId: 'Set the Payment Method as Default',
};

export const tool: Tool = {
  name: 'set_default_payment_methods',
  description: 'Set the Payment Method as Default for the Customer.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      payment_method_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { payment_method_id, ...body } = args as any;
  return asTextContentResult(await client.paymentMethods.setDefault(payment_method_id, body));
};

export default { metadata, tool, handler };
