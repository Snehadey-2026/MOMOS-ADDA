/*  

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: ['cuisine-portal-5.preview.emergentagent.com'],
    hmr: {
      clientPort: 443,
      protocol: 'wss',
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
});        */
/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 3000,       // start server on port 3000
    host: 'localhost',
    strictPort: false,  // ❗ allows automatic port change (prevents crash)
    open: true,        // auto-open browser
    hmr: {
      protocol: 'ws',  // ❗ use normal ws for localhost (fix WebSocket error)
      host: 'localhost',
      port: 3000
    }
  },

  build: {
    outDir: 'build',
    sourcemap: false,
  },
});*/


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 3000,
    host: true,               // IMPORTANT: allow all hosts
    strictPort: false,
    open: true,              // auto-open browser
    hmr: {
      protocol: 'ws',         // use WS for localhost
      host: 'localhost',
      port: 3000
    }
  },

  build: {
    outDir: 'build',
    sourcemap: false,
  },
})
