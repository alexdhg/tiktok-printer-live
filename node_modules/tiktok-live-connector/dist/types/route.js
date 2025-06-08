"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const callable_instance_1 = __importDefault(require("callable-instance"));
class Route extends callable_instance_1.default {
    webClient;
    constructor(webClient) {
        super('call');
        this.webClient = webClient;
    }
}
exports.Route = Route;
//# sourceMappingURL=route.js.map