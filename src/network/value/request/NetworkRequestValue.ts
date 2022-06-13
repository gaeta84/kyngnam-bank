import { AxiosResponse } from 'axios';
import { APIRequest } from "@/network/adapter/api/APIRequest";
import { HTTPMethod } from "@/network/adapter/api/APIClient";
import { ISendMessageHeaderRequestValue, ISendMessageRequestValue } from "@/network/value/request/UseCaseRequestValue";

export namespace SendMessageNetworkRequestValue {
    export class SendMessage implements APIRequest<List<ISendMessageRequestValue>> {
      // @ts-ignore
      response: any;
      path = "https://httpbin.org/get";
      method = HTTPMethod.GET;
      parse = (data: AxiosResponse) => data.data;
      constructor(public params: ISendMessageRequestValue, public headers: ISendMessageHeaderRequestValue) {}
    }
}