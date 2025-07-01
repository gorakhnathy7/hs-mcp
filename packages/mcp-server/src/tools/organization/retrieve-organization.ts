// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'organization',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/organization/{id}',
  operationId: 'Retrieve an Organization',
};

export const tool: Tool = {
  name: 'retrieve_organization',
  description: 'Retrieve an existing organization',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.organization.retrieve(id));
};

export default { metadata, tool, handler };
