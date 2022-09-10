

export interface WebSocketOptions {
  client_code: string;
  feed_token: string;
}

export type TaskType = 'cn' | 'hb' | 'mw' | 'sfi' | 'dp'



export class WebSocket {
  constructor(options: WebSocketOptions) { }


  connect: () => Promise<any>;
  runScript: (script: string, task: TaskType) => Promise<any>;
  close: () => void;
  on: (...params: any) => void
}

