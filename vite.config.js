import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
    },
  },
  plugins: [
    tailwindcss()
  ]
})

