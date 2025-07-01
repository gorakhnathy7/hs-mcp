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
  httpPath: '/payments/{payment_id}/capture',
  operationId: 'Capture a Payment',
};

export const tool: Tool = {
  name: 'capture_payments',
  description:
    "Captures the funds for a previously authorized payment intent where `capture_method` was set to `manual` and the payment is in a `requires_capture` state.\n\nUpon successful capture, the payment status usually transitions to `succeeded`.\nThe `amount_to_capture` can be specified in the request body; it must be less than or equal to the payment's `amount_capturable`. If omitted, the full capturable amount is captured.\n\nA payment must be in a capturable state (e.g., `requires_capture`). Attempting to capture an already `succeeded` (and fully captured) payment or one in an invalid state will lead to an error.\n",
  inputSchema: {
    type: 'object',
    properties: {
      payment_id: {
        type: 'string',
      },
      amount_to_capture: {
        type: 'integer',
        description:
          'The amount to capture, in the lowest denomination of the currency. If omitted, the entire `amount_capturable` of the payment will be captured. Must be less than or equal to the current `amount_capturable`.',
      },
      merchant_connector_details: {
        $ref: '#/$defs/merchant_connector_details_wrap',
      },
      merchant_id: {
        type: 'string',
        description: 'The unique identifier for the merchant. This is usually inferred from the API key.',
      },
      refund_uncaptured_amount: {
        type: 'boolean',
        description:
          'Decider to refund the uncaptured amount. (Currently not fully supported or behavior may vary by connector).',
      },
      statement_descriptor_prefix: {
        type: 'string',
        description:
          "An optional prefix for the statement descriptor that appears on your customer's credit card statement. This can override the default prefix set on your merchant account. The combined length of prefix and suffix should not exceed connector-specific limits (typically 22 characters).",
      },
      statement_descriptor_suffix: {
        type: 'string',
        description:
          "A dynamic suffix that appears on your customer's credit card statement. This is concatenated with the (shortened) descriptor prefix set on your account to form the complete statement descriptor. The combined length should not exceed connector-specific limits (typically 22 characters).",
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
  return asTextContentResult(await client.payments.capture(payment_id, body));
};

export default { metadata, tool, handler };
