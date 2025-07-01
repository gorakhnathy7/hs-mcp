// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  // skipped: tests are disabled for the time being
  test.skip('toggle: only required params', async () => {
    const responsePromise = client.accounts.businessProfile.dynamicRouting.contracts.toggle('profile_id', {
      account_id: 'account_id',
      enable: 'metrics',
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
  test.skip('toggle: required and optional params', async () => {
    const response = await client.accounts.businessProfile.dynamicRouting.contracts.toggle('profile_id', {
      account_id: 'account_id',
      enable: 'metrics',
      config: { constants: [0], time_scale: 'day' },
      label_info: [{ label: 'label', mca_id: 'mca_id', target_count: 0, target_time: 0 }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateConfig: only required params', async () => {
    const responsePromise = client.accounts.businessProfile.dynamicRouting.contracts.updateConfig(
      'algorithm_id',
      { account_id: 'account_id', profile_id: 'profile_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateConfig: required and optional params', async () => {
    const response = await client.accounts.businessProfile.dynamicRouting.contracts.updateConfig(
      'algorithm_id',
      {
        account_id: 'account_id',
        profile_id: 'profile_id',
        config: { constants: [0], time_scale: 'day' },
        label_info: [{ label: 'label', mca_id: 'mca_id', target_count: 0, target_time: 0 }],
      },
    );
  });
});
