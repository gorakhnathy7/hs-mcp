// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'mandates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/mandates/{mandate_id}',
  operationId: 'Retrieve a Mandate',
};

export const tool: Tool = {
  name: 'retrieve_mandates',
  description: 'Retrieves a mandate created using the Payments/Create API',
  inputSchema: {
    type: 'object',
    properties: {
      mandate_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { mandate_id, ...body } = args as any;
  return asTextContentResult(await client.mandates.retrieve(mandate_id));
};

export default { metadata, tool, handler };
