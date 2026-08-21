import { HttpClient } from '../core/request';

/**
 * Snapchat resource - handles all Snapchat API endpoints
 */
export class Snapchat {
    constructor(private client: HttpClient) { }

    async getInfo(url: string): Promise<any> {
        return this.client.get<any>('/v1/snapchat/info', { url });
    }

    async getStories(url: string): Promise<any> {
        return this.client.get<any>('/v1/snapchat/stories', { url });
    }
}
