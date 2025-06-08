"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRoomInfoFromHtmlRoute = void 0;
const route_1 = require("../../../types/route");
const SIGI_PATTERN = /<script id="SIGI_STATE" type="application\/json">(.*?)<\/script>/;
class FetchRoomInfoFromHtmlRoute extends route_1.Route {
    async call({ uniqueId }) {
        const html = await this.webClient.getHtmlFromTikTokWebsite(`@${uniqueId}/live`);
        const match = html.match(SIGI_PATTERN);
        if (!match || match.length < 2) {
            throw new Error('Failed to extract the SIGI_STATE HTML tag, you might be blocked by TikTok.');
        }
        let sigiState;
        try {
            sigiState = JSON.parse(match[1]);
        }
        catch (e) {
            throw new Error('Failed to parse SIGI_STATE into JSON. Are you captcha-blocked by TikTok?');
        }
        const liveRoom = sigiState?.LiveRoom;
        if (!liveRoom) {
            throw new Error('Failed to extract the LiveRoom object from SIGI_STATE.');
        }
        return liveRoom;
    }
}
exports.FetchRoomInfoFromHtmlRoute = FetchRoomInfoFromHtmlRoute;
//# sourceMappingURL=fetch-room-info-html.js.map