import WebcastHttpClient from '../../lib/web/lib/http-client';
import { FetchRoomInfoRoute, SendRoomChatFromEulerRoute } from '../../lib/web/routes';
import { FetchRoomInfoFromHtmlRoute } from '../../lib/web/routes/fetch-room-info-html';
import { FetchSignedWebSocketFromEulerRoute } from '../../lib/web/routes/fetch-signed-websocket-euler';
import { FetchRoomIdFromEulerRoute } from '../../lib/web/routes/fetch-room-id-euler';
import { FetchRoomInfoFromEulerRoute } from '../../lib/web/routes/fetch-room-info-euler';
import { FetchRoomInfoFromApiLiveRoute } from '../../lib/web/routes/fetch-room-info-api-live';
export * from './routes';
export * from './lib';
export declare class TikTokWebClient extends WebcastHttpClient {
    readonly fetchRoomInfo: FetchRoomInfoRoute;
    readonly fetchRoomInfoFromApiLive: FetchRoomInfoFromApiLiveRoute;
    readonly fetchRoomInfoFromHtml: FetchRoomInfoFromHtmlRoute;
    readonly fetchSignedWebSocketFromEuler: FetchSignedWebSocketFromEulerRoute;
    readonly fetchRoomIdFromEuler: FetchRoomIdFromEulerRoute;
    readonly fetchRoomInfoFromEuler: FetchRoomInfoFromEulerRoute;
    readonly sendRoomChatFromEuler: SendRoomChatFromEulerRoute;
    constructor(...params: ConstructorParameters<typeof WebcastHttpClient>);
}
//# sourceMappingURL=index.d.ts.map