# CLAUDE.md - {{cookiecutter.project_name}}

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Core Development Principles

IMPORTANT: Follow these principles for ALL code generation:

### Simplicity First
- ALWAYS prefer simple, readable solutions over complex ones
- Use existing patterns in the codebase - don't reinvent wheels
- Avoid over-engineering: if it works in 10 lines, don't write 100
- Every abstraction must justify its existence
- Prefer composition over inheritance
- Write code for humans first, computers second

### Code Quality Standards
- Maximum function length: 20 lines (exceptions require justification)
- Single responsibility principle: one function = one task
- Use descriptive variable names, no single letters except loop counters
- Add comments only for "why", not "what" - code should be self-documenting
- Component coverage minimum: 80% for critical paths

### Decision Making
When solving problems:
1. First, check if there's an existing solution in the codebase
2. Consider the simplest approach that could work
3. Only add complexity when the simple solution fails
4. Document trade-offs in comments

### Common Anti-Patterns to Avoid
- Creating unnecessary abstractions "for future flexibility"
- Complex component logic that's harder to understand than the functionality
- Reimplementing existing React patterns or library functionality
- Premature optimization without profiling
- Deep component nesting (max 3-4 levels when possible)

Remember: The best code is code that doesn't need to be written.

## Project Structure

```
{{cookiecutter.project_slug}}/
{% if cookiecutter._use_nextjs == "y" -%}
├── pages/                                  # Next.js pages (file-based routing)
│   ├── _app.tsx                           # App wrapper component
│   ├── _document.tsx                      # Custom document
│   ├── index.tsx                          # Home page
│   └── about.tsx                          # About page
├── components/                             # Reusable UI components
├── lib/                                   # Utility libraries and configurations
├── public/                                # Static assets
{% if cookiecutter.use_i18n == "y" -%}
│   └── locales/                          # Translation files
│       ├── en/
│       └── ru/
{% endif -%}
├── next.config.js                         # Next.js configuration
{% else -%}
├── src/
│   ├── components/                        # Reusable UI components
│   ├── pages/                             # Application pages/screens
│   ├── hooks/                             # Custom React hooks
{% if cookiecutter.state_management != "none" -%}
│   ├── stores/                            # State management
{% if cookiecutter.state_management == "redux-toolkit" -%}
│   │   ├── store.ts                       # Redux store configuration
│   │   └── slices/                        # Redux Toolkit slices
{% else -%}
│   │   └── useStore.ts                    # Zustand store
{% endif -%}
{% endif -%}
│   ├── types/                             # TypeScript type definitions
│   ├── App.tsx                            # Root application component
│   ├── main.tsx                           # Vite entry point
│   └── index.css                          # Global styles and Tailwind imports
├── public/                                # Static assets
{% if cookiecutter.use_i18n == "y" -%}
│   └── locales/                          # Translation files
│       ├── en/
│       └── ru/
{% endif -%}
├── vite.config.ts                         # Vite configuration
{% endif -%}
├── tests/
│   ├── unit/                              # Unit tests (Vitest)
│   └── e2e/                               # End-to-end tests (Playwright)
{% if cookiecutter.use_github_actions == "y" -%}
├── .github/workflows/                     # CI/CD workflows
{% endif -%}
{% if cookiecutter.use_docker == "y" -%}
├── docker/                                # Docker configuration
│   ├── Dockerfile                         # Production image
│   ├── Dockerfile.dev                     # Development image
│   └── docker-compose.yml                 # Local development setup
{% endif -%}
├── package.json                           # Dependencies and scripts
├── tsconfig.json                          # TypeScript configuration
├── tailwind.config.js                     # Tailwind CSS configuration
├── .eslintrc.js                           # ESLint configuration
├── .prettierrc                            # Prettier configuration
├── README.md                              # Project documentation
└── CLAUDE.md                              # This file
```

## Common Commands

### Development Setup
```bash
# Clone and setup development environment
git clone https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}.git
cd {{cookiecutter.project_slug}}
npm install
```

### Development Server
```bash
{% if cookiecutter._use_nextjs == "y" -%}
# Start Next.js development server with hot reload
npm run dev
# Server runs on http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
{% else -%}
# Start Vite development server with hot reload
npm run dev
# Server runs on http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
{% endif -%}
```

### Testing
```bash
# Run unit tests with Vitest
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run E2E tests with Playwright
npm run test:e2e

# Run E2E tests in headed mode
npm run test:e2e:headed
```

### Code Quality
```bash
# Lint code with ESLint
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check

# Type checking with TypeScript
npm run type-check

# Run all quality checks
npm run quality
```

{% if cookiecutter.use_docker == "y" -%}
### Docker Development
```bash
# Start development environment
docker-compose up

# Build production image
docker build -f docker/Dockerfile -t {{cookiecutter.project_slug}}:latest .

# Run production container
docker run -p 3000:3000 {{cookiecutter.project_slug}}:latest
```

