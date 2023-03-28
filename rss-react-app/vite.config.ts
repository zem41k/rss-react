/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/main.tsx', 'src/types/*', 'src/vite-env.d.ts'],
      provider: 'istanbul',
      // enabled: true,
      reporter: ['text'],
      all: true,
    },
  },
});
