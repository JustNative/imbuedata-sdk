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

    // Pins
    async getPinInfo(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/pins/info', { url });
    }
    async getPinDetails(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/pins/details', { url });
    }
    async getPinSnapInfo(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/pins/psinfo', { url });
    }
    async getRelatedPins(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/pins/related', { url });
    }
    async searchPins(query: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/pins/search', { query });
    }

    // Boards
    async getBoardDetails(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/info', { url });
    }
    async getBoardPins(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/pins', { url });
    }
    async getUserBoards(username: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/user', { username });
    }
    async getBoardSectionById(id: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/section', { id });
    }
    async getBoardSectionBySlug(slug: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/section-by-slug', { slug });
    }
    async getBoardSections(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/sections', { url });
    }
    async getSectionPins(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/section-pins', { url });
    }
    async getBoardContentRecommendations(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/recommendations', { url });
    }
    async getBoardFeed(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/board-feed', { url });
    }
    async getBoardSectionsRepin(url: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/boards/board-sections-repin', { url });
    }

    // Users
    async getUserPins(username: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/users/pins', { username });
    }
    async getProfile(username: string): Promise<PinterestProfile> {
        return this.client.get<PinterestProfile>('/v1/pinterest/users/profile', { username });
    }
    async getUserActivityPins(username: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/users/activity-pins', { username });
    }
    async getUserFollowing(username: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/users/following', { username });
    }
    async getUserFollowers(username: string): Promise<any> {
        return this.client.get<any>('/v1/pinterest/users/followers', { username });
    }

    // Private
    async getHomeFeed(): Promise<any> {
        return this.client.get<any>('/v1/pinterest/private/home-feed');
    }
    async getBestPinsFeed(): Promise<any> {
        return this.client.get<any>('/v1/pinterest/private/best-pins-feed');
    }
    async getConversations(): Promise<any> {
        return this.client.get<any>('/v1/pinterest/private/conversations');
    }
    async getInterest(): Promise<any> {
        return this.client.get<any>('/v1/pinterest/private/interest');
    }
    async getBoardPicker(): Promise<any> {
        return this.client.get<any>('/v1/pinterest/private/board-picker');
    }
    async getUserPrivateBoards(): Promise<any> {
        return this.client.get<any>('/v1/pinterest/private/user-board');
    }
    async getUserBoardPicker(): Promise<any> {
        return this.client.get<any>('/v1/pinterest/private/user-board-picker');
    }
}
