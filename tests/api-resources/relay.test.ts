// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource relay', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.relay.create({
      connector_id: 'mca_5apGeP94tMts6rg3U3kR',
      connector_resource_id: '7256228702616471803954',
      type: 'refund',
      'X-Idempotency-Key': 'X-Idempotency-Key',
      'X-Profile-Id': 'X-Profile-Id',
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
    const response = await client.relay.create({
      connector_id: 'mca_5apGeP94tMts6rg3U3kR',
      connector_resource_id: '7256228702616471803954',
      type: 'refund',
      'X-Idempotency-Key': 'X-Idempotency-Key',
      'X-Profile-Id': 'X-Profile-Id',
      data: { refund: { amount: 6540, currency: 'USD', reason: 'Customer returned the product' } },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.relay.retrieve('relay_id', { 'X-Profile-Id': 'X-Profile-Id' });
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
    const response = await client.relay.retrieve('relay_id', { 'X-Profile-Id': 'X-Profile-Id' });
  });
});
