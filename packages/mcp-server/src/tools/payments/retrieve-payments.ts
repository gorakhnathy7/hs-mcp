// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payments/{payment_id}',
  operationId: 'Retrieve a Payment',
};

export const tool: Tool = {
  name: 'retrieve_payments',
  description:
    'Retrieves a Payment. This API can also be used to get the status of a previously initiated payment or next action for an ongoing payment',
  inputSchema: {
    type: 'object',
    properties: {
      payment_id: {
        type: 'string',
      },
      client_secret: {
        type: 'string',
        description:
          'This is a token which expires after 15 minutes, used from the client to authenticate and create sessions from the SDK',
      },
      expand_attempts: {
        type: 'boolean',
        description: 'If enabled provides list of attempts linked to payment intent',
      },
      expand_captures: {
        type: 'boolean',
        description: 'If enabled provides list of captures linked to latest attempt',
      },
      force_sync: {
        type: 'boolean',
        description: 'Decider to enable or disable the connector call for retrieve request',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { payment_id, ...body } = args as any;
  return asTextContentResult(await client.payments.retrieve(payment_id, body));
};

export default { metadata, tool, handler };
