import axios, { AxiosInstance } from 'axios';
import CookieJar from '../../../lib/web/lib/cookie-jar';
import { WebcastHttpClientConfig, WebcastHttpClientRequestParams, WebcastMessage } from '../../../types/client';
import { EulerSigner } from '../../../lib';
export default class WebcastHttpClient {
    readonly configuration: WebcastHttpClientConfig;
    readonly webSigner: EulerSigner;
    readonly axiosInstance: AxiosInstance;
    readonly cookieJar: CookieJar;
    clientParams: Record<string, string>;
    constructor(configuration?: WebcastHttpClientConfig, webSigner?: EulerSigner);
    /**
     * Set the Room ID for the client
     * @param roomId The client's Room ID
     */
    set roomId(roomId: string);
    /**
     * Get the Room ID for the client
     */
    get roomId(): string;
    /**
     * Build the URL for the request
     *
     * @param host The host for the request
     * @param path The path for the request
     * @param params The query parameters for the request
     * @param signRequest Whether to sign the request or not
     * @param method The HTTP method for the request
     * @param headers The headers for the request
     * @param extraOptions Additional axios request options
     * @protected
     */
    request({ host, path, params, signRequest, method, headers, ...extraOptions }: WebcastHttpClientRequestParams): Promise<axios.AxiosResponse<any, any>>;
    /**
     * Get HTML from TikTok website
     *
     * @param path Path to the HTML page
     * @param options Additional request options
     */
    getHtmlFromTikTokWebsite(path: string, options?: Partial<WebcastHttpClientRequestParams>): Promise<string>;
    /**
     * Get deserialized object from Webcast API
     *
     * @param path Path to the API endpoint
     * @param params Query parameters to be sent with the request
     * @param schemaName Schema name for deserialization
     * @param signRequest Whether to sign the request or not
     * @param options Additional request options
     */
    getDeserializedObjectFromWebcastApi<T extends keyof WebcastMessage>(path: string, params: Record<string, any>, schemaName: T, signRequest?: boolean, options?: Partial<WebcastHttpClientRequestParams>): Promise<WebcastMessage[T]>;
    postJsonObjectToWebcastApi<T extends Record<string, any>>(path: string, params: Record<string, string>, data: Record<string, any>, signRequest?: boolean, options?: Partial<WebcastHttpClientRequestParams>): Promise<T>;
    /**
     * Get JSON object from Webcast API
     *
     * @param path Path to the API endpoint
     * @param params Query parameters to be sent with the request
     * @param signRequest Whether to sign the request or not
     * @param options Additional request options
     */
    getJsonObjectFromWebcastApi<T extends Record<string, any>>(path: string, params: Record<string, string>, signRequest?: boolean, options?: Partial<WebcastHttpClientRequestParams>): Promise<T>;
    /**
     * Get JSON object from TikTok API
     *
     * @param path Path to the API endpoint
     * @param params Query parameters to be sent with the request
     * @param signRequest Whether to sign the request or not
     * @param options Additional request options
     */
    getJsonObjectFromTikTokApi<T extends Record<string, any>>(path: string, params: Record<string, string>, signRequest?: boolean, options?: Partial<WebcastHttpClientRequestParams>): Promise<T>;
}
//# sourceMappingURL=http-client.d.ts.map