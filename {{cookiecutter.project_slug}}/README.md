# {{cookiecutter.project_name}}

{{cookiecutter.project_short_description}}

{% if cookiecutter._use_nextjs == "y" -%}
Built with **Next.js** for server-side rendering and optimal SEO performance.
{% else -%}
Built with **Vite** and **React** for fast development and modern web standards.
{% endif -%}

{% if cookiecutter.use_claude_pm == "y" -%}
## 🚀 Claude Code PM System

This project includes the Claude Code PM system for spec-driven development with full GitHub Issues integration.

### Quick Start with PM System

```bash
# Initialize the PM system (one-time setup)
/pm:init

# Create your first feature specification
/pm:prd-new user-dashboard

# Transform specification into technical implementation plan
/pm:prd-parse user-dashboard

# Push to GitHub and start parallel development
/pm:epic-oneshot user-dashboard
```

### Key PM Features

- **📋 Spec-Driven Development**: Every line of code traces back to a specification
- **🔄 GitHub Native**: Uses GitHub Issues as source of truth for all work
- **⚡ Parallel Execution**: Multiple AI agents working simultaneously on different tasks
- **🧠 Context Preservation**: Maintains project state across all sessions
- **📊 Full Traceability**: Complete audit trail from idea to production

### Available PM Commands

- `/pm:help` - Show all PM commands
- `/pm:next` - Get next priority task
- `/pm:status` - Project dashboard
- `/pm:standup` - Daily progress report

See [AGENTS.md](AGENTS.md) for complete command reference.

{% endif -%}
## Features

- ⚡ **Modern Stack**: React 18+ with TypeScript
{% if cookiecutter._use_nextjs == "y" -%}
- 🚀 **Next.js**: Server-side rendering and static site generation
- 📄 **File-based Routing**: Automatic route generation from pages directory
{% else -%}
- ⚡ **Vite**: Lightning fast build tool and dev server
- 🛤️ **React Router**: Client-side routing for SPA navigation
{% endif -%}
- 🎨 **Tailwind CSS**: Utility-first CSS framework
{% if cookiecutter.ui_library != "none" -%}
{% if cookiecutter.ui_library == "shadcn-ui" -%}
- 🧩 **shadcn/ui**: Copy-paste component system with Radix UI primitives
{% elif cookiecutter.ui_library == "chakra-ui" -%}
- 🧩 **Chakra UI**: Modular and accessible component library
{% elif cookiecutter.ui_library == "material-ui" -%}
- 🧩 **Material UI**: Google Material Design components for React
{% elif cookiecutter.ui_library == "daisyui" -%}
- 🧩 **DaisyUI**: Semantic component classes for Tailwind CSS
{% elif cookiecutter.ui_library == "flowbite" -%}
- 🧩 **Flowbite**: Component library built on Tailwind CSS
{% endif -%}
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
- 🏪 **Redux Toolkit**: Predictable state management with modern Redux
{% elif cookiecutter.state_management == "zustand" -%}
- 🏪 **Zustand**: Lightweight and scalable state management
{% else -%}
- 🏪 **React State**: Built-in state management with hooks and context
{% endif -%}
- 🧪 **Testing**: Vitest for unit tests, Playwright for E2E tests
- 📏 **Code Quality**: ESLint, Prettier, and TypeScript for maintainable code
{% if cookiecutter.use_i18n == "y" -%}
- 🌐 **Internationalization**: Multi-language support with react-i18next
{% endif -%}
{% if cookiecutter.use_a11y == "y" -%}
- ♿ **Accessibility**: Built-in a11y support and ESLint rules
{% endif -%}
{% if cookiecutter.use_docker == "y" -%}
- 🐳 **Docker**: Containerized development and production environments
{% endif -%}
{% if cookiecutter.use_github_actions == "y" -%}
- 🚀 **CI/CD**: GitHub Actions for automated testing and deployment
{% endif -%}

## Quick Start

### Prerequisites

