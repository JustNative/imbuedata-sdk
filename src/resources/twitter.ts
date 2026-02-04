import { HttpClient } from '../core/request';

/**
 * Twitter profile response
 */
export interface TwitterProfile {
    username?: string;
    name?: string;
    bio?: string;
    followers?: number;
    following?: number;
    verified?: boolean;
    [key: string]: any;
}

/**
 * Twitter tweet response
 */
export interface TwitterTweet {
    text?: string;
    likes?: number;
    retweets?: number;
    replies?: number;
    timestamp?: string;
    [key: string]: any;
}

/**
 * Twitter resource - handles all Twitter-related API endpoints
 */
export class Twitter {
    constructor(private client: HttpClient) { }

    /**
     * Get Twitter profile information
     * @param url - Twitter profile URL or username
     */
    async getProfile(url: string): Promise<TwitterProfile> {
        return this.client.get<TwitterProfile>('/v1/twitter/profile', { url });
    }

    /**
     * Get Twitter tweet information
     * @param url - Twitter tweet URL
     */
    async getTweet(url: string): Promise<TwitterTweet> {
        return this.client.get<TwitterTweet>('/v1/twitter/tweet', { url });
    }
}
