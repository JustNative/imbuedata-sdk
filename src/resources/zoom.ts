import { HttpClient } from '../core/request';

/**
 * Zoom resource - handles all Zoom-related API endpoints
 */
export class Zoom {
    constructor(private client: HttpClient) { }

    async getInfo(url: string): Promise<any> {
        return this.client.get<any>('/v1/zoom/info', { url });
    }
}
