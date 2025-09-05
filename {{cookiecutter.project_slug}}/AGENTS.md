# AGENTS.md - {{cookiecutter.project_name}}

Development workflow guidelines and best practices for AI agents and developers working on this React project.

## Project Structure & Module Organization

```
{{cookiecutter.project_slug}}/
{% if cookiecutter._use_nextjs == "y" -%}
├── pages/                                  # Next.js pages (file-based routing)
│   ├── _app.tsx                           # Global app wrapper with providers
│   ├── _document.tsx                      # Custom HTML document
│   ├── index.tsx                          # Home page component
│   ├── about.tsx                          # About page component
│   └── api/                               # API routes (optional)
├── components/                             # Reusable UI components
│   ├── ui/                                # Base UI components (buttons, inputs)
│   ├── layout/                            # Layout components (header, footer)
│   └── features/                          # Feature-specific components
├── lib/                                   # Utility libraries and configurations
│   ├── utils.ts                           # Common utility functions
{% if cookiecutter.state_management == "redux-toolkit" -%}
│   └── store/                             # Redux store configuration
│       ├── index.ts                       # Store setup
│       └── slices/                        # Feature slices
{% elif cookiecutter.state_management == "zustand" -%}
│   └── stores/                            # Zustand stores
│       └── useStore.ts                    # Main store
{% endif -%}
├── hooks/                                 # Custom React hooks
├── types/                                 # TypeScript type definitions
├── styles/                                # Global styles and Tailwind
│   └── globals.css                        # Global CSS and Tailwind imports
├── public/                                # Static assets
{% if cookiecutter.use_i18n == "y" -%}
│   └── locales/                          # Translation files
│       ├── en/                           # English translations
│       │   └── common.json
│       └── ru/                           # Russian translations
│           └── common.json
{% endif -%}
├── next.config.js                         # Next.js configuration
{% else -%}
├── src/                                   # Source code directory
│   ├── components/                        # Reusable UI components
│   │   ├── ui/                           # Base UI components
│   │   ├── layout/                       # Layout components
│   │   └── features/                     # Feature-specific components
│   ├── pages/                            # Application pages/screens
│   │   ├── Home.tsx                      # Home page component
│   │   └── About.tsx                     # About page component
│   ├── hooks/                            # Custom React hooks
│   │   └── useExample.ts                 # Example custom hook
{% if cookiecutter.state_management == "redux-toolkit" -%}
│   ├── store/                            # Redux store configuration
│   │   ├── index.ts                      # Store setup
│   │   └── slices/                       # Feature slices
│   │       └── counterSlice.ts           # Example slice
{% elif cookiecutter.state_management == "zustand" -%}
│   ├── stores/                           # Zustand stores
│   │   └── useStore.ts                   # Main store
{% endif -%}
│   ├── types/                            # TypeScript type definitions
│   │   └── index.ts                      # Global type definitions
│   ├── utils/                            # Utility functions
│   │   └── cn.ts                         # Class name utility
│   ├── App.tsx                           # Root application component
│   ├── main.tsx                          # Vite entry point
│   └── index.css                         # Global styles and Tailwind imports
├── public/                               # Static assets
{% if cookiecutter.use_i18n == "y" -%}
│   └── locales/                         # Translation files
│       ├── en/                          # English translations
│       │   └── common.json
│       └── ru/                          # Russian translations
│           └── common.json
{% endif -%}
├── vite.config.ts                        # Vite configuration
{% endif -%}
├── tests/                                # Test directory
│   ├── unit/                             # Unit tests (Vitest)
│   │   ├── components/                   # Component tests
│   │   └── hooks/                        # Hook tests
│   ├── e2e/                              # End-to-end tests (Playwright)
│   │   └── home.spec.ts                  # Example E2E test
│   └── setup.ts                          # Test setup configuration
{% if cookiecutter.use_github_actions == "y" -%}
├── .github/                              # GitHub-specific configurations
│   ├── workflows/                        # CI/CD workflows
│   │   └── ci.yml                        # Main CI pipeline
│   └── ISSUE_TEMPLATE/                   # Issue templates
├── .gitignore                            # Git ignore rules
{% endif -%}
{% if cookiecutter.use_docker == "y" -%}
├── docker/                               # Docker configurations
│   ├── Dockerfile                        # Production image
│   ├── Dockerfile.dev                    # Development image
│   └── docker-compose.yml                # Local development setup
├── .dockerignore                         # Docker ignore rules
{% endif -%}
├── package.json                          # Dependencies, scripts, and metadata
├── tsconfig.json                         # TypeScript configuration
├── tailwind.config.js                    # Tailwind CSS configuration
├── postcss.config.js                     # PostCSS configuration
├── .eslintrc.js                          # ESLint configuration
├── .prettierrc                           # Prettier configuration
├── .editorconfig                         # Editor configuration
├── vitest.config.ts                      # Vitest configuration
├── playwright.config.ts                  # Playwright configuration
├── README.md                             # Project overview and quick start
├── CHANGELOG.md                          # Version history and changes
├── CLAUDE.md                             # Claude Code instructions
└── AGENTS.md                             # This file
```

