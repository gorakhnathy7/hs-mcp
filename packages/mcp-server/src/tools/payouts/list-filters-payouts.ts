// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payouts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payouts/filter',
  operationId: 'List available payout filters',
};

export const tool: Tool = {
  name: 'list_filters_payouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPayouts - List available filters\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    connector: {\n      type: 'array',\n      description: 'The list of available connector filters',\n      items: {\n        $ref: '#/$defs/payout_connectors'\n      }\n    },\n    currency: {\n      type: 'array',\n      description: 'The list of available currency filters',\n      items: {\n        $ref: '#/$defs/currency'\n      }\n    },\n    payout_method: {\n      type: 'array',\n      description: 'The list of available payout method filters',\n      items: {\n        $ref: '#/$defs/payout_type'\n      }\n    },\n    status: {\n      type: 'array',\n      description: 'The list of available payout status filters',\n      items: {\n        $ref: '#/$defs/status'\n      }\n    }\n  },\n  required: [    'connector',\n    'currency',\n    'payout_method',\n    'status'\n  ],\n  $defs: {\n    payout_connectors: {\n      type: 'string',\n      enum: [        'adyen',\n        'adyenplatform',\n        'cybersource',\n        'ebanx',\n        'nomupay',\n        'payone',\n        'paypal',\n        'stripe',\n        'wise'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The three-letter ISO 4217 currency code (e.g., \"USD\", \"EUR\") for the payment amount. This field is mandatory for creating a payment.',\n      enum: [        'AED',\n        'AFN',\n        'ALL',\n        'AMD',\n        'ANG',\n        'AOA',\n        'ARS',\n        'AUD',\n        'AWG',\n        'AZN',\n        'BAM',\n        'BBD',\n        'BDT',\n        'BGN',\n        'BHD',\n        'BIF',\n        'BMD',\n        'BND',\n        'BOB',\n        'BRL',\n        'BSD',\n        'BTN',\n        'BWP',\n        'BYN',\n        'BZD',\n        'CAD',\n        'CDF',\n        'CHF',\n        'CLF',\n        'CLP',\n        'CNY',\n        'COP',\n        'CRC',\n        'CUC',\n        'CUP',\n        'CVE',\n        'CZK',\n        'DJF',\n        'DKK',\n        'DOP',\n        'DZD',\n        'EGP',\n        'ERN',\n        'ETB',\n        'EUR',\n        'FJD',\n        'FKP',\n        'GBP',\n        'GEL',\n        'GHS',\n        'GIP',\n        'GMD',\n        'GNF',\n        'GTQ',\n        'GYD',\n        'HKD',\n        'HNL',\n        'HRK',\n        'HTG',\n        'HUF',\n        'IDR',\n        'ILS',\n        'INR',\n        'IQD',\n        'IRR',\n        'ISK',\n        'JMD',\n        'JOD',\n        'JPY',\n        'KES',\n        'KGS',\n        'KHR',\n        'KMF',\n        'KPW',\n        'KRW',\n        'KWD',\n        'KYD',\n        'KZT',\n        'LAK',\n        'LBP',\n        'LKR',\n        'LRD',\n        'LSL',\n        'LYD',\n        'MAD',\n        'MDL',\n        'MGA',\n        'MKD',\n        'MMK',\n        'MNT',\n        'MOP',\n        'MRU',\n        'MUR',\n        'MVR',\n        'MWK',\n        'MXN',\n        'MYR',\n        'MZN',\n        'NAD',\n        'NGN',\n        'NIO',\n        'NOK',\n        'NPR',\n        'NZD',\n        'OMR',\n        'PAB',\n        'PEN',\n        'PGK',\n        'PHP',\n        'PKR',\n        'PLN',\n        'PYG',\n        'QAR',\n        'RON',\n        'RSD',\n        'RUB',\n        'RWF',\n        'SAR',\n        'SBD',\n        'SCR',\n        'SDG',\n        'SEK',\n        'SGD',\n        'SHP',\n        'SLE',\n        'SLL',\n        'SOS',\n        'SRD',\n        'SSP',\n        'STD',\n        'STN',\n        'SVC',\n        'SYP',\n        'SZL',\n        'THB',\n        'TJS',\n        'TMT',\n        'TND',\n        'TOP',\n        'TRY',\n        'TTD',\n        'TWD',\n        'TZS',\n        'UAH',\n        'UGX',\n        'USD',\n        'UYU',\n        'UZS',\n        'VES',\n        'VND',\n        'VUV',\n        'WST',\n        'XAF',\n        'XCD',\n        'XOF',\n        'XPF',\n        'YER',\n        'ZAR',\n        'ZMW',\n        'ZWL'\n      ]\n    },\n    payout_type: {\n      type: 'string',\n      description: 'The payout_type of the payout request is a mandatory field for confirming the payouts. It should be specified in the Create request. If not provided, it must be updated in the Payout Update request before it can be confirmed.',\n      enum: [        'card',\n        'bank',\n        'wallet'\n      ]\n    },\n    status: {\n      type: 'string',\n      enum: [        'success',\n        'failed',\n        'cancelled',\n        'initiated',\n        'expired',\n        'reversed',\n        'pending',\n        'ineligible',\n        'requires_creation',\n        'requires_confirmation',\n        'requires_payout_method_data',\n        'requires_fulfillment',\n        'requires_vendor_account_creation'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      start_time: {
        type: 'string',
        description:
          'The start time to filter payments list or to get list of filters. To get list of filters start time is needed to be passed',
        format: 'date-time',
      },
      end_time: {
        type: 'string',
        description:
          'The end time to filter payments list or to get list of filters. If not passed the default time is now',
        format: 'date-time',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.payouts.listFilters(body)));
};

export default { metadata, tool, handler };
