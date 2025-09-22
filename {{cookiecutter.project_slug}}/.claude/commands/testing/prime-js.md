# /testing:prime-js

Run comprehensive JavaScript/TypeScript test suite with optimal configuration.

## Command
```bash
#!/bin/bash
set -euo pipefail

echo "🧪 Running JavaScript/TypeScript Test Suite"
echo "========================================="

# Check for test framework
if [ -f "vitest.config.ts" ] || [ -f "vitest.config.js" ]; then
    TEST_RUNNER="vitest"
elif [ -f "jest.config.js" ] || [ -f "jest.config.ts" ]; then
    TEST_RUNNER="jest"
else
    echo "❌ No test configuration found"
    exit 1
fi

# Run linting first
echo "📝 Running ESLint..."
npm run lint || {
    echo "⚠️ Linting issues found. Run 'npm run lint:fix' to auto-fix."
}

# Type checking
echo "🔍 Running TypeScript type check..."
npm run type-check || {
    echo "❌ Type errors found. Fix them before proceeding."
    exit 1
}

# Run unit tests with coverage
echo "🧪 Running unit tests with coverage..."
if [ "$TEST_RUNNER" = "vitest" ]; then
    npm run test:coverage -- --reporter=verbose
else
    npm run test -- --coverage --verbose
fi

# Run component tests if available
if [ -f "tests/components" ] || [ -d "src/**/*.test.tsx" ]; then
    echo "🧩 Running component tests..."
    npm run test:components || true
fi

# Check bundle size
if [ -f "package.json" ] && grep -q '"analyze"' package.json; then
    echo "📊 Analyzing bundle size..."
    npm run build
    npm run analyze || true
fi

echo ""
echo "✅ Test suite completed!"
echo ""
echo "📊 Coverage Report Summary:"
if [ "$TEST_RUNNER" = "vitest" ]; then
    cat coverage/coverage-summary.json | npx -q json coverage.total
else
    cat coverage/coverage-final.json | npx -q json total
fi
```

## Configuration

### vitest-runner Agent Configuration
```yaml
agent: vitest-runner
config:
  framework: vitest
  coverage:
    enabled: true
    threshold:
      statements: 80
      branches: 80
      functions: 80
      lines: 80
  reporters:
    - verbose
    - html
  testMatch:
    - "**/__tests__/**/*.{js,jsx,ts,tsx}"
    - "**/*.{test,spec}.{js,jsx,ts,tsx}"
  setupFiles:
    - "./tests/setup.ts"
  environment: jsdom
  globals: true
```

### Jest Alternative Configuration
```yaml
agent: jest-runner
config:
  framework: jest
  preset: ts-jest
  testEnvironment: jsdom
  collectCoverage: true
  coverageThreshold:
    global:
      statements: 80
      branches: 80
      functions: 80
      lines: 80
  moduleNameMapper:
    "^@/(.*)$": "<rootDir>/src/$1"
  setupFilesAfterEnv:
    - "<rootDir>/tests/setup.ts"
```

## Testing Best Practices

### Component Testing
```typescript
// ✅ Good - Test user behavior
it('should submit form when button is clicked', async () => {
  const onSubmit = vi.fn();
  const { getByRole } = render(<Form onSubmit={onSubmit} />);

  await userEvent.click(getByRole('button', { name: /submit/i }));

  expect(onSubmit).toHaveBeenCalled();
});

// ❌ Bad - Testing implementation details
it('should set state when button is clicked', () => {
  const wrapper = mount(<Form />);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('submitted')).toBe(true);
});
```

### Hook Testing
```typescript
// Use @testing-library/react-hooks
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

it('should increment counter', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

### Async Testing
```typescript
// ✅ Good - Use waitFor for async operations
it('should load data', async () => {
  render(<DataComponent />);

  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument();
  });
});

// ❌ Bad - Using setTimeout
it('should load data', (done) => {
  render(<DataComponent />);
  setTimeout(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument();
    done();
  }, 1000);
});
```

## E2E Testing Integration

For E2E tests, use the `/testing:e2e` command which runs Playwright tests:

```bash
# Run E2E tests
npm run test:e2e

# Run in headed mode for debugging
npm run test:e2e:headed

# Run specific test file
npm run test:e2e tests/e2e/auth.spec.ts
```

## Coverage Requirements

### Minimum Coverage Thresholds
- **Statements**: 80%
- **Branches**: 80%
- **Functions**: 80%
- **Lines**: 80%

### Critical Components (90%+ coverage required)
- Authentication logic
- Payment processing
- Data validation
- API client utilities
- State management actions/reducers

### Acceptable Lower Coverage (60-70%)
- UI-only components
- Configuration files
- Type definitions
- Mock data

## Related Commands
- `/testing:unit` - Run only unit tests
- `/testing:e2e` - Run E2E tests with Playwright
- `/testing:components` - Test React components in isolation
- `/testing:coverage` - Generate detailed coverage report
- `/lint:fix` - Auto-fix linting issues
- `/type:check` - Run TypeScript type checking