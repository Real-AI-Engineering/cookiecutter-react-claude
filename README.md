# Cookiecutter React Claude

A modern, opinionated [Cookiecutter](https://github.com/audreyr/cookiecutter) template for creating React applications with TypeScript and best practices.

## Resources

- Repository: https://github.com/Real-AI-Engineering/cookiecutter-react-claude
- Documentation: https://github.com/Real-AI-Engineering/cookiecutter-react-claude#readme
- Issues: https://github.com/Real-AI-Engineering/cookiecutter-react-claude/issues

## Features

- **Modern React**: Latest React 18+ with TypeScript support
- **Build Tools**: Choice between Vite (SPA) or Next.js (SSR)
- **Styling**: Tailwind CSS with optional UI component libraries
- **State Management**: Optional Redux Toolkit or Zustand
- **Code Quality**: ESLint, Prettier, and pre-commit hooks
- **Testing**: Vitest for unit tests, Playwright for E2E tests
- **CI/CD**: GitHub Actions workflows
- **Containerization**: Docker support for development and production
- **Internationalization**: Optional i18n support with react-i18next
- **Accessibility**: Optional a11y support with ESLint rules
- **Claude Code Ready**: Includes CLAUDE.md and AGENTS.md for AI development
- **PM System**: Optional Claude Code PM for spec-driven development with GitHub Issues

## Quick Start

### Prerequisites

- [Python 3.8+](https://www.python.org/) for Cookiecutter
- [Node.js 18+](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

### Generate Your Project

```bash
# Install cookiecutter if you haven't already
pip install cookiecutter

# Generate your React project
cookiecutter https://github.com/Real-AI-Engineering/cookiecutter-react-claude

# Or use locally cloned template
cookiecutter path/to/cookiecutter-react-claude
```

### Configuration Options

You'll be prompted to configure your project:

| Option | Description | Choices |
|--------|-------------|---------|
| `full_name` | Your full name | Your Name |
| `email` | Your email address | your.email@example.com |
| `github_username` | Your GitHub username | yourusername |
| `project_name` | Project name | My React Project |
| `project_short_description` | Brief project description | A modern React project... |
| `node_version` | Minimum Node.js version | 18, 20, 22 |
| `app_type` | Application architecture | spa, ssr |
| `ui_library` | UI component library | none, shadcn-ui, chakra-ui, material-ui, daisyui, flowbite |
| `state_management` | State management solution | none, redux-toolkit, zustand |
| `use_i18n` | Internationalization support | y, n |
| `use_a11y` | Accessibility support | y, n |
| `use_docker` | Docker configuration | y, n |
| `use_github_actions` | CI/CD pipeline | y, n |
| `use_claude_pm` | Claude Code PM system | y, n |
| `license` | Project license | MIT, BSD-3-Clause, Apache-2.0, GPL-3.0, Proprietary |

## UI Library Options

### shadcn/ui
Modern, accessible component system built on Radix UI primitives. Components are copy-pasted into your codebase for full control.

### Chakra UI
Popular React component library focused on simplicity, modularity, and accessibility.

### Material UI (MUI)
React implementation of Google's Material Design system with comprehensive components.

### DaisyUI
Tailwind CSS component library providing semantic class names for rapid development.

### Flowbite
Component library built on Tailwind CSS with React bindings.

## Application Types

### SPA (Single Page Application)
- Built with **Vite** for fast development and builds
- Client-side routing with React Router
- Optimized for modern browsers
- Best for web applications and dashboards

### SSR (Server-Side Rendering)
- Built with **Next.js** for SEO and performance
- File-based routing system
- API routes support
- Static site generation capabilities
- Best for marketing sites and blogs

## State Management Options

### None (React State Only)
Uses React's built-in state management (useState, useReducer, Context API).

### Redux Toolkit
Modern Redux with simplified API, built-in best practices, and TypeScript support.

### Zustand
Lightweight state management with minimal boilerplate and great TypeScript integration.

## Generated Project Structure

```
your-project/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Application pages/screens
│   ├── hooks/              # Custom React hooks
│   ├── stores/             # State management (if enabled)
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point (Vite)
│   └── index.css           # Global styles and Tailwind imports
├── tests/
│   ├── unit/               # Unit tests with Vitest
│   └── e2e/                # End-to-end tests with Playwright
├── public/                 # Static assets
├── .github/workflows/      # CI/CD pipelines (if enabled)
├── docker/                 # Docker configurations (if enabled)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration (SPA)
├── next.config.js          # Next.js configuration (SSR)
├── .eslintrc.js            # ESLint rules
├── .prettierrc             # Prettier configuration
├── .gitignore              # Git ignore rules
├── Dockerfile              # Production Docker image
├── docker-compose.yml      # Development environment
├── README.md               # Project documentation
├── CLAUDE.md               # Claude Code instructions
└── AGENTS.md               # Development workflow guidelines
```

## After Generation

1. **Navigate to your project**:
   ```bash
   cd your-project-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   # For SPA projects
   npm run dev
   
   # For SSR projects  
   npm run dev
   ```

4. **Run tests**:
   ```bash
   # Unit tests
   npm run test
   
   # E2E tests
   npm run test:e2e
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## Docker Development (if enabled)

```bash
# Start development environment
docker-compose up

# Build production image
docker build -t your-project:latest .

# Run production container
docker run -p 3000:3000 your-project:latest
```

## Claude Code Integration

This template includes CLAUDE.md and AGENTS.md files that provide:

- Project-specific coding guidelines
- Development workflow instructions
- Common commands and patterns
- Architecture overview
- Testing strategies
- CI/CD pipeline information

These files help Claude Code understand your project structure and provide more accurate assistance.

## Contributing

1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Test with different configuration combinations
5. Submit a pull request

## License

This cookiecutter template is licensed under the MIT License. Generated projects use the license you select during generation.

## Inspiration

This template is inspired by modern React best practices and the community's evolving standards. It aims to provide a solid foundation for both small projects and large-scale applications.
