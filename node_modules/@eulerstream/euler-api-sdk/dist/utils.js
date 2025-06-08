"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildConfig = void 0;
function buildConfig(baseConfig) {
    const config = {
        ...{
            basePath: 'https://tiktok.eulerstream.com',
            baseOptions: { validateStatus: () => true },
            isJsonMime: (mime) => mime.toLowerCase().includes("application/json")
        },
        ...baseConfig
    };
    if (!config.apiKey) {
        return config;
    }
    const apiKey = config.apiKey;
    delete config.apiKey;
    config.baseOptions.headers ||= {};
    config.baseOptions.headers['X-Api-Key'] = apiKey;
    return config;
}
exports.buildConfig = buildConfig;
//# sourceMappingURL=utils.js.map