# Claude Code PM System - React/TypeScript Usage Guide

## 🚀 Quick Start

### Initial Setup
```bash
# 1. Initialize the PM system
bash .claude/init.sh

# 2. Install dependencies and setup environment
./setup.sh

# 3. Plan your first epic
.claude/scripts/pm/epic-plan

# 4. Start your first task
.claude/scripts/pm/task-start
```

## 📋 Core PM Commands

### Epic Management
```bash
# Plan a new epic with GitHub issue creation
.claude/scripts/pm/epic-plan

# View current epic status
.claude/scripts/pm/epic-status

# Complete an epic
.claude/scripts/pm/epic-complete
```

### Task Management
```bash
# Start a new task (creates worktree)
.claude/scripts/pm/task-start

# Complete current task (merges to main)
.claude/scripts/pm/task-complete

# Update task progress
.claude/scripts/pm/task-update

# Block a task with reason
.claude/scripts/pm/task-block "Waiting for design specs"
```

### Progress Tracking
```bash
# Generate progress report
.claude/scripts/pm/progress-report

# Sync with GitHub issues
.claude/scripts/pm/sync-github

# View all tasks status
.claude/scripts/pm/status
```

## ⚛️ React-Specific Commands

### Component Development
```bash
# Create new component with tests
/pm:component-create Button components/ui

# Create custom hook
/pm:hook-create useAuth

# Add Storybook story
/pm:storybook-add components/Button
```

### Testing & Quality
```bash
# Run comprehensive test suite
/testing:prime-js

# Run E2E tests with Playwright
npm run test:e2e

# Check accessibility
/pm:accessibility-check

# Analyze bundle size
/pm:perf-check
```

### Development Tools
```bash
# Audit dependencies
/pm:deps-audit

# Generate TypeScript types from JSON
/pm:type-gen api-response.json src/types/api.ts

# Extract i18n keys
/pm:i18n-extract

# Generate API mocks
/pm:api-mock openapi.yaml src/mocks

# Audit CSS for unused styles
/pm:css-audit
```

## 🤖 Using React Agents

### Vitest Testing Agent
```
# In Claude Code, use the Task tool:
Task: Run all component tests using vitest-runner agent. Focus on user interactions and check coverage for components/ directory.
```

### Playwright E2E Agent
```
Task: Use playwright-runner agent to test the complete checkout flow on Chrome, Firefox, and Safari. Include mobile viewports.
```

### Component Analysis Agent
```
Task: Use component-analyzer agent to review the Dashboard component for performance issues and suggest optimizations.
```

### Bundle Optimization Agent
```
Task: Use bundle-optimizer agent to analyze production build and suggest code splitting strategies to achieve <2s initial load.
```

### TypeScript Migration Agent
```
Task: Use typescript-migrator agent to convert utils/ directory to TypeScript with strict mode compliance.
```

## 📝 Epic Planning Workflow

### 1. Create Epic Specification
```bash
# Start planning
.claude/scripts/pm/epic-plan

# This will:
# - Create PRD document
# - Generate task breakdown
# - Create GitHub issue
# - Set up epic directory
```

### 2. Epic Directory Structure
```
.claude/epics/user-dashboard/
├── PRD.md              # Product Requirements
├── tasks.md            # Task breakdown
├── progress.md         # Progress tracking
├── .env.local          # Epic-specific config
├── components/         # Epic components
├── __tests__/          # Epic tests
└── storybook/          # Epic stories
```

### 3. Working with Tasks
```bash
# Start task from epic
.claude/scripts/pm/task-start

# Select task number from list
# Creates Git worktree in .claude/epics/[epic]/tasks/[task]

# Work on the task...
npm run dev  # Development server
npm run test:watch  # Test in watch mode

# Complete and merge
.claude/scripts/pm/task-complete
```

## 🔄 Parallel Development

### Component Development Workflow
```bash
# Start multiple component tasks
.claude/scripts/pm/task-parallel header footer sidebar

# Each gets its own worktree:
# .claude/epics/ui/tasks/header/
# .claude/epics/ui/tasks/footer/
# .claude/epics/ui/tasks/sidebar/

# Test all in parallel
npm run test -- --projects header footer sidebar
```

### Feature Branch Strategy
```bash
# Feature branches auto-created
.claude/scripts/pm/task-start
# Creates: feature/epic-name/task-description

# Preview deployment
npm run build && npm run preview

# Merge when ready
.claude/scripts/pm/task-complete
```

## 📊 Testing Strategy

### Unit & Component Tests
```bash
# Run all tests
npm run test

# Run with coverage
npm run test:coverage

# Watch mode for TDD
npm run test:watch

# Test specific component
npm run test Button.test.tsx
```

