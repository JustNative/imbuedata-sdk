/**
 * Base error class for ImbueData SDK
 */
export class ImbueDataError extends Error {
    constructor(
        message: string,
        public statusCode?: number,
        public code?: string,
        public details?: any
    ) {
        super(message);
        this.name = 'ImbueDataError';
    }
}

/**
 * Configuration options for ImbueData client
 */
export interface ImbueDataConfig {
    apiKey: string;
    baseUrl?: string;
}

/**
 * Generic API response structure
 */
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
        details?: any;
    };
    timestamp?: string;
}
