// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hyperswitch-mcp/filtering';
import { asTextContentResult } from 'hyperswitch-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Hyperswitch from 'hyperswitch';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/customers/list',
  operationId: 'List all Customers for a Merchant',
};

export const tool: Tool = {
  name: 'list_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all the customers for a particular merchant id.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/customer'\n  },\n  $defs: {\n    customer: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'A timestamp (ISO 8601 code) that determines when the customer was created',\n          format: 'date-time'\n        },\n        customer_id: {\n          type: 'string',\n          description: 'The identifier for the customer object'\n        },\n        address: {\n          $ref: '#/$defs/address_details'\n        },\n        default_payment_method_id: {\n          type: 'string',\n          description: 'The identifier for the default payment method.'\n        },\n        description: {\n          type: 'string',\n          description: 'An arbitrary string that you can attach to a customer object.'\n        },\n        email: {\n          type: 'string',\n          description: 'The customer\\'s email address'\n        },\n        metadata: {\n          type: 'object',\n          description: 'You can specify up to 50 keys, with key names up to 40 characters long and values up to 500\\ncharacters long. Metadata is useful for storing additional, structured information on an\\nobject.'\n        },\n        name: {\n          type: 'string',\n          description: 'The customer\\'s name'\n        },\n        phone: {\n          type: 'string',\n          description: 'The customer\\'s phone number'\n        },\n        phone_country_code: {\n          type: 'string',\n          description: 'The country code for the customer phone number'\n        }\n      },\n      required: [        'created_at',\n        'customer_id'\n      ]\n    },\n    address_details: {\n      type: 'object',\n      description: 'Address details',\n      properties: {\n        city: {\n          type: 'string',\n          description: 'The city, district, suburb, town, or village of the address.'\n        },\n        country: {\n          $ref: '#/$defs/country_alpha2'\n        },\n        first_name: {\n          type: 'string',\n          description: 'The first name for the address'\n        },\n        last_name: {\n          type: 'string',\n          description: 'The last name for the address'\n        },\n        line1: {\n          type: 'string',\n          description: 'The first line of the street address or P.O. Box.'\n        },\n        line2: {\n          type: 'string',\n          description: 'The second line of the street address or P.O. Box (e.g., apartment, suite, unit, or building).'\n        },\n        line3: {\n          type: 'string',\n          description: 'The third line of the street address, if applicable.'\n        },\n        state: {\n          type: 'string',\n          description: 'The address state'\n        },\n        zip: {\n          type: 'string',\n          description: 'The zip/postal code for the address'\n        }\n      },\n      required: []\n    },\n    country_alpha2: {\n      type: 'string',\n      enum: [        'AF',\n        'AX',\n        'AL',\n        'DZ',\n        'AS',\n        'AD',\n        'AO',\n        'AI',\n        'AQ',\n        'AG',\n        'AR',\n        'AM',\n        'AW',\n        'AU',\n        'AT',\n        'AZ',\n        'BS',\n        'BH',\n        'BD',\n        'BB',\n        'BY',\n        'BE',\n        'BZ',\n        'BJ',\n        'BM',\n        'BT',\n        'BO',\n        'BQ',\n        'BA',\n        'BW',\n        'BV',\n        'BR',\n        'IO',\n        'BN',\n        'BG',\n        'BF',\n        'BI',\n        'KH',\n        'CM',\n        'CA',\n        'CV',\n        'KY',\n        'CF',\n        'TD',\n        'CL',\n        'CN',\n        'CX',\n        'CC',\n        'CO',\n        'KM',\n        'CG',\n        'CD',\n        'CK',\n        'CR',\n        'CI',\n        'HR',\n        'CU',\n        'CW',\n        'CY',\n        'CZ',\n        'DK',\n        'DJ',\n        'DM',\n        'DO',\n        'EC',\n        'EG',\n        'SV',\n        'GQ',\n        'ER',\n        'EE',\n        'ET',\n        'FK',\n        'FO',\n        'FJ',\n        'FI',\n        'FR',\n        'GF',\n        'PF',\n        'TF',\n        'GA',\n        'GM',\n        'GE',\n        'DE',\n        'GH',\n        'GI',\n        'GR',\n        'GL',\n        'GD',\n        'GP',\n        'GU',\n        'GT',\n        'GG',\n        'GN',\n        'GW',\n        'GY',\n        'HT',\n        'HM',\n        'VA',\n        'HN',\n        'HK',\n        'HU',\n        'IS',\n        'IN',\n        'ID',\n        'IR',\n        'IQ',\n        'IE',\n        'IM',\n        'IL',\n        'IT',\n        'JM',\n        'JP',\n        'JE',\n        'JO',\n        'KZ',\n        'KE',\n        'KI',\n        'KP',\n        'KR',\n        'KW',\n        'KG',\n        'LA',\n        'LV',\n        'LB',\n        'LS',\n        'LR',\n        'LY',\n        'LI',\n        'LT',\n        'LU',\n        'MO',\n        'MK',\n        'MG',\n        'MW',\n        'MY',\n        'MV',\n        'ML',\n        'MT',\n        'MH',\n        'MQ',\n        'MR',\n        'MU',\n        'YT',\n        'MX',\n        'FM',\n        'MD',\n        'MC',\n        'MN',\n        'ME',\n        'MS',\n        'MA',\n        'MZ',\n        'MM',\n        'NA',\n        'NR',\n        'NP',\n        'NL',\n        'NC',\n        'NZ',\n        'NI',\n        'NE',\n        'NG',\n        'NU',\n        'NF',\n        'MP',\n        'NO',\n        'OM',\n        'PK',\n        'PW',\n        'PS',\n        'PA',\n        'PG',\n        'PY',\n        'PE',\n        'PH',\n        'PN',\n        'PL',\n        'PT',\n        'PR',\n        'QA',\n        'RE',\n        'RO',\n        'RU',\n        'RW',\n        'BL',\n        'SH',\n        'KN',\n        'LC',\n        'MF',\n        'PM',\n        'VC',\n        'WS',\n        'SM',\n        'ST',\n        'SA',\n        'SN',\n        'RS',\n        'SC',\n        'SL',\n        'SG',\n        'SX',\n        'SK',\n        'SI',\n        'SB',\n        'SO',\n        'ZA',\n        'GS',\n        'SS',\n        'ES',\n        'LK',\n        'SD',\n        'SR',\n        'SJ',\n        'SZ',\n        'SE',\n        'CH',\n        'SY',\n        'TW',\n        'TJ',\n        'TZ',\n        'TH',\n        'TL',\n        'TG',\n        'TK',\n        'TO',\n        'TT',\n        'TN',\n        'TR',\n        'TM',\n        'TC',\n        'TV',\n        'UG',\n        'UA',\n        'AE',\n        'GB',\n        'UM',\n        'UY',\n        'UZ',\n        'VU',\n        'VE',\n        'VN',\n        'VG',\n        'VI',\n        'WF',\n        'EH',\n        'YE',\n        'ZM',\n        'ZW',\n        'US'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Limit for pagination',
      },
      offset: {
        type: 'integer',
        description: 'Offset for pagination',
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
  return asTextContentResult(await maybeFilter(args, await client.customers.list(body)));
};

export default { metadata, tool, handler };
