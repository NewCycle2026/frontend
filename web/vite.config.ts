// web service
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'; // ✅ 추가
import react from '@vitejs/plugin-react';
import type { Plugin as EsbuildPlugin } from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

// ✅ __dirname 직접 선언 (ESM 대응)
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
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis', // ✅ 핵심 설정
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            //global: true,
            buffer: true,
          }) as unknown as EsbuildPlugin,
        ],
      },
    },
  }
})




/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          global: true,
        }),
      ],
    },
  },
});
*/