## Build, Test, and Development Commands

### Environment Setup
```bash
# Clone the repository
git clone https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}.git
cd {{cookiecutter.project_slug}}

# Install dependencies
npm install

# Install specific Node.js version (if using nvm)
nvm install {{cookiecutter.node_version}}
nvm use {{cookiecutter.node_version}}
```

### Development Commands
```bash
{% if cookiecutter._use_nextjs == "y" -%}
# Start Next.js development server
npm run dev
# Runs on http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Export static site (if configured)
npm run export
{% else -%}
# Start Vite development server
npm run dev
# Runs on http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
# Runs on http://localhost:4173
{% endif -%}

# Type checking
npm run type-check

# Type checking in watch mode
npm run type-check:watch
```

### Code Quality and Formatting
```bash
# Lint code with ESLint
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check if code is properly formatted
npm run format:check

# Run all quality checks
npm run quality
```

### Testing Commands
```bash
# Run unit tests with Vitest
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with UI interface
npm run test:ui

# Run E2E tests with Playwright
npm run test:e2e

# Run E2E tests in headed mode (visible browser)
npm run test:e2e:headed

# Run E2E tests in debug mode
npm run test:e2e:debug

# Generate Playwright test report
npm run test:e2e:report
```

{% if cookiecutter.use_docker == "y" -%}
### Docker Commands
```bash
# Development with Docker Compose
docker-compose up

# Build and run development container
docker-compose up --build

# Run specific service
docker-compose up web

# Build production Docker image
docker build -f docker/Dockerfile -t {{cookiecutter.project_slug}}:latest .

# Run production container
docker run -p 3000:3000 {{cookiecutter.project_slug}}:latest

# Clean up containers and volumes
docker-compose down -v
```

{% endif -%}
## Coding Style & Naming Conventions

### React & TypeScript Guidelines
- **Components**: Use PascalCase for component names (`MyComponent`)
- **Files**: Use PascalCase for component files (`MyComponent.tsx`)
- **Hooks**: Prefix custom hooks with `use` (`useCustomHook`)
- **Constants**: Use UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Functions**: Use camelCase (`handleButtonClick`)
- **Interfaces**: Prefix with `I` or suffix with `Props` (`IUser` or `ButtonProps`)

### Component Structure
```tsx
// Component file structure template
import React from 'react';
{% if cookiecutter.ui_library != "none" -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
import { Box, Button } from '@chakra-ui/react';
{% elif cookiecutter.ui_library == "material-ui" -%}
import { Box, Button } from '@mui/material';
{% endif -%}
{% endif -%}
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from 'react-i18next';
{% endif -%}

// Type definitions
interface ExampleComponentProps {
  title: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

// Component implementation
export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation();
{% endif -%}

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div className={`component-wrapper ${variant}`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`btn btn-${variant}`}
        aria-label={title}
      >
{% if cookiecutter.use_i18n == "y" -%}
        {t('common.clickMe')}
{% else -%}
        Click Me
{% endif -%}
      </button>
    </div>
  );
};

// Default export
export default ExampleComponent;
```

