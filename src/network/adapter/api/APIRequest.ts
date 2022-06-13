import { HTTPMethod } from '@/network/adapter/api/APIClient';
import { APIResponse } from '@/network/adapter/api/APIResponse';

export type APIRequest<R extends APIResponse> = {
  response: R;
  path: string;
  method: HTTPMethod;
  headers?: any;
  params?: any;
  baseURL?: string;
  parse?: (data: any) => R;
};
