// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'profile_acquirers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/profile_acquirers',
  operationId: 'Create a Profile Acquirer',
};

export const tool: Tool = {
  name: 'create_profile_acquirers',
  description: 'Create a new Profile Acquirer for accessing our APIs from your servers.',
  inputSchema: {
    type: 'object',
    properties: {
      acquirer_assigned_merchant_id: {
        type: 'string',
        description: 'The merchant id assigned by the acquirer',
      },
      acquirer_bin: {
        type: 'string',
        description: 'Acquirer bin',
      },
      acquirer_fraud_rate: {
        type: 'number',
        description: 'Fraud rate for the particular acquirer configuration',
      },
      merchant_country_code: {
        type: 'string',
        description: 'Merchant country code assigned by acquirer',
      },
      merchant_name: {
        type: 'string',
        description: 'merchant name',
      },
      network: {
        type: 'string',
        description: 'Network provider',
      },
      profile_id: {
        type: 'string',
        description: 'Parent profile id to link the acquirer account with',
      },
      acquirer_ica: {
        type: 'string',
        description: 'Acquirer ica provided by acquirer',
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.profileAcquirers.create(body));
};

export default { metadata, tool, handler };
