import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    global: 'window', // Polyfill global to window
  },
});
