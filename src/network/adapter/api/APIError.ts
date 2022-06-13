export interface APIError {
  message: string;
  status: number;
  code: number;
  data: any;
  raw: Error;
}
