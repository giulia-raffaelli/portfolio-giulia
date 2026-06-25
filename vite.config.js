import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/GiuliaRaffaelli/',
  plugins: [react()],
  server: {
    port: 5000,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  }
})
