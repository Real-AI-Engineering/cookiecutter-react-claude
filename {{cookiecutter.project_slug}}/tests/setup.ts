import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers)

// Clean up after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})

const globalAny = globalThis as typeof globalThis & {
  IntersectionObserver: typeof IntersectionObserver
  ResizeObserver: typeof ResizeObserver
}

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds: ReadonlyArray<number> = []

  constructor() {}

  disconnect(): void {}
  observe(_: Element): void {}
  unobserve(_: Element): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

// Mock ResizeObserver
class MockResizeObserver implements ResizeObserver {
  constructor(_callback?: ResizeObserverCallback) {}

  disconnect(): void {}
  observe(_: Element, _options?: ResizeObserverOptions): void {}
  unobserve(_: Element): void {}
}

globalAny.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
globalAny.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // Deprecated
    removeListener: () => {}, // Deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
})

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: () => {},
})

// Mock console methods for cleaner test output
const originalError = console.error
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('Warning: ReactDOM.render is no longer supported')
  ) {
    return
  }
  originalError(...args)
}