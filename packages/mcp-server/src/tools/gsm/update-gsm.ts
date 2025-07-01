// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Updates a Gsm Rule',
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
  return asTextContentResult(await client.gsm.update(body));
};

export default { metadata, tool, handler };