- **Node.js** {{cookiecutter.node_version}}+ (LTS recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Real-AI-Engineering/cookiecutter-react-claude.git
   cd {{cookiecutter.project_slug}}
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

{% if cookiecutter._use_nextjs == "y" -%}
4. **Open your browser** to [http://localhost:3000](http://localhost:3000)
{% else -%}
4. **Open your browser** to [http://localhost:5173](http://localhost:5173)
{% endif -%}

## Development

### Available Scripts

| Command | Description |
|---------|-------------|
{% if cookiecutter._use_nextjs == "y" -%}
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
{% else -%}
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
{% endif -%}
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript checks |
| `npm run test` | Run unit tests |
| `npm run test:coverage` | Run tests with coverage |
| `npm run test:e2e` | Run E2E tests |
| `npm run quality` | Run all quality checks |

### Project Structure

```
{% if cookiecutter._use_nextjs == "y" -%}
{{cookiecutter.project_slug}}/
├── pages/                  # Next.js pages (routes)
│   ├── _app.tsx           # App wrapper component
│   ├── index.tsx          # Home page
│   └── about.tsx          # About page
├── components/            # Reusable UI components
├── lib/                   # Utilities and configurations
├── public/                # Static assets
├── styles/                # Global styles
├── tests/                 # Test files
└── next.config.js         # Next.js configuration
{% else -%}
{{cookiecutter.project_slug}}/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages
│   ├── hooks/             # Custom React hooks
{% if cookiecutter.state_management != "none" -%}
│   ├── stores/            # State management
{% endif -%}
│   ├── types/             # TypeScript definitions
│   ├── App.tsx            # Root component
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── tests/                 # Test files
└── vite.config.ts         # Vite configuration
{% endif -%}
```

{% if cookiecutter.state_management != "none" -%}
### State Management

{% if cookiecutter.state_management == "redux-toolkit" -%}
This project uses **Redux Toolkit** for state management:

```tsx
// Using Redux state in components
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement } from '../store/slices/counterSlice';

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
```

{% elif cookiecutter.state_management == "zustand" -%}
This project uses **Zustand** for lightweight state management:

```tsx
// Using Zustand store in components
import { useCounterStore } from '../stores/useStore';

export const Counter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
```
{% endif -%}

{% endif -%}
{% if cookiecutter.ui_library != "none" -%}
### UI Components

{% if cookiecutter.ui_library == "shadcn-ui" -%}
This project uses **shadcn/ui** components. Components are copied into your codebase and can be fully customized.

Generate new components:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
```

{% elif cookiecutter.ui_library == "chakra-ui" -%}
This project uses **Chakra UI** for components. The ChakraProvider is configured in the app root.

```tsx
import { Button, Box, Text } from '@chakra-ui/react';

export const Example = () => (
  <Box p={4}>
    <Text fontSize="xl" mb={4}>Hello Chakra UI!</Text>
    <Button colorScheme="blue">Click me</Button>
  </Box>
);
```

{% elif cookiecutter.ui_library == "material-ui" -%}
This project uses **Material UI** components with Material Design principles.

```tsx
import { Button, Box, Typography } from '@mui/material';

export const Example = () => (
  <Box p={2}>
    <Typography variant="h4" gutterBottom>Hello Material UI!</Typography>
    <Button variant="contained" color="primary">Click me</Button>
  </Box>
);
```

{% elif cookiecutter.ui_library == "daisyui" -%}
This project uses **DaisyUI** with Tailwind CSS for rapid UI development.

```tsx
export const Example = () => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Hello DaisyUI!</h2>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Click me</button>
      </div>
    </div>
  </div>
);
```

{% elif cookiecutter.ui_library == "flowbite" -%}
This project uses **Flowbite** components built on Tailwind CSS.

```tsx
import { Button, Card } from 'flowbite-react';

export const Example = () => (
  <Card className="max-w-sm">
    <h5 className="text-2xl font-bold">Hello Flowbite!</h5>
    <Button>Click me</Button>
  </Card>
);
```
{% endif -%}

{% endif -%}
### Styling

This project uses **Tailwind CSS** for styling. Key features:

- **Utility-first**: Use utility classes for rapid development
- **Responsive**: Mobile-first responsive design
- **Dark mode**: Built-in dark mode support (if configured)
- **Custom theme**: Extend the theme in `tailwind.config.js`

Example component styling:
```tsx
export const Card = ({ children, className = "" }) => (
  <div className={`
    bg-white dark:bg-gray-800 
    rounded-lg shadow-md 
    p-6 
    border border-gray-200 dark:border-gray-700
    ${className}
  `}>
    {children}
  </div>
);
```

{% if cookiecutter.use_i18n == "y" -%}
### Internationalization

This project supports multiple languages using **react-i18next**:

1. **Translation files** are located in `public/locales/`
2. **Add new translations** by editing JSON files
3. **Use translations** in components:

```tsx
import { useTranslation } from 'react-i18next';

export const Welcome = () => {
  const { t, i18n } = useTranslation('common');
  
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.message')}</p>
      <button onClick={() => i18n.changeLanguage('ru')}>
        Русский
      </button>
    </div>
  );
};
```

{% endif -%}
## Testing

### Unit Tests

Run unit tests with **Vitest** and **React Testing Library**:

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

Example test:
```tsx
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});
```

### E2E Tests

Run end-to-end tests with **Playwright**:

```bash
# Run E2E tests
npm run test:e2e

