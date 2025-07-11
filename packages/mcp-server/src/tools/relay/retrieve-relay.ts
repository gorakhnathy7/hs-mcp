// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'relay',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/relay/{relay_id}',
  operationId: 'Retrieve a Relay details',
};

export const tool: Tool = {
  name: 'retrieve_relay',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a relay details.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/relay_response',\n  $defs: {\n    relay_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the Relay'\n        },\n        connector_id: {\n          type: 'string',\n          description: 'Identifier of the connector ( merchant connector account ) which was chosen to make the payment'\n        },\n        connector_resource_id: {\n          type: 'string',\n          description: 'The identifier that is associated to a resource at the connector reference to which the relay request is being made'\n        },\n        profile_id: {\n          type: 'string',\n          description: 'The business profile that is associated with this relay request.'\n        },\n        status: {\n          type: 'string',\n          enum: [            'created',\n            'pending',\n            'success',\n            'failure'\n          ]\n        },\n        type: {\n          $ref: '#/$defs/relay_type'\n        },\n        connector_reference_id: {\n          type: 'string',\n          description: 'The identifier that is associated to a resource at the connector to which the relay request is being made'\n        },\n        data: {\n          $ref: '#/$defs/relay_data'\n        },\n        error: {\n          type: 'object',\n          properties: {\n            code: {\n              type: 'string',\n              description: 'The error code'\n            },\n            message: {\n              type: 'string',\n              description: 'The error message'\n            }\n          },\n          required: [            'code',\n            'message'\n          ]\n        }\n      },\n      required: [        'id',\n        'connector_id',\n        'connector_resource_id',\n        'profile_id',\n        'status',\n        'type'\n      ]\n    },\n    relay_type: {\n      type: 'string',\n      enum: [        'refund'\n      ]\n    },\n    relay_data: {\n      type: 'object',\n      properties: {\n        refund: {\n          type: 'object',\n          properties: {\n            amount: {\n              type: 'integer',\n              description: 'The amount that is being refunded'\n            },\n            currency: {\n              $ref: '#/$defs/currency'\n            },\n            reason: {\n              type: 'string',\n              description: 'The reason for the refund'\n            }\n          },\n          required: [            'amount',\n            'currency'\n          ]\n        }\n      },\n      required: [        'refund'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The three-letter ISO 4217 currency code (e.g., \"USD\", \"EUR\") for the payment amount. This field is mandatory for creating a payment.',\n      enum: [        'AED',\n        'AFN',\n        'ALL',\n        'AMD',\n        'ANG',\n        'AOA',\n        'ARS',\n        'AUD',\n        'AWG',\n        'AZN',\n        'BAM',\n        'BBD',\n        'BDT',\n        'BGN',\n        'BHD',\n        'BIF',\n        'BMD',\n        'BND',\n        'BOB',\n        'BRL',\n        'BSD',\n        'BTN',\n        'BWP',\n        'BYN',\n        'BZD',\n        'CAD',\n        'CDF',\n        'CHF',\n        'CLF',\n        'CLP',\n        'CNY',\n        'COP',\n        'CRC',\n        'CUC',\n        'CUP',\n        'CVE',\n        'CZK',\n        'DJF',\n        'DKK',\n        'DOP',\n        'DZD',\n        'EGP',\n        'ERN',\n        'ETB',\n        'EUR',\n        'FJD',\n        'FKP',\n        'GBP',\n        'GEL',\n        'GHS',\n        'GIP',\n        'GMD',\n        'GNF',\n        'GTQ',\n        'GYD',\n        'HKD',\n        'HNL',\n        'HRK',\n        'HTG',\n        'HUF',\n        'IDR',\n        'ILS',\n        'INR',\n        'IQD',\n        'IRR',\n        'ISK',\n        'JMD',\n        'JOD',\n        'JPY',\n        'KES',\n        'KGS',\n        'KHR',\n        'KMF',\n        'KPW',\n        'KRW',\n        'KWD',\n        'KYD',\n        'KZT',\n        'LAK',\n        'LBP',\n        'LKR',\n        'LRD',\n        'LSL',\n        'LYD',\n        'MAD',\n        'MDL',\n        'MGA',\n        'MKD',\n        'MMK',\n        'MNT',\n        'MOP',\n        'MRU',\n        'MUR',\n        'MVR',\n        'MWK',\n        'MXN',\n        'MYR',\n        'MZN',\n        'NAD',\n        'NGN',\n        'NIO',\n        'NOK',\n        'NPR',\n        'NZD',\n        'OMR',\n        'PAB',\n        'PEN',\n        'PGK',\n        'PHP',\n        'PKR',\n        'PLN',\n        'PYG',\n        'QAR',\n        'RON',\n        'RSD',\n        'RUB',\n        'RWF',\n        'SAR',\n        'SBD',\n        'SCR',\n        'SDG',\n        'SEK',\n        'SGD',\n        'SHP',\n        'SLE',\n        'SLL',\n        'SOS',\n        'SRD',\n        'SSP',\n        'STD',\n        'STN',\n        'SVC',\n        'SYP',\n        'SZL',\n        'THB',\n        'TJS',\n        'TMT',\n        'TND',\n        'TOP',\n        'TRY',\n        'TTD',\n        'TWD',\n        'TZS',\n        'UAH',\n        'UGX',\n        'USD',\n        'UYU',\n        'UZS',\n        'VES',\n        'VND',\n        'VUV',\n        'WST',\n        'XAF',\n        'XCD',\n        'XOF',\n        'XPF',\n        'YER',\n        'ZAR',\n        'ZMW',\n        'ZWL'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      relay_id: {
        type: 'string',
      },
      'X-Profile-Id': {
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
  const { relay_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.relay.retrieve(relay_id, body)));
};

export default { metadata, tool, handler };
