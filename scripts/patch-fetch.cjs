const fs = require('node:fs');
const path = require('node:path');
const { fileURLToPath } = require('node:url');

if (globalThis.fetch) {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async function (url, options) {
    if (typeof url === 'string') {
      let filePath = null;
      if (url.startsWith('file:')) {
        filePath = fileURLToPath(url);
      } else if (/^[a-zA-Z]:[\\/]/.test(url) || fs.existsSync(url)) {
        filePath = url;
      }
      if (filePath) {
        const buffer = await fs.promises.readFile(filePath);
        const headers = filePath.endsWith('.wasm') ? { 'Content-Type': 'application/wasm' } : {};
        return new Response(buffer, { headers });
      }
    }
    return originalFetch.apply(this, arguments);
  };
}
