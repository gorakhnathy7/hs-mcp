// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threeDSDecision', () => {
  // skipped: tests are disabled for the time being
  test.skip('execute: only required params', async () => {
    const responsePromise = client.threeDSDecision.execute({
      payment: { amount: 0, currency: 'AED' },
      routing_id: 'routing_id',
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
  test.skip('execute: required and optional params', async () => {
    const response = await client.threeDSDecision.execute({
      payment: { amount: 0, currency: 'AED' },
      routing_id: 'routing_id',
      acquirer: { country: 'Afghanistan', fraud_rate: 0 },
      customer_device: { device_type: 'mobile', display_size: 'size320x568', platform: 'web' },
      issuer: { country: 'Afghanistan', name: 'name' },
      payment_method: { card_network: 'Visa' },
    });
  });
});
