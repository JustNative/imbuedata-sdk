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
export { Translator } from './resources/translator';
export { Loom } from './resources/loom';
export { Zoom } from './resources/zoom';
export { AppleConnect } from './resources/appleconnect';
export { ApplePodcasts } from './resources/applepodcasts';
export { AdobeTV } from './resources/adobetv';
export { Snapchat } from './resources/snapchat';

// Default export
export default ImbueDataClient;
