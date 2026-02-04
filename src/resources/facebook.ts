import { HttpClient } from '../core/request';

/**
 * Facebook profile response
 */
export interface FacebookProfile {
    username?: string;
    name?: string;
    bio?: string;
    followers?: number;
    following?: number;
    verified?: boolean;
    [key: string]: any;
}

/**
 * Facebook video response
 */
export interface FacebookVideo {
    url?: string;
    title?: string;
    views?: number;
    thumbnail?: string;
    [key: string]: any;
}

/**
 * Facebook post response
 */
export interface FacebookPost {
    text?: string;
    likes?: number;
    comments?: number;
    shares?: number;
    timestamp?: string;
    [key: string]: any;
}

/**
 * Facebook resource - handles all Facebook-related API endpoints
 */
export class Facebook {
    constructor(private client: HttpClient) { }

    /**
     * Get Facebook information (auto-detects content type)
     * @param url - Facebook URL
     */
    async getInfo(url: string): Promise<any> {
        return this.client.get('/v1/facebook/info', { url });
    }

    /**
     * Get Facebook profile information
     * @param url - Facebook profile URL
     */
    async getProfile(url: string): Promise<FacebookProfile> {
        return this.client.get<FacebookProfile>('/v1/facebook/profile', { url });
    }

    /**
     * Get Facebook video information
     * @param url - Facebook video URL
     */
    async getVideo(url: string): Promise<FacebookVideo> {
        return this.client.get<FacebookVideo>('/v1/facebook/video', { url });
    }

    /**
     * Get Facebook post information
     * @param url - Facebook post URL
     */
    async getPost(url: string): Promise<FacebookPost> {
        return this.client.get<FacebookPost>('/v1/facebook/post', { url });
    }

    /**
     * Get Facebook reel information
     * @param url - Facebook reel URL
     */
    async getReel(url: string): Promise<FacebookVideo> {
        return this.client.get<FacebookVideo>('/v1/facebook/reel', { url });
    }
}
