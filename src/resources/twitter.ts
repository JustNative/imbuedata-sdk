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

    async getTweet(urlOrId: string): Promise<TwitterTweet> {
        const isUrl = urlOrId.includes('http');
        return this.client.get<TwitterTweet>('/v1/twitter/tweet', isUrl ? { url: urlOrId } : { id: urlOrId });
    }
    
    async getTweetInfo(urlOrId: string): Promise<any> {
        const isUrl = urlOrId.includes('http');
        return this.client.get<any>('/v1/twitter/tweet/info', isUrl ? { url: urlOrId } : { id: urlOrId });
    }

    async getTweetPrivate(url: string): Promise<any> {
        return this.client.get<any>('/v1/twitter/tweet/private', { url });
    }

    async getProfile(usernameOrId: string): Promise<TwitterProfile> {
        const isId = /^\d+$/.test(usernameOrId);
        return this.client.get<TwitterProfile>('/v1/twitter/user', isId ? { id: usernameOrId } : { screenName: usernameOrId });
    }

    async getUserTweets(userId: string, type: 'tweets' | 'replies' | 'media' | 'likes' = 'tweets'): Promise<any> {
        return this.client.get<any>('/v1/twitter/user/tweets', { userId, type });
    }
}
