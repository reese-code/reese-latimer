import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@gsap/react'], // Add this line to mark @gsap/react as an external dependency
    },
  },
});