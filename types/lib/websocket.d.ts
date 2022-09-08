

export interface WebSocketOptions {
  client_code: string;
  feed_token: string;
}


export class WebSocket {
  constructor(options: WebSocketOptions) { }


  connect: () => Promise<any>;
  runScript: (...params: any) => Promise<any>;
  close: () => void;
  on: (...params: any) => void
}

