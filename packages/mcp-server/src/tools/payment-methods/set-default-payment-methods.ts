// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/{customer_id}/payment_methods/{payment_method_id}/default',
  operationId: 'Set the Payment Method as Default',
};

export const tool: Tool = {
  name: 'set_default_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet the Payment Method as Default for the Customer.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    customer_id: {\n      type: 'string',\n      description: 'The unique identifier of the customer.'\n    },\n    payment_method: {\n      type: 'string',\n      description: 'Indicates the type of payment method. Eg: \\'card\\', \\'wallet\\', etc.',\n      enum: [        'card',\n        'card_redirect',\n        'pay_later',\n        'wallet',\n        'bank_redirect',\n        'bank_transfer',\n        'crypto',\n        'bank_debit',\n        'reward',\n        'real_time_payment',\n        'upi',\n        'voucher',\n        'gift_card',\n        'open_banking',\n        'mobile_payment'\n      ]\n    },\n    default_payment_method_id: {\n      type: 'string',\n      description: 'The unique identifier of the Payment method'\n    },\n    payment_method_type: {\n      $ref: '#/$defs/payment_method_type'\n    }\n  },\n  required: [    'customer_id',\n    'payment_method'\n  ],\n  $defs: {\n    payment_method_type: {\n      type: 'string',\n      description: 'Indicates the sub type of payment method. Eg: \\'google_pay\\' & \\'apple_pay\\' for wallets.',\n      enum: [        'ach',\n        'affirm',\n        'afterpay_clearpay',\n        'alfamart',\n        'ali_pay',\n        'ali_pay_hk',\n        'alma',\n        'amazon_pay',\n        'apple_pay',\n        'atome',\n        'bacs',\n        'bancontact_card',\n        'becs',\n        'benefit',\n        'bizum',\n        'blik',\n        'boleto',\n        'bca_bank_transfer',\n        'bni_va',\n        'bri_va',\n        'card_redirect',\n        'cimb_va',\n        'classic',\n        'credit',\n        'crypto_currency',\n        'cashapp',\n        'dana',\n        'danamon_va',\n        'debit',\n        'duit_now',\n        'efecty',\n        'eft',\n        'eps',\n        'fps',\n        'evoucher',\n        'giropay',\n        'givex',\n        'google_pay',\n        'go_pay',\n        'gcash',\n        'ideal',\n        'interac',\n        'indomaret',\n        'klarna',\n        'kakao_pay',\n        'local_bank_redirect',\n        'mandiri_va',\n        'knet',\n        'mb_way',\n        'mobile_pay',\n        'momo',\n        'momo_atm',\n        'multibanco',\n        'online_banking_thailand',\n        'online_banking_czech_republic',\n        'online_banking_finland',\n        'online_banking_fpx',\n        'online_banking_poland',\n        'online_banking_slovakia',\n        'oxxo',\n        'pago_efectivo',\n        'permata_bank_transfer',\n        'open_banking_uk',\n        'pay_bright',\n        'paypal',\n        'paze',\n        'pix',\n        'pay_safe_card',\n        'przelewy24',\n        'prompt_pay',\n        'pse',\n        'red_compra',\n        'red_pagos',\n        'samsung_pay',\n        'sepa',\n        'sepa_bank_transfer',\n        'sofort',\n        'swish',\n        'touch_n_go',\n        'trustly',\n        'twint',\n        'upi_collect',\n        'upi_intent',\n        'vipps',\n        'viet_qr',\n        'venmo',\n        'walley',\n        'we_chat_pay',\n        'seven_eleven',\n        'lawson',\n        'mini_stop',\n        'family_mart',\n        'seicomart',\n        'pay_easy',\n        'local_bank_transfer',\n        'mifinity',\n        'open_banking_pis',\n        'direct_carrier_billing',\n        'instant_bank_transfer',\n        'instant_bank_transfer_finland',\n        'instant_bank_transfer_poland',\n        'revolut_pay'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      payment_method_id: {
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
  const { payment_method_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.paymentMethods.setDefault(payment_method_id, body)),
  );
};

export default { metadata, tool, handler };
