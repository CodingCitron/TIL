[vite 공식](https://ko.vitejs.dev/guide/)
[강의](https://www.youtube.com/watch?v=VAeRhmpcWEQ)

## 여러가지 @ path 설정
```javascript
// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "module": "commonjs",
    "target": "ES2021",
    "paths": {
      "@/*": ["src/*"],
    }
  },
  "include": [
    "./**/*",
  ],
  "exclude": ["node_modules"]
}
```