export interface WebSocketClientOptions {
  clientcode: string;
  jwttoken: string;
  apikey: string;
  feedtype?: string;
}


/**
 * // Sr. No	TASK NAME	DESCRIPTION
// 1	cn	To connect to websocket or to async servlet
// 2	hb	Heart beat
// 3	mw	For market watch
// 4	sfi	For subscribing index
// 5	dp	for market depth

 */
export type TaskType = 'cn' | 'hb' | 'mw' | 'sfi' | 'dp'


export class WebSocketClient {
  constructor(options: WebSocketClientOptions) { }


  connect: () => Promise<any>;
  fetchData: (script: string, task: TaskType) => Promise<any>;
  close: () => void;
  on: (...params: any) => void
}

