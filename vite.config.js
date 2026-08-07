import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/demesfoot/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild'
  },
  server: {
    port: 3000,
    open: true
  }
});
