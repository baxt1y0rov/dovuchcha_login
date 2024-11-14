import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // If you want to externalize @mui/system, uncomment the line below
      // external: ['@mui/system'],
    },
  },
});