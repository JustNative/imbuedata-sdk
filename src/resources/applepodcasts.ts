import { HttpClient } from '../core/request';

/**
 * Apple Podcasts resource - handles all Apple Podcasts API endpoints
 */
export class ApplePodcasts {
    constructor(private client: HttpClient) { }

    async getInfo(url: string): Promise<any> {
        return this.client.get<any>('/v1/applepodcasts/info', { url });
    }
}
