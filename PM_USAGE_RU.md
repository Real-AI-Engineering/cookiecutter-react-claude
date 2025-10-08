# PM System Usage Guide / Руководство по использованию PM-системы

*This guide provides detailed scenarios for using the Claude Code PM system in React/TypeScript projects created with cookiecutter-react-claude template.*

*Данное руководство содержит подробные сценарии использования PM-системы Claude Code в React/TypeScript проектах, созданных с помощью шаблона cookiecutter-react-claude.*

---

## 📋 Core PM Commands / Основные PM-команды

### Epic Management / Управление эпиками

```bash
# Plan a new epic with GitHub issue creation
# Спланировать новый эпик с созданием GitHub issue
.claude/scripts/pm/epic-plan

# View current epic status
# Посмотреть статус текущего эпика
.claude/scripts/pm/epic-status

# Complete an epic
# Завершить эпик
.claude/scripts/pm/epic-complete

# List all epics
# Показать список всех эпиков
.claude/scripts/pm/epic-list

# Show specific epic details
# Показать детали конкретного эпика
.claude/scripts/pm/epic-show <epic-name>
```

### Task Management / Управление задачами

```bash
# Start a new task (creates worktree)
# Начать новую задачу (создаёт worktree)
.claude/scripts/pm/task-start

# Complete current task (merges to main)
# Завершить текущую задачу (сливает в main)
.claude/scripts/pm/task-complete

# Update task progress
# Обновить прогресс по задаче
.claude/scripts/pm/task-update

# Block a task with reason
# Заблокировать задачу с указанием причины
.claude/scripts/pm/task-block "Waiting for design specs"
```

### Progress Tracking / Отслеживание прогресса

```bash
# Generate progress report
# Генерация отчёта о прогрессе
.claude/scripts/pm/progress-report

# Sync with GitHub issues
# Синхронизация с GitHub Issues
.claude/scripts/pm/sync-github

# View all tasks status
# Просмотр статуса всех задач
.claude/scripts/pm/status

# Daily standup report
# Ежедневный standup-отчёт
.claude/scripts/pm/standup

# Search tasks and epics
# Поиск по задачам и эпикам
.claude/scripts/pm/search "authentication"
```

### Utilities / Утилиты

```bash
# Validate PM data consistency
# Проверка консистентности PM-данных
.claude/scripts/pm/validate.sh

# Show PM commands help
# Справка по PM-командам
.claude/scripts/pm/help.sh

# Initialize PM system
# Инициализация PM-системы
.claude/scripts/pm/init.sh
```

---

## 🎯 Detailed Usage Scenarios / Подробные сценарии использования

### Scenario 1: Developing a New Major Feature / Сценарий 1: Разработка новой крупной фичи

*This scenario describes the complete development cycle of a major feature from idea to release.*

*Этот сценарий описывает полный цикл разработки крупной функциональности от идеи до релиза.*

#### Step 1: Epic Planning / Шаг 1: Планирование эпика

```bash
# Start epic planning
# Запускаем команду планирования эпика
.claude/scripts/pm/epic-plan

# System will prompt for:
# Система попросит ввести:
# 1. Epic name (e.g., "User Authentication System")
#    Название эпика (например: "User Authentication System")
# 2. Brief description
#    Краткое описание
# 3. Success criteria
#    Критерии успеха
# 4. Technical requirements
#    Технические требования

# After input, the system creates:
# После ввода система создаст:
# - Directory .claude/epics/user-authentication-system/
# - File PRD.md with requirements
# - File tasks.md with automatic task breakdown
# - GitHub Issue (if integration is configured)
# - File progress.md for tracking
```

**Example created epic structure / Пример структуры созданного эпика:**
```
.claude/epics/user-authentication-system/
├── PRD.md                 # Product Requirements
│   ├── Goals and objectives
│   ├── User stories
│   ├── Success criteria
│   └── Technical requirements
├── tasks.md               # Task breakdown
│   ├── Task 1: Create login component
│   ├── Task 2: Implement JWT token handling
│   ├── Task 3: Add session management
│   └── Task 4: E2E tests for auth flow
├── progress.md            # Progress tracking
├── components/            # Epic components
├── __tests__/            # Epic tests
└── .env.local            # Epic-specific config
```

#### Step 2: Review and Adjust Tasks / Шаг 2: Просмотр и корректировка задач

