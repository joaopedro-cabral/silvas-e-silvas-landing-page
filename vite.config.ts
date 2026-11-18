import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import type { ViteDevServer, PreviewServer } from 'vite';
import react from '@vitejs/plugin-react';

// Serve the page's own HTML when opening its extensionless URL locally.
const serveElectricalPage = (server: ViteDevServer | PreviewServer) => {
  server.middlewares.use((req, _res, next) => {
    if (req.url && /^\/produtos-eletricos(?:\?|$)/.test(req.url)) {
      req.url = req.url.replace('/produtos-eletricos', '/produtos-eletricos/');
    }
    next();
  });
};

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), {
        name: 'electrical-page-directory',
        configureServer: serveElectricalPage,
        configurePreviewServer: serveElectricalPage,
      }],
      build: {
        rollupOptions: {
          input: {
            home: path.resolve(__dirname, 'index.html'),
            electrical: path.resolve(__dirname, 'produtos-eletricos/index.html'),
          },
        },
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
