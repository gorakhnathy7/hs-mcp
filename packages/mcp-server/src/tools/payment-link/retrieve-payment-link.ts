// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payment_link',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payment_link/{payment_link_id}',
  operationId: 'Retrieve a Payment Link',
};

export const tool: Tool = {
  name: 'retrieve_payment_link',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve the properties of a Payment Link. This may be used to get the status of a previously initiated payment or next action for an ongoing payment\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    amount: {\n      type: 'integer',\n      description: 'The payment amount. Amount for the payment in the lowest denomination of the currency'\n    },\n    created_at: {\n      type: 'string',\n      description: 'Date and time of Payment Link creation',\n      format: 'date-time'\n    },\n    link_to_pay: {\n      type: 'string',\n      description: 'Open payment link (without any security checks and listing SPMs)'\n    },\n    merchant_id: {\n      type: 'string',\n      description: 'Identifier for Merchant'\n    },\n    payment_link_id: {\n      type: 'string',\n      description: 'Identifier for Payment Link'\n    },\n    status: {\n      type: 'string',\n      description: 'Status Of the Payment Link',\n      enum: [        'active',\n        'expired'\n      ]\n    },\n    currency: {\n      $ref: '#/$defs/currency'\n    },\n    description: {\n      type: 'string',\n      description: 'Description for Payment Link'\n    },\n    expiry: {\n      type: 'string',\n      description: 'Date and time of Expiration for Payment Link',\n      format: 'date-time'\n    },\n    secure_link: {\n      type: 'string',\n      description: 'Secure payment link (with security checks and listing saved payment methods)'\n    }\n  },\n  required: [    'amount',\n    'created_at',\n    'link_to_pay',\n    'merchant_id',\n    'payment_link_id',\n    'status'\n  ],\n  $defs: {\n    currency: {\n      type: 'string',\n      description: 'The three-letter ISO 4217 currency code (e.g., \"USD\", \"EUR\") for the payment amount. This field is mandatory for creating a payment.',\n      enum: [        'AED',\n        'AFN',\n        'ALL',\n        'AMD',\n        'ANG',\n        'AOA',\n        'ARS',\n        'AUD',\n        'AWG',\n        'AZN',\n        'BAM',\n        'BBD',\n        'BDT',\n        'BGN',\n        'BHD',\n        'BIF',\n        'BMD',\n        'BND',\n        'BOB',\n        'BRL',\n        'BSD',\n        'BTN',\n        'BWP',\n        'BYN',\n        'BZD',\n        'CAD',\n        'CDF',\n        'CHF',\n        'CLF',\n        'CLP',\n        'CNY',\n        'COP',\n        'CRC',\n        'CUC',\n        'CUP',\n        'CVE',\n        'CZK',\n        'DJF',\n        'DKK',\n        'DOP',\n        'DZD',\n        'EGP',\n        'ERN',\n        'ETB',\n        'EUR',\n        'FJD',\n        'FKP',\n        'GBP',\n        'GEL',\n        'GHS',\n        'GIP',\n        'GMD',\n        'GNF',\n        'GTQ',\n        'GYD',\n        'HKD',\n        'HNL',\n        'HRK',\n        'HTG',\n        'HUF',\n        'IDR',\n        'ILS',\n        'INR',\n        'IQD',\n        'IRR',\n        'ISK',\n        'JMD',\n        'JOD',\n        'JPY',\n        'KES',\n        'KGS',\n        'KHR',\n        'KMF',\n        'KPW',\n        'KRW',\n        'KWD',\n        'KYD',\n        'KZT',\n        'LAK',\n        'LBP',\n        'LKR',\n        'LRD',\n        'LSL',\n        'LYD',\n        'MAD',\n        'MDL',\n        'MGA',\n        'MKD',\n        'MMK',\n        'MNT',\n        'MOP',\n        'MRU',\n        'MUR',\n        'MVR',\n        'MWK',\n        'MXN',\n        'MYR',\n        'MZN',\n        'NAD',\n        'NGN',\n        'NIO',\n        'NOK',\n        'NPR',\n        'NZD',\n        'OMR',\n        'PAB',\n        'PEN',\n        'PGK',\n        'PHP',\n        'PKR',\n        'PLN',\n        'PYG',\n        'QAR',\n        'RON',\n        'RSD',\n        'RUB',\n        'RWF',\n        'SAR',\n        'SBD',\n        'SCR',\n        'SDG',\n        'SEK',\n        'SGD',\n        'SHP',\n        'SLE',\n        'SLL',\n        'SOS',\n        'SRD',\n        'SSP',\n        'STD',\n        'STN',\n        'SVC',\n        'SYP',\n        'SZL',\n        'THB',\n        'TJS',\n        'TMT',\n        'TND',\n        'TOP',\n        'TRY',\n        'TTD',\n        'TWD',\n        'TZS',\n        'UAH',\n        'UGX',\n        'USD',\n        'UYU',\n        'UZS',\n        'VES',\n        'VND',\n        'VUV',\n        'WST',\n        'XAF',\n        'XCD',\n        'XOF',\n        'XPF',\n        'YER',\n        'ZAR',\n        'ZMW',\n        'ZWL'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      payment_link_id: {
        type: 'string',
      },
      client_secret: {
        type: 'string',
        description:
          'This is a token which expires after 15 minutes, used from the client to authenticate and create sessions from the SDK',
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
  const { payment_link_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.paymentLink.retrieve(payment_link_id, body)),
  );
};

export default { metadata, tool, handler };
