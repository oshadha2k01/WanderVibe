import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  // Ensure proper handling of Leaflet assets
  resolve: {
    alias: {
      'leaflet': 'leaflet/dist/leaflet-src.esm.js',
    }
  },
  // Optimize production build
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          leaflet: ['leaflet', 'react-leaflet'],
          ui: ['react-icons', 'react-slick', 'slick-carousel']
        }
      }
    }
  },
  base: '/WanderVibe/',
})
