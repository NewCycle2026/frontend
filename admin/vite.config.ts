// admin/vite.config.ts
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
      open: true,
    },
    define: {
      __APP_ENV__: JSON.stringify(mode),
    },
    build: {
      outDir: 'dist',
    },
  }
})

/*
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: 'admin.localhost', // 👈 어드민용 호스트 분리
    port: 5173,               // 👈 어드민 포트 고정
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // ✅ NestJS 백엔드 주소
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
*/


/*
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ 이 부분 필수
    },
  },
});
*/