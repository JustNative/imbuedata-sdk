/**
 * Example usage of the ImbueData SDK
 * 
 * This demonstrates how to use the SDK to fetch data from various social media platforms.
 */

import { ImbueDataClient, ImbueDataError } from '../src/index';

async function main() {
    // Initialize the client with your API key
    const client = new ImbueDataClient({
        apiKey: process.env.IMBUEDATA_API_KEY || 'your-api-key-here',
        // Optional: customize the base URL
        // baseUrl: 'https://your-custom-domain.com/api'
    });

    console.log('🚀 ImbueData SDK Examples\n');

    // ===========================
    // Facebook Examples
    // ===========================
    console.log('📘 Facebook Examples:');

    try {
        // Get Facebook profile
        const fbProfile = await client.facebook.getProfile('https://facebook.com/NASA');
        console.log('✓ Facebook Profile:', fbProfile);
    } catch (error) {
        handleError('Facebook Profile', error);
    }

    try {
        // Get Facebook video
        const fbVideo = await client.facebook.getVideo('https://facebook.com/watch?v=...');
        console.log('✓ Facebook Video:', fbVideo);
    } catch (error) {
        handleError('Facebook Video', error);
    }

    // ===========================
    // TikTok Examples
    // ===========================
    console.log('\n🎵 TikTok Examples:');

    try {
        // Get TikTok profile
        const ttProfile = await client.tiktok.getProfile('@nasa');
        console.log('✓ TikTok Profile:', ttProfile);
    } catch (error) {
        handleError('TikTok Profile', error);
    }

    // ===========================
    // Twitter Examples
    // ===========================
    console.log('\n🐦 Twitter Examples:');

    try {
        // Get Twitter profile
        const twProfile = await client.twitter.getProfile('@NASA');
        console.log('✓ Twitter Profile:', twProfile);
    } catch (error) {
        handleError('Twitter Profile', error);
    }

    // ===========================
    // Pinterest Examples
    // ===========================
    console.log('\n📌 Pinterest Examples:');

    try {
        // Get Pinterest profile
        const pProfile = await client.pinterest.getProfile('nasa');
        console.log('✓ Pinterest Profile:', pProfile);
    } catch (error) {
        handleError('Pinterest Profile', error);
    }

    console.log('\n✅ Examples completed!');
}

/**
 * Helper function to handle errors
 */
function handleError(context: string, error: unknown) {
    if (error instanceof ImbueDataError) {
        console.error(`✗ ${context} Error:`, {
            message: error.message,
            statusCode: error.statusCode,
            code: error.code,
        });
    } else {
        console.error(`✗ ${context} Error:`, error);
    }
}

// Run the examples
main().catch(console.error);
