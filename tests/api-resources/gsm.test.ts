// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gsm', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.gsm.create({
      clear_pan_possible: true,
      code: 'code',
      connector: 'adyenplatform',
      decision: 'retry',
      flow: 'flow',
      message: 'message',
      status: 'status',
      step_up_possible: true,
      sub_flow: 'sub_flow',
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
    const response = await client.gsm.create({
      clear_pan_possible: true,
      code: 'code',
      connector: 'adyenplatform',
      decision: 'retry',
      flow: 'flow',
      message: 'message',
      status: 'status',
      step_up_possible: true,
      sub_flow: 'sub_flow',
      error_category: 'frm_decline',
      router_error: 'router_error',
      unified_code: 'unified_code',
      unified_message: 'unified_message',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.gsm.retrieve({
      code: 'code',
      connector: 'adyenplatform',
      flow: 'flow',
      message: 'message',
      sub_flow: 'sub_flow',
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
    const response = await client.gsm.retrieve({
      code: 'code',
      connector: 'adyenplatform',
      flow: 'flow',
      message: 'message',
      sub_flow: 'sub_flow',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.gsm.update({
      code: 'code',
      connector: 'connector',
      flow: 'flow',
      message: 'message',
      sub_flow: 'sub_flow',
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
    const response = await client.gsm.update({
      code: 'code',
      connector: 'connector',
      flow: 'flow',
      message: 'message',
      sub_flow: 'sub_flow',
      clear_pan_possible: true,
      decision: 'retry',
      error_category: 'frm_decline',
      router_error: 'router_error',
      status: 'status',
      step_up_possible: true,
      unified_code: 'unified_code',
      unified_message: 'unified_message',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.gsm.delete({
      code: 'code',
      connector: 'connector',
      flow: 'flow',
      message: 'message',
      sub_flow: 'sub_flow',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.gsm.delete({
      code: 'code',
      connector: 'connector',
      flow: 'flow',
      message: 'message',
      sub_flow: 'sub_flow',
    });
  });
});
