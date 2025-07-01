// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource number3DS', () => {
  // skipped: tests are disabled for the time being
  test.skip('authenticate: only required params', async () => {
    const responsePromise = client.payments.number3DS.authenticate('payment_id', {
      client_secret: 'client_secret',
      device_channel: 'APP',
      threeds_method_comp_ind: 'Y',
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
  test.skip('authenticate: required and optional params', async () => {
    const response = await client.payments.number3DS.authenticate('payment_id', {
      client_secret: 'client_secret',
      device_channel: 'APP',
      threeds_method_comp_ind: 'Y',
      sdk_information: {
        sdk_app_id: 'sdk_app_id',
        sdk_enc_data: 'sdk_enc_data',
        sdk_ephem_pub_key: { foo: 'string' },
        sdk_max_timeout: 0,
        sdk_reference_number: 'sdk_reference_number',
        sdk_trans_id: 'sdk_trans_id',
        sdk_type: '01',
      },
    });
  });
});
