// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authentication', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.authentication.create({ amount: 0, currency: 'AED' });
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
    const response = await client.authentication.create({
      amount: 0,
      currency: 'AED',
      acquirer_details: { bin: '123456', country_code: 'US/34456', merchant_id: 'merchant_abc' },
      authentication_connector: 'threedsecureio',
      authentication_id: 'auth_mbabizu24mvu3mela5njyhpit4',
      customer: {
        id: 'cus_y3oqhf46pyzuxjbcn2giaqnb44',
        email: 'johntest@test.com',
        name: 'John Doe',
        phone: '9123456789',
        phone_country_code: '+1',
      },
      force_3ds_challenge: true,
      profile_id: 'profile_id',
      psd2_sca_exemption_type: 'low_value',
      return_url: 'https://example.com/redirect',
    });
  });
});
