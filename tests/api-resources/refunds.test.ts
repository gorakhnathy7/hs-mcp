// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource refunds', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.refunds.create({ payment_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
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
    const response = await client.refunds.create({
      payment_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amount: 654,
      merchant_connector_details: {
        creds_identifier: 'creds_identifier',
        encoded_data: { connector_account_details: {}, metadata: {} },
      },
      merchant_id: 'y3oqhf46pyzuxjbcn2giaqnb44',
      metadata: {},
      reason: 'Customer returned the product',
      refund_id: 'ref_mbabizu24mvu3mela5njyhpit4',
      refund_type: 'instant',
      split_refunds: { stripe_split_refund: { revert_platform_fee: true, revert_transfer: true } },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.refunds.retrieve('refund_id');
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
    const responsePromise = client.refunds.update('refund_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.refunds.list({ start_time: '2019-12-27T18:11:19.117Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.refunds.list({
      start_time: '2019-12-27T18:11:19.117Z',
      amount_filter: { end_amount: 0, start_amount: 0 },
      connector: ['string'],
      currency: ['AED'],
      end_time: '2019-12-27T18:11:19.117Z',
      limit: 0,
      merchant_connector_id: ['string'],
      offset: 0,
      payment_id: 'payment_id',
      profile_id: 'profile_id',
      refund_id: 'refund_id',
      refund_status: ['succeeded'],
    });
  });
});
