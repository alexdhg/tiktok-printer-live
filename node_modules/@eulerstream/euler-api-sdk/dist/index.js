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
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("./sdk");
const utils_1 = require("./utils");
// Exports
__exportStar(require("./sdk"), exports);
__exportStar(require("./utils"), exports);
// Export an API Client
class EulerStreamApiClient {
    tiktok;
    webcast;
    accounts;
    authentication;
    analytics;
    alerts;
    alertTargets;
    configuration;
    /**
     * EulerStream API Client
     *
     * Configuration
     *
     *
     * API Instances
     *
     * @param config The configuration for the API client
     */
    constructor(config = {}) {
        // Build the config
        this.configuration = (0, utils_1.buildConfig)(config);
        // Set up the APIs
        this.tiktok = new sdk_1.TikTokApi(this.configuration);
        this.webcast = new sdk_1.WebcastApi(this.configuration);
        this.accounts = new sdk_1.AccountsApi(this.configuration);
        this.authentication = new sdk_1.AuthenticationApi(this.configuration);
        this.analytics = new sdk_1.AnalyticsApi(this.configuration);
        this.alerts = new sdk_1.AlertsApi(this.configuration);
        this.alertTargets = new sdk_1.AlertsApi(this.configuration);
    }
}
exports.default = EulerStreamApiClient;
//# sourceMappingURL=index.js.map