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

    /**
     * Get TikTok profile information
     * @param url - TikTok profile URL or username
     */
    async getProfile(url: string): Promise<TikTokProfile> {
        return this.client.get<TikTokProfile>('/v1/tiktok/profile', { url });
    }

    /**
     * Get TikTok video information
     * @param url - TikTok video URL
     */
    async getVideo(url: string): Promise<TikTokVideo> {
        return this.client.get<TikTokVideo>('/v1/tiktok/video', { url });
    }
}