### Styling Guidelines
- **Tailwind First**: Use Tailwind utility classes as the primary styling method
- **Component Classes**: Create component-specific classes when needed
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Mode**: Consider dark mode compatibility when applicable
{% if cookiecutter.ui_library != "none" -%}
- **UI Library Integration**: Leverage {{cookiecutter.ui_library}} components and theming
{% endif -%}

## Testing Guidelines

### Testing Framework and Structure
- **Unit Tests**: Vitest with React Testing Library
- **E2E Tests**: Playwright for comprehensive user journey testing
- **Coverage Target**: Minimum 80% coverage for critical components
- **Test Organization**: Separate unit and E2E tests with clear naming

### Unit Testing Best Practices
```tsx
// Component test example
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ExampleComponent } from './ExampleComponent';

describe('ExampleComponent', () => {
  const defaultProps = {
    title: 'Test Title',
    onClick: vi.fn(),
  };

  it('should render with correct title', () => {
    render(<ExampleComponent {...defaultProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    render(<ExampleComponent {...defaultProps} />);
    fireEvent.click(screen.getByRole('button'));
    expect(defaultProps.onClick).toHaveBeenCalledOnce();
  });

  it('should not call onClick when disabled', () => {
    const onClick = vi.fn();
    render(<ExampleComponent {...defaultProps} onClick={onClick} disabled />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
```

### E2E Testing Best Practices
```typescript
// E2E test example
import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should navigate to about page', async ({ page }) => {
    await page.goto('/');
    
    // Check home page loaded
    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
    
    // Navigate to about page
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    
    // Check about page content
    await expect(page.getByText('About Us')).toBeVisible();
  });

  test('should increment counter', async ({ page }) => {
    await page.goto('/');
    
    const counter = page.getByTestId('counter-value');
    const incrementBtn = page.getByRole('button', { name: 'Increment' });
    
    // Check initial value
    await expect(counter).toHaveText('0');
    
    // Click increment
    await incrementBtn.click();
    await expect(counter).toHaveText('1');
  });
});
```

### Testing Checklist
- [ ] All components have corresponding unit tests
- [ ] Critical user journeys covered by E2E tests
- [ ] Accessibility testing included (screen reader compatibility)
- [ ] Loading and error states tested
- [ ] Form validation and submission tested
- [ ] Responsive design tested across breakpoints
- [ ] Cross-browser compatibility verified

## State Management Patterns

{% if cookiecutter.state_management == "redux-toolkit" -%}
### Redux Toolkit Patterns
```tsx
// Slice example
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addUser, removeUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
```

### Using Redux in Components
```tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addUser, removeUser } from '../store/slices/userSlice';

export const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.user);

  const handleAddUser = (user: User) => {
    dispatch(addUser(user));
  };

  // Component implementation...
};
```

{% elif cookiecutter.state_management == "zustand" -%}
### Zustand Store Patterns
```tsx
// Store definition
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserStore {
  users: User[];
  loading: boolean;
  error: string | null;
  addUser: (user: User) => void;
  removeUser: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserStore>()(
  devtools(
    (set, get) => ({
      users: [],
      loading: false,
      error: null,
      
      addUser: (user) =>
        set((state) => ({ users: [...state.users, user] }), false, 'addUser'),
      
      removeUser: (id) =>
        set((state) => ({ 
          users: state.users.filter((user) => user.id !== id) 
        }), false, 'removeUser'),
      
      setLoading: (loading) => set({ loading }, false, 'setLoading'),
      
      setError: (error) => set({ error }, false, 'setError'),
      
      fetchUsers: async () => {
        const { setLoading, setError } = get();
        setLoading(true);
        try {
          // API call logic
          const users = await fetchUsersFromAPI();
          set({ users }, false, 'fetchUsers');
        } catch (error) {
          setError(error instanceof Error ? error.message : 'Unknown error');
        } finally {
          setLoading(false);
        }
      },
    }),
    { name: 'user-store' }
  )
);
```

### Using Zustand in Components
```tsx
import { useUserStore } from '../stores/useUserStore';

export const UserList: React.FC = () => {
  const { users, loading, error, addUser, removeUser, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Component implementation...
};
```

