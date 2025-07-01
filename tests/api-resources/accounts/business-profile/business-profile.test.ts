// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Hyperswitch from 'hyperswitch';

const client = new Hyperswitch({
  apiKey: 'My API Key',
  ephemeralKey: 'My Ephemeral Key',
  jwtKey: 'My Jwt Key',
  publishableKey: 'My Publishable Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource businessProfile', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.accounts.businessProfile.create('account_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.accounts.businessProfile.retrieve('profile_id', {
      account_id: 'account_id',
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
    const response = await client.accounts.businessProfile.retrieve('profile_id', {
      account_id: 'account_id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.accounts.businessProfile.update('profile_id', {
      account_id: 'account_id',
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
    const response = await client.accounts.businessProfile.update('profile_id', {
      account_id: 'account_id',
      always_collect_billing_details_from_wallet_connector: false,
      always_collect_shipping_details_from_wallet_connector: false,
      always_request_extended_authorization: true,
      applepay_verified_domains: ['string'],
      authentication_connector_details: {
        authentication_connectors: ['threedsecureio'],
        three_ds_requestor_url: 'three_ds_requestor_url',
        three_ds_requestor_app_url: 'three_ds_requestor_app_url',
      },
      authentication_product_ids: {},
      card_testing_guard_config: {
        card_ip_blocking_status: 'enabled',
        card_ip_blocking_threshold: 0,
        card_testing_guard_expiry: 0,
        customer_id_blocking_status: 'enabled',
        customer_id_blocking_threshold: 0,
        guest_user_card_blocking_status: 'enabled',
        guest_user_card_blocking_threshold: 0,
      },
      collect_billing_details_from_wallet_connector: false,
      collect_shipping_details_from_wallet_connector: false,
      enable_payment_response_hash: true,
      force_3ds_challenge: true,
      frm_routing_algorithm: {},
      intent_fulfillment_time: 900,
      is_auto_retries_enabled: true,
      is_clear_pan_retries_enabled: true,
      is_click_to_pay_enabled: true,
      is_connector_agnostic_mit_enabled: true,
      is_debit_routing_enabled: true,
      is_iframe_redirection_enabled: false,
      is_network_tokenization_enabled: true,
      is_pre_network_tokenization_enabled: true,
      is_tax_connector_enabled: true,
      max_auto_retries_enabled: 0,
      merchant_business_country: 'AF',
      merchant_category_code: '5411',
      metadata: {},
      outgoing_webhook_custom_http_headers: {},
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
        allowed_domains: ['string'],
        branding_visibility: true,
        business_specific_configs: {
          foo: {
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
        },
        domain_name: 'domain_name',
      },
      payment_response_hash_key: 'payment_response_hash_key',
      payout_link_config: { form_layout: 'tabs', payout_test_mode: true },
      payout_routing_algorithm: {
        data: { connector: 'adyenplatform', merchant_connector_id: 'merchant_connector_id' },
        type: 'single',
      },
      profile_name: 'shoe_business',
      redirect_to_merchant_with_http_post: true,
      return_url: 'https://www.example.com/success',
      routing_algorithm: {},
      session_expiry: 900,
      tax_connector_id: 'tax_connector_id',
      use_billing_as_payment_method_billing: true,
      webhook_details: {
        payment_statuses_enabled: ['succeeded', 'failed', 'partially_captured', 'requires_merchant_action'],
        refund_statuses_enabled: ['succeeded', 'failed'],
        payment_created_enabled: true,
        payment_failed_enabled: true,
        payment_succeeded_enabled: true,
        payout_statuses_enabled: ['success', 'failed'],
        webhook_password: 'ekart@123',
        webhook_url: 'www.ekart.com/webhooks',
        webhook_username: 'ekart_retail',
        webhook_version: '1.0.2',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.accounts.businessProfile.list('account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.accounts.businessProfile.delete('profile_id', {
      account_id: 'account_id',
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
    const response = await client.accounts.businessProfile.delete('profile_id', { account_id: 'account_id' });
  });
});
