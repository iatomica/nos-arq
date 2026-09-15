import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Polyfill fetch for file:// scheme so @squoosh/lib works in Node 18/20/24
const originalFetch = globalThis.fetch;
globalThis.fetch = async function (url, options) {
  if (typeof url === 'string') {
    if (url.startsWith('file:')) {
      const filePath = fileURLToPath(url);
      const buffer = await fs.promises.readFile(filePath);
      return new Response(buffer);
    }
    if (/^[a-zA-Z]:[\\/]/.test(url) || fs.existsSync(url)) {
      const buffer = await fs.promises.readFile(url);
      return new Response(buffer);
    }
  }
  return originalFetch.apply(this, arguments);
};

const { ImagePool } = await import('@squoosh/lib');

console.log('Testing ImagePool with file:// fetch patch...');
const imagePool = new ImagePool(1);
console.log('ImagePool initialized successfully!');
await imagePool.close();
console.log('ImagePool closed without errors.');