### E2E Testing
```bash
# Run all E2E tests
npm run test:e2e

# Debug mode with browser
npm run test:e2e:headed

# Test specific flow
npm run test:e2e auth.spec.ts

# Generate test report
npx playwright show-report
```

### Performance Testing
```bash
# Run Lighthouse audit
/pm:perf-check

# Profile React components
npm run build -- --profile
npx react-devtools-profiler

# Analyze bundle
npm run analyze
```

## 🎯 Best Practices

### 1. Component-Driven Development
```bash
# 1. Create component
/pm:component-create FeatureCard

# 2. Add Storybook story
/pm:storybook-add components/FeatureCard

# 3. Write tests
npm run test:watch FeatureCard

# 4. Implement component
# 5. Document in Storybook
npm run storybook
```

### 2. Type-Safe Development
```bash
# Always run type check before commit
npm run type-check

# Generate types from API
/pm:type-gen api-spec.json

# Use strict TypeScript
# tsconfig.json: "strict": true
```

### 3. Accessibility First
```bash
# Check during development
/pm:accessibility-check

# Test with screen reader
# Use NVDA (Windows) or VoiceOver (Mac)

# Ensure keyboard navigation
# Tab through entire app
```

### 4. Performance Monitoring
```bash
# Check bundle size on every build
npm run build && npm run analyze

# Monitor Core Web Vitals
/pm:perf-check

# Use React DevTools Profiler
# Identify unnecessary re-renders
```

## 🚨 Troubleshooting

### Common Issues

**Issue**: Type errors in IDE but not in terminal
```bash
# Restart TS server in VS Code
Cmd+Shift+P > "TypeScript: Restart TS Server"

# Or rebuild
npm run type-check
```

**Issue**: Tests failing in CI but passing locally
```bash
# Run tests in CI mode
CI=true npm test

# Check for timezone issues
TZ=UTC npm test
```

**Issue**: Hot reload not working
```bash
# Clear cache and restart
rm -rf node_modules/.vite
npm run dev

# Check file watchers limit (Linux)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
```

**Issue**: Storybook build fails
```bash
# Clear Storybook cache
rm -rf node_modules/.cache/storybook

# Rebuild
npm run build-storybook
```

## 📚 Advanced Usage

### Custom Webpack/Vite Config
```javascript
// vite.config.ts - for Vite projects
export default {
  plugins: [
    // Add epic-specific plugins
    epicPlugin(),
  ],
}

// next.config.js - for Next.js projects
module.exports = {
  webpack: (config) => {
    // Epic-specific webpack config
    return config;
  },
}
```

### Mock Service Worker Setup
```bash
# Generate MSW handlers
/pm:api-mock openapi.yaml

# Use in development
npm run dev  # MSW auto-starts

# Use in tests
// setupTests.ts
import { server } from './mocks/server'
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```

### Component Library Mode
```bash
# Build as library
npm run build:lib

# Publish to npm
npm publish

# Use in other projects
npm install @your-org/component-library
```

## 🔗 Integration with Claude Code

When using Claude Code (claude.ai/code), leverage React-specific agents:
- "Use vitest-runner to test all components"
- "Use playwright-runner for E2E testing"
- "Use component-analyzer to review performance"
- "Use bundle-optimizer to reduce build size"
- "Use accessibility-auditor to check WCAG compliance"

## 📖 Quick Reference

### Essential Commands
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run test             # Run tests
npm run test:e2e         # Run E2E tests
npm run lint             # Lint code
npm run lint:fix         # Fix linting issues
npm run type-check       # Check TypeScript types
npm run format           # Format with Prettier
npm run analyze          # Analyze bundle size
```

### PM Shortcuts
```bash
# Most used PM commands
ep   # alias for epic-plan
ts   # alias for task-start
tc   # alias for task-complete
st   # alias for status
pr   # alias for progress-report
```

### Testing Shortcuts
```bash
# Quick test commands
t    # npm test
tw   # npm run test:watch
tc   # npm run test:coverage
e2e  # npm run test:e2e
```

## 📖 Further Reading

- [CLAUDE.md](.claude/CLAUDE.md) - Core principles and React rules
- [AGENTS.md](.claude/AGENTS.md) - React-specific AI agents
- [commands/](.claude/commands/) - All available commands
- [Testing Guide](https://vitest.dev/) - Vitest documentation
- [Playwright Docs](https://playwright.dev/) - E2E testing guide
- [React DevTools](https://react.dev/learn/react-developer-tools) - Performance profiling