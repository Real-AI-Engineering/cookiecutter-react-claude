{% if cookiecutter._use_nextjs == "y" and cookiecutter.state_management == "redux-toolkit" -%}
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
  loading: boolean
}

const initialState: CounterState = {
  value: 0,
  loading: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, reset, setLoading } = counterSlice.actions

export default counterSlice.reducer

// Typed hooks for use throughout the app
export const selectCount = (state: { counter: CounterState }) => state.counter.value
export const selectLoading = (state: { counter: CounterState }) => state.counter.loading
{% else -%}
// This file is only used for Next.js projects with Redux Toolkit state management
export {}
{% endif -%}