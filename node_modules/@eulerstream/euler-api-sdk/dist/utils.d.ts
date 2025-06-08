import { Configuration } from "./sdk";
export type ClientConfiguration = Configuration & {
    apiKey?: string;
};
export declare function buildConfig(baseConfig: Partial<ClientConfiguration>): ClientConfiguration;
//# sourceMappingURL=utils.d.ts.map