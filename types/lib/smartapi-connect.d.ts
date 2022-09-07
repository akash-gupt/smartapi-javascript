export interface SmartAPIResponse<T> {
  status: boolean;
  message: 'SUCCESS' | 'FAILED';
  data: T;
}

export interface GenerateSessionResponse {
  clientcode: string;
  name: string;
  email: string;
  mobileno: string;
  exchanges: string[];
  products: string[];
  lastlogintime: string;
  broker: string;
}

export class SmartAPI {
  generateSession: (
    clientCode: string,
    password: string
  ) => SmartAPIResponse<GenerateSessionResponse>;
}