{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
### Redux DevTools
When running in development, use Redux DevTools browser extension to:
- Inspect state changes
- Time-travel debugging
- Track action history
- Monitor performance

{% endif -%}
## Architecture Overview

### Component Architecture
- **Functional Components**: All components are functional with hooks
- **Component Composition**: Prefer composition over prop drilling
- **Custom Hooks**: Extract reusable logic into custom hooks
- **Type Safety**: Full TypeScript coverage for props and state

### Styling Architecture
- **Tailwind CSS**: Utility-first CSS framework
{% if cookiecutter.ui_library != "none" -%}
- **UI Library**: {{cookiecutter.ui_library}} for component primitives
{% endif -%}
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Design System**: Consistent spacing, colors, and typography

### State Management
{% if cookiecutter.state_management == "redux-toolkit" -%}
- **Redux Toolkit**: Predictable state management with slices
- **RTK Query**: Data fetching and caching (when needed)
- **TypeScript Integration**: Typed state, actions, and selectors
{% elif cookiecutter.state_management == "zustand" -%}
- **Zustand**: Lightweight state management
- **TypeScript Integration**: Fully typed stores and selectors
- **Persistence**: Local storage integration when needed
{% else -%}
- **React State**: useState, useReducer, and Context API
- **Local State**: Component-level state management
- **Prop Drilling**: Minimal, using context for deeply nested state
{% endif -%}

{% if cookiecutter.use_i18n == "y" -%}
### Internationalization
- **react-i18next**: Translation management
- **Namespace Organization**: Separate translation files by feature
- **Interpolation**: Dynamic content translation
- **Language Detection**: Browser-based language detection

{% endif -%}
### Testing Strategy
- **Unit Tests**: Component testing with React Testing Library
- **E2E Tests**: User journey testing with Playwright
- **Testing Philosophy**: Test behavior, not implementation details
- **Mock Strategy**: Minimal mocking, prefer integration tests

### Key Dependencies
{% if cookiecutter._use_nextjs == "y" -%}
- **Next.js**: Full-stack React framework with SSR/SSG
{% else -%}
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing for SPA
{% endif -%}
- **React 18+**: Latest React with concurrent features
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first styling
{% if cookiecutter.ui_library == "shadcn-ui" -%}
- **shadcn/ui**: Copy-paste component system with Radix UI primitives
{% elif cookiecutter.ui_library == "chakra-ui" -%}
- **Chakra UI**: Modular and accessible component library
{% elif cookiecutter.ui_library == "material-ui" -%}
- **Material UI**: Google Material Design components
{% elif cookiecutter.ui_library == "daisyui" -%}
- **DaisyUI**: Tailwind CSS component library
{% elif cookiecutter.ui_library == "flowbite" -%}
- **Flowbite**: Component library built on Tailwind CSS
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
- **Redux Toolkit**: Modern Redux with less boilerplate
{% elif cookiecutter.state_management == "zustand" -%}
- **Zustand**: Simple and scalable state management
{% endif -%}
{% if cookiecutter.use_i18n == "y" -%}
- **react-i18next**: Internationalization framework
{% endif -%}
- **Vitest**: Unit testing framework
- **Playwright**: End-to-end testing framework

## Development Patterns

### Component Organization
```tsx
// Component structure example
import React from 'react';
{% if cookiecutter.ui_library == "chakra-ui" -%}
import { Box, Button, Text } from '@chakra-ui/react';
{% elif cookiecutter.ui_library == "material-ui" -%}
import { Box, Button, Typography } from '@mui/material';
{% endif -%}

interface ExampleComponentProps {
  title: string;
  onAction: () => void;
  variant?: 'primary' | 'secondary';
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  onAction,
  variant = 'primary'
}) => {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <button
        onClick={onAction}
        className={`px-4 py-2 rounded ${
          variant === 'primary' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        Action
      </button>
    </div>
  );
};
```

### Custom Hooks Pattern
```tsx
// Custom hook example
import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
};
```

{% if cookiecutter.state_management == "redux-toolkit" -%}
### Redux Slice Pattern
```tsx
// Redux Toolkit slice example
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

{% elif cookiecutter.state_management == "zustand" -%}
### Zustand Store Pattern
```tsx
// Zustand store example
import { create } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

{% endif -%}
### Error Handling
- Use Error Boundaries for component-level error catching
- Implement proper loading and error states in components
- Use TypeScript for compile-time error prevention
- Log errors appropriately in development vs production

### Performance Optimization
- Use React.memo for expensive component re-renders
- Implement proper key props in lists
- Lazy load routes and heavy components
- Optimize images and assets
- Monitor bundle size and code splitting

## Key Configuration Files

- **package.json**: Dependencies, scripts, and project metadata
- **tsconfig.json**: TypeScript compiler configuration
- **tailwind.config.js**: Tailwind CSS customization
- **.eslintrc.js**: Code linting rules and plugins
- **.prettierrc**: Code formatting configuration
{% if cookiecutter._use_nextjs == "y" -%}
- **next.config.js**: Next.js framework configuration
{% else -%}
- **vite.config.ts**: Vite build tool configuration
{% endif -%}
- **playwright.config.ts**: E2E testing configuration
- **vitest.config.ts**: Unit testing configuration

## Security Best Practices

- Never commit API keys or sensitive data to the repository
- Validate and sanitize all user inputs
- Use environment variables for configuration
- Keep dependencies up to date with security patches
- Implement proper CORS configuration
{% if cookiecutter._use_nextjs == "y" -%}
- Use Next.js built-in security headers
{% endif -%}
- Follow OWASP guidelines for web application security

## Deployment Considerations

{% if cookiecutter._use_nextjs == "y" -%}
- **Vercel**: Optimal deployment platform for Next.js
- **Docker**: Containerized deployment with multi-stage builds
- **Environment Variables**: Use .env.local for development, production vars in deployment platform
- **Static Export**: Use `next export` for static hosting when SSR not needed
{% else -%}
- **Netlify/Vercel**: Static hosting platforms for SPA deployment
- **Docker**: Containerized deployment with nginx serving static files
- **Environment Variables**: Use .env files for development, build-time injection for production
- **CDN**: Leverage CDN for static asset delivery
{% endif -%}
- **CI/CD**: Automated testing and deployment via GitHub Actions
- **Performance**: Monitor Core Web Vitals and optimize accordingly