import { ISendMessageRequestValue } from "@/network/value/request/cmm-request-value";
import SendMessageAdapter from "@/network/adapter/cmm-tcm-adapter";

export default class SendMessageUseCase {
  sendMessageAdapter = new SendMessageAdapter();

  async sendMessage(params: ISendMessageRequestValue) {
    const payload = {
      hpNumber: params.hpNumber,
      message: params.message,
    };
    const headers = {
      "x-talk-id": "desktop",
      Authentication: "123456",
    };
    try {
      return await this.sendMessageAdapter.sendMessage(payload, headers);
    } catch (e: any) {
      console.log("error: " + e);
    }
  }
}