{% else -%}
### React State Management Patterns
```tsx
// Context-based state management
import React, { createContext, useContext, useReducer } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  users: User[];
  loading: boolean;
  error: string | null;
}

type AppAction = 
  | { type: 'ADD_USER'; payload: User }
  | { type: 'REMOVE_USER'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'REMOVE_USER':
      return { ...state, users: state.users.filter(u => u.id !== action.payload) };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    users: [],
    loading: false,
    error: null,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
```
{% endif -%}

## Commit & Pull Request Guidelines

### Commit Message Format
Follow Conventional Commits specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Commit Types:**
- `feat`: New feature for the user
- `fix`: Bug fix for the user
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc. (no code change)
- `refactor`: Code refactoring (no functional changes)
- `test`: Adding missing tests or correcting existing tests
- `chore`: Build process or auxiliary tool changes
- `perf`: Performance improvements
- `ci`: Changes to CI configuration files and scripts

**Examples:**
```
feat(auth): add user authentication with JWT tokens

fix(button): resolve click handler not firing on disabled state

docs(readme): update installation instructions for Node 18+

test(utils): add comprehensive tests for string manipulation functions

style(components): format code with prettier and fix eslint warnings
```

### Pull Request Checklist
Before submitting a pull request, ensure:

- [ ] **Code Quality**: All ESLint and TypeScript checks pass
- [ ] **Tests**: All existing tests pass and new tests cover changes
- [ ] **Coverage**: Maintain or improve test coverage percentage
- [ ] **Performance**: No significant performance regressions
- [ ] **Accessibility**: Components follow a11y best practices
- [ ] **Responsive**: Works correctly across different screen sizes
- [ ] **Documentation**: Update README or component docs if needed
- [ ] **Type Safety**: No TypeScript errors or warnings
- [ ] **Security**: No security vulnerabilities introduced

### PR Description Template
```markdown
## Summary
Brief description of changes and motivation.

## Type of Change
- [ ] 🆕 New feature
- [ ] 🐛 Bug fix
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI improvement
- [ ] ⚡ Performance improvement
- [ ] ♻️ Code refactor
- [ ] 🧪 Test addition/update

## Changes Made
- Bullet point list of specific changes
- Include any breaking changes
- Note any new dependencies added

## Testing
- [ ] Unit tests added/updated
- [ ] E2E tests added/updated
- [ ] Manual testing performed
- [ ] Tested on mobile devices
- [ ] Tested with screen reader

## Screenshots (if applicable)
<!-- Add before/after screenshots for UI changes -->

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] No console errors or warnings
- [ ] Responsive design verified
- [ ] Cross-browser compatibility checked
```

## Performance & Optimization Guidelines

### React Performance
- Use `React.memo()` for components that receive the same props frequently
- Implement `useMemo()` and `useCallback()` for expensive calculations
- Use `React.lazy()` and `Suspense` for code splitting
- Optimize re-renders by keeping state as local as possible
- Use proper key props in lists to help React's diffing algorithm

### Bundle Optimization
{% if cookiecutter._use_nextjs == "y" -%}
- Leverage Next.js automatic code splitting
- Use dynamic imports for large libraries
- Optimize images with Next.js Image component
- Enable compression and proper caching headers
{% else -%}
- Use Vite's built-in code splitting and tree shaking
- Implement route-based code splitting with React Router
- Optimize asset loading and caching strategies
- Monitor bundle size with build tools
{% endif -%}

### Web Performance
- Follow Core Web Vitals guidelines
- Implement proper loading states and skeleton screens
- Use intersection observer for lazy loading
- Minimize layout shifts with proper CSS
- Optimize font loading strategies

{% if cookiecutter.use_i18n == "y" -%}
## Internationalization Guidelines

### Translation Management
- Keep translations in JSON files under `public/locales/`
- Use namespace organization (`common.json`, `auth.json`, etc.)
- Implement interpolation for dynamic content
- Support pluralization rules for different languages

