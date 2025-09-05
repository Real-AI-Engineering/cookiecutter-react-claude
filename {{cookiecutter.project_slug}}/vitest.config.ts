/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    css: false,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '*.config.*',
        'src/main.tsx',
        'src/vite-env.d.ts',
        {% if cookiecutter._use_nextjs == "y" -%}
        'pages/',
        '.next/',
        {% endif -%}
      ],
      threshold: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
  },
  resolve: {
    alias: {
      {% if cookiecutter.ui_library == "shadcn-ui" -%}
      '@': path.resolve(__dirname, 'src'),
      {% endif -%}
      '~': path.resolve(__dirname, 'src'),
    },
  },
})