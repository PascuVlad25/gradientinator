import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: [
      {
        find: '@state',
        replacement: path.resolve(__dirname, './src/state')
      },      
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils')
      },
      {
        find: '@models',
        replacement: path.resolve(__dirname, './src/models')
      },
      {
        find: '@enums',
        replacement: path.resolve(__dirname, './src/enums')
      },
    ]
  }
});
