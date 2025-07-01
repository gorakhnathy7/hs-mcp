// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_payments from './payments/create-payments';
import retrieve_payments from './payments/retrieve-payments';
import update_payments from './payments/update-payments';
import list_payments from './payments/list-payments';
import cancel_payments from './payments/cancel-payments';
import capture_payments from './payments/capture-payments';
import complete_authorize_payments from './payments/complete-authorize-payments';
import confirm_payments from './payments/confirm-payments';
import create_session_token_payments from './payments/create-session-token-payments';
import incremental_authorization_payments from './payments/incremental-authorization-payments';
import post_session_tokens_payments from './payments/post-session-tokens-payments';
import update_metadata_payments from './payments/update-metadata-payments';
import authenticate_payments_number_3ds from './payments/number-3ds/authenticate-payments-number-3ds';
import retrieve_payment_link from './payment-link/retrieve-payment-link';
import create_relay from './relay/create-relay';
import retrieve_relay from './relay/retrieve-relay';
import create_refunds from './refunds/create-refunds';
import retrieve_refunds from './refunds/retrieve-refunds';
import update_refunds from './refunds/update-refunds';
import list_refunds from './refunds/list-refunds';
import create_organization from './organization/create-organization';
import retrieve_organization from './organization/retrieve-organization';
import update_organization from './organization/update-organization';
import create_gsm from './gsm/create-gsm';
import retrieve_gsm from './gsm/retrieve-gsm';
import update_gsm from './gsm/update-gsm';
import delete_gsm from './gsm/delete-gsm';
import retrieve_mandates from './mandates/retrieve-mandates';
import revoke_mandates from './mandates/revoke-mandates';
import create_customers from './customers/create-customers';
import retrieve_customers from './customers/retrieve-customers';
import update_customers from './customers/update-customers';
import list_customers from './customers/list-customers';
import delete_customers from './customers/delete-customers';
import list_mandates_customers from './customers/list-mandates-customers';
import list_customers_payment_methods from './customers/payment-methods/list-customers-payment-methods';
import list_saved_customers_payment_methods from './customers/payment-methods/list-saved-customers-payment-methods';
import create_payment_methods from './payment-methods/create-payment-methods';
import retrieve_payment_methods from './payment-methods/retrieve-payment-methods';
import update_payment_methods from './payment-methods/update-payment-methods';
import delete_payment_methods from './payment-methods/delete-payment-methods';
import set_default_payment_methods from './payment-methods/set-default-payment-methods';
import retrieve_disputes from './disputes/retrieve-disputes';
import list_disputes from './disputes/list-disputes';
import create_routing from './routing/create-routing';
import retrieve_routing from './routing/retrieve-routing';
import list_routing from './routing/list-routing';
import activate_routing from './routing/activate-routing';
import deactivate_routing from './routing/deactivate-routing';
import retrieve_active_routing from './routing/retrieve-active-routing';
import retrieve_routing_default from './routing/default/retrieve-routing-default';
import update_routing_default from './routing/default/update-routing-default';
import retrieve_default_routing_profile from './routing/default/profile/retrieve-default-routing-profile';
import update_default_routing_profile from './routing/default/profile/update-default-routing-profile';
import create_blocklist from './blocklist/create-blocklist';
import retrieve_blocklist from './blocklist/retrieve-blocklist';
import delete_blocklist from './blocklist/delete-blocklist';
import toggle_blocklist from './blocklist/toggle-blocklist';
import create_payouts from './payouts/create-payouts';
import retrieve_payouts from './payouts/retrieve-payouts';
import update_payouts from './payouts/update-payouts';
import cancel_payouts from './payouts/cancel-payouts';
import confirm_payouts from './payouts/confirm-payouts';
import fulfill_payouts from './payouts/fulfill-payouts';
import list_filters_payouts from './payouts/list-filters-payouts';
import retrieve_payouts_list from './payouts/list/retrieve-payouts-list';
import with_filters_payouts_list from './payouts/list/with-filters-payouts-list';
import create_api_keys from './api-keys/create-api-keys';
import retrieve_api_keys from './api-keys/retrieve-api-keys';
import update_api_keys from './api-keys/update-api-keys';
import list_api_keys from './api-keys/list-api-keys';
import revoke_api_keys from './api-keys/revoke-api-keys';
import list_events from './events/list-events';
import delivery_attempts_events from './events/delivery-attempts-events';
import retry_events from './events/retry-events';
import list_events_profile from './events/profile/list-events-profile';
import retrieve_status_poll from './poll/retrieve-status-poll';
import create_profile_acquirers from './profile-acquirers/create-profile-acquirers';
import update_profile_acquirers from './profile-acquirers/update-profile-acquirers';
import execute_three_ds_decision from './three-ds-decision/execute-three-ds-decision';
import create_authentication from './authentication/create-authentication';
import create_accounts from './accounts/create-accounts';
import retrieve_accounts from './accounts/retrieve-accounts';
import update_accounts from './accounts/update-accounts';
import delete_accounts from './accounts/delete-accounts';
import kv_accounts from './accounts/kv-accounts';
import list_payment_methods_accounts from './accounts/list-payment-methods-accounts';
import create_accounts_connectors from './accounts/connectors/create-accounts-connectors';
import retrieve_accounts_connectors from './accounts/connectors/retrieve-accounts-connectors';
import update_accounts_connectors from './accounts/connectors/update-accounts-connectors';
import list_accounts_connectors from './accounts/connectors/list-accounts-connectors';
import delete_accounts_connectors from './accounts/connectors/delete-accounts-connectors';
import create_accounts_business_profile from './accounts/business-profile/create-accounts-business-profile';
import retrieve_accounts_business_profile from './accounts/business-profile/retrieve-accounts-business-profile';
import update_accounts_business_profile from './accounts/business-profile/update-accounts-business-profile';
import list_accounts_business_profile from './accounts/business-profile/list-accounts-business-profile';
import delete_accounts_business_profile from './accounts/business-profile/delete-accounts-business-profile';
import toggle_dynamic_routing_business_profile_accounts_success_based from './accounts/business-profile/dynamic-routing/success-based/toggle-dynamic-routing-business-profile-accounts-success-based';
import update_config_dynamic_routing_business_profile_accounts_success_based from './accounts/business-profile/dynamic-routing/success-based/update-config-dynamic-routing-business-profile-accounts-success-based';
import toggle_dynamic_routing_business_profile_accounts_elimination from './accounts/business-profile/dynamic-routing/elimination/toggle-dynamic-routing-business-profile-accounts-elimination';
import toggle_dynamic_routing_business_profile_accounts_contracts from './accounts/business-profile/dynamic-routing/contracts/toggle-dynamic-routing-business-profile-accounts-contracts';
import update_config_dynamic_routing_business_profile_accounts_contracts from './accounts/business-profile/dynamic-routing/contracts/update-config-dynamic-routing-business-profile-accounts-contracts';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_payments);
addEndpoint(retrieve_payments);
addEndpoint(update_payments);
addEndpoint(list_payments);
addEndpoint(cancel_payments);
addEndpoint(capture_payments);
addEndpoint(complete_authorize_payments);
addEndpoint(confirm_payments);
addEndpoint(create_session_token_payments);
addEndpoint(incremental_authorization_payments);
addEndpoint(post_session_tokens_payments);
addEndpoint(update_metadata_payments);
addEndpoint(authenticate_payments_number_3ds);
addEndpoint(retrieve_payment_link);
addEndpoint(create_relay);
addEndpoint(retrieve_relay);
addEndpoint(create_refunds);
addEndpoint(retrieve_refunds);
addEndpoint(update_refunds);
addEndpoint(list_refunds);
addEndpoint(create_organization);
addEndpoint(retrieve_organization);
addEndpoint(update_organization);
addEndpoint(create_gsm);
addEndpoint(retrieve_gsm);
addEndpoint(update_gsm);
addEndpoint(delete_gsm);
addEndpoint(retrieve_mandates);
addEndpoint(revoke_mandates);
addEndpoint(create_customers);
addEndpoint(retrieve_customers);
addEndpoint(update_customers);
addEndpoint(list_customers);
addEndpoint(delete_customers);
addEndpoint(list_mandates_customers);
addEndpoint(list_customers_payment_methods);
addEndpoint(list_saved_customers_payment_methods);
addEndpoint(create_payment_methods);
addEndpoint(retrieve_payment_methods);
addEndpoint(update_payment_methods);
addEndpoint(delete_payment_methods);
addEndpoint(set_default_payment_methods);
addEndpoint(retrieve_disputes);
addEndpoint(list_disputes);
addEndpoint(create_routing);
addEndpoint(retrieve_routing);
addEndpoint(list_routing);
addEndpoint(activate_routing);
addEndpoint(deactivate_routing);
addEndpoint(retrieve_active_routing);
addEndpoint(retrieve_routing_default);
addEndpoint(update_routing_default);
addEndpoint(retrieve_default_routing_profile);
addEndpoint(update_default_routing_profile);
addEndpoint(create_blocklist);
addEndpoint(retrieve_blocklist);
addEndpoint(delete_blocklist);
addEndpoint(toggle_blocklist);
addEndpoint(create_payouts);
addEndpoint(retrieve_payouts);
addEndpoint(update_payouts);
addEndpoint(cancel_payouts);
addEndpoint(confirm_payouts);
addEndpoint(fulfill_payouts);
addEndpoint(list_filters_payouts);
addEndpoint(retrieve_payouts_list);
addEndpoint(with_filters_payouts_list);
addEndpoint(create_api_keys);
addEndpoint(retrieve_api_keys);
addEndpoint(update_api_keys);
addEndpoint(list_api_keys);
addEndpoint(revoke_api_keys);
addEndpoint(list_events);
addEndpoint(delivery_attempts_events);
addEndpoint(retry_events);
addEndpoint(list_events_profile);
addEndpoint(retrieve_status_poll);
addEndpoint(create_profile_acquirers);
addEndpoint(update_profile_acquirers);
addEndpoint(execute_three_ds_decision);
addEndpoint(create_authentication);
addEndpoint(create_accounts);
addEndpoint(retrieve_accounts);
addEndpoint(update_accounts);
addEndpoint(delete_accounts);
addEndpoint(kv_accounts);
addEndpoint(list_payment_methods_accounts);
addEndpoint(create_accounts_connectors);
addEndpoint(retrieve_accounts_connectors);
addEndpoint(update_accounts_connectors);
addEndpoint(list_accounts_connectors);
addEndpoint(delete_accounts_connectors);
addEndpoint(create_accounts_business_profile);
addEndpoint(retrieve_accounts_business_profile);
addEndpoint(update_accounts_business_profile);
addEndpoint(list_accounts_business_profile);
addEndpoint(delete_accounts_business_profile);
addEndpoint(toggle_dynamic_routing_business_profile_accounts_success_based);
addEndpoint(update_config_dynamic_routing_business_profile_accounts_success_based);
addEndpoint(toggle_dynamic_routing_business_profile_accounts_elimination);
addEndpoint(toggle_dynamic_routing_business_profile_accounts_contracts);
addEndpoint(update_config_dynamic_routing_business_profile_accounts_contracts);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
