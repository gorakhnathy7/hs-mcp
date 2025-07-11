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
  httpPath: '/gsm/update',
  operationId: 'Update Gsm Rule',
};

export const tool: Tool = {
  name: 'update_gsm',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a Gsm Rule\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/gsm_response',\n  $defs: {\n    gsm_response: {\n      type: 'object',\n      properties: {\n        clear_pan_possible: {\n          type: 'boolean',\n          description: 'indicates if retry with pan is possible'\n        },\n        code: {\n          type: 'string',\n          description: 'code received from the connector'\n        },\n        connector: {\n          type: 'string',\n          description: 'The connector through which payment has gone through'\n        },\n        decision: {\n          type: 'string',\n          description: 'decision to be taken for auto retries flow'\n        },\n        flow: {\n          type: 'string',\n          description: 'The flow in which the code and message occurred for a connector'\n        },\n        message: {\n          type: 'string',\n          description: 'message received from the connector'\n        },\n        status: {\n          type: 'string',\n          description: 'status provided by the router'\n        },\n        step_up_possible: {\n          type: 'boolean',\n          description: 'indicates if step_up retry is possible'\n        },\n        sub_flow: {\n          type: 'string',\n          description: 'The sub_flow in which the code and message occurred  for a connector'\n        },\n        error_category: {\n          $ref: '#/$defs/error_category'\n        },\n        router_error: {\n          type: 'string',\n          description: 'optional error provided by the router'\n        },\n        unified_code: {\n          type: 'string',\n          description: 'error code unified across the connectors'\n        },\n        unified_message: {\n          type: 'string',\n          description: 'error message unified across the connectors'\n        }\n      },\n      required: [        'clear_pan_possible',\n        'code',\n        'connector',\n        'decision',\n        'flow',\n        'message',\n        'status',\n        'step_up_possible',\n        'sub_flow'\n      ]\n    },\n    error_category: {\n      type: 'string',\n      enum: [        'frm_decline',\n        'processor_downtime',\n        'processor_decline_unauthorized',\n        'issue_with_payment_method',\n        'processor_decline_incorrect_data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
        description: 'code received from the connector',
      },
      connector: {
        type: 'string',
        description: 'The connector through which payment has gone through',
      },
      flow: {
        type: 'string',
        description: 'The flow in which the code and message occurred for a connector',
      },
      message: {
        type: 'string',
        description: 'message received from the connector',
      },
      sub_flow: {
        type: 'string',
        description: 'The sub_flow in which the code and message occurred  for a connector',
      },
      clear_pan_possible: {
        type: 'boolean',
        description: 'indicates if retry with pan is possible',
      },
      decision: {
        $ref: '#/$defs/gsm_decision',
      },
      error_category: {
        $ref: '#/$defs/error_category',
      },
      router_error: {
        type: 'string',
        description: 'optional error provided by the router',
      },
      status: {
        type: 'string',
        description: 'status provided by the router',
      },
      step_up_possible: {
        type: 'boolean',
        description: 'indicates if step_up retry is possible',
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
  return asTextContentResult(await maybeFilter(args, await client.gsm.update(body)));
};

export default { metadata, tool, handler };
