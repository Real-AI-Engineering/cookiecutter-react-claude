import { test, expect } from '@playwright/test'

test.describe('Basic App Functionality', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/')
    
    // Check that the page loads and contains expected content
    await expect(page).toHaveTitle(/{{cookiecutter.project_name}}/)
    await expect(page.getByText('Welcome to {{cookiecutter.project_name}}')).toBeVisible()
  })

  test('should navigate between pages', async ({ page }) => {
    await page.goto('/')
    
    // Navigate to About page
    await page.getByRole('link', { name: /about/i }).click()
    await expect(page).toHaveURL(/.*\/about/)
    await expect(page.getByText(/about/i)).toBeVisible()
    
    // Navigate back to Home
    await page.getByRole('link', { name: /home/i }).click()
    await expect(page).toHaveURL('/')
  })

  test('should have working counter component', async ({ page }) => {
    await page.goto('/')
    
    // Find counter component
    const counter = page.locator('text=Counter Example').locator('..')
    await expect(counter).toBeVisible()
    
    // Check initial state
    await expect(counter.getByText('0')).toBeVisible()
    
    // Test increment
    await counter.getByRole('button', { name: '+' }).click()
    await expect(counter.getByText('1')).toBeVisible()
    
    // Test increment again
    await counter.getByRole('button', { name: '+' }).click()
    await expect(counter.getByText('2')).toBeVisible()
    
    // Test decrement
    await counter.getByRole('button', { name: '-' }).click()
    await expect(counter.getByText('1')).toBeVisible()
    
    // Test reset
    await counter.getByRole('button', { name: /reset/i }).click()
    await expect(counter.getByText('0')).toBeVisible()
  })

  test('should have responsive design', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/')
    
    // Desktop navigation should be visible
    const desktopNav = page.locator('nav').first()
    await expect(desktopNav).toBeVisible()
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Mobile menu button should be visible
    const mobileMenuButton = page.getByLabel(/toggle menu|menu/i)
    await expect(mobileMenuButton).toBeVisible()
  })

  test('should have working theme toggle', async ({ page }) => {
    await page.goto('/')
    
    // Find theme toggle button
    const themeToggle = page.getByLabel(/toggle theme|theme/i)
    await expect(themeToggle).toBeVisible()
    
    // Get initial theme state
    const body = page.locator('body')
    const initialClass = await body.getAttribute('class')
    
    // Toggle theme
    await themeToggle.click()
    
    // Check that theme has changed
    const newClass = await body.getAttribute('class')
    expect(newClass).not.toBe(initialClass)
  })

  test('should have external links working', async ({ page, context }) => {
    await page.goto('/')
    
    // Test GitHub link
    const githubLink = page.getByRole('link', { name: /github/i }).first()
    
    // Listen for new page
    const pagePromise = context.waitForEvent('page')
    await githubLink.click()
    const newPage = await pagePromise
    
    // Check that new page opened with GitHub URL
    expect(newPage.url()).toContain('github.com')
    await newPage.close()
  })

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/')
    
    // Check for main landmark
    await expect(page.getByRole('main')).toBeVisible()
    
    // Check for proper heading hierarchy
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    
    // Check that buttons have accessible names
    const buttons = page.getByRole('button')
    const buttonCount = await buttons.count()
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i)
      const accessibleName = await button.getAttribute('aria-label') || 
                            await button.textContent()
      expect(accessibleName).toBeTruthy()
    }
    
    // Check that links have accessible names
    const links = page.getByRole('link')
    const linkCount = await links.count()
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i)
      const accessibleName = await link.getAttribute('aria-label') || 
                            await link.textContent()
      expect(accessibleName?.trim()).toBeTruthy()
    }
  })

  test('should handle errors gracefully', async ({ page }) => {
    // Try to navigate to a non-existent page
    await page.goto('/non-existent-page')
    
    // Should redirect to home or show 404
    // This depends on your routing setup
    {% if cookiecutter.app_type == "spa" -%}
    await expect(page).toHaveURL('/')
    {% else -%}
    // Next.js should show 404 page
    await expect(page.getByText(/404|not found/i)).toBeVisible()
    {% endif -%}
  })
})