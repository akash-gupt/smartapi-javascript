export interface WebSocketClientOptions {
  clientcode: string;
  jwttoken: string;
  apikey: string;
  feedtype?: string;
}


export class WebSocketClient {
  constructor(options: WebSocketClientOptions) { }


  connect: () => Promise<any>;
  fetchData: (...params: any) => Promise<any>;
  close: () => void;
  on: (...params: any) => void
}

