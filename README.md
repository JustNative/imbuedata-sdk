<h1 align="center">
  <br>
  ImbueData SDK
  <br>
</h1>

<p align="center">
  <strong>The official TypeScript/JavaScript SDK for the <a href="https://imbuedata.com">ImbueData API</a></strong><br>
  Extract structured data from social media platforms with a single line of code.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@justnative/imbuedata">
    <img src="https://img.shields.io/npm/v/@justnative/imbuedata.svg?style=flat-square&color=cb3837" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/@justnative/imbuedata">
    <img src="https://img.shields.io/npm/dm/@justnative/imbuedata.svg?style=flat-square&color=blue" alt="npm downloads">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT">
  </a>
  <a href="https://github.com/JustNative/imbuedata-sdk/stargazers">
    <img src="https://img.shields.io/github/stars/JustNative/imbuedata-sdk?style=flat-square&color=gold" alt="GitHub Stars">
  </a>
</p>

<p align="center">
  <a href="#-installation">Installation</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-supported-platforms">Platforms</a> •
  <a href="#-api-reference">API Reference</a> •
  <a href="#-error-handling">Error Handling</a>
</p>

---

## 🌟 Why ImbueData?

[ImbueData](https://imbuedata.com) handles all the hard parts of social media scraping — proxies, rotating sessions, CAPTCHA, and platform changes — so you don't have to.

| Feature | ImbueData SDK |
|---|---|
| ⚡ Zero Dependencies | Uses native `fetch` only |
| 🔒 Full Type Safety | Complete TypeScript definitions |
| 🌍 11 Platforms | TikTok, Twitter, Facebook, Pinterest, Loom, Zoom & more |
| 🔄 Auto Retry | Built-in resilience logic |
| 🚀 Production Ready | Used by teams at scale |

---

## 🚀 Installation

```bash
npm install @justnative/imbuedata
# or
yarn add @justnative/imbuedata
# or
pnpm add @justnative/imbuedata
```

---

## ⚡ Quick Start

```typescript
import { ImbueDataClient } from '@justnative/imbuedata';

const client = new ImbueDataClient({
  apiKey: 'your-api-key-here'   // Get yours at imbuedata.com
});

// Fetch a TikTok profile
const profile = await client.tiktok.getProfile('@nasa');
console.log(profile.followers); // 12300000

// Fetch a tweet
const tweet = await client.twitter.getTweet('https://twitter.com/NASA/status/...');
console.log(tweet.text);

// Fetch a Facebook reel
const reel = await client.facebook.getReel('https://facebook.com/reel/...');
console.log(reel.views);
```

> **Get your free API key at [imbuedata.com](https://imbuedata.com)** ⬅️

---

## 📦 Supported Platforms

| Platform | Methods |
|---|---|
| **TikTok** | `getProfile` · `getInfo` · `getDetails` · `getVideoComments` · `getCollection` · `getPlaylist` · `getTrending` · `getTrendingCreators` |
| **Twitter / X** | `getTweet` · `getTweetInfo` · `getTweetPrivate` · `getProfile` · `getUserTweets` |
| **Facebook** | `getProfile` · `getVideo` · `getPost` · `getReel` · `getInfo` |
| **Pinterest** | `getPinInfo` · `getPinDetails` · `searchPins` · `getRelatedPins` · `getBoardDetails` · `getBoardPins` · `getUserProfile` · `getUserPins` · `getUserFollowers` · `getUserFollowing` · *(+10 more)* |
| **Loom** | `getInfo` · `getFolder` · `getTranscript` · `getChapters` |
| **Zoom** | `getInfo` |
| **Snapchat** | `getInfo` · `getStories` |
| **Apple Connect** | `getInfo` |
| **Apple Podcasts** | `getInfo` |
| **AdobeTV** | `getInfo` |
| **Translator** | `translate` · `getLanguages` · `detectLanguage` · `textToSpeech` |

---

## 📖 API Reference

### TikTok

```typescript
// Profile data
const profile = await client.tiktok.getProfile('@username');

// Video details + comments
const info    = await client.tiktok.getInfo('https://tiktok.com/@user/video/123');
const details = await client.tiktok.getDetails('https://tiktok.com/@user/video/123');
const comments = await client.tiktok.getVideoComments('https://tiktok.com/@user/video/123');

// Collections & playlists
const collection = await client.tiktok.getCollection('https://tiktok.com/...');
const playlist   = await client.tiktok.getPlaylist('https://tiktok.com/...');

// Discovery
const trending         = await client.tiktok.getTrending();
const trendingCreators = await client.tiktok.getTrendingCreators();
```

### Twitter / X

```typescript
// Tweets (accepts URL or ID)
const tweet        = await client.twitter.getTweet('https://twitter.com/NASA/status/123');
const tweetInfo    = await client.twitter.getTweetInfo('123456789');
const tweetPrivate = await client.twitter.getTweetPrivate('https://...');

// Profiles (accepts @username or user ID)
const profile    = await client.twitter.getProfile('NASA');
const userTweets = await client.twitter.getUserTweets('44196397', 'tweets'); // 'tweets' | 'replies' | 'media' | 'likes'
```

### Facebook

```typescript
const profile = await client.facebook.getProfile('https://facebook.com/NASA');
const video   = await client.facebook.getVideo('https://facebook.com/watch?v=...');
const post    = await client.facebook.getPost('https://facebook.com/post/...');
const reel    = await client.facebook.getReel('https://facebook.com/reel/...');
const info    = await client.facebook.getInfo('https://facebook.com/any-url'); // auto-detect
```

### Pinterest

```typescript
// Pins
const pin     = await client.pinterest.getPinInfo('https://pinterest.com/pin/123');
const related = await client.pinterest.getRelatedPins('https://pinterest.com/pin/123');
const results = await client.pinterest.searchPins('space photography');

// Boards
const board    = await client.pinterest.getBoardDetails('https://pinterest.com/user/board');
const pins     = await client.pinterest.getBoardPins('https://pinterest.com/user/board');
const sections = await client.pinterest.getBoardSections('https://...');

// Users
const profile   = await client.pinterest.getProfile('username');
const userPins  = await client.pinterest.getUserPins('username');
const followers = await client.pinterest.getUserFollowers('username');
const following = await client.pinterest.getUserFollowing('username');
```

### Loom

```typescript
const info       = await client.loom.getInfo('https://loom.com/share/abc');
const transcript = await client.loom.getTranscript('https://loom.com/share/abc');
const chapters   = await client.loom.getChapters('https://loom.com/share/abc');
const folder     = await client.loom.getFolder('https://loom.com/folder/...');
```

### Translator

```typescript
const result     = await client.translator.translate('Hello world', 'es'); // → Spanish
const detected   = await client.translator.detectLanguage('Bonjour le monde');
const languages  = await client.translator.getLanguages();
const audio      = await client.translator.textToSpeech('Hello', 'en');
```

---

## ⚙️ Configuration

```typescript
const client = new ImbueDataClient({
  apiKey:  'your-api-key-here',         // Required
  baseUrl: 'https://imbuedata.com/api', // Optional — defaults to production
});
```

---

## 🛡️ Error Handling

All methods throw `ImbueDataError` on failure, giving you full context to handle issues gracefully.

```typescript
import { ImbueDataClient, ImbueDataError } from '@justnative/imbuedata';

try {
  const profile = await client.tiktok.getProfile('@username');
} catch (error) {
  if (error instanceof ImbueDataError) {
    console.error(error.message);     // Human-readable message
    console.error(error.statusCode);  // HTTP status code (e.g. 404, 429)
    console.error(error.code);        // Machine-readable error code
  }
}
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Give a ⭐ if this project helped you — it keeps us motivated to add more platforms.

1. Fork the repo
2. Create your branch: `git checkout -b feat/my-feature`
3. Commit: `git commit -m 'feat: add my feature'`
4. Push: `git push origin feat/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT © [ImbueData](https://imbuedata.com)

## 💬 Support

- 📧 Email: [support@imbuedata.com](mailto:support@imbuedata.com)
- 📖 Docs: [docs.imbuedata.com](https://docs.imbuedata.com)
- 🐛 Issues: [GitHub Issues](https://github.com/JustNative/imbuedata-sdk/issues)

---

<p align="center">Built with ❤️ by <a href="https://github.com/JustNative">JustNative</a> · Powered by <a href="https://imbuedata.com">ImbueData</a></p>
