import { AccountsApi, AlertsApi, AnalyticsApi, AuthenticationApi, TikTokApi, WebcastApi } from "./sdk";
import { ClientConfiguration } from "./utils";
export * from './sdk';
export * from './utils';
export default class EulerStreamApiClient {
    readonly tiktok: TikTokApi;
    readonly webcast: WebcastApi;
    readonly accounts: AccountsApi;
    readonly authentication: AuthenticationApi;
    readonly analytics: AnalyticsApi;
    readonly alerts: AlertsApi;
    readonly alertTargets: AlertsApi;
    readonly configuration: ClientConfiguration;
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
    constructor(config?: Partial<ClientConfiguration>);
}
//# sourceMappingURL=index.d.ts.map