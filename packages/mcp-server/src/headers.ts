// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'hyperswitch/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { jwtKey: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const apiKey = Array.isArray(req.headers['api-key']) ? req.headers['api-key'][0] : req.headers['api-key'];
  const ephemeralKey =
    Array.isArray(req.headers['api-key']) ? req.headers['api-key'][0] : req.headers['api-key'];
  const jwtKey =
    Array.isArray(req.headers['x-hyperswitch-jwt-key']) ?
      req.headers['x-hyperswitch-jwt-key'][0]
    : req.headers['x-hyperswitch-jwt-key'];
  const publishableKey =
    Array.isArray(req.headers['api-key']) ? req.headers['api-key'][0] : req.headers['api-key'];
  return { apiKey, ephemeralKey, jwtKey, publishableKey };
};
