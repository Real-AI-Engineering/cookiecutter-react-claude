{% if cookiecutter.state_management == "zustand" -%}
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CounterStore {
  count: number
  loading: boolean
  increment: () => void
  decrement: () => void
  incrementByAmount: (amount: number) => void
  reset: () => void
  setLoading: (loading: boolean) => void
}

export const useCounterStore = create<CounterStore>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        loading: false,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        incrementByAmount: (amount) => set((state) => ({ count: state.count + amount })),
        reset: () => set({ count: 0 }),
        setLoading: (loading) => set({ loading }),
      }),
      {
        name: 'counter-storage', // unique name
        // Only persist the count, not loading state
        partialize: (state) => ({ count: state.count }),
      }
    ),
    {
      name: 'counter-store',
    }
  )
)

// Optional: Create additional stores for other features
interface AppStore {
  theme: 'light' | 'dark'
  language: string
  setTheme: (theme: 'light' | 'dark') => void
  setLanguage: (language: string) => void
}

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set) => ({
        theme: 'light',
        language: 'en',
        setTheme: (theme) => set({ theme }),
        setLanguage: (language) => set({ language }),
      }),
      {
        name: 'app-storage',
      }
    ),
    {
      name: 'app-store',
    }
  )
)
{% else -%}
// This file is only used when Zustand is selected as the state management solution
export {}
{% endif -%}