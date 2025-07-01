// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'accounts.connectors',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/account/{account_id}/connectors/{merchant_connector_id}',
  operationId: 'Delete a Merchant Connector',
};

export const tool: Tool = {
  name: 'delete_accounts_connectors',
  description: 'Delete or Detach a Merchant Connector from Merchant Account',
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
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { merchant_connector_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.connectors.delete(merchant_connector_id, body));
};

export default { metadata, tool, handler };
