import { HttpClient } from './core/request';
import { ImbueDataConfig } from './types';
import { Facebook } from './resources/facebook';
import { TikTok } from './resources/tiktok';
import { Twitter } from './resources/twitter';
import { Pinterest } from './resources/pinterest';

/**
 * Main ImbueData SDK Client
 * 
 * @example
 * ```typescript
 * import { ImbueDataClient } from 'imbuedata';
 * 
 * const client = new ImbueDataClient({
 *   apiKey: 'your-api-key-here'
 * });
 * 
 * // Get Facebook profile
 * const profile = await client.facebook.getProfile('https://facebook.com/username');
 * console.log(profile);
 * ```
 */
export class ImbueDataClient {
    private httpClient: HttpClient;

    /** Facebook API methods */
    public facebook: Facebook;

    /** TikTok API methods */
    public tiktok: TikTok;

    /** Twitter API methods */
    public twitter: Twitter;

    /** Pinterest API methods */
    public pinterest: Pinterest;

    /**
     * Create a new ImbueData client
     * @param config - Client configuration
     */
    constructor(config: ImbueDataConfig) {
        const baseUrl = config.baseUrl || 'https://your-api-domain.com/api';

        this.httpClient = new HttpClient(baseUrl, config.apiKey);

        // Initialize resources
        this.facebook = new Facebook(this.httpClient);
        this.tiktok = new TikTok(this.httpClient);
        this.twitter = new Twitter(this.httpClient);
        this.pinterest = new Pinterest(this.httpClient);
    }
}
