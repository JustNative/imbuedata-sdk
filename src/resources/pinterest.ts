import { HttpClient } from '../core/request';

/**
 * Pinterest pin response
 */
export interface PinterestPin {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    saves?: number;
    [key: string]: any;
}

/**
 * Pinterest profile response
 */
export interface PinterestProfile {
    username?: string;
    name?: string;
    bio?: string;
    followers?: number;
    following?: number;
    [key: string]: any;
}

/**
 * Pinterest resource - handles all Pinterest-related API endpoints
 */
export class Pinterest {
    constructor(private client: HttpClient) { }

    /**
     * Get Pinterest pin information
     * @param url - Pinterest pin URL
     */
    async getPin(url: string): Promise<PinterestPin> {
        return this.client.get<PinterestPin>('/v1/pinterest/pin', { url });
    }

    /**
     * Get Pinterest profile information
     * @param url - Pinterest profile URL or username
     */
    async getProfile(url: string): Promise<PinterestProfile> {
        return this.client.get<PinterestProfile>('/v1/pinterest/profile', { url });
    }
}
