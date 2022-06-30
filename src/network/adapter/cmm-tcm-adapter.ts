import { SendMessageNetworkRequestValue } from '@/network/value/request/network-request-value';
import {
  ISendMessageHeaderRequestValue,
  ISendMessageRequestValue,
} from '@/network/value/request/cmm-request-value';
import { APIClient } from '@/network/api/api-client';

export default class SendMessageNetworkAdapter {
  async sendMessage(
    params: ISendMessageRequestValue,
    headers: ISendMessageHeaderRequestValue
  ) {
    return await APIClient.instance.request(
      new SendMessageNetworkRequestValue.SendMessage(params, headers)
    );
  }
}
