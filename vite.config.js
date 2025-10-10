import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-curriculum/', // importante para GH Pages
  plugins: [react()],
})