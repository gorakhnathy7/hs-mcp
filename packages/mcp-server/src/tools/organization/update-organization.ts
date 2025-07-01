// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'organization',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/organization/{id}',
  operationId: 'Update an Organization',
};

export const tool: Tool = {
  name: 'update_organization',
  description: 'Create a new organization for .',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      platform_merchant_id: {
        type: 'string',
        description: 'Platform merchant id is unique distiguisher for special merchant in the platform org',
      },
      metadata: {
        type: 'object',
        description: 'Metadata is useful for storing additional, unstructured information on an object.',
      },
      organization_details: {
        type: 'object',
        description: 'Details about the organization',
      },
      organization_name: {
        type: 'string',
        description: 'Name of the organization',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.organization.update(id, body));
};

export default { metadata, tool, handler };
