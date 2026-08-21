import { HttpClient } from '../core/request';

/**
 * TikTok profile response
 */
export interface TikTokProfile {
    username?: string;
    nickname?: string;
    bio?: string;
    followers?: number;
    following?: number;
    likes?: number;
    verified?: boolean;
    [key: string]: any;
}

/**
 * TikTok video response
 */
export interface TikTokVideo {
    url?: string;
    title?: string;
    description?: string;
    views?: number;
    likes?: number;
    comments?: number;
    shares?: number;
    thumbnail?: string;
    [key: string]: any;
}

/**
 * TikTok resource - handles all TikTok-related API endpoints
 */
export class TikTok {
    constructor(private client: HttpClient) { }

    async getInfo(url: string): Promise<any> {
        return this.client.get<any>('/v1/tiktok/info', { url });
    }

    async getDetails(url: string): Promise<any> {
        return this.client.get<any>('/v1/tiktok/details', { url });
    }

    async getVideoComments(url: string): Promise<any> {
        return this.client.get<any>('/v1/tiktok/video-comments', { url });
    }

    async getProfile(username: string): Promise<TikTokProfile> {
        return this.client.get<TikTokProfile>('/v1/tiktok/profile', { username });
    }

    async getCollection(url: string): Promise<any> {
        return this.client.get<any>('/v1/tiktok/collection', { url });
    }

    async getPlaylist(url: string): Promise<any> {
        return this.client.get<any>('/v1/tiktok/playlist', { url });
    }

    async getTrending(): Promise<any> {
        return this.client.get<any>('/v1/tiktok/trending');
    }

    async getTrendingCreators(): Promise<any> {
        return this.client.get<any>('/v1/tiktok/trending-creators');
    }
}
