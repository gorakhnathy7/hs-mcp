// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payouts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.payouts.create({ amount: 0, currency: 'AED' });
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
    const response = await client.payouts.create({
      amount: 0,
      currency: 'AED',
      auto_fulfill: true,
      billing: {
        address: {
          city: 'New York',
          country: 'AF',
          first_name: 'John',
          last_name: 'Doe',
          line1: '123, King Street',
          line2: 'Powelson Avenue',
          line3: 'Bridgewater',
          state: 'New York',
          zip: '08807',
        },
        email: 'email',
        phone: { country_code: '+1', number: '9123456789' },
      },
      business_country: 'AF',
      business_label: 'food',
      confirm: true,
      connector: ['wise', 'adyen'],
      customer: {
        id: 'cus_y3oqhf46pyzuxjbcn2giaqnb44',
        email: 'johntest@test.com',
        name: 'John Doe',
        phone: '9123456789',
        phone_country_code: '+1',
      },
      customer_id: 'cus_y3oqhf46pyzuxjbcn2giaqnb44',
      description: "It's my first payout request",
      email: 'johntest@test.com',
      entity_type: 'Individual',
      metadata: {},
      name: 'John Test',
      payout_link: true,
      payout_link_config: {
        logo: 'https://hyperswitch.io/favicon.ico',
        merchant_name: 'Hyperswitch',
        theme: '#4285F4',
        enabled_payment_methods: [{ payment_method: 'card', payment_method_types: ['ach'] }],
        form_layout: 'tabs',
        payout_link_id: 'pm_collect_link_2bdacf398vwzq5n422S1',
        test_mode: false,
      },
      payout_method_data: {
        card: {
          card_holder_name: 'John Doe',
          card_number: '4242424242424242',
          expiry_month: 'expiry_month',
          expiry_year: 'expiry_year',
        },
      },
      payout_method_id: 'payout_method_id',
      payout_token: '187282ab-40ef-47a9-9206-5099ba31e432',
      payout_type: 'card',
      phone: '9123456789',
      phone_country_code: '+1',
      priority: 'instant',
      profile_id: 'profile_id',
      recurring: true,
      return_url: 'https://hyperswitch.io',
      routing: {
        data: { connector: 'adyenplatform', merchant_connector_id: 'merchant_connector_id' },
        type: 'single',
      },
      session_expiry: 900,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.payouts.retrieve('payout_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payouts.retrieve('payout_id', { force_sync: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Hyperswitch.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.payouts.update('payout_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.payouts.cancel('payout_id', {
      body_payout_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
  test.skip('cancel: required and optional params', async () => {
    const response = await client.payouts.cancel('payout_id', {
      body_payout_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('confirm: only required params', async () => {
    const responsePromise = client.payouts.confirm('payout_id', { client_secret: 'client_secret' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('confirm: required and optional params', async () => {
    const response = await client.payouts.confirm('payout_id', {
      client_secret: 'client_secret',
      amount: 1000,
      auto_fulfill: true,
      billing: {
        address: {
          city: 'New York',
          country: 'AF',
          first_name: 'John',
          last_name: 'Doe',
          line1: '123, King Street',
          line2: 'Powelson Avenue',
          line3: 'Bridgewater',
          state: 'New York',
          zip: '08807',
        },
        email: 'email',
        phone: { country_code: '+1', number: '9123456789' },
      },
      business_country: 'AF',
      business_label: 'food',
      connector: ['wise', 'adyen'],
      currency: 'AED',
      customer: {
        id: 'cus_y3oqhf46pyzuxjbcn2giaqnb44',
        email: 'johntest@test.com',
        name: 'John Doe',
        phone: '9123456789',
        phone_country_code: '+1',
      },
      customer_id: 'cus_y3oqhf46pyzuxjbcn2giaqnb44',
      description: "It's my first payout request",
      email: 'johntest@test.com',
      entity_type: 'Individual',
      metadata: {},
      name: 'John Test',
      payout_link: true,
      payout_link_config: {
        logo: 'https://hyperswitch.io/favicon.ico',
        merchant_name: 'Hyperswitch',
        theme: '#4285F4',
        enabled_payment_methods: [{ payment_method: 'card', payment_method_types: ['ach'] }],
        form_layout: 'tabs',
        payout_link_id: 'pm_collect_link_2bdacf398vwzq5n422S1',
        test_mode: false,
      },
      payout_method_data: {
        card: {
          card_holder_name: 'John Doe',
          card_number: '4242424242424242',
          expiry_month: 'expiry_month',
          expiry_year: 'expiry_year',
        },
      },
      payout_method_id: 'payout_method_id',
      payout_token: '187282ab-40ef-47a9-9206-5099ba31e432',
      payout_type: 'card',
      phone: '9123456789',
      phone_country_code: '+1',
      priority: 'instant',
      profile_id: 'profile_id',
      recurring: true,
      return_url: 'https://hyperswitch.io',
      routing: {
        data: { connector: 'adyenplatform', merchant_connector_id: 'merchant_connector_id' },
        type: 'single',
      },
      session_expiry: 900,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('fulfill: only required params', async () => {
    const responsePromise = client.payouts.fulfill('payout_id', {
      body_payout_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
  test.skip('fulfill: required and optional params', async () => {
    const response = await client.payouts.fulfill('payout_id', {
      body_payout_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listFilters: only required params', async () => {
    const responsePromise = client.payouts.listFilters({ start_time: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listFilters: required and optional params', async () => {
    const response = await client.payouts.listFilters({
      start_time: '2019-12-27T18:11:19.117Z',
      end_time: '2019-12-27T18:11:19.117Z',
    });
  });
});
