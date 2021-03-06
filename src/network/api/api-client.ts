import axios from 'axios';
import { APIResponse } from '@/network/api/api-response';
import { APIRequest } from '@/network/api/api-request';
import { APIError } from '@/network/api/api-error';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

// APIClient is client class for xhr request
export class APIClient {
  static instance = new APIClient();

  // Base fqdn for api endpoints
  baseURL = 'https://httpbin.org/get';
  // Timeout duration
  timeout: number = 15 * 1000;

  request<U extends APIResponse>(request: APIRequest<U>): Promise<U> {
    console.log(`api request [${request.method}] path::: ${request.path}`);
    console.log(request.params);
    const isRead = request.method === HTTPMethod.GET;
    const params = {};

    return new Promise<U>((resolve, reject) => {
      // TODO 여기서 온라인,오프라인 상태 체크해줘야함.
      axios
        .request({
          url: request.path,
          method: request.method,
          params: isRead && params,
          data: !isRead && params,

          withCredentials: true,
          timeout: this.timeout,
          baseURL: request.baseURL || this.baseURL,
          headers: APIClient.createHeaders(request.headers),
        })
        .then((data) => {
          resolve(APIClient.parse<U>(data));
        })

        .catch((err) => {
          const apiError = this.normalizeError(err);
          reject(apiError);
        });
    });
  }

  // Default parser
  private static parse<U extends APIResponse>(data: any): U {
    const res = data;

    console.log(`res code:::${res.status}`);
    console.log(res);
    if (res.status === 200) {
      const _data = res.data.data ? res.data.data : res.data;
      data.data = { code: 200, data: _data };
    }
    return data.data;
  }

  // Convert axios error into APIError
  private normalizeError(error: any): APIError {
    return {
      status: error.response && error.response.status,
      message: error.message,
      code: error.response.data.code,
      data: error.response.data,
      raw: error,
    };
  }

  // Create headers
  private static createHeaders(headers: any): any {
    return headers ? headers : {};
  }
}
