import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/mio-portfolio/'
=======
  base: '/mio-portfolio_2/'
>>>>>>> d4e30d9f091eced0d4b8c1add59d8a96908c1252
})
