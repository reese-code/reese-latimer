import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'three',
        'three/examples/jsm/controls/OrbitControls',
        'three/examples/jsm/libs/tween.module',
        'three/examples/jsm/math/SimplexNoise',
        '@gsap/react'
      ],
      output: {
        globals: {
          three: 'THREE',
          '@gsap/react': 'gsap'
        }
      }
    },
  },
  optimizeDeps: {
    include: ['three']
  },
  resolve: {
    alias: {
      'three': 'three',
      'three/addons/': 'three/examples/jsm/'
    }
  }
});
