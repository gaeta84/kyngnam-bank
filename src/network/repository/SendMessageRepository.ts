import SendMessageNetworkAdapter from "@/network/adapter/SendMessageNetworkAdapter";  
import { ISendMessageHeaderRequestValue, ISendMessageRequestValue } from "@/network/value/request/UseCaseRequestValue";

export default class SendMessageRepository {
  sendMessageNetworkAdapter = new SendMessageNetworkAdapter()

  async sendMessage(params: ISendMessageRequestValue, headers: ISendMessageHeaderRequestValue) {
    return await this.sendMessageNetworkAdapter.SendMessage(params, headers);
  }
}