{% if cookiecutter._use_nextjs == "y" and cookiecutter.state_management == "redux-toolkit" -%}
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // Add your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
{% else -%}
// This file is only used for Next.js projects with Redux Toolkit state management
export {}
{% endif -%}