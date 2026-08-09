import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/website/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        research: resolve(__dirname, 'research/index.html'),
        software: resolve(__dirname, 'software/index.html'),
        writing: resolve(__dirname, 'writing/index.html'),
      },
    },
  },
});
