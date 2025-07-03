// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  APIKeyCreateParams,
  APIKeyCreateResponse,
  APIKeyExpiration,
  APIKeyListParams,
  APIKeyListResponse,
  APIKeyRetrieveParams,
  APIKeyRevokeParams,
  APIKeyRevokeResponse,
  APIKeyUpdateParams,
  APIKeys,
  RetrieveAPIKey,
} from './resources/api-keys';
import {
  AcquirerDetails,
  Authentication,
  AuthenticationConnectors,
  AuthenticationCreateParams,
  AuthenticationCreateResponse,
  AuthenticationStatus,
} from './resources/authentication';
import {
  Blocklist,
  BlocklistCreateParams,
  BlocklistDataKind,
  BlocklistDeleteParams,
  BlocklistRequest,
  BlocklistResponse,
  BlocklistRetrieveParams,
  BlocklistToggleParams,
  BlocklistToggleResponse,
} from './resources/blocklist';
import {
  DisputeListParams,
  DisputeListResponse,
  DisputeResponse,
  DisputeStage,
  DisputeStatus,
  Disputes,
} from './resources/disputes';
import {
  ErrorCategory,
  Gsm,
  GsmCreateParams,
  GsmDecision,
  GsmDeleteParams,
  GsmDeleteResponse,
  GsmResponse,
  GsmRetrieveParams,
  GsmUpdateParams,
} from './resources/gsm';
import { MandateResponse, MandateRevokeResponse, MandateStatus, Mandates } from './resources/mandates';
import {
  Organization,
  OrganizationCreateParams,
  OrganizationResponse,
  OrganizationUpdateParams,
} from './resources/organization';
import {
  PaymentLink,
  PaymentLinkRetrieveParams,
  PaymentLinkRetrieveResponse,
} from './resources/payment-link';
import {
  Bank,
  CardDetail,
  CardDetailFromLocker,
  PaymentMethodCreateParams,
  PaymentMethodDeleteResponse,
  PaymentMethodIssuerCode,
  PaymentMethodResponse,
  PaymentMethodSetDefaultParams,
  PaymentMethodSetDefaultResponse,
  PaymentMethodUpdateParams,
  PaymentMethods,
  Wallet,
} from './resources/payment-methods';
import { Poll, PollRetrieveStatusResponse } from './resources/poll';
import {
  ProfileAcquirer,
  ProfileAcquirerCreateParams,
  ProfileAcquirerUpdateParams,
  ProfileAcquirers,
} from './resources/profile-acquirers';
import {
  RefundCreateParams,
  RefundListParams,
  RefundListResponse,
  RefundResponse,
  RefundStatus,
  RefundUpdateParams,
  Refunds,
  SplitRefund,
  XenditSplitSubMerchantData,
} from './resources/refunds';
import {
  Relay,
  RelayCreateParams,
  RelayData,
  RelayResponse,
  RelayRetrieveParams,
  RelayType,
} from './resources/relay';
import {
  Country,
  ThreeDSDecision,
  ThreeDSDecisionExecuteParams,
  ThreeDSDecisionExecuteResponse,
  ThreeDSDecisionResource,
} from './resources/three-ds-decision';
import {
  AccountCreateParams,
  AccountDeleteResponse,
  AccountKvParams,
  AccountKvResponse,
  AccountListPaymentMethodsParams,
  AccountListPaymentMethodsResponse,
  AccountUpdateParams,
  Accounts,
  BusinessCollectLinkConfig,
  BusinessGenericLinkConfig,
  CardNetwork,
  ConnectorSelection,
  CountryAlpha2,
  Currency,
  EnabledPaymentMethod,
  IfStatement,
  MandateAmountData,
  MandateType,
  MerchantAccount,
  MerchantDetails,
  MerchantProductType,
  PrimaryBusinessDetails,
  StaticRoutingAlgorithm,
  WebhookDetails,
} from './resources/accounts/accounts';
import {
  AddressDetails,
  Customer,
  CustomerCreateParams,
  CustomerDeleteResponse,
  CustomerListMandatesResponse,
  CustomerListParams,
  CustomerListResponse,
  CustomerUpdateParams,
  Customers,
} from './resources/customers/customers';
import {
  EventClass,
  EventDeliveryAttemptsParams,
  EventDeliveryAttemptsResponse,
  EventListConstraints,
  EventListItem,
  EventListParams,
  EventRetrieve,
  EventRetryParams,
  EventType,
  Events,
  TotalEvents,
} from './resources/events/events';
import {
  Address,
  AdyenSplitData,
  ApplePayAddressParameters,
  AuthenticationType,
  BankDebitBilling,
  BankRedirectBilling,
  BrowserInformation,
  CaptureMethod,
  CaptureResponse,
  CardDiscovery,
  CardRedirectData,
  ConnectorChargeResponseData,
  ConnectorMetadata,
  ConnectorVolumeSplit,
  CryptoData,
  CtpServiceDetails,
  CtpServiceProvider,
  CustomerAcceptance,
  CustomerDetails,
  CustomerDetailsResponse,
  DisputeResponsePaymentsRetrieve,
  DokuBillingDetails,
  EphemeralKeyCreateResponse,
  ExternalAuthenticationDetailsResponse,
  FeatureMetadata,
  FrmMessage,
  FutureUsage,
  IncrementalAuthorizationResponse,
  IntentStatus,
  JcsVoucherData,
  MandateData,
  MerchantConnectorDetailsWrap,
  MobilePaymentData,
  NextActionCall,
  NextActionData,
  OpenBankingData,
  OrderDetailsWithAmount,
  PaymentAttemptResponse,
  PaymentCancelParams,
  PaymentCaptureParams,
  PaymentChargeType,
  PaymentCompleteAuthorizeParams,
  PaymentConfirmParams,
  PaymentCreateParams,
  PaymentCreatePaymentLinkConfig,
  PaymentCreateSessionTokenParams,
  PaymentCreateSessionTokenResponse,
  PaymentExperience,
  PaymentIncrementalAuthorizationParams,
  PaymentLinkResponse,
  PaymentListParams,
  PaymentListResponse,
  PaymentMethodDataRequest,
  PaymentMethodDataResponseWithBilling,
  PaymentMethodStatus,
  PaymentMethodType,
  PaymentPostSessionTokensParams,
  PaymentPostSessionTokensResponse,
  PaymentRetrieveParams,
  PaymentType,
  PaymentUpdateMetadataParams,
  PaymentUpdateMetadataResponse,
  PaymentUpdateParams,
  Payments,
  PaymentsCreateResponseOpenAPI,
  PaymentsResponse,
  RealTimePaymentData,
  RecurringDetails,
  RecurringPaymentIntervalUnit,
  RequestSurchargeDetails,
  RetryAction,
  SDKNextAction,
  SamsungPayCardBrand,
  SamsungPayTokenData,
  ScaExemptionType,
  SecretInfoToInitiateSDK,
  SepaAndBacsBillingDetails,
  SessionToken,
  SplitPaymentsRequest,
  StraightThroughAlgorithm,
  VoucherData,
  WalletAdditionalDataForCard,
  XenditSplitRoute,
} from './resources/payments/payments';
import {
  BankNames,
  CreatePayoutLinkConfig,
  CreateResponse,
  EntityType,
  GenericLinkUiConfig,
  MethodData,
  PayoutCancelParams,
  PayoutConfirmParams,
  PayoutConnectors,
  PayoutCreateParams,
  PayoutFulfillParams,
  PayoutListFiltersParams,
  PayoutListFiltersResponse,
  PayoutRetrieveParams,
  PayoutType,
  PayoutUpdateParams,
  Payouts,
  PixBankTransferAdditionalData,
  SendPriority,
  Status,
  TimeRange,
} from './resources/payouts/payouts';
import {
  MerchantRoutingAlgorithm,
  Routing,
  RoutingConfig,
  RoutingCreateParams,
  RoutingDeactivateParams,
  RoutingDictionaryRecord,
  RoutingListParams,
  RoutingListResponse,
  RoutingRetrieveActiveParams,
  RoutingRetrieveActiveResponse,
  TransactionType,
} from './resources/routing/routing';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Use the API key created under your merchant account from the HyperSwitch dashboard. API key is used to authenticate API requests from your merchant server only. Don't expose this key on a website or embed it in a mobile application.
   */
  apiKey?: string | undefined;

  /**
   * Ephemeral keys provide temporary access to singular data, such as access to a single customer object for a short period of time.
   */
  ephemeralKey?: string | undefined;

  /**
   * Defaults to process.env['HYPERSWITCH_JWT_KEY'].
   */
  jwtKey?: string | undefined;

  /**
   * Publishable keys are a type of keys that can be public and have limited scope of usage.
   */
  publishableKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['HYPERSWITCH_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['HYPERSWITCH_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Hyperswitch API.
 */
export class Hyperswitch {
  apiKey: string;
  ephemeralKey: string;
  jwtKey: string;
  publishableKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Hyperswitch API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['HYPERSWITCH_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.ephemeralKey=process.env['HYPERSWITCH_EPHEMERAL_KEY'] ?? undefined]
   * @param {string | undefined} [opts.jwtKey=process.env['HYPERSWITCH_JWT_KEY'] ?? undefined]
   * @param {string | undefined} [opts.publishableKey=process.env['HYPERSWITCH_PUBLISHABLE_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['HYPERSWITCH_BASE_URL'] ?? https://sandbox.hyperswitch.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('HYPERSWITCH_BASE_URL'),
    apiKey = readEnv('HYPERSWITCH_API_KEY'),
    ephemeralKey = readEnv('HYPERSWITCH_EPHEMERAL_KEY'),
    jwtKey = readEnv('HYPERSWITCH_JWT_KEY'),
    publishableKey = readEnv('HYPERSWITCH_PUBLISHABLE_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.HyperswitchError(
        "The HYPERSWITCH_API_KEY environment variable is missing or empty; either provide it, or instantiate the Hyperswitch client with an apiKey option, like new Hyperswitch({ apiKey: 'My API Key' }).",
      );
    }
    if (ephemeralKey === undefined) {
      throw new Errors.HyperswitchError(
        "The HYPERSWITCH_EPHEMERAL_KEY environment variable is missing or empty; either provide it, or instantiate the Hyperswitch client with an ephemeralKey option, like new Hyperswitch({ ephemeralKey: 'My Ephemeral Key' }).",
      );
    }
    if (jwtKey === undefined) {
      throw new Errors.HyperswitchError(
        "The HYPERSWITCH_JWT_KEY environment variable is missing or empty; either provide it, or instantiate the Hyperswitch client with an jwtKey option, like new Hyperswitch({ jwtKey: 'My Jwt Key' }).",
      );
    }
    if (publishableKey === undefined) {
      throw new Errors.HyperswitchError(
        "The HYPERSWITCH_PUBLISHABLE_KEY environment variable is missing or empty; either provide it, or instantiate the Hyperswitch client with an publishableKey option, like new Hyperswitch({ publishableKey: 'My Publishable Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ephemeralKey,
      jwtKey,
      publishableKey,
      ...opts,
      baseURL: baseURL || `https://sandbox.hyperswitch.io`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Hyperswitch.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('HYPERSWITCH_LOG'), "process.env['HYPERSWITCH_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
    this.ephemeralKey = ephemeralKey;
    this.jwtKey = jwtKey;
    this.publishableKey = publishableKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    return new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ephemeralKey: this.ephemeralKey,
      jwtKey: this.jwtKey,
      publishableKey: this.publishableKey,
      ...options,
    });
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://sandbox.hyperswitch.io';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected authHeaders(opts: FinalRequestOptions): NullableHeaders | undefined {
    return buildHeaders([
      this.apiKeyAuth(opts),
      this.ephemeralKeyAuth(opts),
      this.jwtKeyAuth(opts),
      this.publishableKeyAuth(opts),
    ]);
  }

  protected apiKeyAuth(opts: FinalRequestOptions): NullableHeaders | undefined {
    return buildHeaders([{ 'api-key': this.apiKey }]);
  }

  protected ephemeralKeyAuth(opts: FinalRequestOptions): NullableHeaders | undefined {
    return buildHeaders([{ 'api-key': this.ephemeralKey }]);
  }

  protected jwtKeyAuth(opts: FinalRequestOptions): NullableHeaders | undefined {
    return buildHeaders([{ Authorization: `Bearer ${this.jwtKey}` }]);
  }

  protected publishableKeyAuth(opts: FinalRequestOptions): NullableHeaders | undefined {
    return buildHeaders([{ 'api-key': this.publishableKey }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private shouldRetry(response: Response): boolean {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): { req: FinalizedRequestInit; url: string; timeout: number } {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Headers {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Hyperswitch = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static HyperswitchError = Errors.HyperswitchError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  payments: API.Payments = new API.Payments(this);
  paymentLink: API.PaymentLink = new API.PaymentLink(this);
  relay: API.Relay = new API.Relay(this);
  refunds: API.Refunds = new API.Refunds(this);
  organization: API.Organization = new API.Organization(this);
  gsm: API.Gsm = new API.Gsm(this);
  mandates: API.Mandates = new API.Mandates(this);
  customers: API.Customers = new API.Customers(this);
  paymentMethods: API.PaymentMethods = new API.PaymentMethods(this);
  disputes: API.Disputes = new API.Disputes(this);
  routing: API.Routing = new API.Routing(this);
  blocklist: API.Blocklist = new API.Blocklist(this);
  payouts: API.Payouts = new API.Payouts(this);
  apiKeys: API.APIKeys = new API.APIKeys(this);
  events: API.Events = new API.Events(this);
  poll: API.Poll = new API.Poll(this);
  profileAcquirers: API.ProfileAcquirers = new API.ProfileAcquirers(this);
  threeDSDecision: API.ThreeDSDecisionResource = new API.ThreeDSDecisionResource(this);
  authentication: API.Authentication = new API.Authentication(this);
  accounts: API.Accounts = new API.Accounts(this);
}
Hyperswitch.Payments = Payments;
Hyperswitch.PaymentLink = PaymentLink;
Hyperswitch.Relay = Relay;
Hyperswitch.Refunds = Refunds;
Hyperswitch.Organization = Organization;
Hyperswitch.Gsm = Gsm;
Hyperswitch.Mandates = Mandates;
Hyperswitch.Customers = Customers;
Hyperswitch.PaymentMethods = PaymentMethods;
Hyperswitch.Disputes = Disputes;
Hyperswitch.Routing = Routing;
Hyperswitch.Blocklist = Blocklist;
Hyperswitch.Payouts = Payouts;
Hyperswitch.APIKeys = APIKeys;
Hyperswitch.Events = Events;
Hyperswitch.Poll = Poll;
Hyperswitch.ProfileAcquirers = ProfileAcquirers;
Hyperswitch.ThreeDSDecisionResource = ThreeDSDecisionResource;
Hyperswitch.Authentication = Authentication;
Hyperswitch.Accounts = Accounts;
export declare namespace Hyperswitch {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Payments as Payments,
    type Address as Address,
    type AdyenSplitData as AdyenSplitData,
    type ApplePayAddressParameters as ApplePayAddressParameters,
    type AuthenticationType as AuthenticationType,
    type BankDebitBilling as BankDebitBilling,
    type BankRedirectBilling as BankRedirectBilling,
    type BrowserInformation as BrowserInformation,
    type CaptureMethod as CaptureMethod,
    type CaptureResponse as CaptureResponse,
    type CardDiscovery as CardDiscovery,
    type CardRedirectData as CardRedirectData,
    type ConnectorChargeResponseData as ConnectorChargeResponseData,
    type ConnectorMetadata as ConnectorMetadata,
    type ConnectorVolumeSplit as ConnectorVolumeSplit,
    type CryptoData as CryptoData,
    type CtpServiceDetails as CtpServiceDetails,
    type CtpServiceProvider as CtpServiceProvider,
    type CustomerAcceptance as CustomerAcceptance,
    type CustomerDetails as CustomerDetails,
    type CustomerDetailsResponse as CustomerDetailsResponse,
    type DisputeResponsePaymentsRetrieve as DisputeResponsePaymentsRetrieve,
    type DokuBillingDetails as DokuBillingDetails,
    type EphemeralKeyCreateResponse as EphemeralKeyCreateResponse,
    type ExternalAuthenticationDetailsResponse as ExternalAuthenticationDetailsResponse,
    type FeatureMetadata as FeatureMetadata,
    type FrmMessage as FrmMessage,
    type FutureUsage as FutureUsage,
    type IncrementalAuthorizationResponse as IncrementalAuthorizationResponse,
    type IntentStatus as IntentStatus,
    type JcsVoucherData as JcsVoucherData,
    type MandateData as MandateData,
    type MerchantConnectorDetailsWrap as MerchantConnectorDetailsWrap,
    type MobilePaymentData as MobilePaymentData,
    type NextActionCall as NextActionCall,
    type NextActionData as NextActionData,
    type OpenBankingData as OpenBankingData,
    type OrderDetailsWithAmount as OrderDetailsWithAmount,
    type PaymentAttemptResponse as PaymentAttemptResponse,
    type PaymentChargeType as PaymentChargeType,
    type PaymentCreatePaymentLinkConfig as PaymentCreatePaymentLinkConfig,
    type PaymentExperience as PaymentExperience,
    type PaymentLinkResponse as PaymentLinkResponse,
    type PaymentMethodDataRequest as PaymentMethodDataRequest,
    type PaymentMethodDataResponseWithBilling as PaymentMethodDataResponseWithBilling,
    type PaymentMethodStatus as PaymentMethodStatus,
    type PaymentMethodType as PaymentMethodType,
    type PaymentType as PaymentType,
    type PaymentsCreateResponseOpenAPI as PaymentsCreateResponseOpenAPI,
    type PaymentsResponse as PaymentsResponse,
    type RealTimePaymentData as RealTimePaymentData,
    type RecurringDetails as RecurringDetails,
    type RecurringPaymentIntervalUnit as RecurringPaymentIntervalUnit,
    type RequestSurchargeDetails as RequestSurchargeDetails,
    type RetryAction as RetryAction,
    type SamsungPayCardBrand as SamsungPayCardBrand,
    type SamsungPayTokenData as SamsungPayTokenData,
    type ScaExemptionType as ScaExemptionType,
    type SDKNextAction as SDKNextAction,
    type SecretInfoToInitiateSDK as SecretInfoToInitiateSDK,
    type SepaAndBacsBillingDetails as SepaAndBacsBillingDetails,
    type SessionToken as SessionToken,
    type SplitPaymentsRequest as SplitPaymentsRequest,
    type StraightThroughAlgorithm as StraightThroughAlgorithm,
    type VoucherData as VoucherData,
    type WalletAdditionalDataForCard as WalletAdditionalDataForCard,
    type XenditSplitRoute as XenditSplitRoute,
    type PaymentListResponse as PaymentListResponse,
    type PaymentCreateSessionTokenResponse as PaymentCreateSessionTokenResponse,
    type PaymentPostSessionTokensResponse as PaymentPostSessionTokensResponse,
    type PaymentUpdateMetadataResponse as PaymentUpdateMetadataResponse,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentRetrieveParams as PaymentRetrieveParams,
    type PaymentUpdateParams as PaymentUpdateParams,
    type PaymentListParams as PaymentListParams,
    type PaymentCancelParams as PaymentCancelParams,
    type PaymentCaptureParams as PaymentCaptureParams,
    type PaymentCompleteAuthorizeParams as PaymentCompleteAuthorizeParams,
    type PaymentConfirmParams as PaymentConfirmParams,
    type PaymentCreateSessionTokenParams as PaymentCreateSessionTokenParams,
    type PaymentIncrementalAuthorizationParams as PaymentIncrementalAuthorizationParams,
    type PaymentPostSessionTokensParams as PaymentPostSessionTokensParams,
    type PaymentUpdateMetadataParams as PaymentUpdateMetadataParams,
  };

  export {
    PaymentLink as PaymentLink,
    type PaymentLinkRetrieveResponse as PaymentLinkRetrieveResponse,
    type PaymentLinkRetrieveParams as PaymentLinkRetrieveParams,
  };

  export {
    Relay as Relay,
    type RelayData as RelayData,
    type RelayResponse as RelayResponse,
    type RelayType as RelayType,
    type RelayCreateParams as RelayCreateParams,
    type RelayRetrieveParams as RelayRetrieveParams,
  };

  export {
    Refunds as Refunds,
    type RefundResponse as RefundResponse,
    type RefundStatus as RefundStatus,
    type SplitRefund as SplitRefund,
    type XenditSplitSubMerchantData as XenditSplitSubMerchantData,
    type RefundListResponse as RefundListResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundUpdateParams as RefundUpdateParams,
    type RefundListParams as RefundListParams,
  };

  export {
    Organization as Organization,
    type OrganizationResponse as OrganizationResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
  };

  export {
    Gsm as Gsm,
    type ErrorCategory as ErrorCategory,
    type GsmDecision as GsmDecision,
    type GsmResponse as GsmResponse,
    type GsmDeleteResponse as GsmDeleteResponse,
    type GsmCreateParams as GsmCreateParams,
    type GsmRetrieveParams as GsmRetrieveParams,
    type GsmUpdateParams as GsmUpdateParams,
    type GsmDeleteParams as GsmDeleteParams,
  };

  export {
    Mandates as Mandates,
    type MandateResponse as MandateResponse,
    type MandateStatus as MandateStatus,
    type MandateRevokeResponse as MandateRevokeResponse,
  };

  export {
    Customers as Customers,
    type AddressDetails as AddressDetails,
    type Customer as Customer,
    type CustomerListResponse as CustomerListResponse,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerListMandatesResponse as CustomerListMandatesResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    PaymentMethods as PaymentMethods,
    type Bank as Bank,
    type CardDetail as CardDetail,
    type CardDetailFromLocker as CardDetailFromLocker,
    type PaymentMethodIssuerCode as PaymentMethodIssuerCode,
    type PaymentMethodResponse as PaymentMethodResponse,
    type Wallet as Wallet,
    type PaymentMethodDeleteResponse as PaymentMethodDeleteResponse,
    type PaymentMethodSetDefaultResponse as PaymentMethodSetDefaultResponse,
    type PaymentMethodCreateParams as PaymentMethodCreateParams,
    type PaymentMethodUpdateParams as PaymentMethodUpdateParams,
    type PaymentMethodSetDefaultParams as PaymentMethodSetDefaultParams,
  };

  export {
    Disputes as Disputes,
    type DisputeResponse as DisputeResponse,
    type DisputeStage as DisputeStage,
    type DisputeStatus as DisputeStatus,
    type DisputeListResponse as DisputeListResponse,
    type DisputeListParams as DisputeListParams,
  };

  export {
    Routing as Routing,
    type MerchantRoutingAlgorithm as MerchantRoutingAlgorithm,
    type RoutingConfig as RoutingConfig,
    type RoutingDictionaryRecord as RoutingDictionaryRecord,
    type TransactionType as TransactionType,
    type RoutingListResponse as RoutingListResponse,
    type RoutingRetrieveActiveResponse as RoutingRetrieveActiveResponse,
    type RoutingCreateParams as RoutingCreateParams,
    type RoutingListParams as RoutingListParams,
    type RoutingDeactivateParams as RoutingDeactivateParams,
    type RoutingRetrieveActiveParams as RoutingRetrieveActiveParams,
  };

  export {
    Blocklist as Blocklist,
    type BlocklistDataKind as BlocklistDataKind,
    type BlocklistRequest as BlocklistRequest,
    type BlocklistResponse as BlocklistResponse,
    type BlocklistToggleResponse as BlocklistToggleResponse,
    type BlocklistCreateParams as BlocklistCreateParams,
    type BlocklistRetrieveParams as BlocklistRetrieveParams,
    type BlocklistDeleteParams as BlocklistDeleteParams,
    type BlocklistToggleParams as BlocklistToggleParams,
  };

  export {
    Payouts as Payouts,
    type BankNames as BankNames,
    type CreatePayoutLinkConfig as CreatePayoutLinkConfig,
    type CreateResponse as CreateResponse,
    type EntityType as EntityType,
    type GenericLinkUiConfig as GenericLinkUiConfig,
    type MethodData as MethodData,
    type PayoutConnectors as PayoutConnectors,
    type PayoutType as PayoutType,
    type PixBankTransferAdditionalData as PixBankTransferAdditionalData,
    type SendPriority as SendPriority,
    type Status as Status,
    type TimeRange as TimeRange,
    type PayoutListFiltersResponse as PayoutListFiltersResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutConfirmParams as PayoutConfirmParams,
    type PayoutFulfillParams as PayoutFulfillParams,
    type PayoutListFiltersParams as PayoutListFiltersParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyExpiration as APIKeyExpiration,
    type RetrieveAPIKey as RetrieveAPIKey,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyRevokeParams as APIKeyRevokeParams,
  };

  export {
    Events as Events,
    type EventClass as EventClass,
    type EventListConstraints as EventListConstraints,
    type EventListItem as EventListItem,
    type EventRetrieve as EventRetrieve,
    type EventType as EventType,
    type TotalEvents as TotalEvents,
    type EventDeliveryAttemptsResponse as EventDeliveryAttemptsResponse,
    type EventListParams as EventListParams,
    type EventDeliveryAttemptsParams as EventDeliveryAttemptsParams,
    type EventRetryParams as EventRetryParams,
  };

  export { Poll as Poll, type PollRetrieveStatusResponse as PollRetrieveStatusResponse };

  export {
    ProfileAcquirers as ProfileAcquirers,
    type ProfileAcquirer as ProfileAcquirer,
    type ProfileAcquirerCreateParams as ProfileAcquirerCreateParams,
    type ProfileAcquirerUpdateParams as ProfileAcquirerUpdateParams,
  };

  export {
    ThreeDSDecisionResource as ThreeDSDecisionResource,
    type Country as Country,
    type ThreeDSDecision as ThreeDSDecision,
    type ThreeDSDecisionExecuteResponse as ThreeDSDecisionExecuteResponse,
    type ThreeDSDecisionExecuteParams as ThreeDSDecisionExecuteParams,
  };

  export {
    Authentication as Authentication,
    type AcquirerDetails as AcquirerDetails,
    type AuthenticationConnectors as AuthenticationConnectors,
    type AuthenticationStatus as AuthenticationStatus,
    type AuthenticationCreateResponse as AuthenticationCreateResponse,
    type AuthenticationCreateParams as AuthenticationCreateParams,
  };

  export {
    Accounts as Accounts,
    type BusinessCollectLinkConfig as BusinessCollectLinkConfig,
    type BusinessGenericLinkConfig as BusinessGenericLinkConfig,
    type CardNetwork as CardNetwork,
    type ConnectorSelection as ConnectorSelection,
    type CountryAlpha2 as CountryAlpha2,
    type Currency as Currency,
    type EnabledPaymentMethod as EnabledPaymentMethod,
    type IfStatement as IfStatement,
    type MandateAmountData as MandateAmountData,
    type MandateType as MandateType,
    type MerchantAccount as MerchantAccount,
    type MerchantDetails as MerchantDetails,
    type MerchantProductType as MerchantProductType,
    type PrimaryBusinessDetails as PrimaryBusinessDetails,
    type StaticRoutingAlgorithm as StaticRoutingAlgorithm,
    type WebhookDetails as WebhookDetails,
    type AccountDeleteResponse as AccountDeleteResponse,
    type AccountKvResponse as AccountKvResponse,
    type AccountListPaymentMethodsResponse as AccountListPaymentMethodsResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountKvParams as AccountKvParams,
    type AccountListPaymentMethodsParams as AccountListPaymentMethodsParams,
  };
}