```bash
# View current epic status
# Просмотреть текущий статус эпика
.claude/scripts/pm/epic-status

# Output shows:
# Вывод покажет:
# Epic: User Authentication System
# Status: In Progress
# Progress: 0/4 tasks completed (0%)
#
# Tasks:
# [ ] 1. Create login component
# [ ] 2. Implement JWT token handling
# [ ] 3. Add session management
# [ ] 4. E2E tests for auth flow

# If you need to edit tasks, open the file:
# Если нужно отредактировать задачи, открываем файл:
vim .claude/epics/user-authentication-system/tasks.md

# You can add/remove/modify tasks
# Можно добавить/удалить/изменить задачи

# After changes, validate:
# После изменений валидируем:
.claude/scripts/pm/validate.sh
```

#### Step 3: Starting Work on First Task / Шаг 3: Начало работы над первой задачей

```bash
# Start a task
# Запускаем начало задачи
.claude/scripts/pm/task-start

# System shows task list:
# Система покажет список задач:
# Select a task to start:
# 1. Create login component
# 2. Implement JWT token handling
# 3. Add session management
# 4. E2E tests for auth flow
#
# Enter task number: 1

# After selection, the system:
# После выбора система:
# 1. Creates Git worktree in .claude/epics/user-authentication-system/tasks/task-1/
# 2. Creates feature branch: feature/user-authentication-system/create-login-component
# 3. Switches you to the worktree
# 4. Updates progress.md

# You are now in an isolated work environment:
# Вы окажетесь в изолированном рабочем окружении:
cd .claude/epics/user-authentication-system/tasks/task-1/

# Now you can work independently from the main branch
# Теперь можно работать независимо от основной ветки
```

#### Step 4: Component Development / Шаг 4: Разработка компонента

```bash
# Create component using PM command
# Создаём компонент с помощью PM-команды
/pm:component-create LoginForm components/auth

# System creates:
# Система создаст:
# - components/auth/LoginForm.tsx
# - components/auth/LoginForm.test.tsx
# - components/auth/LoginForm.module.css (if using CSS Modules)

# Start dev server
# Запускаем dev-сервер
npm run dev

# In another terminal - tests in watch mode
# В другом терминале - тесты в watch-режиме
npm run test:watch LoginForm

# Develop component following TDD:
# Разрабатываем компонент, следуя TDD:
# 1. Write test / Пишем тест
# 2. Implement functionality / Реализуем функциональность
# 3. Refactor / Рефакторим
# 4. Repeat / Повторяем
```

**Development example / Пример разработки:**
```typescript
// components/auth/LoginForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  test('submits form with email and password', async () => {
    const handleSubmit = vi.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' }
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    });
  });
});
```

#### Step 5: Quality Check / Шаг 5: Проверка качества

```bash
# Check types
# Проверяем типы
npm run type-check

# Linting
# Линтинг
npm run lint

# All tests
# Все тесты
npm run test

# Coverage
# Покрытие
npm run test:coverage

# Ensure LoginForm.tsx has >80% coverage
# Убеждаемся, что LoginForm.tsx имеет >80% покрытия
```

#### Step 6: Update Progress / Шаг 6: Обновление прогресса

```bash
# Update task progress
# Обновляем прогресс по задаче
.claude/scripts/pm/task-update

# System prompts:
# Система попросит:
# Enter progress update: "Completed LoginForm component with validation"
# Current status (in-progress/blocked/review): review

# Progress is automatically synced to:
# Прогресс автоматически синхронизируется с:
# - progress.md in epic directory
# - GitHub Issue (if configured)
```

#### Step 7: Complete Task / Шаг 7: Завершение задачи

```bash
# Ensure everything works
# Убеждаемся, что всё работает
npm run build
npm run preview

# Complete task
# Завершаем задачу
.claude/scripts/pm/task-complete

# System will:
# Система выполнит:
# 1. Final checks (tests, linting, type-check)
# 2. Commit changes
# 3. Merge feature branch to main
# 4. Remove worktree
# 5. Update progress.md
# 6. Close task in GitHub (if configured)

# You automatically return to main branch
# Вы автоматически вернётесь в main branch
```

#### Step 8: Parallel Work on Multiple Tasks / Шаг 8: Параллельная работа над несколькими задачами

```bash
# Now you can start next tasks in parallel
# Теперь можно начать следующие задачи параллельно
.claude/scripts/pm/task-start
# Select task 2: Implement JWT token handling

# In another terminal (or ask a colleague):
# В другом терминале (или попросить коллегу):
.claude/scripts/pm/task-start
# Select task 3: Add session management

# Now working in parallel:
# Теперь работаем параллельно:
# Terminal 1: .claude/epics/user-authentication-system/tasks/task-2/
# Terminal 2: .claude/epics/user-authentication-system/tasks/task-3/

# Each task is isolated in its own worktree
# Каждая задача изолирована в своём worktree
# You can work independently without conflicts
# Можно работать независимо без конфликтов
```

