/** @type {import('tailwindcss').Config} */
export default {
  content: [
{% if cookiecutter._use_nextjs == "y" -%}
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
{% else -%}
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
{% endif -%}
{% if cookiecutter.ui_library == "flowbite" -%}
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
{% endif -%}
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    // Forms plugin for better form styling
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
    }),
    // Typography plugin for rich text content
    require('@tailwindcss/typography'),
    // Aspect ratio plugin for responsive embeds
    require('@tailwindcss/aspect-ratio'),
{% if cookiecutter.ui_library == "daisyui" -%}
    // DaisyUI plugin for component classes
    require('daisyui'),
{% endif -%}
{% if cookiecutter.ui_library == "flowbite" -%}
    // Flowbite plugin
    require('flowbite/plugin'),
{% endif -%}
  ],
{% if cookiecutter.ui_library == "daisyui" -%}
  // DaisyUI configuration
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: '',
    logs: true,
  },
{% endif -%}
  // Dark mode configuration
  darkMode: 'class', // Enable class-based dark mode
}