import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@gsap/react'], // Ensure this matches if you added it for Netlify
    },
  },
});