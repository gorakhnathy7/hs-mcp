// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new organization for .\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/organization_response',\n  $defs: {\n    organization_response: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'The unique identifier for the Organization'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Metadata is useful for storing additional, unstructured information on an object.'\n        },\n        organization_details: {\n          type: 'object',\n          description: 'Details about the organization'\n        },\n        organization_name: {\n          type: 'string',\n          description: 'Name of the Organization'\n        }\n      },\n      required: [        'created_at',\n        'modified_at',\n        'organization_id'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.organization.update(id, body)));
};

export default { metadata, tool, handler };
