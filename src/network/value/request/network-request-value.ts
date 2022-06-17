import { AxiosResponse } from "axios";
import { APIRequest } from "@/network/api/api-request";
import { HTTPMethod } from "@/network/api/api-client";
import {
  ISendMessageHeaderRequestValue,
  ISendMessageRequestValue,
} from "@/network/value/request/cmm-request-value";

export namespace SendMessageNetworkRequestValue {
  export class SendMessage
    implements APIRequest<List<ISendMessageRequestValue>>
  {
    // @ts-ignore
    response: any;
    path = "https://httpbin.org/get";
    method = HTTPMethod.GET;
    parse = (data: AxiosResponse) => data.data;
    constructor(
      public params: ISendMessageRequestValue,
      public headers: ISendMessageHeaderRequestValue
    ) {}
  }
}