#### Step 9: Generate Progress Report / Шаг 9: Генерация отчёта о прогрессе

```bash
# Generate report
# Генерируем отчёт
.claude/scripts/pm/progress-report

# Output:
# Вывод:
# ==========================================
# Progress Report: User Authentication System
# ==========================================
#
# Epic Status: In Progress
# Overall Progress: 2/4 tasks (50%)
#
# Completed Tasks:
# ✓ Task 1: Create login component (2h 15m)
# ✓ Task 2: Implement JWT token handling (3h 45m)
#
# In Progress:
# → Task 3: Add session management (Started 1h ago)
#
# Blocked:
# (none)
#
# Remaining:
# ☐ Task 4: E2E tests for auth flow
#
# Estimated Completion: 2024-10-09 (Tomorrow)
# Total Time Spent: 7h 0m
```

#### Step 10: Complete Epic / Шаг 10: Завершение эпика

```bash
# After completing all tasks
# После завершения всех задач
.claude/scripts/pm/epic-complete

# System will:
# Система выполнит:
# 1. Check that all tasks are completed
# 2. Run final tests for the entire epic
# 3. Generate final report
# 4. Archive epic
# 5. Close GitHub Issue
# 6. Create release notes (optional)

# Output:
# Вывод:
# ✓ Epic "User Authentication System" completed!
# ✓ All 4 tasks completed
# ✓ Total time: 15h 30m
# ✓ GitHub Issue #42 closed
# ✓ Epic archived to .claude/epics/archive/
```

---

### Scenario 2: Urgent Production Hotfix / Сценарий 2: Срочный багфикс в production

*This scenario shows how to quickly fix a critical bug without disrupting the workflow.*

*Этот сценарий показывает, как быстро исправить критический баг без нарушения workflow.*

#### Step 1: Bug Discovery / Шаг 1: Обнаружение бага

```bash
# Received message: "Users can't login after password reset"
# Получили сообщение: "Users can't login after password reset"

# Check current state
# Проверяем текущее состояние
.claude/scripts/pm/status

# Output:
# Вывод:
# Current Epic: User Dashboard
# Active Tasks: 2
# - Task 5: Add user profile editing (in-progress)
# - Task 6: Implement avatar upload (in-progress)

# We have active tasks, but the bug is critical
# У нас есть активные задачи, но баг критический
```

#### Step 2: Create Hotfix Epic / Шаг 2: Создание hotfix-эпика

```bash
# Create a special hotfix epic
# Создаём специальный hotfix-эпик
.claude/scripts/pm/epic-plan

# Enter:
# Вводим:
# Name: Hotfix - Password Reset Login Issue
# Type: hotfix
# Priority: critical
# Description: Users cannot login after resetting password

# System creates:
# Система создаст:
# - Epic with hotfix/ prefix
# - Automatically high priority
# - Simplified structure (no lengthy planning)
```

#### Step 3: Reproduce the Bug / Шаг 3: Воспроизведение бага

```bash
# Start hotfix task
# Начинаем задачу по багфиксу
.claude/scripts/pm/task-start

# Select the only task: "Fix password reset login bug"
# Выбираем единственную задачу: "Fix password reset login bug"

# Go to worktree
# Переходим в worktree
cd .claude/epics/hotfix-password-reset-login-issue/tasks/task-1/

# First, reproduce bug with a test
# Сначала воспроизводим баг с тестом
npm run test:watch

# Create failing test:
# Создаём failing test:
# tests/auth/passwordReset.test.tsx
test('allows login after password reset', async () => {
  // 1. Reset password
  await resetPassword('user@example.com');

  // 2. Try to login with new password
  const result = await login('user@example.com', 'newPassword123');

  // This test should fail, reproducing the bug
  // Этот тест должен упасть, воспроизводя баг
  expect(result.success).toBe(true);
});

# Test fails - bug reproduced
# Тест падает - баг воспроизведён
```

#### Step 4: Debug and Fix / Шаг 4: Отладка и исправление

