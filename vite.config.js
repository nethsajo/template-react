import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import pages from 'vite-plugin-pages';
import svgr from 'vite-plugin-svgr';

config();

const forDockerDevelopment = () => {
  if (process.env.MACHINE !== 'docker') return {};
  return {
    watch: {
      usePolling: true,
    },
  };
};

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
    ...forDockerDevelopment(),
    host: true,
    port: Number(process.env.PORT),
  },
  preview: {
    port: 8080,
  },
  build: {
    outDir: 'build',
    reportCompressedSize: false,
    sourcemap: false,
  },
  define: {
    'process.env.PORT': `${process.env.PORT}`,
    'process.env.MACHINE': `"${process.env.MACHINE}"`,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
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
