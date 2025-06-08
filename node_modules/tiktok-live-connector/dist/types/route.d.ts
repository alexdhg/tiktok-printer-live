import CallableInstance from 'callable-instance';
import { TikTokWebClient } from '../lib';
export declare abstract class Route<Args, Response> extends CallableInstance<[Args], Promise<Response>> {
    protected readonly webClient: TikTokWebClient;
    constructor(webClient: TikTokWebClient);
    abstract call(args: Args): Promise<Response>;
}
//# sourceMappingURL=route.d.ts.map