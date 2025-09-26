{% if cookiecutter.state_management == "zustand" -%}
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// Create your application stores here
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