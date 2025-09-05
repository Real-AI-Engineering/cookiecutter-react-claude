{% if cookiecutter.app_type == "ssr" -%}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Experimental features
  experimental: {
    // Enable App Router (Next.js 13+)
    appDir: false, // Set to true to use app directory
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Image optimization
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },

  // Redirects
  async redirects() {
    return [
      // Add redirects here
    ]
  },

  // Rewrites
  async rewrites() {
    return [
      // Add rewrites here
    ]
  },

  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Custom webpack configuration
    return config
  },

{% if cookiecutter.use_i18n == "y" -%}
  // Internationalization
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: true,
  },

{% endif -%}
  // Output configuration
  output: 'standalone', // For Docker deployments
  
  // Bundle analyzer (run with ANALYZE=true npm run build)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer')({
          enabled: true,
        }))()
      )
      return config
    },
  }),

  // Compiler options
  compiler: {
    // Remove console.* in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Remove React properties
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Power-ups for better performance
  poweredByHeader: false,
  generateEtags: false,
  compress: true,

  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
{% else -%}
// This file is only used for SSR projects with Next.js
// For SPA projects, configuration is in vite.config.ts
module.exports = {}
{% endif -%}