import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@component': path.resolve(__dirname, 'src/components'),
      '@font': path.resolve(__dirname, 'src/assets/fonts'),
      '@image': path.resolve(__dirname, 'src/assets/images'),
      '@style': path.resolve(__dirname, 'src/assets/styles'),
      '@icon': path.resolve(__dirname, 'src/assets/icons'),
      '@view': path.resolve(__dirname, 'src/views'),
      '@store': path.resolve(__dirname, 'src/stores'),
    }
  }
})
