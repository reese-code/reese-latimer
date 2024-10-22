import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@gsap/react'
      ]
    }
  },
  optimizeDeps: {
    include: ['three']
  },
  resolve: {
    alias: {
      'three/addons/': 'three/examples/jsm/'
    }
  }
});
