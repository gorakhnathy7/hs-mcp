// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.accounts.create({ merchant_id: 'merchant_abc' });
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
    const response = await client.accounts.create({
      merchant_id: 'merchant_abc',
      enable_payment_response_hash: true,
      frm_routing_algorithm: {},
      locker_id: 'locker_abc123',
      merchant_account_type: 'standard',
      merchant_details: {
        about_business: 'Online Retail with a wide selection of organic products for North America',
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
        primary_contact_person: 'John Doe',
        primary_email: 'johndoe@test.com',
        primary_phone: '999999999',
        secondary_contact_person: 'John Doe2',
        secondary_email: 'johndoe2@test.com',
        secondary_phone: '999999988',
        website: 'www.example.com',
      },
      merchant_name: 'NewAge Retailer',
      metadata: {},
      organization_id: 'org_q98uSGAYbjEwqs0mJwnz',
      parent_merchant_id: 'xkkdf909012sdjki2dkh5sdf',
      payment_response_hash_key: 'payment_response_hash_key',
      payout_routing_algorithm: {
        data: { connector: 'adyenplatform', merchant_connector_id: 'merchant_connector_id' },
        type: 'single',
      },
      pm_collect_link_config: {
        enabled_payment_methods: [{ payment_method: 'card', payment_method_types: ['ach'] }],
      },
      primary_business_details: { business: 'food', country: 'AF' },
      product_type: 'orchestration',
      publishable_key: 'AH3423bkjbkjdsfbkj',
      redirect_to_merchant_with_http_post: true,
      return_url: 'https://www.example.com/success',
      sub_merchants_enabled: false,
      webhook_details: {
        payment_statuses_enabled: ['succeeded', 'failed', 'partially_captured', 'requires_merchant_action'],
        refund_statuses_enabled: ['succeeded', 'failed'],
        payment_created_enabled: true,
        payment_failed_enabled: true,
        payment_succeeded_enabled: true,
        payout_statuses_enabled: ['success', 'failed'],
        webhook_password: 'ekart@123',
        webhook_url: 'www.ekart.com/webhooks',
        webhook_username: 'ekart_retail',
        webhook_version: '1.0.2',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.accounts.retrieve('account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.accounts.update('account_id', { merchant_id: 'merchant_abc' });
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
    const response = await client.accounts.update('account_id', {
      merchant_id: 'merchant_abc',
      default_profile: 'default_profile',
      enable_payment_response_hash: true,
      frm_routing_algorithm: {},
      locker_id: 'locker_abc123',
      merchant_details: {
        about_business: 'Online Retail with a wide selection of organic products for North America',
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
        primary_contact_person: 'John Doe',
        primary_email: 'johndoe@test.com',
        primary_phone: '999999999',
        secondary_contact_person: 'John Doe2',
        secondary_email: 'johndoe2@test.com',
        secondary_phone: '999999988',
        website: 'www.example.com',
      },
      merchant_name: 'merchant_name',
      metadata: {},
      parent_merchant_id: 'xkkdf909012sdjki2dkh5sdf',
      payment_response_hash_key: 'payment_response_hash_key',
      payout_routing_algorithm: {
        data: { connector: 'adyenplatform', merchant_connector_id: 'merchant_connector_id' },
        type: 'single',
      },
      pm_collect_link_config: {
        enabled_payment_methods: [{ payment_method: 'card', payment_method_types: ['ach'] }],
      },
      primary_business_details: [{ business: 'food', country: 'AF' }],
      publishable_key: 'AH3423bkjbkjdsfbkj',
      redirect_to_merchant_with_http_post: true,
      return_url: 'https://www.example.com/success',
      sub_merchants_enabled: false,
      webhook_details: {
        payment_statuses_enabled: ['succeeded', 'failed', 'partially_captured', 'requires_merchant_action'],
        refund_statuses_enabled: ['succeeded', 'failed'],
        payment_created_enabled: true,
        payment_failed_enabled: true,
        payment_succeeded_enabled: true,
        payout_statuses_enabled: ['success', 'failed'],
        webhook_password: 'ekart@123',
        webhook_url: 'www.ekart.com/webhooks',
        webhook_username: 'ekart_retail',
        webhook_version: '1.0.2',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.accounts.delete('account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('kv: only required params', async () => {
    const responsePromise = client.accounts.kv('account_id', { kv_enabled: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('kv: required and optional params', async () => {
    const response = await client.accounts.kv('account_id', { kv_enabled: true });
  });

  // skipped: tests are disabled for the time being
  test.skip('listPaymentMethods', async () => {
    const responsePromise = client.accounts.listPaymentMethods();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPaymentMethods: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.listPaymentMethods(
        {
          accepted_countries: ['AF'],
          accepted_currencies: ['AED'],
          amount: 0,
          card_networks: ['Visa'],
          client_secret: 'client_secret',
          installment_payment_enabled: true,
          limit: 0,
          recurring_enabled: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hyperswitch.NotFoundError);
  });
});
