

export interface WebSocketOptions {
  client_code: string;
  feed_token: string;
}

export type TaskType = 'cn' | 'hb' | 'mw' | 'sfi' | 'dp'

export type WebsocketDataHeartBeatItem = {
  ak: 'ok' | 'nk'; task: 'hb'; msg: 'heartbeat';
}

export type WebsocketDataConnectItem = {
  ak: 'ok' | 'nk'; task: 'cn'; msg: 'connected';
}

export type WebSocketDataFeedItem = {
  name: 'sf' | 'mw';
  tk: string;
  e: string;
  ltp: string;
  c: string;
  ts: string;

  lo: string;
  ts: string;
  tp: null;
  ltp: string;
  ltq: string;
  bs: string;
  tk: string;
  ltt: string;
  lcl: null;
  tsq: string;
  cng: string;
  bp: string;
  bq: string;
  mc: string;
  isdc: string;
  name: string;
  tbq: string;
  oi: null;
  yh: string;
  e: string;
  sp: string;
  op: string;
  c: string;
  to: string;
  ut: string;
  h: string;
  v: string;
  nc: string;
  ap: string;
  yl: string;
  ucl: null;
  toi: string;
}

export type WebsocketDataTimeFeedItem = {
  name: 'tm';
  tvalue: 'Time';
}

export type WebsocketDataItem = WebsocketDataHeartBeatItem | WebsocketDataConnectItem | WebsocketDataTimeFeedItem | WebSocketDataFeedItem

export class WebSocket {
  constructor(options: WebSocketOptions) { }


  connect: () => Promise<any>;
  runScript: (script: string, task: TaskType) => Promise<any>;
  close: () => void;
  on: (eventName: any, cb: (data: WebsocketDataItem) => void) => void
}

