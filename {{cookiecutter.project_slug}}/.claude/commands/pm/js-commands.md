# JavaScript/React PM Commands

## /pm:deps-audit
Audit npm dependencies for security vulnerabilities and outdated packages.

```bash
#!/bin/bash
echo "🔍 Auditing dependencies..."

# Security audit
echo "Security vulnerabilities:"
npm audit --production

# Check for outdated packages
echo -e "\nOutdated packages:"
npx npm-check-updates

# Check bundle size
if [ -f "package.json" ] && grep -q '"analyze"' package.json; then
    echo -e "\nBundle size analysis:"
    npm run build && npm run analyze
fi
```

## /pm:component-create
Create a new React component with tests and stories.

```bash
#!/bin/bash
COMPONENT_NAME=$1
COMPONENT_PATH=${2:-"src/components"}

if [ -z "$COMPONENT_NAME" ]; then
    echo "Usage: /pm:component-create ComponentName [path]"
    exit 1
fi

mkdir -p "$COMPONENT_PATH/$COMPONENT_NAME"

# Create component file
cat > "$COMPONENT_PATH/$COMPONENT_NAME/$COMPONENT_NAME.tsx" << EOF
import React from 'react';
import styles from './$COMPONENT_NAME.module.css';

export interface ${COMPONENT_NAME}Props {
  children?: React.ReactNode;
}

export const $COMPONENT_NAME: React.FC<${COMPONENT_NAME}Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
EOF

# Create test file
cat > "$COMPONENT_PATH/$COMPONENT_NAME/$COMPONENT_NAME.test.tsx" << EOF
import { render, screen } from '@testing-library/react';
import { $COMPONENT_NAME } from './$COMPONENT_NAME';

describe('$COMPONENT_NAME', () => {
  it('renders children', () => {
    render(<$COMPONENT_NAME>Test Content</$COMPONENT_NAME>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
EOF

# Create index file
echo "export { $COMPONENT_NAME } from './$COMPONENT_NAME';" > "$COMPONENT_PATH/$COMPONENT_NAME/index.ts"

echo "✅ Component $COMPONENT_NAME created at $COMPONENT_PATH/$COMPONENT_NAME"
```

## /pm:hook-create
Create a new custom React hook with tests.

```bash
#!/bin/bash
HOOK_NAME=$1
HOOKS_PATH="src/hooks"

if [ -z "$HOOK_NAME" ]; then
    echo "Usage: /pm:hook-create useHookName"
    exit 1
fi

mkdir -p "$HOOKS_PATH"

# Create hook file
cat > "$HOOKS_PATH/$HOOK_NAME.ts" << EOF
import { useState, useEffect } from 'react';

export function $HOOK_NAME() {
  const [state, setState] = useState<unknown>(null);

  useEffect(() => {
    // Hook logic here
  }, []);

  return { state };
}
EOF

# Create test file
cat > "$HOOKS_PATH/$HOOK_NAME.test.ts" << EOF
import { renderHook, act } from '@testing-library/react';
import { $HOOK_NAME } from './$HOOK_NAME';

describe('$HOOK_NAME', () => {
  it('should initialize with default state', () => {
    const { result } = renderHook(() => $HOOK_NAME());
    expect(result.current.state).toBeNull();
  });
});
EOF

echo "✅ Hook $HOOK_NAME created at $HOOKS_PATH"
```

## /pm:type-gen
Generate TypeScript types from JSON or API responses.

```bash
#!/bin/bash
SOURCE=$1
OUTPUT=${2:-"src/types/generated.ts"}

if [ -z "$SOURCE" ]; then
    echo "Usage: /pm:type-gen <json-file|api-url> [output-file]"
    exit 1
fi

echo "🔧 Generating TypeScript types..."

# Use quicktype for type generation
npx quicktype -s json -o "$OUTPUT" --lang ts --top-level Generated "$SOURCE"

# Format the generated file
npx prettier --write "$OUTPUT"
npx eslint --fix "$OUTPUT"

echo "✅ Types generated at $OUTPUT"
```

## /pm:storybook-add
Add Storybook story for an existing component.

