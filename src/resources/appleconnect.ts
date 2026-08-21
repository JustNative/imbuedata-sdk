import { HttpClient } from '../core/request';

/**
 * Apple Connect resource - handles all Apple Connect API endpoints
 */
export class AppleConnect {
    constructor(private client: HttpClient) { }

    async getInfo(url: string): Promise<any> {
        return this.client.get<any>('/v1/appleconnect/info', { url });
    }
}
