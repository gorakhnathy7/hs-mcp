// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'routing.default',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/routing/default',
  operationId: 'Retrieve default fallback config',
};

export const tool: Tool = {
  name: 'retrieve_routing_default',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve default fallback config\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/routable_connector_choice'\n  },\n  $defs: {\n    routable_connector_choice: {\n      type: 'object',\n      description: 'Routable Connector chosen for a payment',\n      properties: {\n        connector: {\n          type: 'string',\n          description: 'RoutableConnectors are the subset of Connectors that are eligible for payments routing',\n          enum: [            'adyenplatform',\n            'stripe_billing_test',\n            'phonypay',\n            'fauxpay',\n            'pretendpay',\n            'stripe_test',\n            'adyen_test',\n            'checkout_test',\n            'paypal_test',\n            'aci',\n            'adyen',\n            'airwallex',\n            'archipel',\n            'authorizedotnet',\n            'bankofamerica',\n            'barclaycard',\n            'billwerk',\n            'bitpay',\n            'bambora',\n            'bamboraapac',\n            'bluesnap',\n            'boku',\n            'braintree',\n            'cashtocode',\n            'chargebee',\n            'checkout',\n            'coinbase',\n            'coingate',\n            'cryptopay',\n            'cybersource',\n            'datatrans',\n            'deutschebank',\n            'digitalvirgo',\n            'dlocal',\n            'ebanx',\n            'elavon',\n            'facilitapay',\n            'fiserv',\n            'fiservemea',\n            'fiuu',\n            'forte',\n            'getnet',\n            'globalpay',\n            'globepay',\n            'gocardless',\n            'hipay',\n            'helcim',\n            'iatapay',\n            'inespay',\n            'itaubank',\n            'jpmorgan',\n            'klarna',\n            'mifinity',\n            'mollie',\n            'moneris',\n            'multisafepay',\n            'nexinets',\n            'nexixpay',\n            'nmi',\n            'nomupay',\n            'noon',\n            'novalnet',\n            'nuvei',\n            'opennode',\n            'paybox',\n            'payme',\n            'payone',\n            'paypal',\n            'paystack',\n            'payu',\n            'placetopay',\n            'powertranz',\n            'prophetpay',\n            'rapyd',\n            'razorpay',\n            'recurly',\n            'redsys',\n            'riskified',\n            'shift4',\n            'signifyd',\n            'square',\n            'stax',\n            'stripe',\n            'stripebilling',\n            'trustpay',\n            'tokenio',\n            'tsys',\n            'volt',\n            'wellsfargo',\n            'wise',\n            'worldline',\n            'worldpay',\n            'worldpayvantiv',\n            'worldpayxml',\n            'xendit',\n            'zen',\n            'plaid',\n            'zsl'\n          ]\n        },\n        merchant_connector_id: {\n          type: 'string'\n        }\n      },\n      required: [        'connector'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.routing.default.retrieve()));
};

export default { metadata, tool, handler };
