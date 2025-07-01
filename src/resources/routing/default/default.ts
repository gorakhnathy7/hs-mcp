// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProfileAPI from './profile';
import { DefaultRoutingConfig, Profile, ProfileUpdateParams } from './profile';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Default extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);

  /**
   * Retrieve default fallback config
   */
  retrieve(options?: RequestOptions): APIPromise<DefaultRetrieveResponse> {
    return this._client.get('/routing/default', options);
  }

  /**
   * Update default fallback config
   */
  update(params: DefaultUpdateParams, options?: RequestOptions): APIPromise<DefaultUpdateResponse> {
    const { body } = params;
    return this._client.post('/routing/default', { body: body, ...options });
  }
}

/**
 * Routable Connector chosen for a payment
 */
export interface RoutableConnectorChoice {
  /**
   * RoutableConnectors are the subset of Connectors that are eligible for payments
   * routing
   */
  connector:
    | 'adyenplatform'
    | 'stripe_billing_test'
    | 'phonypay'
    | 'fauxpay'
    | 'pretendpay'
    | 'stripe_test'
    | 'adyen_test'
    | 'checkout_test'
    | 'paypal_test'
    | 'aci'
    | 'adyen'
    | 'airwallex'
    | 'archipel'
    | 'authorizedotnet'
    | 'bankofamerica'
    | 'barclaycard'
    | 'billwerk'
    | 'bitpay'
    | 'bambora'
    | 'bamboraapac'
    | 'bluesnap'
    | 'boku'
    | 'braintree'
    | 'cashtocode'
    | 'chargebee'
    | 'checkout'
    | 'coinbase'
    | 'coingate'
    | 'cryptopay'
    | 'cybersource'
    | 'datatrans'
    | 'deutschebank'
    | 'digitalvirgo'
    | 'dlocal'
    | 'ebanx'
    | 'elavon'
    | 'facilitapay'
    | 'fiserv'
    | 'fiservemea'
    | 'fiuu'
    | 'forte'
    | 'getnet'
    | 'globalpay'
    | 'globepay'
    | 'gocardless'
    | 'hipay'
    | 'helcim'
    | 'iatapay'
    | 'inespay'
    | 'itaubank'
    | 'jpmorgan'
    | 'klarna'
    | 'mifinity'
    | 'mollie'
    | 'moneris'
    | 'multisafepay'
    | 'nexinets'
    | 'nexixpay'
    | 'nmi'
    | 'nomupay'
    | 'noon'
    | 'novalnet'
    | 'nuvei'
    | 'opennode'
    | 'paybox'
    | 'payme'
    | 'payone'
    | 'paypal'
    | 'paystack'
    | 'payu'
    | 'placetopay'
    | 'powertranz'
    | 'prophetpay'
    | 'rapyd'
    | 'razorpay'
    | 'recurly'
    | 'redsys'
    | 'riskified'
    | 'shift4'
    | 'signifyd'
    | 'square'
    | 'stax'
    | 'stripe'
    | 'stripebilling'
    | 'trustpay'
    | 'tokenio'
    | 'tsys'
    | 'volt'
    | 'wellsfargo'
    | 'wise'
    | 'worldline'
    | 'worldpay'
    | 'worldpayvantiv'
    | 'worldpayxml'
    | 'xendit'
    | 'zen'
    | 'plaid'
    | 'zsl';

  merchant_connector_id?: string | null;
}

export type DefaultRetrieveResponse = Array<RoutableConnectorChoice>;

export type DefaultUpdateResponse = Array<RoutableConnectorChoice>;

export interface DefaultUpdateParams {
  body: Array<RoutableConnectorChoice>;
}

Default.Profile = Profile;

export declare namespace Default {
  export {
    type RoutableConnectorChoice as RoutableConnectorChoice,
    type DefaultRetrieveResponse as DefaultRetrieveResponse,
    type DefaultUpdateResponse as DefaultUpdateResponse,
    type DefaultUpdateParams as DefaultUpdateParams,
  };

  export {
    Profile as Profile,
    type DefaultRoutingConfig as DefaultRoutingConfig,
    type ProfileUpdateParams as ProfileUpdateParams,
  };
}
