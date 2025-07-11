// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'profile_acquirers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/profile_acquirers/{profile_id}/{profile_acquirer_id}',
  operationId: 'Update a Profile Acquirer',
};

export const tool: Tool = {
  name: 'update_profile_acquirers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a Profile Acquirer for accessing our APIs from your servers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/profile_acquirer',\n  $defs: {\n    profile_acquirer: {\n      type: 'object',\n      properties: {\n        acquirer_assigned_merchant_id: {\n          type: 'string',\n          description: 'The merchant id assigned by the acquirer'\n        },\n        acquirer_bin: {\n          type: 'string',\n          description: 'Acquirer bin'\n        },\n        acquirer_fraud_rate: {\n          type: 'number',\n          description: 'Fraud rate for the particular acquirer configuration'\n        },\n        merchant_country_code: {\n          type: 'string',\n          description: 'Merchant country code assigned by acquirer'\n        },\n        merchant_name: {\n          type: 'string',\n          description: 'Merchant name'\n        },\n        network: {\n          type: 'string',\n          description: 'Network provider'\n        },\n        profile_acquirer_id: {\n          type: 'string',\n          description: 'The unique identifier of the profile acquirer'\n        },\n        profile_id: {\n          type: 'string',\n          description: 'Parent profile id to link the acquirer account with'\n        },\n        acquirer_ica: {\n          type: 'string',\n          description: 'Acquirer ica provided by acquirer'\n        }\n      },\n      required: [        'acquirer_assigned_merchant_id',\n        'acquirer_bin',\n        'acquirer_fraud_rate',\n        'merchant_country_code',\n        'merchant_name',\n        'network',\n        'profile_acquirer_id',\n        'profile_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      profile_id: {
        type: 'string',
      },
      profile_acquirer_id: {
        type: 'string',
      },
      acquirer_assigned_merchant_id: {
        type: 'string',
      },
      acquirer_bin: {
        type: 'string',
      },
      acquirer_fraud_rate: {
        type: 'number',
      },
      acquirer_ica: {
        type: 'string',
      },
      merchant_country_code: {
        type: 'string',
      },
      merchant_name: {
        type: 'string',
      },
      network: {
        type: 'string',
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
  const { profile_acquirer_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.profileAcquirers.update(profile_acquirer_id, body)),
  );
};

export default { metadata, tool, handler };
