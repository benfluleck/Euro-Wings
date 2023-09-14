import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'client/src/components'),
      '@utils': path.resolve(__dirname, 'client/src/utils'),
      '@fixtures': path.resolve(__dirname, 'client/src/fixtures')
    }
  }
});
