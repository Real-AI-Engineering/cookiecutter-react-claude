# Available Agents for React/TypeScript Projects

## vitest-runner
Specialized agent for running Vitest unit and component tests with comprehensive analysis.

**When to use:**
- Running unit tests with Vitest
- Testing React components with Testing Library
- Analyzing coverage gaps
- Debugging test failures

**Example:**
```
Task: Run all component tests and analyze coverage for the components/ directory. Focus on identifying untested user interactions and edge cases.
```

## playwright-runner
E2E testing specialist using Playwright for browser automation.

**When to use:**
- Running end-to-end tests
- Testing user journeys across pages
- Cross-browser compatibility testing
- Visual regression testing

**Example:**
```
Task: Run E2E tests for the authentication flow including login, registration, and password reset. Test on Chrome, Firefox, and Safari. Report any browser-specific issues.
```

## eslint-analyzer
Code quality expert for JavaScript/TypeScript linting and formatting.

**When to use:**
- Analyzing code quality issues
- Fixing ESLint violations
- Ensuring consistent code style
- Checking accessibility issues

**Example:**
```
Task: Analyze all TypeScript files for ESLint violations, focusing on React hooks rules, TypeScript strict violations, and accessibility issues. Auto-fix what's possible and report complex issues.
```

## component-analyzer
React component analysis specialist for architecture and performance.

**When to use:**
- Analyzing component architecture
- Finding performance bottlenecks
- Identifying prop drilling issues
- Suggesting component refactoring

**Example:**
```
Task: Analyze the UserDashboard component tree for performance issues. Look for unnecessary re-renders, missing memoization, large bundle impacts, and suggest optimizations.
```

## bundle-optimizer
Webpack/Vite bundle analysis and optimization expert.

**When to use:**
- Analyzing bundle size
- Finding code splitting opportunities
- Identifying heavy dependencies
- Optimizing build performance

**Example:**
```
Task: Analyze the production bundle, identify the top 10 largest dependencies, suggest lazy loading opportunities, and recommend code splitting strategies to reduce initial load time below 2 seconds.
```

## typescript-migrator
TypeScript migration and type safety specialist.

**When to use:**
- Migrating JavaScript to TypeScript
- Fixing type errors
- Improving type coverage
- Adding strict type checks

**Example:**
```
Task: Migrate the utils/ directory from JavaScript to TypeScript. Add proper type definitions, fix any type errors, ensure strict mode compliance, and maintain 100% type coverage.
```

## storybook-builder
Storybook documentation and component showcase specialist.

**When to use:**
- Creating Storybook stories
- Documenting component APIs
- Setting up visual testing
- Building component libraries

**Example:**
```
Task: Create comprehensive Storybook stories for the Button, Input, and Modal components. Include all variants, states, and sizes. Add controls for all props and document usage examples.
```

## accessibility-auditor
Web accessibility and WCAG compliance specialist.

**When to use:**
- Running accessibility audits
- Fixing ARIA issues
- Testing keyboard navigation
- Ensuring WCAG compliance

**Example:**
```
Task: Audit the entire application for WCAG 2.1 Level AA compliance. Test keyboard navigation, screen reader compatibility, color contrast, and focus management. Provide fixes for all issues.
```

## api-mocker
API mocking and testing specialist using MSW (Mock Service Worker).

**When to use:**
- Setting up API mocks
- Testing without backend
- Simulating error states
- Creating test fixtures

**Example:**
```
Task: Create MSW handlers for all /api/users endpoints. Include success responses, error states, loading delays, and edge cases. Set up both browser and Node.js environments.
```

## performance-profiler
React performance profiling and optimization specialist.

**When to use:**
- Profiling React components
- Finding performance bottlenecks
- Optimizing render cycles
- Improving Core Web Vitals

**Example:**
```
Task: Profile the ProductList component with 1000+ items. Identify performance bottlenecks, implement virtualization, optimize re-renders, and achieve 60fps scrolling performance.
```

## state-debugger
State management debugging specialist for Redux, Zustand, Context API.

**When to use:**
- Debugging state issues
- Tracing state updates
- Finding state mutations
- Optimizing state structure

**Example:**
```
Task: Debug the shopping cart state management. Trace all state updates, identify unnecessary re-renders, find potential race conditions, and optimize the state structure for performance.
```

## css-auditor
CSS and styling optimization specialist.

**When to use:**
- Auditing CSS usage
- Finding unused styles
- Optimizing CSS performance
- Migrating to CSS-in-JS

**Example:**
```
Task: Audit all CSS files for unused selectors, duplicate rules, and performance issues. Migrate to CSS Modules or styled-components where appropriate. Reduce CSS bundle by 50%.
```

## i18n-translator
Internationalization and localization specialist.

**When to use:**
- Setting up i18n
- Extracting translation keys
- Managing translations
- Testing locale changes

**Example:**
```
Task: Set up i18n for English, Spanish, and French. Extract all hardcoded strings, create translation files, implement locale switching, and test RTL support for Arabic.
```

## docker-builder
Docker containerization specialist for React applications.

**When to use:**
- Creating Docker images
- Optimizing container size
- Setting up multi-stage builds
- Configuring production deployments

**Example:**
```
Task: Create a multi-stage Docker build for the React app. Optimize for size (under 50MB), implement caching strategies, set up health checks, and configure for Kubernetes deployment.
```

## react-upgrader
React version migration and modernization specialist.

**When to use:**
- Upgrading React versions
- Migrating to React 18+ features
- Converting class components to hooks
- Implementing Suspense and Concurrent features

**Example:**
```
Task: Upgrade the application from React 17 to React 18. Convert all class components to functional components with hooks. Implement Suspense for data fetching and optimize with concurrent features.
```