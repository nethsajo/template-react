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
    port: Number(process.env.PORT),
    ...forDockerDevelopment(),
  },
  preview: {
    port: 8080,
  },
  build: {
    outDir: 'build',
    reportCompressedSize: false,
    sourcemap: false,
    rollupOptions: {
      external: ['/src/index.jsx'],
    },
  },
  define: {
    'process.env.PORT': `${process.env.PORT}`,
    'process.env.MACHINE': `"${process.env.MACHINE}"`,
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
});