# Run in headed mode (visible browser)
npm run test:e2e:headed

# Debug tests
npm run test:e2e:debug
```

{% if cookiecutter.use_docker == "y" -%}
## Docker

### Development

```bash
# Start development environment
docker-compose up

# Build and start
docker-compose up --build

# Stop and remove containers
docker-compose down
```

### Production

```bash
# Build production image
docker build -t {{cookiecutter.project_slug}}:latest .

# Run production container
docker run -p 3000:3000 {{cookiecutter.project_slug}}:latest
```

{% endif -%}
## Environment Variables

{% if cookiecutter._use_nextjs == "y" -%}
Create a `.env.local` file for development:

```bash
# Public variables (exposed to browser)
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME={{cookiecutter.project_name}}

# Server-side variables
DATABASE_URL=postgresql://localhost/myapp
JWT_SECRET=your-secret-key
```
{% else -%}
Create a `.env` file for development:

```bash
# Vite environment variables (prefixed with VITE_)
VITE_API_URL=http://localhost:3001
VITE_APP_NAME={{cookiecutter.project_name}}
VITE_APP_VERSION={{cookiecutter.first_version}}
```
{% endif -%}

## Deployment

{% if cookiecutter._use_nextjs == "y" -%}
### Vercel (Recommended)

1. **Connect your repository** to [Vercel](https://vercel.com)
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** automatically on every push to main branch

### Other Platforms

- **Netlify**: Works with static export (`npm run export`)
- **Railway**: Full-stack deployment with database
- **AWS/GCP/Azure**: Use Docker container for deployment
{% else -%}
### Netlify/Vercel

1. **Build the project**: `npm run build`
2. **Upload `dist/` folder** to your hosting service
3. **Configure redirects** for SPA routing:

```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Docker Deployment

```bash
# Build and run production container
docker build -t {{cookiecutter.project_slug}} .
docker run -p 3000:3000 {{cookiecutter.project_slug}}
```
{% endif -%}

## Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Run `npm run quality` before committing

## Performance

### Core Web Vitals

This project is optimized for Core Web Vitals:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Features

{% if cookiecutter._use_nextjs == "y" -%}
- **Automatic code splitting** with Next.js
- **Image optimization** with Next.js Image component
- **Static generation** for improved performance
- **Bundle analyzer** to monitor size
{% else -%}
- **Code splitting** with React.lazy and Suspense
- **Tree shaking** and dead code elimination
- **Asset optimization** with Vite
- **Bundle analyzer** to monitor size
{% endif -%}

## Security

- **Environment variables** for sensitive data
- **Input validation** and sanitization
- **Content Security Policy** headers
- **Dependency vulnerability** scanning
- **HTTPS** enforcement in production

## License

This project is licensed under the {{cookiecutter.license}} License. See the [LICENSE](LICENSE) file for details.

## Support

- 📖 **Documentation**: Check [CLAUDE.md](CLAUDE.md) for Claude Code integration
- 🛠️ **Development**: See [AGENTS.md](AGENTS.md) for development guidelines
- 🐛 **Issues**: Report bugs on [GitHub Issues](https://github.com/Real-AI-Engineering/cookiecutter-react-claude/issues)
- 💬 **Discussions**: Join [GitHub Discussions](https://github.com/Real-AI-Engineering/cookiecutter-react-claude/discussions)

---

**{{cookiecutter.project_name}}** - Built with ❤️ using modern React and TypeScript