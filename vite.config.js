import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/love_sisi/',
  plugins: [reactRefresh()],
  build: {
    outDir: 'docs',
    brotliSize: false,
  },
  server: {
    // host: `local.config.dp-admin.${ENV}.shopee.io`,
    port: 1314,
  }
})
