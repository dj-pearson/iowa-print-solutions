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
    sourcemap: mode === 'development', // Only enable sourcemaps in development
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
    rollupOptions: {
      output: {
        // Code splitting configuration for better caching
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', 'lucide-react'],
          'vendor-seo': ['react-helmet'],
        },
        // Asset naming with cache busting
        entryFileNames: 'assets/app-[hash].js',
        chunkFileNames: (chunkInfo) => {
          // Keep vendor chunks with stable names for caching
          if (chunkInfo.name.startsWith('vendor-')) {
            return `assets/${chunkInfo.name}-[hash].js`
          }
          return 'assets/chunk-[hash].js'
        },
        assetFileNames: (assetInfo) => {
          // Group assets by type
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'assets/styles/[name]-[hash][extname]'
          }
          if (/\.(woff2?|ttf|eot|otf)$/.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
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
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
}))
