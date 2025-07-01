// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.payments.create({ amount: 6540, currency: 'USD' });
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
    const response = await client.payments.create({
      amount: 6540,
      currency: 'USD',
      all_keys_required: true,
      allowed_payment_method_types: ['ach'],
      amount_to_capture: 6540,
      authentication_type: 'three_ds',
      billing: {
        address: {
          city: 'New York',
          country: 'AF',
          first_name: 'John',
          last_name: 'Doe',
          line1: '123, King Street',
          line2: 'Powelson Avenue',
          line3: 'Bridgewater',
          state: 'New York',
          zip: '08807',
        },
        email: 'email',
        phone: { country_code: '+1', number: '9123456789' },
      },
      browser_info: {
        accept_header:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        color_depth: 0,
        device_model: 'device_model',
        ip_address: 'ip_address',
        java_enabled: true,
        java_script_enabled: true,
        language: 'language',
        os_type: 'os_type',
        os_version: 'os_version',
        screen_height: 0,
        screen_width: 0,
        time_zone: 0,
        user_agent: 'user_agent',
      },
      business_country: 'AF',
      business_label: 'food',
      capture_method: 'automatic',
      confirm: true,
      connector: ['stripe', 'adyen'],
      connector_metadata: {
        adyen: { testing: { holder_name: 'holder_name' } },
        airwallex: { payload: 'payload' },
        apple_pay: {
          session_token_data: {
            payment_processing_certificate: 'payment_processing_certificate',
            payment_processing_certificate_key: 'payment_processing_certificate_key',
            payment_processing_details_at: 'Hyperswitch',
            certificate: 'certificate',
            certificate_keys: 'certificate_keys',
            display_name: 'display_name',
            initiative: 'web',
            initiative_context: 'initiative_context',
            merchant_business_country: 'AF',
            merchant_identifier: 'merchant_identifier',
          },
        },
        braintree: {
          merchant_account_id: 'merchant_account_id',
          merchant_config_currency: 'merchant_config_currency',
        },
        noon: { order_category: 'order_category' },
      },
      ctp_service_details: {
        correlation_id: 'correlation_id',
        encrypted_payload: 'encrypted_payload',
        merchant_transaction_id: 'merchant_transaction_id',
        provider: 'visa',
        x_src_flow_id: 'x_src_flow_id',
      },
      customer: {
        id: 'cus_y3oqhf46pyzuxjbcn2giaqnb44',
        email: 'johntest@test.com',
        name: 'John Doe',
        phone: '9123456789',
        phone_country_code: '+1',
      },
      customer_acceptance: {
        acceptance_type: 'online',
        accepted_at: '2022-09-10T10:11:12Z',
        online: { ip_address: '123.32.25.123', user_agent: 'user_agent' },
      },
      customer_id: 'cus_y3oqhf46pyzuxjbcn2giaqnb44',
      description: "It's my first payment request",
      force_3ds_challenge: true,
      frm_metadata: {},
      is_iframe_redirection_enabled: true,
      mandate_data: {
        customer_acceptance: {
          acceptance_type: 'online',
          accepted_at: '2022-09-10T10:11:12Z',
          online: { ip_address: '123.32.25.123', user_agent: 'user_agent' },
        },
        mandate_type: {
          single_use: {
            amount: 6540,
            currency: 'AED',
            end_date: '2023-09-10T23:59:59Z',
            metadata: {},
            start_date: '2022-09-10T00:00:00Z',
          },
        },
        update_mandate_id: 'update_mandate_id',
      },
      mandate_id: 'mandate_iwer89rnjef349dni3',
      merchant_connector_details: {
        creds_identifier: 'creds_identifier',
        encoded_data: { connector_account_details: {}, metadata: {} },
      },
      merchant_order_reference_id: 'Custom_Order_id_123',
      metadata: {},
      off_session: true,
      order_details: [
        {
          amount: 0,
          product_name: 'shirt',
          quantity: 1,
          brand: 'brand',
          category: 'category',
          product_id: 'product_id',
          product_img_link: 'product_img_link',
          product_tax_code: 'product_tax_code',
          product_type: 'physical',
          requires_shipping: true,
          sub_category: 'sub_category',
          tax_rate: 0,
          total_tax_amount: 0,
        },
      ],
      order_tax_amount: 6540,
      payment_experience: 'redirect_to_url',
      payment_id: 'pay_mbabizu24mvu3mela5njyhpit4',
      payment_link: true,
      payment_link_config: {
        background_colour: 'background_colour',
        background_image: {
          url: 'https://hyperswitch.io/favicon.ico',
          position: 'left',
          size: { Variants: 'cover' },
        },
        color_icon_card_cvc_error: 'color_icon_card_cvc_error',
        custom_message_for_card_terms: 'custom_message_for_card_terms',
        details_layout: 'layout1',
        display_sdk_only: true,
        enable_button_only_on_form_ready: true,
        enabled_saved_payment_method: true,
        hide_card_nickname_field: true,
        is_setup_mandate_flow: true,
        logo: 'https://i.pinimg.com/736x/4d/83/5c/4d835ca8aafbbb15f84d07d926fda473.jpg',
        payment_button_colour: 'payment_button_colour',
        payment_button_text: 'payment_button_text',
        payment_button_text_colour: 'payment_button_text_colour',
        payment_form_header_text: 'payment_form_header_text',
        payment_form_label_type: 'above',
        payment_link_ui_rules: { foo: { foo: 'string' } },
        sdk_layout: 'accordion',
        sdk_ui_rules: { foo: { foo: 'string' } },
        seller_name: 'hyperswitch',
        show_card_form_by_default: true,
        show_card_terms: 'always',
        skip_status_screen: true,
        theme: '#4E6ADD',
        transaction_details: [
          {
            key: 'Policy-Number',
            value: '297472368473924',
            ui_configuration: { is_key_bold: true, is_value_bold: true, position: 5 },
          },
        ],
      },
      payment_link_config_id: 'payment_link_config_id',
      payment_method: 'card',
      payment_method_data: {
        card: {
          card_cvc: '242',
          card_exp_month: '24',
          card_exp_year: '24',
          card_holder_name: 'John Test',
          card_number: '4242424242424242',
          bank_code: 'JP_AMEX',
          card_issuer: 'chase',
          card_issuing_country: 'INDIA',
          card_network: 'Visa',
          card_type: 'CREDIT',
          nick_name: 'John Test',
        },
        billing: {
          address: {
            city: 'New York',
            country: 'AF',
            first_name: 'John',
            last_name: 'Doe',
            line1: '123, King Street',
            line2: 'Powelson Avenue',
            line3: 'Bridgewater',
            state: 'New York',
            zip: '08807',
          },
          email: 'email',
          phone: { country_code: '+1', number: '9123456789' },
        },
      },
      payment_method_type: 'ach',
      payment_token: '187282ab-40ef-47a9-9206-5099ba31e432',
      payment_type: 'normal',
      profile_id: 'profile_id',
      psd2_sca_exemption_type: 'low_value',
      recurring_details: { data: 'data', type: 'mandate_id' },
      request_extended_authorization: true,
      request_external_three_ds_authentication: true,
      request_incremental_authorization: true,
      return_url: 'https://hyperswitch.io',
      routing: {
        data: { connector: 'adyenplatform', merchant_connector_id: 'merchant_connector_id' },
        type: 'single',
      },
      session_expiry: 900,
      setup_future_usage: 'off_session',
      shipping: {
        address: {
          city: 'New York',
          country: 'AF',
          first_name: 'John',
          last_name: 'Doe',
          line1: '123, King Street',
          line2: 'Powelson Avenue',
          line3: 'Bridgewater',
          state: 'New York',
          zip: '08807',
        },
        email: 'email',
        phone: { country_code: '+1', number: '9123456789' },
      },
      shipping_cost: 6540,
      skip_external_tax_calculation: true,
      split_payments: {
        stripe_split_payment: {
          application_fees: 6540,
          charge_type: { Stripe: 'direct' },
          transfer_account_id: 'transfer_account_id',
        },
      },
      statement_descriptor_name: 'Hyperswitch Router',
      statement_descriptor_suffix: 'Payment for shoes purchase',
      surcharge_details: { surcharge_amount: 6540, tax_amount: 0 },
      threeds_method_comp_ind: 'Y',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.payments.retrieve('payment_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.retrieve(
        'payment_id',
        { client_secret: 'client_secret', expand_attempts: true, expand_captures: true, force_sync: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hyperswitch.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.payments.update('payment_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.payments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.list(
        {
          created: '2019-12-27T18:11:19.117Z',
          created_gt: '2019-12-27T18:11:19.117Z',
          created_gte: '2019-12-27T18:11:19.117Z',
          created_lt: '2019-12-27T18:11:19.117Z',
          created_lte: '2019-12-27T18:11:19.117Z',
          customer_id: 'customer_id',
          ending_before: 'ending_before',
          limit: 0,
          starting_after: 'starting_after',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Hyperswitch.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('cancel', async () => {
    const responsePromise = client.payments.cancel('payment_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('capture', async () => {
    const responsePromise = client.payments.capture('payment_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('completeAuthorize: only required params', async () => {
    const responsePromise = client.payments.completeAuthorize('payment_id', {
      client_secret: 'client_secret',
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
  test.skip('completeAuthorize: required and optional params', async () => {
    const response = await client.payments.completeAuthorize('payment_id', {
      client_secret: 'client_secret',
      shipping: {
        address: {
          city: 'New York',
          country: 'AF',
          first_name: 'John',
          last_name: 'Doe',
          line1: '123, King Street',
          line2: 'Powelson Avenue',
          line3: 'Bridgewater',
          state: 'New York',
          zip: '08807',
        },
        email: 'email',
        phone: { country_code: '+1', number: '9123456789' },
      },
      threeds_method_comp_ind: 'Y',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('confirm', async () => {
    const responsePromise = client.payments.confirm('payment_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createSessionToken: only required params', async () => {
    const responsePromise = client.payments.createSessionToken({
      client_secret: 'client_secret',
      payment_id: 'payment_id',
      wallets: ['ach'],
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
  test.skip('createSessionToken: required and optional params', async () => {
    const response = await client.payments.createSessionToken({
      client_secret: 'client_secret',
      payment_id: 'payment_id',
      wallets: ['ach'],
      merchant_connector_details: {
        creds_identifier: 'creds_identifier',
        encoded_data: { connector_account_details: {}, metadata: {} },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('incrementalAuthorization: only required params', async () => {
    const responsePromise = client.payments.incrementalAuthorization('payment_id', { amount: 6540 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('incrementalAuthorization: required and optional params', async () => {
    const response = await client.payments.incrementalAuthorization('payment_id', {
      amount: 6540,
      reason: 'reason',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('postSessionTokens: only required params', async () => {
    const responsePromise = client.payments.postSessionTokens('payment_id', {
      client_secret: 'client_secret',
      payment_method: 'card',
      payment_method_type: 'ach',
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
  test.skip('postSessionTokens: required and optional params', async () => {
    const response = await client.payments.postSessionTokens('payment_id', {
      client_secret: 'client_secret',
      payment_method: 'card',
      payment_method_type: 'ach',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateMetadata: only required params', async () => {
    const responsePromise = client.payments.updateMetadata('payment_id', { metadata: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateMetadata: required and optional params', async () => {
    const response = await client.payments.updateMetadata('payment_id', { metadata: {} });
  });
});
