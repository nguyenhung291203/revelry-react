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
  plugins: [
    react(), // Sử dụng plugin react-swc
    tailwindcss() // Cấu hình Tailwind CSS
  ],
  server: {
    port: 3000 // Cổng phát triển cho server
  },
  css: {
    devSourcemap: true // Đảm bảo có sourcemap khi phát triển
  },
  build: {
    sourcemap: true // Cho phép sourcemap trong build production (nếu cần)
  }
})
