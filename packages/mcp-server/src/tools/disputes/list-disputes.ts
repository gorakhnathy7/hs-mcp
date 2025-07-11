// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'disputes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/disputes/list',
  operationId: 'List Disputes',
};

export const tool: Tool = {
  name: 'list_disputes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all the Disputes for a merchant\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/dispute_response'\n  },\n  $defs: {\n    dispute_response: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'string',\n          description: 'Connector specific types to send'\n        },\n        attempt_id: {\n          type: 'string',\n          description: 'The identifier for payment_attempt'\n        },\n        connector: {\n          type: 'string',\n          description: 'connector to which dispute is associated with'\n        },\n        connector_dispute_id: {\n          type: 'string',\n          description: 'Dispute id sent by connector'\n        },\n        connector_status: {\n          type: 'string',\n          description: 'Status of the dispute sent by connector'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Time at which dispute is received',\n          format: 'date-time'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        dispute_id: {\n          type: 'string',\n          description: 'The identifier for dispute'\n        },\n        dispute_stage: {\n          $ref: '#/$defs/dispute_stage'\n        },\n        dispute_status: {\n          $ref: '#/$defs/dispute_status'\n        },\n        payment_id: {\n          type: 'string',\n          description: 'The identifier for payment_intent'\n        },\n        challenge_required_by: {\n          type: 'string',\n          description: 'Evidence deadline of dispute sent by connector',\n          format: 'date-time'\n        },\n        connector_created_at: {\n          type: 'string',\n          description: 'Dispute created time sent by connector',\n          format: 'date-time'\n        },\n        connector_reason: {\n          type: 'string',\n          description: 'Reason of dispute sent by connector'\n        },\n        connector_reason_code: {\n          type: 'string',\n          description: 'Reason code of dispute sent by connector'\n        },\n        connector_updated_at: {\n          type: 'string',\n          description: 'Dispute updated time sent by connector',\n          format: 'date-time'\n        },\n        merchant_connector_id: {\n          type: 'string',\n          description: 'The `merchant_connector_id` of the connector / processor through which the dispute was processed'\n        },\n        profile_id: {\n          type: 'string',\n          description: 'The `profile_id` associated with the dispute'\n        }\n      },\n      required: [        'amount',\n        'attempt_id',\n        'connector',\n        'connector_dispute_id',\n        'connector_status',\n        'created_at',\n        'currency',\n        'dispute_id',\n        'dispute_stage',\n        'dispute_status',\n        'payment_id'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The three-letter ISO 4217 currency code (e.g., \"USD\", \"EUR\") for the payment amount. This field is mandatory for creating a payment.',\n      enum: [        'AED',\n        'AFN',\n        'ALL',\n        'AMD',\n        'ANG',\n        'AOA',\n        'ARS',\n        'AUD',\n        'AWG',\n        'AZN',\n        'BAM',\n        'BBD',\n        'BDT',\n        'BGN',\n        'BHD',\n        'BIF',\n        'BMD',\n        'BND',\n        'BOB',\n        'BRL',\n        'BSD',\n        'BTN',\n        'BWP',\n        'BYN',\n        'BZD',\n        'CAD',\n        'CDF',\n        'CHF',\n        'CLF',\n        'CLP',\n        'CNY',\n        'COP',\n        'CRC',\n        'CUC',\n        'CUP',\n        'CVE',\n        'CZK',\n        'DJF',\n        'DKK',\n        'DOP',\n        'DZD',\n        'EGP',\n        'ERN',\n        'ETB',\n        'EUR',\n        'FJD',\n        'FKP',\n        'GBP',\n        'GEL',\n        'GHS',\n        'GIP',\n        'GMD',\n        'GNF',\n        'GTQ',\n        'GYD',\n        'HKD',\n        'HNL',\n        'HRK',\n        'HTG',\n        'HUF',\n        'IDR',\n        'ILS',\n        'INR',\n        'IQD',\n        'IRR',\n        'ISK',\n        'JMD',\n        'JOD',\n        'JPY',\n        'KES',\n        'KGS',\n        'KHR',\n        'KMF',\n        'KPW',\n        'KRW',\n        'KWD',\n        'KYD',\n        'KZT',\n        'LAK',\n        'LBP',\n        'LKR',\n        'LRD',\n        'LSL',\n        'LYD',\n        'MAD',\n        'MDL',\n        'MGA',\n        'MKD',\n        'MMK',\n        'MNT',\n        'MOP',\n        'MRU',\n        'MUR',\n        'MVR',\n        'MWK',\n        'MXN',\n        'MYR',\n        'MZN',\n        'NAD',\n        'NGN',\n        'NIO',\n        'NOK',\n        'NPR',\n        'NZD',\n        'OMR',\n        'PAB',\n        'PEN',\n        'PGK',\n        'PHP',\n        'PKR',\n        'PLN',\n        'PYG',\n        'QAR',\n        'RON',\n        'RSD',\n        'RUB',\n        'RWF',\n        'SAR',\n        'SBD',\n        'SCR',\n        'SDG',\n        'SEK',\n        'SGD',\n        'SHP',\n        'SLE',\n        'SLL',\n        'SOS',\n        'SRD',\n        'SSP',\n        'STD',\n        'STN',\n        'SVC',\n        'SYP',\n        'SZL',\n        'THB',\n        'TJS',\n        'TMT',\n        'TND',\n        'TOP',\n        'TRY',\n        'TTD',\n        'TWD',\n        'TZS',\n        'UAH',\n        'UGX',\n        'USD',\n        'UYU',\n        'UZS',\n        'VES',\n        'VND',\n        'VUV',\n        'WST',\n        'XAF',\n        'XCD',\n        'XOF',\n        'XPF',\n        'YER',\n        'ZAR',\n        'ZMW',\n        'ZWL'\n      ]\n    },\n    dispute_stage: {\n      type: 'string',\n      description: 'Stage of the dispute',\n      enum: [        'pre_dispute',\n        'dispute',\n        'pre_arbitration'\n      ]\n    },\n    dispute_status: {\n      type: 'string',\n      description: 'Status of the dispute',\n      enum: [        'dispute_opened',\n        'dispute_expired',\n        'dispute_accepted',\n        'dispute_cancelled',\n        'dispute_challenged',\n        'dispute_won',\n        'dispute_lost'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      connector: {
        type: 'string',
        description: 'The connector linked to dispute',
      },
      dispute_stage: {
        $ref: '#/$defs/dispute_stage',
      },
      dispute_status: {
        $ref: '#/$defs/dispute_status',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of Dispute Objects to include in the response',
      },
      reason: {
        type: 'string',
        description: 'The reason for dispute',
      },
      received_time: {
        type: 'object',
        properties: {
          gt: {
            type: 'string',
            description: 'Time greater than the dispute received time',
            format: 'date-time',
          },
          gte: {
            type: 'string',
            description: 'Time greater than or equals to the dispute received time',
            format: 'date-time',
          },
          lt: {
            type: 'string',
            description: 'Time less than the dispute received time',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description: 'Time less than or equals to the dispute received time',
            format: 'date-time',
          },
        },
        required: [],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      dispute_stage: {
        type: 'string',
        description: 'Stage of the dispute',
        enum: ['pre_dispute', 'dispute', 'pre_arbitration'],
      },
      dispute_status: {
        type: 'string',
        description: 'Status of the dispute',
        enum: [
          'dispute_opened',
          'dispute_expired',
          'dispute_accepted',
          'dispute_cancelled',
          'dispute_challenged',
          'dispute_won',
          'dispute_lost',
        ],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.disputes.list(body)));
};

export default { metadata, tool, handler };
