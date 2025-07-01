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
  httpPath: '/payments/session_tokens',
  operationId: 'Create Session tokens for a Payment',
};

export const tool: Tool = {
  name: 'create_session_token_payments',
  description:
    "Creates a session object or a session token for wallets like Apple Pay, Google Pay, etc. These tokens are used by Hyperswitch's SDK to initiate these wallets' SDK.",
  inputSchema: {
    type: 'object',
    properties: {
      client_secret: {
        type: 'string',
        description:
          'This is a token which expires after 15 minutes, used from the client to authenticate and create sessions from the SDK',
      },
      payment_id: {
        type: 'string',
        description: 'The identifier for the payment',
      },
      wallets: {
        type: 'array',
        description: 'The list of the supported wallets',
        items: {
          $ref: '#/$defs/payment_method_type',
        },
      },
      merchant_connector_details: {
        $ref: '#/$defs/merchant_connector_details_wrap',
      },
    },
    $defs: {
      payment_method_type: {
        type: 'string',
        description: "Indicates the sub type of payment method. Eg: 'google_pay' & 'apple_pay' for wallets.",
        enum: [
          'ach',
          'affirm',
          'afterpay_clearpay',
          'alfamart',
          'ali_pay',
          'ali_pay_hk',
          'alma',
          'amazon_pay',
          'apple_pay',
          'atome',
          'bacs',
          'bancontact_card',
          'becs',
          'benefit',
          'bizum',
          'blik',
          'boleto',
          'bca_bank_transfer',
          'bni_va',
          'bri_va',
          'card_redirect',
          'cimb_va',
          'classic',
          'credit',
          'crypto_currency',
          'cashapp',
          'dana',
          'danamon_va',
          'debit',
          'duit_now',
          'efecty',
          'eft',
          'eps',
          'fps',
          'evoucher',
          'giropay',
          'givex',
          'google_pay',
          'go_pay',
          'gcash',
          'ideal',
          'interac',
          'indomaret',
          'klarna',
          'kakao_pay',
          'local_bank_redirect',
          'mandiri_va',
          'knet',
          'mb_way',
          'mobile_pay',
          'momo',
          'momo_atm',
          'multibanco',
          'online_banking_thailand',
          'online_banking_czech_republic',
          'online_banking_finland',
          'online_banking_fpx',
          'online_banking_poland',
          'online_banking_slovakia',
          'oxxo',
          'pago_efectivo',
          'permata_bank_transfer',
          'open_banking_uk',
          'pay_bright',
          'paypal',
          'paze',
          'pix',
          'pay_safe_card',
          'przelewy24',
          'prompt_pay',
          'pse',
          'red_compra',
          'red_pagos',
          'samsung_pay',
          'sepa',
          'sepa_bank_transfer',
          'sofort',
          'swish',
          'touch_n_go',
          'trustly',
          'twint',
          'upi_collect',
          'upi_intent',
          'vipps',
          'viet_qr',
          'venmo',
          'walley',
          'we_chat_pay',
          'seven_eleven',
          'lawson',
          'mini_stop',
          'family_mart',
          'seicomart',
          'pay_easy',
          'local_bank_transfer',
          'mifinity',
          'open_banking_pis',
          'direct_carrier_billing',
          'instant_bank_transfer',
          'instant_bank_transfer_finland',
          'instant_bank_transfer_poland',
          'revolut_pay',
        ],
      },
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
  const body = args as any;
  return asTextContentResult(await client.payments.createSessionToken(body));
};

export default { metadata, tool, handler };
