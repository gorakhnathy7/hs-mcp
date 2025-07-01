// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'organization',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/organization',
  operationId: 'Create an Organization',
};

export const tool: Tool = {
  name: 'create_organization',
  description: 'Create a new organization',
  inputSchema: {
    type: 'object',
    properties: {
      organization_name: {
        type: 'string',
        description: 'Name of the organization',
      },
      metadata: {
        type: 'object',
        description: 'Metadata is useful for storing additional, unstructured information on an object.',
      },
      organization_details: {
        type: 'object',
        description: 'Details about the organization',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.organization.create(body));
};

export default { metadata, tool, handler };
