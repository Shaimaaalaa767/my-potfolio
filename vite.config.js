import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Tailwind Vite Plugin

// https://vitejs.dev/config/
export default defineConfig({

  
  plugins: [
    // 1. Add the Tailwind plugin directly to the main plugins array
    tailwindcss(), 

    // 2. Keep the React plugin here
    react({
      // 3. Keep Babel-specific plugins inside the react() configuration
      babel: {
        plugins: [
          // ONLY Babel plugins go here (plugin name strings or arrays)
          ['babel-plugin-react-compiler']
        ],
      },
    }),
  ],
})