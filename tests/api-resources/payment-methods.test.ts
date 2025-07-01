// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentMethods', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.paymentMethods.create({ payment_method: 'card' });
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
    const response = await client.paymentMethods.create({
      payment_method: 'card',
      bank_transfer: {
        bank_account_number: '000123456',
        bank_routing_number: '110000000',
        bank_city: 'California',
        bank_country_code: 'AF',
        bank_name: 'Deutsche Bank',
      },
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
      card: {
        card_exp_month: '11',
        card_exp_year: '25',
        card_holder_name: 'John Doe',
        card_number: '4242424242424242',
        card_issuer: 'card_issuer',
        card_issuing_country: 'card_issuing_country',
        card_network: 'Visa',
        card_type: 'card_type',
        nick_name: 'John Doe',
      },
      card_network: 'Visa',
      client_secret: 'client_secret',
      customer_id: '{{customer_id}}',
      metadata: {},
      payment_method_data: {
        card: {
          card_exp_month: '10',
          card_exp_year: '25',
          card_holder_name: 'John Doe',
          card_number: '4111111145551142',
          card_issuer: 'card_issuer',
          card_issuing_country: 'card_issuing_country',
          card_network: 'Visa',
          card_type: 'card_type',
          nick_name: 'John Doe',
        },
      },
      payment_method_issuer: 'Visa',
      payment_method_issuer_code: 'jp_hdfc',
      payment_method_type: 'credit',
      wallet: {
        paypal: {
          email: 'john.doe@example.com',
          paypal_id: 'G83KXTJ5EHCQ2',
          telephone_number: '16608213349',
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.paymentMethods.retrieve('method_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.paymentMethods.update('method_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.paymentMethods.delete('method_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setDefault: only required params', async () => {
    const responsePromise = client.paymentMethods.setDefault('payment_method_id', {
      customer_id: 'customer_id',
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
  test.skip('setDefault: required and optional params', async () => {
    const response = await client.paymentMethods.setDefault('payment_method_id', {
      customer_id: 'customer_id',
    });
  });
});
