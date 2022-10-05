export interface WebSocketClientV2Options {
  clientcode: string;
  jwttoken: string;
  apikey: string;
  feedtoken?: string;
}

type TokenListType = {
  /**
   * 1 (nse_cm)

2 (nse_fo)

3 (bse_cm)

4 (bse_fo)

5 (mcx_fo)

7 (ncx_fo)

13 (cde_fo)
   */
  exchangeType: 1 | 2 | 3 | 4 | 5 | 7 | 13;
  tokens: Array<string>;
}

export type WebSocketClientV2FetchDataOptions = {
  correlationID?: string;
  /**
   * 1 (Subscribe)

0 (Unsubscribe)
   */
  action: 1 | 0;
  /**
   * 1 (LTP)

2 (Quote)

3 (Snap Quote)
   */
  mode: 1 | 2 | 3;
  tokenList: TokenListType[]
}


export class WebSocketClientV2 {
  constructor(options: WebSocketClientV2Options) { }

  connect: () => Promise<any>;
  /**
   * https://smartapi.angelbroking.com/docs/WebSocket2
   */
  fetchData: (params: WebSocketClientV2FetchDataOptions) => Promise<any>;
  close: () => void;
  on: (...params: any) => void
}

