# ImbueData SDK

Official TypeScript/JavaScript SDK for the [ImbueData API](https://your-api-domain.com) - Professional social media data extraction.

## Installation

```bash
npm install imbuedata
# or
yarn add imbuedata
# or
pnpm add imbuedata
```

## Quick Start

```typescript
import { ImbueDataClient } from 'imbuedata';

const client = new ImbueDataClient({
  apiKey: 'your-api-key-here'
});

// Get Facebook profile
const profile = await client.facebook.getProfile('https://facebook.com/NASA');
console.log(profile);
```

## Features

✅ **Full TypeScript Support** - Complete type definitions for all API responses  
✅ **Multiple Platforms** - Facebook, TikTok, Twitter, Pinterest, and more  
✅ **Simple API** - Intuitive, promise-based interface  
✅ **Error Handling** - Comprehensive error handling with detailed messages  
✅ **Zero Dependencies** - Uses native `fetch` API

## Usage Examples

### Facebook

```typescript
// Get profile information
const profile = await client.facebook.getProfile('https://facebook.com/username');

// Get video information
const video = await client.facebook.getVideo('https://facebook.com/watch?v=...');

// Get post information
const post = await client.facebook.getPost('https://facebook.com/post-url');

// Get reel information
const reel = await client.facebook.getReel('https://facebook.com/reel-url');

// Auto-detect content type
const info = await client.facebook.getInfo('https://facebook.com/any-url');
```

### TikTok

```typescript
// Get profile information
const profile = await client.tiktok.getProfile('@username');

// Get video information
const video = await client.tiktok.getVideo('https://tiktok.com/@user/video/...');
```

### Twitter

```typescript
// Get profile information
const profile = await client.twitter.getProfile('@username');

// Get tweet information
const tweet = await client.twitter.getTweet('https://twitter.com/user/status/...');
```

### Pinterest

```typescript
// Get pin information
const pin = await client.pinterest.getPin('https://pinterest.com/pin/...');

// Get profile information
const profile = await client.pinterest.getProfile('username');
```

## Configuration

```typescript
const client = new ImbueDataClient({
  apiKey: 'your-api-key-here',
  baseUrl: 'https://custom-api-url.com/api' // Optional, defaults to production
});
```

## Error Handling

```typescript
import { ImbueDataError } from 'imbuedata';

try {
  const profile = await client.facebook.getProfile('invalid-url');
} catch (error) {
  if (error instanceof ImbueDataError) {
    console.error('API Error:', error.message);
    console.error('Status Code:', error.statusCode);
    console.error('Error Code:', error.code);
  }
}
```

## API Reference

### Client Initialization

```typescript
new ImbueDataClient(config: ImbueDataConfig)
```

**Parameters:**
- `config.apiKey` (required): Your ImbueData API key
- `config.baseUrl` (optional): Custom API base URL

### Resources

#### Facebook
- `facebook.getInfo(url: string)` - Auto-detect and fetch any Facebook content
- `facebook.getProfile(url: string)` - Get profile information
- `facebook.getVideo(url: string)` - Get video information
- `facebook.getPost(url: string)` - Get post information
- `facebook.getReel(url: string)` - Get reel information

#### TikTok
- `tiktok.getProfile(url: string)` - Get profile information
- `tiktok.getVideo(url: string)` - Get video information

#### Twitter
- `twitter.getProfile(url: string)` - Get profile information
- `twitter.getTweet(url: string)` - Get tweet information

#### Pinterest
- `pinterest.getPin(url: string)` - Get pin information
- `pinterest.getProfile(url: string)` - Get profile information

## TypeScript Support

The SDK is written in TypeScript and includes full type definitions:

```typescript
import { 
  ImbueDataClient,
  FacebookProfile,
  TikTokVideo,
  TwitterTweet 
} from 'imbuedata';

const client = new ImbueDataClient({ apiKey: 'key' });

// Fully typed responses
const profile: FacebookProfile = await client.facebook.getProfile('...');
```

## License

MIT

## Support

- 📧 Email: support@imbuedata.com
- 📖 Documentation: https://docs.imbuedata.com
- 🐛 Issues: https://github.com/yourusername/imbuedata-sdk/issues

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
# imbuedata-sdk
