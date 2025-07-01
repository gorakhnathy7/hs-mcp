// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'gsm',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/gsm/delete',
  operationId: 'Delete Gsm Rule',
};

export const tool: Tool = {
  name: 'delete_gsm',
  description: 'Deletes a Gsm Rule',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
        description: 'code received from the connector',
      },
      connector: {
        type: 'string',
        description: 'The connector through which payment has gone through',
      },
      flow: {
        type: 'string',
        description: 'The flow in which the code and message occurred for a connector',
      },
      message: {
        type: 'string',
        description: 'message received from the connector',
      },
      sub_flow: {
        type: 'string',
        description: 'The sub_flow in which the code and message occurred  for a connector',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gsm.delete(body));
};

export default { metadata, tool, handler };
