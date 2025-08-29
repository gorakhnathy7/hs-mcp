// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.connectors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/account/{account_id}/connectors/{merchant_connector_id}',
  operationId: 'Retrieve a Merchant Connector',
};

export const tool: Tool = {
  name: 'retrieve_accounts_connectors',
  description: 'Retrieves details of a Connector account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      merchant_connector_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'merchant_connector_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { merchant_connector_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.connectors.retrieve(merchant_connector_id, body));
};

export default { metadata, tool, handler };
