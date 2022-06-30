import { HTTPMethod } from '@/network/api/api-client';
import { APIResponse } from '@/network/api/api-response';

export type APIRequest<R extends APIResponse> = {
  response: R;
  path: string;
  method: HTTPMethod;
  headers?: any;
  params?: any;
  baseURL?: string;
  parse?: (data: any) => R;
};
