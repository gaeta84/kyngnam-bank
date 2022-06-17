export interface ISendMessageHeaderRequestValue {
  "x-talk-id": string,
  "Authentication": string
}

export interface ISendMessageRequestValue {
  hpNumber: string;
  message: string;
}
