import { HttpClient } from './core/request';
import { ImbueDataConfig } from './types';
import { Facebook } from './resources/facebook';
import { TikTok } from './resources/tiktok';
import { Twitter } from './resources/twitter';
import { Pinterest } from './resources/pinterest';
import { Translator } from './resources/translator';
import { Loom } from './resources/loom';
import { Zoom } from './resources/zoom';
import { AppleConnect } from './resources/appleconnect';
import { ApplePodcasts } from './resources/applepodcasts';
import { AdobeTV } from './resources/adobetv';
import { Snapchat } from './resources/snapchat';

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

    /** Translator API methods */
    public translator: Translator;

    /** Loom API methods */
    public loom: Loom;

    /** Zoom API methods */
    public zoom: Zoom;

    /** Apple Connect API methods */
    public appleconnect: AppleConnect;

    /** Apple Podcasts API methods */
    public applepodcasts: ApplePodcasts;

    /** AdobeTV API methods */
    public adobetv: AdobeTV;

    /** Snapchat API methods */
    public snapchat: Snapchat;

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
        this.translator = new Translator(this.httpClient);
        this.loom = new Loom(this.httpClient);
        this.zoom = new Zoom(this.httpClient);
        this.appleconnect = new AppleConnect(this.httpClient);
        this.applepodcasts = new ApplePodcasts(this.httpClient);
        this.adobetv = new AdobeTV(this.httpClient);
        this.snapchat = new Snapchat(this.httpClient);
    }
}