```bash
# Run app in debug mode
# Запускаем приложение в debug-режиме
npm run dev

# Go through the flow:
# Проходим flow:
# 1. Open /reset-password
# 2. Enter email
# 3. Get token from console (in dev mode)
# 4. Reset password
# 5. Try to login
# 6. Error: "Invalid credentials"

# Find the problem in logs:
# Находим проблему в логах:
# Error: JWT token not invalidated after password reset

# Fix in src/auth/resetPassword.ts:
export async function resetPassword(email: string, newPassword: string) {
  // ... existing code ...

  // FIX: Invalidate all existing tokens
  await invalidateUserTokens(user.id);

  // ... rest of code ...
}

# Test now passes!
# Тест теперь проходит!
```

#### Step 5: Test on Production-like Environment / Шаг 5: Проверка на production-подобном окружении

```bash
# Build production bundle
# Собираем production-сборку
npm run build

# Run in production mode
# Запускаем в production-режиме
npm run preview

# Or through Docker (if using)
# Или через Docker (если используется)
docker build -t hotfix-test .
docker run -p 3000:3000 hotfix-test

# Verify entire flow manually
# Проверяем весь flow вручную
# Ensure bug is fixed and nothing else broke
# Убеждаемся, что баг исправлен и ничего не сломалось
```

#### Step 6: Extended Testing / Шаг 6: Расширенное тестирование

```bash
# Run all auth tests
# Запускаем все auth-тесты
npm run test src/auth/

# E2E tests for critical flows
# E2E тесты для критических флоу
npm run test:e2e tests/e2e/auth-flow.spec.ts

# Check that other scenarios didn't break:
# Проверяем, что не сломались другие сценарии:
npm run test:e2e tests/e2e/login.spec.ts
npm run test:e2e tests/e2e/registration.spec.ts

# All tests should pass
# Все тесты должны проходить
```

#### Step 7: Quick Release / Шаг 7: Быстрый релиз

```bash
# Complete task
# Завершаем задачу
.claude/scripts/pm/task-complete

# System merges to main and runs CI/CD
# Система мержит в main и запускает CI/CD

# Complete hotfix epic
# Завершаем hotfix-эпик
.claude/scripts/pm/epic-complete

# Create hotfix release
# Создаём hotfix-релиз
git tag -a v1.2.1 -m "Hotfix: Password reset login issue"
git push origin v1.2.1

# Deploy goes automatically through GitHub Actions
# Деплой идёт автоматически через GitHub Actions
# Or manually:
# Или вручную:
npm run deploy:production
```

#### Step 8: Return to Main Work / Шаг 8: Возврат к основной работе

```bash
# Check that hotfix is deployed
# Проверяем, что hotfix задеплоен
curl https://api.yourapp.com/health

# Return to interrupted tasks
# Возвращаемся к прерванным задачам
.claude/scripts/pm/epic-list

# See:
# Видим:
# Active Epics:
# 1. User Dashboard (2/6 tasks)
# 2. Hotfix - Password Reset Login Issue (COMPLETED)

# Switch back to User Dashboard
# Переключаемся обратно на User Dashboard
cd .claude/epics/user-dashboard/tasks/task-5/

# Continue work on user profile
# Продолжаем работу над профилем пользователя
npm run dev
```

---

### Scenario 3: Team Parallel Development / Сценарий 3: Параллельная разработка команды

*This scenario shows how multiple developers work on one epic in parallel.*

*Этот сценарий показывает, как несколько разработчиков работают над одним эпиком параллельно.*

#### Developer 1: Epic Setup (Team Lead)

```bash
# Team Lead creates epic for new feature
# Team Lead создаёт эпик для новой фичи
.claude/scripts/pm/epic-plan

# Name: E-commerce Shopping Cart
# Название: E-commerce Shopping Cart

# Tasks automatically broken down:
# Задачи автоматически разбиты:
# 1. Create cart UI component
# 2. Implement cart state management
# 3. Add product to cart functionality
# 4. Cart persistence (localStorage)
# 5. Checkout integration
# 6. E2E tests for cart flow

# Sync with GitHub
# Синхронизируем с GitHub
.claude/scripts/pm/sync-github

# GitHub Issue #123 created
# Создаётся GitHub Issue #123
# Entire team sees epic and tasks
# Все в команде видят эпик и задачи
```

#### Developer 1: Start Working on UI

```bash
# Dev 1 takes first task
# Dev 1 берёт первую задачу
.claude/scripts/pm/task-start
# Selects: 1. Create cart UI component

# Create component
# Создаёт компонент
/pm:component-create ShoppingCart components/cart

# Develop
# Разрабатывает
npm run dev
npm run test:watch ShoppingCart

# Make commits in their worktree
# Делает коммиты в своём worktree
git add components/cart/ShoppingCart.tsx
git commit -m "feat: add ShoppingCart component skeleton"

# Update progress
# Обновляет прогресс
.claude/scripts/pm/task-update
# Status: in-progress
# Update: "UI layout completed, adding item rendering"
```

