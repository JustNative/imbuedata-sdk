// Main client
import { ImbueDataClient } from './client';

// Named exports
export { ImbueDataClient };

// Types
export { ImbueDataConfig, ImbueDataError, ApiResponse } from './types';

// Resources (optional exports for advanced usage)
export { Facebook, FacebookProfile, FacebookVideo, FacebookPost } from './resources/facebook';
export { TikTok, TikTokProfile, TikTokVideo } from './resources/tiktok';
export { Twitter, TwitterProfile, TwitterTweet } from './resources/twitter';
export { Pinterest, PinterestPin, PinterestProfile } from './resources/pinterest';

// Default export
export default ImbueDataClient;

