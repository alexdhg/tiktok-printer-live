"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRoomInfoRoute = void 0;
const route_1 = require("../../../types/route");
const errors_1 = require("../../../types/errors");
class FetchRoomInfoRoute extends route_1.Route {
    async call(params) {
        // Assign Room ID
        const { roomId } = params || this.webClient;
        // Must have a Room ID to fetch
        if (roomId == null) {
            throw new errors_1.MissingRoomIdError('Missing roomId. Please provide a roomId to the HTTP client.');
        }
        // Fetch room info
        try {
            return await this.webClient.getJsonObjectFromWebcastApi('room/info/', { ...this.webClient.clientParams, roomId: roomId }, false);
        }
        catch (err) {
            throw new errors_1.InvalidResponseError(`Failed to fetch room info. ${err.message}`, err);
        }
    }
}
exports.FetchRoomInfoRoute = FetchRoomInfoRoute;
//# sourceMappingURL=fetch-room-info.js.map