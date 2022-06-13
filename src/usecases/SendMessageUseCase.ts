import { ISendMessageRequestValue } from "@/network/value/request/UseCaseRequestValue";
import SendMessageRepository from "@/repositories/SendMessageRepository";  
  
export default class SendMessageUseCase {
    sendMessageRepository = new SendMessageRepository()

    async sendMessage(params: ISendMessageRequestValue) {
      const payload = {
        hpNumber: params.hpNumber,
        message: params.message
      }
      const headers = {
        "x-talk-id": "desktop",
        "Authentication": "123456"
      }
      try {
        return await this.sendMessageRepository.sendMessage(payload, headers);
      } catch(e: any) {
        console.log("error: " + e);
      }
    }
  }