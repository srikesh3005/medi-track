import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/doc_page/', // Replace 'doc_page' with your actual repository name
  build: {
    outDir: 'dist',
  },
})