### Implementation Patterns
```tsx
// Using translations in components
import { useTranslation } from 'react-i18next';

export const WelcomeMessage: React.FC<{ name: string }> = ({ name }) => {
  const { t } = useTranslation('common');
  
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.message', { name })}</p>
    </div>
  );
};

// Translation files structure
// public/locales/en/common.json
{
  "welcome": {
    "title": "Welcome to our app",
    "message": "Hello, {{"{{name}}"}}! Welcome to our platform."
  }
}

// public/locales/ru/common.json
{
  "welcome": {
    "title": "Добро пожаловать в наше приложение",
    "message": "Привет, {{"{{name}}"}}! Добро пожаловать на нашу платформу."
  }
}
```

{% endif -%}
## Security & Configuration Guidelines

### Security Best Practices
- **Environment Variables**: Store sensitive data in environment variables
- **Input Validation**: Validate and sanitize all user inputs
- **XSS Prevention**: Use proper escaping and sanitization
- **HTTPS**: Always use HTTPS in production
- **Dependencies**: Keep dependencies updated and scan for vulnerabilities
- **CSP**: Implement Content Security Policy headers
{% if cookiecutter._use_nextjs == "y" -%}
- **Next.js Security**: Leverage built-in security headers and features
{% endif -%}

### Environment Configuration
```bash
# Development environment variables (.env.local)
{% if cookiecutter._use_nextjs == "y" -%}
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_ENV=development
DATABASE_URL=postgresql://localhost/myapp_dev
JWT_SECRET=your-secret-key-here
{% else -%}
VITE_API_URL=http://localhost:3001
VITE_APP_ENV=development
VITE_PUBLIC_KEY=your-public-key-here
{% endif -%}
```

### Dependency Management
```bash
# Check for security vulnerabilities
npm audit

# Fix automatically fixable vulnerabilities
npm audit fix

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

## Continuous Integration & Deployment

{% if cookiecutter.use_github_actions == "y" -%}
### GitHub Actions Workflows
- **CI Pipeline** (`.github/workflows/ci.yml`):
  - Runs on every push and pull request
  - Tests across multiple Node.js versions
  - Runs linting, type checking, and security scans
  - Generates and uploads test coverage reports
  - Runs E2E tests in headless mode

### Branch Protection Rules
Configure branch protection for `main`:
- Require pull request reviews
- Require status checks to pass
- Require branches to be up to date
- Dismiss stale reviews when new commits are pushed
- Restrict pushes to administrators only

{% endif -%}
### Release Process
1. Update version in `package.json`
2. Update `CHANGELOG.md` with release notes
3. Create and push tag: `git tag v{{cookiecutter.first_version}} && git push origin v{{cookiecutter.first_version}}`
4. Create GitHub release with changelog notes
{% if cookiecutter._use_nextjs == "y" -%}
5. Deploy to Vercel or chosen hosting platform
{% else -%}
5. Deploy to Netlify, Vercel, or chosen hosting platform
{% endif -%}

## Monitoring and Analytics

### Error Tracking
- Implement error boundaries for graceful error handling
- Use error tracking services (Sentry, Bugsnag) in production
- Log errors with proper context and stack traces
- Monitor Core Web Vitals and performance metrics

### User Analytics
- Implement privacy-compliant analytics
- Track key user interactions and conversion funnels
- Monitor performance metrics and user experience
- A/B testing implementation for feature rollouts

## Accessibility Guidelines

{% if cookiecutter.use_a11y == "y" -%}
### a11y Implementation
This project includes accessibility support with:
- ESLint plugin for catching a11y issues during development
- Proper semantic HTML structure
- ARIA attributes where needed
- Keyboard navigation support
- Screen reader compatibility

### Testing Accessibility
```bash
# Install axe-core for automated a11y testing
npm install --save-dev @axe-core/playwright

# Run accessibility tests
npm run test:a11y
```

{% endif -%}
### a11y Best Practices
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.)
- Provide alternative text for images
- Ensure proper color contrast ratios
- Implement keyboard navigation
- Use ARIA labels and descriptions appropriately
- Test with screen readers and keyboard-only navigation
- Follow WCAG 2.1 guidelines

Remember: Accessibility is not optional—it's essential for creating inclusive web applications.