// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payments/{payment_id}/cancel',
  operationId: 'Cancel a Payment',
};

export const tool: Tool = {
  name: 'cancel_payments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nA Payment could can be cancelled when it is in one of these statuses: `requires_payment_method`, `requires_capture`, `requires_confirmation`, `requires_customer_action`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      payment_id: {
        type: 'string',
      },
      cancellation_reason: {
        type: 'string',
        description: 'The reason for the payment cancel',
      },
      merchant_connector_details: {
        $ref: '#/$defs/merchant_connector_details_wrap',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      merchant_connector_details_wrap: {
        type: 'object',
        description: 'Merchant connector details used to make payments.',
        properties: {
          creds_identifier: {
            type: 'string',
            description:
              'Creds Identifier is to uniquely identify the credentials. Do not send any sensitive info, like encoded_data in this field. And do not send the string "null".',
          },
          encoded_data: {
            $ref: '#/$defs/merchant_connector_details',
          },
        },
        required: ['creds_identifier'],
      },
      merchant_connector_details: {
        type: 'object',
        properties: {
          connector_account_details: {
            type: 'object',
            description:
              'Account details of the Connector. You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long. Useful for storing additional, structured information on an object.',
          },
          metadata: {
            type: 'object',
            description: 'Metadata is useful for storing additional, unstructured information on an object.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const { payment_id, ...body } = args as any;
  const response = await client.payments.cancel(payment_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
