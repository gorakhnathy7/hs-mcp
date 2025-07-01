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
  test.skip('list', async () => {
    const responsePromise = client.customers.paymentMethods.list('customer_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.paymentMethods.list(
        'customer_id',
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

  // skipped: tests are disabled for the time being
  test.skip('listSaved', async () => {
    const responsePromise = client.customers.paymentMethods.listSaved();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listSaved: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.paymentMethods.listSaved(
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