#### Developer 2: Parallel Work on State Management

```bash
# Dev 2 clones repository
# Dev 2 клонирует репозиторий
git clone https://github.com/team/ecommerce-app.git
cd ecommerce-app

# Initialize PM system
# Инициализирует PM-систему
bash .claude/init.sh

# Take second task
# Берёт вторую задачу
.claude/scripts/pm/task-start
# Selects: 2. Implement cart state management

# Dev 2 in their worktree:
# Dev 2 в своём worktree:
cd .claude/epics/e-commerce-shopping-cart/tasks/task-2/

# Create Zustand store (or Redux slice)
# Создаёт Zustand store (или Redux slice)
/pm:hook-create useCart

# Develop independently from Dev 1
# Разрабатывает независимо от Dev 1
# No conflicts, as in separate worktree
# Не конфликтует, т.к. в отдельном worktree
```

#### Developer 3: Working on Integration

```bash
# Dev 3 takes task 3
# Dev 3 берёт задачу 3
.claude/scripts/pm/task-start
# Selects: 3. Add product to cart functionality

# But this task depends on tasks 1 and 2!
# Но эта задача зависит от задач 1 и 2!
# Check their status:
# Проверяем их статус:
.claude/scripts/pm/epic-status

# See:
# Видим:
# [in-progress] 1. Create cart UI component (Dev 1)
# [in-progress] 2. Implement cart state management (Dev 2)
# [started] 3. Add product to cart functionality (You)

# Block own task until dependencies complete
# Блокируем свою задачу до завершения зависимостей
.claude/scripts/pm/task-block "Waiting for tasks 1 and 2"

# Take independent task 4 instead
# Берём независимую задачу 4 вместо этого
.claude/scripts/pm/task-start
# Selects: 4. Cart persistence (localStorage)
```

#### Daily Standup

```bash
# Next morning, everyone runs:
# Утром следующего дня каждый запускает:
.claude/scripts/pm/standup

# Dev 1 sees:
# Dev 1 видит:
# Your tasks:
# ✓ Yesterday: Created ShoppingCart UI skeleton
# → Today: Complete item rendering and interactions
# ☐ Blockers: None

# Dev 2 sees:
# Dev 2 видит:
# Your tasks:
# ✓ Yesterday: Implemented useCart hook with add/remove
# → Today: Add quantity management and totals calculation
# ☐ Blockers: None

# Dev 3 sees:
# Dev 3 видит:
# Your tasks:
# ✓ Yesterday: Implemented localStorage persistence
# → Today: Add cart hydration on app start
# ⚠ Blockers: Task 3 waiting for tasks 1 and 2
```

#### Developer 1: Complete UI Component

```bash
# Dev 1 completes task
# Dev 1 завершает задачу
npm run test
npm run lint
npm run type-check

# Everything passes
# Всё проходит
.claude/scripts/pm/task-complete

# Code merges to main
# Код мержится в main
# Task 1 marked as completed
# Task 1 помечена как completed

# Dev 1 takes next task
# Dev 1 берёт следующую задачу
.claude/scripts/pm/task-start
# Selects: 5. Checkout integration
```

#### Developer 2: Complete State Management

```bash
# Dev 2 also completes
# Dev 2 тоже завершает
.claude/scripts/pm/task-complete

# Now tasks 1 and 2 in main
# Теперь tasks 1 и 2 в main
```

#### Developer 3: Unblock and Continue

```bash
# Dev 3 sees dependencies are completed
# Dev 3 видит, что зависимости выполнены
.claude/scripts/pm/status

# Tasks 1 and 2 completed!

# Complete task 4
# Завершает task 4
.claude/scripts/pm/task-complete

# Now can take task 3
# Теперь может взять task 3
.claude/scripts/pm/task-start
# Selects: 3. Add product to cart functionality

# Get fresh code from main with results of tasks 1 and 2
# Получает свежий код из main с результатами tasks 1 и 2
# Integrate everything together
# Интегрирует всё вместе
```

#### Code Review Process

