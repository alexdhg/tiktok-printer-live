"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRoomInfoFromEulerRoute = void 0;
const route_1 = require("../../../types/route");
class FetchRoomInfoFromEulerRoute extends route_1.Route {
    async call({ uniqueId, options }) {
        const fetchResponse = await this.webClient.webSigner.webcast.retrieveRoomInfo(uniqueId, options);
        return fetchResponse.data;
    }
}
exports.FetchRoomInfoFromEulerRoute = FetchRoomInfoFromEulerRoute;
//# sourceMappingURL=fetch-room-info-euler.js.map