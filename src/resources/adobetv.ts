import { HttpClient } from '../core/request';

/**
 * AdobeTV resource - handles all AdobeTV API endpoints
 */
export class AdobeTV {
    constructor(private client: HttpClient) { }

    async getInfo(url: string): Promise<any> {
        return this.client.get<any>('/v1/adobetv/info', { url });
    }
}
