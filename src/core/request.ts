import { ImbueDataError, ApiResponse } from '../types';

/**
 * HTTP request options
 */
interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: any;
    params?: Record<string, string | number | boolean>;
}

/**
 * Core HTTP client for making requests to ImbueData API
 */
export class HttpClient {
    constructor(
        private baseUrl: string,
        private apiKey: string
    ) { }

    /**
     * Make an HTTP request
     */
    async request<T = any>(
        endpoint: string,
        options: RequestOptions = {}
    ): Promise<T> {
        const { method = 'GET', headers = {}, body, params } = options;

        // Build URL with query parameters
        const url = new URL(`${this.baseUrl}${endpoint}`);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, String(value));
            });
        }

        // Prepare headers
        const requestHeaders: Record<string, string> = {
            'Content-Type': 'application/json',
            'x-api-key': this.apiKey,
            ...headers,
        };

        // Prepare request options
        const fetchOptions: RequestInit = {
            method,
            headers: requestHeaders,
        };

        if (body && method !== 'GET') {
            fetchOptions.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(url.toString(), fetchOptions);
            const data = await response.json() as ApiResponse<T>;

            // Handle API errors
            if (!response.ok) {
                throw new ImbueDataError(
                    data.error?.message || 'Request failed',
                    response.status,
                    data.error?.code,
                    data.error?.details
                );
            }

            // Check for success field if it exists
            if (data.success === false) {
                throw new ImbueDataError(
                    data.error?.message || 'API returned success: false',
                    response.status,
                    data.error?.code,
                    data.error?.details
                );
            }

            // Return the data - check if it's wrapped in a 'data' property
            return (data.data !== undefined ? data.data : data) as T;
        } catch (error) {
            if (error instanceof ImbueDataError) {
                throw error;
            }

            // Handle network errors
            throw new ImbueDataError(
                error instanceof Error ? error.message : 'Network request failed',
                undefined,
                'NETWORK_ERROR'
            );
        }
    }

    /**
     * Convenience method for GET requests
     */
    async get<T = any>(
        endpoint: string,
        params?: Record<string, string | number | boolean>
    ): Promise<T> {
        return this.request<T>(endpoint, { method: 'GET', params });
    }

    /**
     * Convenience method for POST requests
     */
    async post<T = any>(endpoint: string, body?: any): Promise<T> {
        return this.request<T>(endpoint, { method: 'POST', body });
    }
}
