export interface SmartAPIServerResponse<T> {
  status: boolean;
  message: 'SUCCESS' | 'FAILED';
  data: T;
}

export type GetProfileResponseType = {
  clientcode: string;
  name: string;
  email: string;
  mobileno: string;
  exchanges: string[];
  products: string[];
  lastlogintime: string;
  broker: string;
}

export type GenerateSessionResponseType = {
  jwtToken: string;
  refreshToken: string;
  feedToken: string;
}

export type SmartApiOptions = {
  api_key: string;
  client_code?: string;
  root?: string;
  timeout?: string;
  debug?: boolean;
  access_token?: string;
  refresh_token?: string;
  default_login_uri?: string;
  session_expiry_hook?: string;
}

export class SmartAPI {
  constructor(options: ISmartApiOptions) { }


  generateSession: (
    clientCode: string,
    password: string
  ) => Promise<SmartAPIServerResponse<GenerateSessionResponseType>>;

  getProfile: () => Promise<SmartAPIServerResponse<GetProfileResponseType>>;
}

