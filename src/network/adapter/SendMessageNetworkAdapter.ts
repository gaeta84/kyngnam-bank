import { SendMessageNetworkRequestValue } from "@/network/value/request/NetworkRequestValue";
import { ISendMessageHeaderRequestValue, ISendMessageRequestValue } from "@/network/value/request/UseCaseRequestValue";
import { APIClient } from '@/network/adapter/api/APIClient';
  
export default class SendMessageNetworkAdapter {
    async SendMessage(params:ISendMessageRequestValue, headers: ISendMessageHeaderRequestValue) {
      return await APIClient.instance.request(new SendMessageNetworkRequestValue.SendMessage(params, headers))
      
    }
}