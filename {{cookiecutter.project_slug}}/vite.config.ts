{% if cookiecutter.app_type == "spa" -%}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
{% if cookiecutter.state_management == "redux-toolkit" -%}
          redux: ['@reduxjs/toolkit', 'react-redux'],
{% elif cookiecutter.state_management == "zustand" -%}
          zustand: ['zustand'],
{% endif -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
          chakra: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
{% elif cookiecutter.ui_library == "material-ui" -%}
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
{% elif cookiecutter.ui_library == "flowbite" -%}
          flowbite: ['flowbite', 'flowbite-react'],
{% endif -%}
{% if cookiecutter.use_i18n == "y" -%}
          i18n: ['react-i18next', 'i18next', 'i18next-browser-languagedetector', 'i18next-http-backend'],
{% endif -%}
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
})
{% else -%}
// This file is only used for SPA projects with Vite
// For Next.js projects, configuration is in next.config.js
{% endif -%}