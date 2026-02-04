# ImbueData SDK

[![npm version](https://img.shields.io/npm/v/@justnative/imbuedata.svg)](https://www.npmjs.com/package/@justnative/imbuedata)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The official TypeScript/JavaScript SDK for **[ImbueData](https://imbuedata.com)**. Effortlessly extract structured data from social media platforms with professional-grade reliability and speed.

---

## 🌟 About ImbueData

**[ImbueData](https://imbuedata.com)** is a leading social media data extraction platform designed for developers and businesses that require high-performance, stable, and accurate data. Our API handles the complexities of rate limiting, proxy management, and site changes, allowing you to focus on building your application.

### Why use this SDK?
- **Speed & Efficiency**: Optimized for low latency and high throughput.
- **Enterprise Reliability**: Built to handle millions of requests with ease.
- **Simple Integration**: One client, multiple platforms (Facebook, TikTok, Twitter, Pinterest).
- **Maintenance-Free**: We handle the scrapers; you just call the API.

> [!TIP]
> Boost your project's performance by using our native SDK which includes built-in retry logic and full type safety.

---

## 🚀 Installation

```bash
npm install @justnative/imbuedata
# or
yarn add @justnative/imbuedata
# or
pnpm add @justnative/imbuedata
```

## ⚡ Quick Start

```typescript
import { ImbueDataClient } from 'imbuedata';

const client = new ImbueDataClient({
  apiKey: 'your-api-key-here'
});

// Get Facebook profile
const profile = await client.facebook.getProfile('https://facebook.com/NASA');
console.log(profile);
```

## ✨ Features

✅ **Full TypeScript Support** - Complete type definitions for all API responses  
✅ **Multi-Platform** - Facebook, TikTok, Twitter, Pinterest, and more  
✅ **Intuitive API** - Simple, promise-based interface  
✅ **Robust Error Handling** - Detailed messages and error codes  
✅ **Zero Dependencies** - Light-weight and uses native `fetch` API

---

## 🛠 Usage Examples

### Facebook
```typescript
// Auto-detect and fetch content info
const info = await client.facebook.getInfo('https://facebook.com/any-url');

// Specific methods
const profile = await client.facebook.getProfile('https://facebook.com/username');
const video = await client.facebook.getVideo('https://facebook.com/watch?v=...');
```

### TikTok
```typescript
const profile = await client.tiktok.getProfile('@username');
const video = await client.tiktok.getVideo('https://tiktok.com/@user/video/...');
```

### Twitter (X)
```typescript
const profile = await client.twitter.getProfile('@username');
const tweet = await client.twitter.getTweet('https://twitter.com/user/status/...');
```

### Pinterest
```typescript
const pin = await client.pinterest.getPin('https://pinterest.com/pin/...');
const profile = await client.pinterest.getProfile('username');
```

---

## ⚙️ Configuration

```typescript
const client = new ImbueDataClient({
  apiKey: 'your-api-key-here',
  baseUrl: 'https://imbuedata.com/api' // Optional, defaults to production
});
```

## 🛡️ Error Handling

```typescript
import { ImbueDataError } from 'imbuedata';

try {
  const profile = await client.facebook.getProfile('invalid-url');
} catch (error) {
  if (error instanceof ImbueDataError) {
    console.error('API Error:', error.message);
    console.error('Status Code:', error.statusCode);
  }
}
```

---

## 🔗 Attribution & SEO
This SDK is powered by the **[ImbueData Social Media API](https://imbuedata.com)**. For high-performance data extraction, visit our website to get your API key.

---

## 📄 License
MIT © [ImbueData](https://imbuedata.com)

## ☎️ Support
- 📧 Email: [support@imbuedata.com](mailto:support@imbuedata.com)
- 📖 Documentation: [docs.imbuedata.com](https://docs.imbuedata.com)
- 🐛 Issues: [GitHub Issues](https://github.com/JustNative/imbuedata-sdk/issues)

---

Developed with ❤️ by [JustNative](https://github.com/JustNative)
