"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRoomInfoFromApiLiveRoute = void 0;
const route_1 = require("../../../types/route");
const errors_1 = require("../../../types/errors");
class FetchRoomInfoFromApiLiveRoute extends route_1.Route {
    async call({ uniqueId }) {
        // Fetch object from TikTok API
        const roomData = await this.webClient.getJsonObjectFromTikTokApi('api-live/user/room/', {
            ...this.webClient.clientParams,
            uniqueId: uniqueId,
            sourceType: '54'
        });
        // Check if the response is valid
        if (roomData.statusCode) {
            throw new errors_1.InvalidResponseError(`API Error ${roomData.statusCode} (${roomData.message || 'Unknown Error'})`, undefined);
        }
        if (!roomData?.data?.user?.roomId) {
            throw new errors_1.InvalidResponseError(`Invalid response from API: ${JSON.stringify(roomData)}`, undefined);
        }
        return roomData;
    }
}
exports.FetchRoomInfoFromApiLiveRoute = FetchRoomInfoFromApiLiveRoute;
//# sourceMappingURL=fetch-room-info-api-live.js.map