// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connectors', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.accounts.connectors.create('account_id', {
      connector_name: 'adyen',
      connector_type: 'payment_processor',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.accounts.connectors.create('account_id', {
      connector_name: 'adyen',
      connector_type: 'payment_processor',
      additional_merchant_data: {
        open_banking_recipient_data: { connector_recipient_id: 'connector_recipient_id' },
      },
      business_country: 'AF',
      business_label: 'business_label',
      business_sub_label: 'chase',
      connector_account_details: { connector_account_details: {}, metadata: {} },
      connector_label: 'EU_adyen',
      connector_wallets_details: {
        apple_pay: {},
        apple_pay_combined: {},
        google_pay: {},
        paze: {},
        samsung_pay: {},
      },
      connector_webhook_details: {
        additional_secret: '12345678900987654321',
        merchant_secret: '12345678900987654321',
      },
      disabled: false,
      frm_configs: [
        {
          gateway: 'payment_processor',
          payment_methods: [
            {
              payment_method: 'card',
              flow: 'pre',
              payment_method_types: [
                { action: 'cancel_txn', card_networks: 'Visa', flow: 'pre', payment_method_type: 'ach' },
              ],
            },
          ],
        },
      ],
      merchant_connector_id: 'mca_5apGeP94tMts6rg3U3kR',
      metadata: {},
      payment_methods_enabled: [
        {
          payment_method: 'wallet',
          payment_method_types: [
            {
              payment_method_type: 'ach',
              accepted_countries: { list: ['AF'], type: 'enable_only' },
              accepted_currencies: { list: ['AED'], type: 'enable_only' },
              card_networks: ['Visa'],
              installment_payment_enabled: true,
              maximum_amount: 0,
              minimum_amount: 0,
              payment_experience: 'redirect_to_url',
              recurring_enabled: false,
            },
            {
              payment_method_type: 'ach',
              accepted_countries: { list: ['AF'], type: 'enable_only' },
              accepted_currencies: { list: ['AED'], type: 'enable_only' },
              card_networks: ['Visa'],
              installment_payment_enabled: true,
              maximum_amount: 0,
              minimum_amount: 0,
              payment_experience: 'redirect_to_url',
              recurring_enabled: false,
            },
          ],
        },
      ],
      pm_auth_config: {},
      profile_id: 'profile_id',
      status: 'inactive',
      test_mode: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.accounts.connectors.retrieve('merchant_connector_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.accounts.connectors.retrieve('merchant_connector_id', {
      account_id: 'account_id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.accounts.connectors.update('merchant_connector_id', {
      account_id: 'account_id',
      connector_type: 'payment_processor',
      status: 'inactive',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.accounts.connectors.update('merchant_connector_id', {
      account_id: 'account_id',
      connector_type: 'payment_processor',
      status: 'inactive',
      additional_merchant_data: {
        open_banking_recipient_data: { connector_recipient_id: 'connector_recipient_id' },
      },
      connector_account_details: { connector_account_details: {}, metadata: {} },
      connector_label: 'stripe_US_travel',
      connector_wallets_details: {
        apple_pay: {},
        apple_pay_combined: {},
        google_pay: {},
        paze: {},
        samsung_pay: {},
      },
      connector_webhook_details: {
        additional_secret: '12345678900987654321',
        merchant_secret: '12345678900987654321',
      },
      disabled: false,
      frm_configs: [
        {
          gateway: 'payment_processor',
          payment_methods: [
            {
              payment_method: 'card',
              flow: 'pre',
              payment_method_types: [
                { action: 'cancel_txn', card_networks: 'Visa', flow: 'pre', payment_method_type: 'ach' },
              ],
            },
          ],
        },
      ],
      metadata: {},
      payment_methods_enabled: [
        {
          payment_method: 'card',
          payment_method_types: [
            {
              payment_method_type: 'ach',
              accepted_countries: { list: ['AF'], type: 'enable_only' },
              accepted_currencies: { list: ['AED'], type: 'enable_only' },
              card_networks: ['Visa'],
              installment_payment_enabled: true,
              maximum_amount: 0,
              minimum_amount: 0,
              payment_experience: 'redirect_to_url',
              recurring_enabled: false,
            },
          ],
        },
      ],
      pm_auth_config: {},
      test_mode: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.accounts.connectors.list('account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.accounts.connectors.delete('merchant_connector_id', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.accounts.connectors.delete('merchant_connector_id', {
      account_id: 'account_id',
    });
  });
});
