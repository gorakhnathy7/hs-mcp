// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource successBased', () => {
  // skipped: tests are disabled for the time being
  test.skip('toggle: only required params', async () => {
    const responsePromise = client.accounts.businessProfile.dynamicRouting.successBased.toggle('profile_id', {
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
    const response = await client.accounts.businessProfile.dynamicRouting.successBased.toggle('profile_id', {
      account_id: 'account_id',
      enable: 'metrics',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateConfig: only required params', async () => {
    const responsePromise = client.accounts.businessProfile.dynamicRouting.successBased.updateConfig(
      'algorithm_id',
      { account_id: 'account_id', profile_id: 'profile_id', decision_engine_configs: {} },
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
    const response = await client.accounts.businessProfile.dynamicRouting.successBased.updateConfig(
      'algorithm_id',
      {
        account_id: 'account_id',
        profile_id: 'profile_id',
        decision_engine_configs: {
          defaultBucketSize: 0,
          defaultGatewayExtraScore: [{ gatewayName: 'gatewayName', gatewaySigmaFactor: 0 }],
          defaultHedgingPercent: 0,
          defaultLatencyThreshold: 0,
          defaultLowerResetFactor: 0,
          defaultUpperResetFactor: 0,
          subLevelInputConfig: [
            {
              bucketSize: 0,
              gatewayExtraScore: [{ gatewayName: 'gatewayName', gatewaySigmaFactor: 0 }],
              hedgingPercent: 0,
              latencyThreshold: 0,
              lowerResetFactor: 0,
              paymentMethod: 'paymentMethod',
              paymentMethodType: 'paymentMethodType',
              upperResetFactor: 0,
            },
          ],
        },
        config: {
          current_block_threshold: { duration_in_mins: 0, max_total_count: 0 },
          default_success_rate: 0,
          exploration_percent: 0,
          max_aggregates_size: 0,
          min_aggregates_size: 0,
          shuffle_on_tie_during_exploitation: true,
          specificity_level: 'merchant',
        },
        params: ['PaymentMethod'],
      },
    );
  });
});
