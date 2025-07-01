// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profileAcquirers', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.profileAcquirers.create({
      acquirer_assigned_merchant_id: 'M123456789',
      acquirer_bin: '456789',
      acquirer_fraud_rate: 0.01,
      merchant_country_code: 'US',
      merchant_name: 'NewAge Retailer',
      network: 'VISA',
      profile_id: 'pro_ky0yNyOXXlA5hF8JzE5q',
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
    const response = await client.profileAcquirers.create({
      acquirer_assigned_merchant_id: 'M123456789',
      acquirer_bin: '456789',
      acquirer_fraud_rate: 0.01,
      merchant_country_code: 'US',
      merchant_name: 'NewAge Retailer',
      network: 'VISA',
      profile_id: 'pro_ky0yNyOXXlA5hF8JzE5q',
      acquirer_ica: '401288',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.profileAcquirers.update('profile_acquirer_id', {
      profile_id: 'profile_id',
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
    const response = await client.profileAcquirers.update('profile_acquirer_id', {
      profile_id: 'profile_id',
      acquirer_assigned_merchant_id: 'M987654321',
      acquirer_bin: '987654',
      acquirer_fraud_rate: 0,
      acquirer_ica: '501299',
      merchant_country_code: 'CA',
      merchant_name: 'Updated Retailer Name',
      network: 'MASTERCARD',
    });
  });
});
