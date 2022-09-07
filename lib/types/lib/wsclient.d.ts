/**
 * Event handler for clicking on button "Connect"
 */
declare function onConnectClick(): void;
/**
 * Event handler for clicking on button "Disconnect"
 */
declare function onDisconnectClick(): void;
/**
 * Open a new WebSocket connection using the given parameters
 */
declare function openWSConnection(protocol: any, hostname: any, port: any, endpoint: any, clientcode: any, apikey: any, jwttoken: any): void;
/**
 * Send a subscribe message to the WebSocket server
 */
declare function onSendSubscribeClick(): void;
/**
 * Send a unsubscribe message to the WebSocket server
 */
declare function onSendUnsubscribeClick(): void;
/**
 * Send a heartbeat message to the WebSocket server
 */
declare function onSendHeartbeatClick(): void;
declare var webSocket: any;
declare var ws_protocol: any;
declare var ws_hostname: any;
declare var ws_port: any;
declare var ws_endpoint: any;