```bash
# Team Lead reviews entire epic
# Team Lead проверяет весь эпик
.claude/scripts/pm/progress-report

# Epic: E-commerce Shopping Cart
# Progress: 4/6 tasks (67%)
#
# Completed:
# ✓ Task 1: Create cart UI component (Dev 1, 4h)
# ✓ Task 2: Implement cart state management (Dev 2, 3h)
# ✓ Task 3: Add product to cart functionality (Dev 3, 2h)
# ✓ Task 4: Cart persistence (Dev 3, 2h)
#
# In Progress:
# → Task 5: Checkout integration (Dev 1)
#
# Pending:
# ☐ Task 6: E2E tests for cart flow

# Team Lead reviews code
# Team Lead проверяет код
git checkout main
npm run test
npm run build

# Everything works!
# Всё работает!
```

#### Final E2E Tests

```bash
# Dev 1 or QA Engineer takes last task
# Dev 1 или QA Engineer берёт последнюю задачу
.claude/scripts/pm/task-start
# Selects: 6. E2E tests for cart flow

# Write comprehensive E2E tests
# Пишет комплексные E2E тесты
npm run test:e2e:headed

# tests/e2e/shopping-cart.spec.ts
test('complete shopping cart flow', async ({ page }) => {
  // 1. Add product to cart
  await page.goto('/products');
  await page.click('[data-testid="add-to-cart-1"]');

  // 2. Verify cart badge
  await expect(page.locator('[data-testid="cart-badge"]')).toHaveText('1');

  // 3. Open cart
  await page.click('[data-testid="cart-icon"]');

  // 4. Verify product in cart
  await expect(page.locator('[data-testid="cart-item-1"]')).toBeVisible();

  // 5. Update quantity
  await page.click('[data-testid="increase-quantity"]');
  await expect(page.locator('[data-testid="quantity"]')).toHaveText('2');

  // 6. Proceed to checkout
  await page.click('[data-testid="checkout-button"]');
  await expect(page).toHaveURL('/checkout');
});

# Complete
# Завершаем
.claude/scripts/pm/task-complete
```

#### Complete Epic and Release

```bash
# Team Lead completes epic
# Team Lead завершает эпик
.claude/scripts/pm/epic-complete

# Create release
# Создаётся релиз
git tag -a v2.0.0 -m "feat: Add e-commerce shopping cart"
git push origin v2.0.0

# CI/CD automatically deploys
# CI/CD автоматически деплоит
# Team celebrates success! 🎉
# Команда празднует успех! 🎉
```

---

## 📖 Quick Command Reference / Краткая справка команд

### PM Commands

```bash
# Epics / Эпики
.claude/scripts/pm/epic-plan              # Create epic
.claude/scripts/pm/epic-status             # Epic status
.claude/scripts/pm/epic-complete           # Complete epic
.claude/scripts/pm/epic-list               # List epics
.claude/scripts/pm/epic-show <name>        # Epic details

# Tasks / Задачи
.claude/scripts/pm/task-start              # Start task
.claude/scripts/pm/task-complete           # Complete task
.claude/scripts/pm/task-update             # Update progress
.claude/scripts/pm/task-block "reason"     # Block task

# Reports / Отчёты
.claude/scripts/pm/progress-report         # Progress report
.claude/scripts/pm/status                  # Current status
.claude/scripts/pm/standup                 # Standup report
.claude/scripts/pm/search "query"          # Search

# Utilities / Утилиты
.claude/scripts/pm/sync-github             # Sync with GitHub
.claude/scripts/pm/validate.sh             # Validate data
.claude/scripts/pm/help.sh                 # Help
.claude/scripts/pm/init.sh                 # Initialize
```

### React Commands

```bash
# Development / Разработка
npm run dev              # Dev server
npm run build            # Production build
npm run preview          # Preview build

# Testing / Тестирование
npm run test             # Unit tests
npm run test:watch       # Watch mode
npm run test:coverage    # With coverage
npm run test:e2e         # E2E tests

# Quality / Качество
npm run lint             # Linting
npm run lint:fix         # Fix errors
npm run type-check       # Type checking
npm run format           # Formatting
npm run analyze          # Bundle analysis
```

---

## 📚 Further Reading / Дополнительное чтение

- [CLAUDE.md](.claude/CLAUDE.md) - Core principles and React rules
- [AGENTS.md](.claude/AGENTS.md) - React-specific AI agents
- [PM_USAGE.md (English)](.claude/PM_USAGE.md) - English version
- [Testing Guide](https://vitest.dev/) - Vitest documentation
- [Playwright Docs](https://playwright.dev/) - E2E testing guide
- [React DevTools](https://react.dev/learn/react-developer-tools) - Performance profiling
