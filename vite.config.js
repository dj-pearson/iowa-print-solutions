import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react({
    jsxRuntime: 'automatic',
    jsxImportSource: 'react'
  })],
  base: '/', // Keep absolute paths for React Router
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true, // Enable sourcemaps for debugging
    minify: 'terser', // Switch to terser for cache-busting
    rollupOptions: {
      output: {
        // Force new asset names with timestamp
        entryFileNames: 'assets/app-[hash]-' + Date.now() + '.js',
        chunkFileNames: 'assets/chunk-[hash]-' + Date.now() + '.js',
        assetFileNames: 'assets/[name]-[hash]-' + Date.now() + '.[ext]'
      }
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode || 'production'),
    global: 'globalThis'
  },
  server: {
    port: 5173,
    open: false
  },
  preview: {
    port: 4173,
    open: false
  }
}))
