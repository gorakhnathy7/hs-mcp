// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'routing.default',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/routing/default',
  operationId: 'Update default fallback config',
};

export const tool: Tool = {
  name: 'update_routing_default',
  description: 'Update default fallback config',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/routable_connector_choice',
        },
      },
    },
    $defs: {
      routable_connector_choice: {
        type: 'object',
        description: 'Routable Connector chosen for a payment',
        properties: {
          connector: {
            type: 'string',
            description:
              'RoutableConnectors are the subset of Connectors that are eligible for payments routing',
            enum: [
              'adyenplatform',
              'stripe_billing_test',
              'phonypay',
              'fauxpay',
              'pretendpay',
              'stripe_test',
              'adyen_test',
              'checkout_test',
              'paypal_test',
              'aci',
              'adyen',
              'airwallex',
              'archipel',
              'authorizedotnet',
              'bankofamerica',
              'barclaycard',
              'billwerk',
              'bitpay',
              'bambora',
              'bamboraapac',
              'bluesnap',
              'boku',
              'braintree',
              'cashtocode',
              'chargebee',
              'checkout',
              'coinbase',
              'coingate',
              'cryptopay',
              'cybersource',
              'datatrans',
              'deutschebank',
              'digitalvirgo',
              'dlocal',
              'ebanx',
              'elavon',
              'facilitapay',
              'fiserv',
              'fiservemea',
              'fiuu',
              'forte',
              'getnet',
              'globalpay',
              'globepay',
              'gocardless',
              'hipay',
              'helcim',
              'iatapay',
              'inespay',
              'itaubank',
              'jpmorgan',
              'klarna',
              'mifinity',
              'mollie',
              'moneris',
              'multisafepay',
              'nexinets',
              'nexixpay',
              'nmi',
              'nomupay',
              'noon',
              'novalnet',
              'nuvei',
              'opennode',
              'paybox',
              'payme',
              'payone',
              'paypal',
              'paystack',
              'payu',
              'placetopay',
              'powertranz',
              'prophetpay',
              'rapyd',
              'razorpay',
              'recurly',
              'redsys',
              'riskified',
              'shift4',
              'signifyd',
              'square',
              'stax',
              'stripe',
              'stripebilling',
              'trustpay',
              'tokenio',
              'tsys',
              'volt',
              'wellsfargo',
              'wise',
              'worldline',
              'worldpay',
              'worldpayvantiv',
              'worldpayxml',
              'xendit',
              'zen',
              'plaid',
              'zsl',
            ],
          },
          merchant_connector_id: {
            type: 'string',
          },
        },
        required: ['connector'],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.routing.default.update(body));
};

export default { metadata, tool, handler };
