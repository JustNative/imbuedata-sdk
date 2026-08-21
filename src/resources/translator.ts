import { HttpClient } from '../core/request';

/**
 * Translator resource - handles all translation-related API endpoints
 */
export class Translator {
    constructor(private client: HttpClient) { }

    async translate(text: string, target: string, source?: string): Promise<any> {
        const params: Record<string, string> = { text, target };
        if (source) params.source = source;
        return this.client.get<any>('/v1/translator/translate', params);
    }

    async getLanguages(): Promise<any> {
        return this.client.get<any>('/v1/translator/languages');
    }

    async detectLanguage(text: string): Promise<any> {
        return this.client.get<any>('/v1/translator/detect', { text });
    }

    async textToSpeech(text: string, language?: string): Promise<any> {
        const params: Record<string, string> = { text };
        if (language) params.language = language;
        return this.client.get<any>('/v1/translator/tts', params);
    }
}
