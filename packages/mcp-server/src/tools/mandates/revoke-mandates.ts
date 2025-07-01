// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'mandates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/mandates/revoke/{mandate_id}',
  operationId: 'Revoke a Mandate',
};

export const tool: Tool = {
  name: 'revoke_mandates',
  description: 'Revokes a mandate created using the Payments/Create API',
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
  return asTextContentResult(await client.mandates.revoke(mandate_id));
};

export default { metadata, tool, handler };
