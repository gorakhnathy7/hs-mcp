# Hyperswitch TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:gorakhnathy7/hs-mcp.git
cd hs-mcp
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export HYPERSWITCH_API_KEY="My API Key"
export HYPERSWITCH_EPHEMERAL_KEY="My Ephemeral Key"
export HYPERSWITCH_JWT_KEY="My Jwt Key"
export HYPERSWITCH_PUBLISHABLE_KEY="My Publishable Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y hyperswitch-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "hyperswitch_api": {
      "command": "node",
      "args": ["/path/to/local/hs-mcp/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "HYPERSWITCH_API_KEY": "My API Key",
        "HYPERSWITCH_EPHEMERAL_KEY": "My Ephemeral Key",
        "HYPERSWITCH_JWT_KEY": "My Jwt Key",
        "HYPERSWITCH_PUBLISHABLE_KEY": "My Publishable Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "hyperswitch-mcp/server";

// import a specific tool
import createPayments from "hyperswitch-mcp/tools/payments/create-payments";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createPayments, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `payments`:

- `create_payments` (`write`): Creates a payment resource, which represents a customer's intent to pay.
  This endpoint is the starting point for various payment flows:
- `retrieve_payments` (`read`): Retrieves a Payment. This API can also be used to get the status of a previously initiated payment or next action for an ongoing payment
- `update_payments` (`write`): To update the properties of a _PaymentIntent_ object. This may include attaching a payment method, or attaching customer object or metadata fields after the Payment is created
- `list_payments` (`read`): To list the _payments_
- `cancel_payments` (`write`): A Payment could can be cancelled when it is in one of these statuses: `requires_payment_method`, `requires_capture`, `requires_confirmation`, `requires_customer_action`.
- `capture_payments` (`write`): Captures the funds for a previously authorized payment intent where `capture_method` was set to `manual` and the payment is in a `requires_capture` state.

  Upon successful capture, the payment status usually transitions to `succeeded`.
  The `amount_to_capture` can be specified in the request body; it must be less than or equal to the payment's `amount_capturable`. If omitted, the full capturable amount is captured.

  A payment must be in a capturable state (e.g., `requires_capture`). Attempting to capture an already `succeeded` (and fully captured) payment or one in an invalid state will lead to an error.

- `complete_authorize_payments` (`write`): Payments - Complete Authorize
- `confirm_payments` (`write`): Confirms a payment intent that was previously created with `confirm: false`. This action attempts to authorize the payment with the payment processor.

  Expected status transitions after confirmation:

  - `succeeded`: If authorization is successful and `capture_method` is `automatic`.
  - `requires_capture`: If authorization is successful and `capture_method` is `manual`.
  - `failed`: If authorization fails.

- `create_session_token_payments` (`write`): Creates a session object or a session token for wallets like Apple Pay, Google Pay, etc. These tokens are used by Hyperswitch's SDK to initiate these wallets' SDK.
- `incremental_authorization_payments` (`write`): Authorized amount for a payment can be incremented if it is in status: requires_capture
- `post_session_tokens_payments` (`write`): Payments - Post Session Tokens
- `update_metadata_payments` (`write`): Payments - Update Metadata

### Resource `payments.number_3ds`:

- `authenticate_payments_number_3ds` (`write`): External 3DS Authentication is performed and returns the AuthenticationResponse

### Resource `payment_link`:

- `retrieve_payment_link` (`read`): To retrieve the properties of a Payment Link. This may be used to get the status of a previously initiated payment or next action for an ongoing payment

### Resource `relay`:

- `create_relay` (`write`): Creates a relay request.
- `retrieve_relay` (`read`): Retrieves a relay details.

### Resource `refunds`:

- `create_refunds` (`write`): Creates a refund against an already processed payment. In case of some processors, you can even opt to refund only a partial amount multiple times until the original charge amount has been refunded
- `retrieve_refunds` (`read`): Retrieves a Refund. This may be used to get the status of a previously initiated refund
- `update_refunds` (`write`): Updates the properties of a Refund object. This API can be used to attach a reason for the refund or metadata fields
- `list_refunds` (`write`): Lists all the refunds associated with the merchant, or for a specific payment if payment_id is provided

### Resource `organization`:

- `create_organization` (`write`): Create a new organization
- `retrieve_organization` (`read`): Retrieve an existing organization
- `update_organization` (`write`): Create a new organization for .

### Resource `gsm`:

- `create_gsm` (`write`): Creates a GSM (Global Status Mapping) Rule. A GSM rule is used to map a connector's error message/error code combination during a particular payments flow/sub-flow to Hyperswitch's unified status/error code/error message combination. It is also used to decide the next action in the flow - retry/requeue/do_default
- `retrieve_gsm` (`write`): Retrieves a Gsm Rule
- `update_gsm` (`write`): Updates a Gsm Rule
- `delete_gsm` (`write`): Deletes a Gsm Rule

### Resource `mandates`:

- `retrieve_mandates` (`read`): Retrieves a mandate created using the Payments/Create API
- `revoke_mandates` (`write`): Revokes a mandate created using the Payments/Create API

### Resource `customers`:

- `create_customers` (`write`): Creates a customer object and stores the customer details to be reused for future payments.
  Incase the customer already exists in the system, this API will respond with the customer details.
- `retrieve_customers` (`read`): Retrieves a customer's details.
- `update_customers` (`write`): Updates the customer's details in a customer object.
- `list_customers` (`read`): Lists all the customers for a particular merchant id.
- `delete_customers` (`write`): Delete a customer record.
- `list_mandates_customers` (`read`): Lists all the mandates for a particular customer id.

### Resource `customers.payment_methods`:

- `list_customers_payment_methods` (`read`): Lists all the applicable payment methods for a particular Customer ID.
- `list_saved_customers_payment_methods` (`read`): Lists all the applicable payment methods for a particular payment tied to the `client_secret`.

### Resource `payment_methods`:

- `create_payment_methods` (`write`): Creates and stores a payment method against a customer.
  In case of cards, this API should be used only by PCI compliant merchants.
- `retrieve_payment_methods` (`read`): Retrieves a payment method of a customer.
- `update_payment_methods` (`write`): Update an existing payment method of a customer.
  This API is useful for use cases such as updating the card number for expired cards to prevent discontinuity in recurring payments.
- `delete_payment_methods` (`write`): Deletes a payment method of a customer.
- `set_default_payment_methods` (`write`): Set the Payment Method as Default for the Customer.

### Resource `disputes`:

- `retrieve_disputes` (`read`): Retrieves a dispute
- `list_disputes` (`read`): Lists all the Disputes for a merchant

### Resource `routing`:

- `create_routing` (`write`): Create a routing config
- `retrieve_routing` (`read`): Retrieve a routing algorithm
- `list_routing` (`read`): List all routing configs
- `activate_routing` (`write`): Activate a routing config
- `deactivate_routing` (`write`): Deactivates a routing config
- `retrieve_active_routing` (`read`): Retrieve active config

### Resource `routing.default`:

- `retrieve_routing_default` (`read`): Retrieve default fallback config
- `update_routing_default` (`write`): Update default fallback config

### Resource `routing.default.profile`:

- `retrieve_default_routing_profile` (`read`): Retrieve default config for profiles
- `update_default_routing_profile` (`write`): Update default config for profiles

### Resource `blocklist`:

- `create_blocklist` (`write`):
- `retrieve_blocklist` (`read`):
- `delete_blocklist` (`write`):
- `toggle_blocklist` (`write`):

### Resource `payouts`:

- `create_payouts` (`write`): Payouts - Create
- `retrieve_payouts` (`read`): Payouts - Retrieve
- `update_payouts` (`write`): Payouts - Update
- `cancel_payouts` (`write`): Payouts - Cancel
- `confirm_payouts` (`write`): Payouts - Confirm
- `fulfill_payouts` (`write`): Payouts - Fulfill
- `list_filters_payouts` (`write`): Payouts - List available filters

### Resource `payouts.list`:

- `retrieve_payouts_list` (`read`): Payouts - List
- `with_filters_payouts_list` (`write`): Payouts - List using filters

### Resource `api_keys`:

- `create_api_keys` (`write`): Create a new API Key for accessing our APIs from your servers. The plaintext API Key will be
  displayed only once on creation, so ensure you store it securely.
- `retrieve_api_keys` (`read`): Retrieve information about the specified API Key.
- `update_api_keys` (`write`): Update information for the specified API Key.
- `list_api_keys` (`read`): List all the API Keys associated to a merchant account.
- `revoke_api_keys` (`write`): Revoke the specified API Key. Once revoked, the API Key can no longer be used for
  authenticating with our APIs.

### Resource `events`:

- `list_events` (`write`): List all Events associated with a Merchant Account or Profile.
- `delivery_attempts_events` (`read`): List all delivery attempts for the specified Event.
- `retry_events` (`write`): Manually retry the delivery of the specified Event.

### Resource `events.profile`:

- `list_events_profile` (`write`): List all Events associated with a Profile.

### Resource `poll`:

- `retrieve_status_poll` (`read`): Poll - Retrieve Poll Status

### Resource `profile_acquirers`:

- `create_profile_acquirers` (`write`): Create a new Profile Acquirer for accessing our APIs from your servers.
- `update_profile_acquirers` (`write`): Update a Profile Acquirer for accessing our APIs from your servers.

### Resource `three_ds_decision`:

- `execute_three_ds_decision` (`write`): 3DS Decision - Execute

### Resource `authentication`:

- `create_authentication` (`write`): Create a new authentication for accessing our APIs from your servers.

### Resource `accounts`:

- `create_accounts` (`write`): Create a new account for a _merchant_ and the _merchant_ could be a seller or retailer or client who likes to receive and send payments.
- `retrieve_accounts` (`read`): Retrieve a _merchant_ account details.
- `update_accounts` (`write`): Updates details of an existing merchant account. Helpful in updating merchant details such as email, contact details, or other configuration details like webhook, routing algorithm etc
- `delete_accounts` (`write`): Delete a _merchant_ account
- `kv_accounts` (`write`): Toggle KV mode for the Merchant Account
- `list_payment_methods_accounts` (`read`): Lists the applicable payment methods for a particular Merchant ID.
  Use the client secret and publishable key authorization to list all relevant payment methods of the merchant for the payment corresponding to the client secret.

### Resource `accounts.connectors`:

- `create_accounts_connectors` (`write`): Creates a new Merchant Connector for the merchant account. The connector could be a payment processor/facilitator/acquirer or a provider of specialized services like Fraud/Accounting etc.
- `retrieve_accounts_connectors` (`read`): Retrieves details of a Connector account
- `update_accounts_connectors` (`write`): To update an existing Merchant Connector account. Helpful in enabling/disabling different payment methods and other settings for the connector
- `list_accounts_connectors` (`read`): List Merchant Connector Details for the merchant
- `delete_accounts_connectors` (`write`): Delete or Detach a Merchant Connector from Merchant Account

### Resource `accounts.business_profile`:

- `create_accounts_business_profile` (`write`): Creates a new _profile_ for a merchant
- `retrieve_accounts_business_profile` (`read`): Retrieve existing _profile_
- `update_accounts_business_profile` (`write`): Update the _profile_
- `list_accounts_business_profile` (`read`): Lists all the _profiles_ under a merchant
- `delete_accounts_business_profile` (`write`): Delete the _profile_

### Resource `accounts.business_profile.dynamic_routing.success_based`:

- `toggle_dynamic_routing_business_profile_accounts_success_based` (`write`): Create a success based dynamic routing algorithm
- `update_config_dynamic_routing_business_profile_accounts_success_based` (`write`): Update success based dynamic routing algorithm

### Resource `accounts.business_profile.dynamic_routing.elimination`:

- `toggle_dynamic_routing_business_profile_accounts_elimination` (`write`): Create a elimination based dynamic routing algorithm

### Resource `accounts.business_profile.dynamic_routing.contracts`:

- `toggle_dynamic_routing_business_profile_accounts_contracts` (`write`): Create a Contract based dynamic routing algorithm
- `update_config_dynamic_routing_business_profile_accounts_contracts` (`write`): Update contract based dynamic routing algorithm
