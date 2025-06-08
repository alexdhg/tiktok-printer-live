"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRoomIdFromEulerRoute = void 0;
const route_1 = require("../../../types/route");
class FetchRoomIdFromEulerRoute extends route_1.Route {
    async call({ uniqueId, options }) {
        const fetchResponse = await this.webClient.webSigner.webcast.retrieveRoomId(uniqueId, options);
        return fetchResponse.data;
    }
}
exports.FetchRoomIdFromEulerRoute = FetchRoomIdFromEulerRoute;
//# sourceMappingURL=fetch-room-id-euler.js.map