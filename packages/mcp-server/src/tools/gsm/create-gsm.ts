// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'gsm',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/gsm',
  operationId: 'Create Gsm Rule',
};

export const tool: Tool = {
  name: 'create_gsm',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a GSM (Global Status Mapping) Rule. A GSM rule is used to map a connector's error message/error code combination during a particular payments flow/sub-flow to Hyperswitch's unified status/error code/error message combination. It is also used to decide the next action in the flow - retry/requeue/do_default\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/gsm_response',\n  $defs: {\n    gsm_response: {\n      type: 'object',\n      properties: {\n        clear_pan_possible: {\n          type: 'boolean',\n          description: 'indicates if retry with pan is possible'\n        },\n        code: {\n          type: 'string',\n          description: 'code received from the connector'\n        },\n        connector: {\n          type: 'string',\n          description: 'The connector through which payment has gone through'\n        },\n        decision: {\n          type: 'string',\n          description: 'decision to be taken for auto retries flow'\n        },\n        flow: {\n          type: 'string',\n          description: 'The flow in which the code and message occurred for a connector'\n        },\n        message: {\n          type: 'string',\n          description: 'message received from the connector'\n        },\n        status: {\n          type: 'string',\n          description: 'status provided by the router'\n        },\n        step_up_possible: {\n          type: 'boolean',\n          description: 'indicates if step_up retry is possible'\n        },\n        sub_flow: {\n          type: 'string',\n          description: 'The sub_flow in which the code and message occurred  for a connector'\n        },\n        error_category: {\n          $ref: '#/$defs/error_category'\n        },\n        router_error: {\n          type: 'string',\n          description: 'optional error provided by the router'\n        },\n        unified_code: {\n          type: 'string',\n          description: 'error code unified across the connectors'\n        },\n        unified_message: {\n          type: 'string',\n          description: 'error message unified across the connectors'\n        }\n      },\n      required: [        'clear_pan_possible',\n        'code',\n        'connector',\n        'decision',\n        'flow',\n        'message',\n        'status',\n        'step_up_possible',\n        'sub_flow'\n      ]\n    },\n    error_category: {\n      type: 'string',\n      enum: [        'frm_decline',\n        'processor_downtime',\n        'processor_decline_unauthorized',\n        'issue_with_payment_method',\n        'processor_decline_incorrect_data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      clear_pan_possible: {
        type: 'boolean',
        description: 'indicates if retry with pan is possible',
      },
      code: {
        type: 'string',
        description: 'code received from the connector',
      },
      connector: {
        $ref: '#/$defs/connector',
      },
      decision: {
        $ref: '#/$defs/gsm_decision',
      },
      flow: {
        type: 'string',
        description: 'The flow in which the code and message occurred for a connector',
      },
      message: {
        type: 'string',
        description: 'message received from the connector',
      },
      status: {
        type: 'string',
        description: 'status provided by the router',
      },
      step_up_possible: {
        type: 'boolean',
        description: 'indicates if step_up retry is possible',
      },
      sub_flow: {
        type: 'string',
        description: 'The sub_flow in which the code and message occurred  for a connector',
      },
      error_category: {
        $ref: '#/$defs/error_category',
      },
      router_error: {
        type: 'string',
        description: 'optional error provided by the router',
      },
      unified_code: {
        type: 'string',
        description: 'error code unified across the connectors',
      },
      unified_message: {
        type: 'string',
        description: 'error message unified across the connectors',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      connector: {
        type: 'string',
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
          'bambora',
          'bamboraapac',
          'bankofamerica',
          'barclaycard',
          'billwerk',
          'bitpay',
          'bluesnap',
          'boku',
          'braintree',
          'cashtocode',
          'chargebee',
          'checkout',
          'coinbase',
          'coingate',
          'cryptopay',
          'ctp_mastercard',
          'ctp_visa',
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
          'gpayments',
          'hipay',
          'helcim',
          'hyperswitch_vault',
          'inespay',
          'iatapay',
          'itaubank',
          'jpmorgan',
          'juspaythreedsserver',
          'klarna',
          'mifinity',
          'mollie',
          'moneris',
          'multisafepay',
          'netcetera',
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
          'shift4',
          'square',
          'stax',
          'stripe',
          'stripebilling',
          'taxjar',
          'threedsecureio',
          'tokenio',
          'trustpay',
          'tsys',
          'vgs',
          'volt',
          'wellsfargo',
          'wise',
          'worldline',
          'worldpay',
          'worldpayvantiv',
          'worldpayxml',
          'signifyd',
          'plaid',
          'riskified',
          'xendit',
          'zen',
          'zsl',
        ],
      },
      gsm_decision: {
        type: 'string',
        enum: ['retry', 'requeue', 'do_default'],
      },
      error_category: {
        type: 'string',
        enum: [
          'frm_decline',
          'processor_downtime',
          'processor_decline_unauthorized',
          'issue_with_payment_method',
          'processor_decline_incorrect_data',
        ],
      },
    },
  },
};

export const handler = async (client: Hyperswitch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.gsm.create(body)));
};

export default { metadata, tool, handler };
