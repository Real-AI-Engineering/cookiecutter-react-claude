# CLAUDE.md

> Think carefully and implement the most concise solution that changes as little code as possible.

## CORE PRINCIPLE: NO VIBE CODING

> **Every line of code must trace back to a specification.**

We follow a strict 5-phase discipline:

1. **🧠 Brainstorm** - Think deeper than comfortable
2. **📝 Document** - Write specs that leave nothing to interpretation
3. **📐 Plan** - Architect with explicit technical decisions
4. **⚡ Execute** - Build exactly what was specified
5. **📊 Track** - Maintain transparent progress at every step

No shortcuts. No assumptions. No regrets.

## USE SUB-AGENTS FOR CONTEXT OPTIMIZATION

### 1. Always use the file-analyzer sub-agent when asked to read files.
The file-analyzer agent is an expert in extracting and summarizing critical information from files, particularly log files and verbose outputs. It provides concise, actionable summaries that preserve essential information while dramatically reducing context usage.

### 2. Always use the code-analyzer sub-agent when asked to search code, analyze code, research bugs, or trace logic flow.
The code-analyzer agent is an expert in code analysis, logic tracing, and vulnerability detection. It provides concise, actionable summaries that preserve essential information while dramatically reducing context usage.

### 3. Always use the test-runner sub-agent to run tests and analyze the test results.
Using the test-runner agent ensures:
- Full test output is captured for debugging
- Main conversation stays clean and focused
- Context usage is optimized
- All issues are properly surfaced
- No approval dialogs interrupt the workflow

### 4. For React/TypeScript projects, use specialized agents:
- **eslint-analyzer** - For code quality and formatting
- **vitest-runner** - For unit and component testing
- **playwright-runner** - For E2E testing
- **component-analyzer** - For React component analysis
- **bundle-optimizer** - For build size optimization

## Philosophy

### Error Handling
- **Fail fast** for critical configuration (missing dependencies)
- **Log and continue** for optional features
- **Graceful degradation** when external services unavailable
- **User-friendly messages** through resilience layer
- **Error boundaries** for React component failures

### Testing (React/TypeScript-Specific)
- Always use the vitest-runner agent for unit tests
- Use playwright-runner for E2E tests
- Do not use mock services for anything ever
- Test components in isolation with Testing Library
- Test user interactions, not implementation details
- Coverage minimum: 80% for critical components
- E2E tests for critical user journeys

### Code Quality (React/TypeScript-Specific)
- Run `npm run lint` before any commit
- Run `npm run format` for consistent formatting
- Run `npm run type-check` for type safety
- Follow React best practices (hooks rules, etc.)
- Use TypeScript strict mode
- Prefer functional components with hooks
- Keep components small and focused

## Tone and Behavior
- Criticism is welcome. Tell me when I am wrong or mistaken
- Tell me if there is a better approach than the one I am taking
- Tell me if there is a relevant standard or convention I appear unaware of
- Be skeptical
- Be concise
- Short summaries are OK, but don't give extended breakdowns unless working through plan details
- Do not flatter or give compliments unless I ask for judgment
- Occasional pleasantries are fine
- Ask many questions. If in doubt of intent, don't guess. Ask.

## ABSOLUTE RULES:

### Code Implementation
- NO PARTIAL IMPLEMENTATION - Complete every feature fully
- NO SIMPLIFICATION - No "//This is simplified for now" comments
- NO CODE DUPLICATION - Check existing codebase to reuse functions and constants
- NO DEAD CODE - Either use or delete from codebase completely
- NO INCONSISTENT NAMING - Read existing codebase naming patterns
- NO OVER-ENGINEERING - Don't add unnecessary abstractions when simple functions work
- NO MIXED CONCERNS - Maintain proper separation of concerns
- NO RESOURCE LEAKS - Clean up event listeners, timers, subscriptions

### Testing Rules
- IMPLEMENT TEST FOR EVERY FUNCTION/COMPONENT - No exceptions
- NO CHEATER TESTS - Tests must be accurate and reveal flaws
- USE TESTING LIBRARY - For component testing
- TEST USER BEHAVIOR - Not implementation details
- VERBOSE OUTPUT - Design tests for debugging

### React-Specific Rules
- USE FUNCTIONAL COMPONENTS - No class components unless required
- FOLLOW HOOKS RULES - Respect rules of hooks
- TYPE EVERYTHING - Full TypeScript types required
- NO INLINE STYLES - Use Tailwind or CSS modules
- PROPER KEY PROPS - Always use stable, unique keys
- MEMO WISELY - Only memoize when necessary
- ERROR BOUNDARIES - Wrap features in error boundaries
- ACCESSIBILITY FIRST - ARIA labels, semantic HTML

### TypeScript Rules
- STRICT MODE - Always use strict TypeScript
- NO ANY TYPE - Avoid `any`, use `unknown` if needed
- EXPLICIT RETURNS - Type all function returns
- INTERFACE OVER TYPE - Prefer interfaces for objects
- ENUM CAREFULLY - Consider const assertions instead

### Performance Rules
- LAZY LOAD - Code split and lazy load routes
- OPTIMIZE IMAGES - Use next/image or proper loading
- MINIMIZE RERENDERS - Use React DevTools profiler
- BUNDLE ANALYSIS - Regular bundle size checks
- WEB VITALS - Monitor Core Web Vitals

### Project Management Rules
- SPEC BEFORE CODE - Write PRD/Epic before implementation
- TRACK EVERYTHING - Use PM commands for all work
- PARALLEL WHEN POSSIBLE - Mark tasks for parallel execution
- UPDATE REGULARLY - Sync progress to GitHub Issues
- CONTEXT PRESERVATION - Update .claude/context/ regularly