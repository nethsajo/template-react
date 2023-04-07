import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import pages from 'vite-plugin-pages';
import svgr from 'vite-plugin-svgr';

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages(),
    jsconfigPaths(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  base: '/',
  server: {
    port: Number(process.env.PORT),
  },
  preview: {
    port: 8080,
  },
  define: {
    'process.env.PORT': `${process.env.PORT}`,
    'process.env.TEMPLATE': `"${process.env.TEMPLATE}"`,
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@Assets', replacement: '/src/assets' },
      { find: '@Modules', replacement: '/src/modules' },
      { find: '@Pages', replacement: '/src/pages' },
      { find: '@Shared', replacement: '/src/shared' },
    ],
  },
});
