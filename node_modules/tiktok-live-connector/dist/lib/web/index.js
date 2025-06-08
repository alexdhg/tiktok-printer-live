"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TikTokWebClient = void 0;
const http_client_1 = __importDefault(require("../../lib/web/lib/http-client"));
const routes_1 = require("../../lib/web/routes");
const fetch_room_info_html_1 = require("../../lib/web/routes/fetch-room-info-html");
const fetch_signed_websocket_euler_1 = require("../../lib/web/routes/fetch-signed-websocket-euler");
const fetch_room_id_euler_1 = require("../../lib/web/routes/fetch-room-id-euler");
const fetch_room_info_euler_1 = require("../../lib/web/routes/fetch-room-info-euler");
const fetch_room_info_api_live_1 = require("../../lib/web/routes/fetch-room-info-api-live");
// Export all types and classes
__exportStar(require("./routes"), exports);
__exportStar(require("./lib"), exports);
// Export a wrapper that brings it all together
class TikTokWebClient extends http_client_1.default {
    // TikTok-based routes
    fetchRoomInfo;
    fetchRoomInfoFromApiLive;
    fetchRoomInfoFromHtml;
    // Euler-based routes
    fetchSignedWebSocketFromEuler;
    fetchRoomIdFromEuler;
    fetchRoomInfoFromEuler;
    sendRoomChatFromEuler;
    constructor(...params) {
        super(...params);
        this.fetchRoomInfo = new routes_1.FetchRoomInfoRoute(this);
        this.fetchRoomInfoFromHtml = new fetch_room_info_html_1.FetchRoomInfoFromHtmlRoute(this);
        this.fetchRoomInfoFromApiLive = new fetch_room_info_api_live_1.FetchRoomInfoFromApiLiveRoute(this);
        this.fetchSignedWebSocketFromEuler = new fetch_signed_websocket_euler_1.FetchSignedWebSocketFromEulerRoute(this);
        this.fetchRoomIdFromEuler = new fetch_room_id_euler_1.FetchRoomIdFromEulerRoute(this);
        this.fetchRoomInfoFromEuler = new fetch_room_info_euler_1.FetchRoomInfoFromEulerRoute(this);
        this.sendRoomChatFromEuler = new routes_1.SendRoomChatFromEulerRoute(this);
    }
}
exports.TikTokWebClient = TikTokWebClient;
//# sourceMappingURL=index.js.map