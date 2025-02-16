import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure this matches the output directory used in the Dockerfile
  },
  server: {
    host: true,  // To expose the server to the network
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL, // Replace with your backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    https: false
  },
})
