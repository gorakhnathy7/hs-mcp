// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payment_link',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payment_link/{payment_link_id}',
  operationId: 'Retrieve a Payment Link',
};

export const tool: Tool = {
  name: 'retrieve_payment_link',
  description:
    'To retrieve the properties of a Payment Link. This may be used to get the status of a previously initiated payment or next action for an ongoing payment',
  inputSchema: {
    type: 'object',
    properties: {
      payment_link_id: {
        type: 'string',
      },
      client_secret: {
        type: 'string',
        description:
          'This is a token which expires after 15 minutes, used from the client to authenticate and create sessions from the SDK',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { payment_link_id, ...body } = args as any;
  return asTextContentResult(await client.paymentLink.retrieve(payment_link_id, body));
};

export default { metadata, tool, handler };
