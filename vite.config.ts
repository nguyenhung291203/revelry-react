import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Alias @ trỏ tới thư mục src
    }
  },
  plugins: [tailwindcss(), react()],
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  }
})
