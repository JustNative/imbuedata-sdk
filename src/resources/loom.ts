import { HttpClient } from '../core/request';

/**
 * Loom resource - handles all Loom-related API endpoints
 */
export class Loom {
    constructor(private client: HttpClient) { }

    async getInfo(url: string): Promise<any> {
        return this.client.get<any>('/v1/loom/info', { url });
    }

    async getFolder(url: string): Promise<any> {
        return this.client.get<any>('/v1/loom/folder', { url });
    }

    async getTranscript(url: string): Promise<any> {
        return this.client.get<any>('/v1/loom/transcript', { url });
    }

    async getChapters(url: string): Promise<any> {
        return this.client.get<any>('/v1/loom/chapters', { url });
    }
}
