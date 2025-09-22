#!/bin/bash

# Claude Code PM System Initialization Script
# This script sets up the development environment for React/TypeScript projects

set -euo pipefail

echo "🚀 Initializing Claude Code PM System for React/TypeScript..."
echo "============================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js version
check_node_version() {
    echo -e "${YELLOW}Checking Node.js version...${NC}"

    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed${NC}"
        echo "Please install Node.js {{cookiecutter.node_version}} or later"
        exit 1
    fi

    NODE_VERSION=$(node -v | cut -d'v' -f2)
    REQUIRED_VERSION="{{cookiecutter.node_version}}"

    if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
        echo -e "${RED}❌ Node.js version $NODE_VERSION is too old${NC}"
        echo "Please upgrade to Node.js $REQUIRED_VERSION or later"
        exit 1
    fi

    echo -e "${GREEN}✅ Node.js $NODE_VERSION${NC}"
}

# Install dependencies
install_dependencies() {
    echo -e "${YELLOW}Installing project dependencies...${NC}"

    if [ -f "package-lock.json" ]; then
        npm ci
    else
        npm install
    fi

    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Install development tools
install_dev_tools() {
    echo -e "${YELLOW}Installing development tools...${NC}"

    # Install Playwright browsers if E2E tests are configured
    if grep -q "@playwright/test" package.json; then
        echo "Installing Playwright browsers..."
        npx playwright install
    fi

    # Install global tools if needed
    if ! command -v eslint &> /dev/null; then
        echo "Installing ESLint globally..."
        npm install -g eslint
    fi

    echo -e "${GREEN}✅ Development tools installed${NC}"
}

# Setup Git hooks
setup_git_hooks() {
    echo -e "${YELLOW}Setting up Git hooks...${NC}"

    if [ -f ".husky" ]; then
        npx husky install
        echo -e "${GREEN}✅ Husky hooks installed${NC}"
    elif [ -f ".pre-commit-config.yaml" ]; then
        if command -v pre-commit &> /dev/null; then
            pre-commit install
            echo -e "${GREEN}✅ Pre-commit hooks installed${NC}"
        else
            echo -e "${YELLOW}⚠️ pre-commit not found, skipping hooks setup${NC}"
        fi
    fi
}

# Setup environment files
setup_environment() {
    echo -e "${YELLOW}Setting up environment files...${NC}"

    # Create .env.local if it doesn't exist
    if [ ! -f ".env.local" ] && [ -f ".env.example" ]; then
        cp .env.example .env.local
        echo -e "${GREEN}✅ Created .env.local from .env.example${NC}"
    fi

    # Create test environment
    if [ ! -f ".env.test" ] && [ -f ".env.example" ]; then
        cp .env.example .env.test
        echo -e "${GREEN}✅ Created .env.test${NC}"
    fi
}

# Run initial build
run_initial_build() {
    echo -e "${YELLOW}Running initial build to verify setup...${NC}"

    npm run build

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Build successful${NC}"
    else
        echo -e "${RED}❌ Build failed. Please check for errors.${NC}"
        exit 1
    fi
}

# Run type checking
run_type_check() {
    echo -e "${YELLOW}Running TypeScript type check...${NC}"

    npm run type-check

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Type check passed${NC}"
    else
        echo -e "${YELLOW}⚠️ Type errors found. Please fix them.${NC}"
    fi
}

# Run linting
run_linting() {
    echo -e "${YELLOW}Running ESLint...${NC}"

    npm run lint

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Linting passed${NC}"
    else
        echo -e "${YELLOW}⚠️ Linting issues found. Run 'npm run lint:fix' to auto-fix.${NC}"
    fi
}

# Setup VS Code settings
setup_vscode() {
    echo -e "${YELLOW}Setting up VS Code configuration...${NC}"

    mkdir -p .vscode

    if [ ! -f ".vscode/settings.json" ]; then
        cat > .vscode/settings.json << 'EOF'
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/node_modules": true,
    "**/dist": true,
    "**/build": true,
    "**/.next": true,
    "**/coverage": true
  }
}
EOF
        echo -e "${GREEN}✅ VS Code settings created${NC}"
    fi
}

# Main execution
main() {
    echo ""
    check_node_version
    echo ""
    install_dependencies
    echo ""
    install_dev_tools
    echo ""
    setup_git_hooks
    echo ""
    setup_environment
    echo ""
    setup_vscode
    echo ""
    run_type_check
    echo ""
    run_linting
    echo ""
    run_initial_build
    echo ""

    echo -e "${GREEN}🎉 Claude Code PM System initialized successfully!${NC}"
    echo ""
    echo "Available commands:"
    echo "  npm run dev          - Start development server"
    echo "  npm run build        - Build for production"
    echo "  npm run test         - Run tests"
    echo "  npm run lint         - Run ESLint"
    echo "  npm run type-check   - Run TypeScript type checking"
    echo ""
    echo "PM Commands:"
    echo "  .claude/scripts/pm/epic-plan    - Plan a new epic"
    echo "  .claude/scripts/pm/task-start    - Start a new task"
    echo "  .claude/scripts/pm/task-complete - Complete a task"
    echo ""
    echo "For more information, see .claude/CLAUDE.md"
}

# Run main function
main