```bash
#!/bin/bash
COMPONENT_PATH=$1

if [ -z "$COMPONENT_PATH" ]; then
    echo "Usage: /pm:storybook-add path/to/Component"
    exit 1
fi

COMPONENT_NAME=$(basename "$COMPONENT_PATH")
STORY_FILE="$COMPONENT_PATH/$COMPONENT_NAME.stories.tsx"

cat > "$STORY_FILE" << EOF
import type { Meta, StoryObj } from '@storybook/react';
import { $COMPONENT_NAME } from './$COMPONENT_NAME';

const meta = {
  title: 'Components/$COMPONENT_NAME',
  component: $COMPONENT_NAME,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof $COMPONENT_NAME>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
EOF

echo "✅ Storybook story created at $STORY_FILE"
```

## /pm:perf-check
Check performance metrics and optimize build.

```bash
#!/bin/bash
echo "📊 Checking performance metrics..."

# Build production bundle
npm run build

# Analyze bundle size
echo -e "\n📦 Bundle Analysis:"
npx webpack-bundle-analyzer dist/stats.json -m static -r dist/bundle-report.html

# Check lighthouse scores
if command -v lighthouse &> /dev/null; then
    echo -e "\n🔦 Lighthouse Scores:"
    lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json
    cat lighthouse-report.json | jq '.categories | {performance: .performance.score, accessibility: .accessibility.score, "best-practices": .["best-practices"].score, seo: .seo.score}'
fi

# Check for large dependencies
echo -e "\n📏 Large Dependencies:"
npx bundlephobia-cli package.json

echo "✅ Performance check complete. See dist/bundle-report.html for details."
```

## /pm:i18n-extract
Extract translation keys from React components.

```bash
#!/bin/bash
OUTPUT=${1:-"src/locales/en.json"}

echo "🌍 Extracting i18n keys..."

# Extract using i18next-scanner or similar
npx i18next-scanner --config i18next-scanner.config.js

# Sort and format the output
if [ -f "$OUTPUT" ]; then
    npx sort-json "$OUTPUT"
    npx prettier --write "$OUTPUT"
fi

echo "✅ Translation keys extracted to $OUTPUT"
```

## /pm:api-mock
Generate mock API responses for testing.

```bash
#!/bin/bash
API_SPEC=$1
OUTPUT_DIR=${2:-"src/mocks"}

if [ -z "$API_SPEC" ]; then
    echo "Usage: /pm:api-mock <openapi-spec.yaml> [output-dir]"
    exit 1
fi

echo "🔧 Generating mock API responses..."

mkdir -p "$OUTPUT_DIR"

# Generate MSW handlers from OpenAPI spec
npx openapi-msw "$API_SPEC" -o "$OUTPUT_DIR/handlers.ts"

# Create MSW setup file
cat > "$OUTPUT_DIR/browser.ts" << 'EOF'
import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
EOF

echo "✅ Mock API handlers generated at $OUTPUT_DIR"
```

## /pm:css-audit
Audit CSS for unused styles and duplicates.

```bash
#!/bin/bash
echo "🎨 Auditing CSS..."

# Find unused CSS
echo "Unused CSS selectors:"
npx purgecss --css 'src/**/*.css' --content 'src/**/*.{js,jsx,ts,tsx}' --output coverage/css

# Check for duplicate CSS
echo -e "\nDuplicate CSS rules:"
npx csscss src/**/*.css

# Analyze CSS stats
echo -e "\nCSS Statistics:"
npx cssstats src/**/*.css

echo "✅ CSS audit complete"
```

## /pm:accessibility-check
Run accessibility checks on the application.

```bash
#!/bin/bash
echo "♿ Running accessibility checks..."

# Run axe-core tests
if [ -f "tests/a11y" ]; then
    npm run test:a11y
fi

# Run pa11y on development server
if command -v pa11y &> /dev/null; then
    echo -e "\npa11y results:"
    pa11y http://localhost:3000 --standard WCAG2AA
fi

# Check color contrast
echo -e "\nColor contrast check:"
npx color-contrast-checker src/**/*.css

echo "✅ Accessibility check complete"
```