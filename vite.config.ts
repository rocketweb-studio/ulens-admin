import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['admin.ulens.org', '.ulens.org']
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
