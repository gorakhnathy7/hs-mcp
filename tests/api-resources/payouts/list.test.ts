// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource list', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.payouts.list.retrieve({
      created: 'created',
      customer_id: 'customer_id',
      ending_before: 'ending_before',
      limit: 'limit',
      starting_after: 'starting_after',
      time_range: 'time_range',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.payouts.list.retrieve({
      created: 'created',
      customer_id: 'customer_id',
      ending_before: 'ending_before',
      limit: 'limit',
      starting_after: 'starting_after',
      time_range: 'time_range',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('withFilters: only required params', async () => {
    const responsePromise = client.payouts.list.withFilters({
      currency: 'AED',
      entity_type: 'Individual',
      start_time: '2019-12-27T18:11:19.117Z',
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
  test.skip('withFilters: required and optional params', async () => {
    const response = await client.payouts.list.withFilters({
      currency: 'AED',
      entity_type: 'Individual',
      start_time: '2019-12-27T18:11:19.117Z',
      connector: ['wise', 'adyen'],
      customer_id: 'cus_y3oqhf46pyzuxjbcn2giaqnb44',
      end_time: '2019-12-27T18:11:19.117Z',
      limit: 0,
      offset: 0,
      payout_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      payout_method: ['bank', 'card'],
      profile_id: 'profile_id',
      status: ['pending', 'failed'],
    });
  });
});
