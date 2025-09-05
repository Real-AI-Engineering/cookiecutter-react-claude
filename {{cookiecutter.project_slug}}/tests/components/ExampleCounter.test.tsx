import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
{% if cookiecutter.use_i18n == "y" -%}
import { I18nextProvider } from 'react-i18next'
import i18n from '../mocks/i18n'
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../src/stores/slices/counterSlice'
{% endif -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
import { ChakraProvider } from '@chakra-ui/react'
{% elif cookiecutter.ui_library == "material-ui" -%}
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../src/theme'
{% endif -%}
import { ExampleCounter } from '../../src/components/ExampleCounter'

{% if cookiecutter.state_management == "redux-toolkit" -%}
// Create a test store
const createTestStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  })
}
{% endif -%}

// Test wrapper component
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
{% if cookiecutter.state_management == "redux-toolkit" -%}
  const store = createTestStore()
{% endif -%}
  
  return (
{% if cookiecutter.state_management == "redux-toolkit" -%}
    <Provider store={store}>
{% endif -%}
{% if cookiecutter.use_i18n == "y" -%}
      <I18nextProvider i18n={i18n}>
{% endif -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
        <ChakraProvider>
{% elif cookiecutter.ui_library == "material-ui" -%}
        <ThemeProvider theme={theme}>
{% endif -%}
          {children}
{% if cookiecutter.ui_library == "chakra-ui" -%}
        </ChakraProvider>
{% elif cookiecutter.ui_library == "material-ui" -%}
        </ThemeProvider>
{% endif -%}
{% if cookiecutter.use_i18n == "y" -%}
      </I18nextProvider>
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
    </Provider>
{% endif -%}
  )
}

describe('ExampleCounter', () => {
  beforeEach(() => {
    // Reset any mocks or state before each test
  })

  it('renders counter with initial value of 0', () => {
    render(
      <TestWrapper>
        <ExampleCounter />
      </TestWrapper>
    )

    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('Counter Example')).toBeInTheDocument()
  })

  it('increments counter when + button is clicked', () => {
    render(
      <TestWrapper>
        <ExampleCounter />
      </TestWrapper>
    )

    const incrementButton = screen.getByText('+')
    fireEvent.click(incrementButton)

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('decrements counter when - button is clicked', () => {
    render(
      <TestWrapper>
        <ExampleCounter />
      </TestWrapper>
    )

    const incrementButton = screen.getByText('+')
    const decrementButton = screen.getByText('-')
    
    // First increment to 1
    fireEvent.click(incrementButton)
    expect(screen.getByText('1')).toBeInTheDocument()
    
    // Then decrement back to 0
    fireEvent.click(decrementButton)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('resets counter to 0 when Reset button is clicked', () => {
    render(
      <TestWrapper>
        <ExampleCounter />
      </TestWrapper>
    )

    const incrementButton = screen.getByText('+')
    const resetButton = screen.getByText(/Reset/i)
    
    // Increment a few times
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    expect(screen.getByText('3')).toBeInTheDocument()
    
    // Reset
    fireEvent.click(resetButton)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('handles multiple operations correctly', () => {
    render(
      <TestWrapper>
        <ExampleCounter />
      </TestWrapper>
    )

    const incrementButton = screen.getByText('+')
    const decrementButton = screen.getByText('-')
    
    // Complex sequence of operations
    fireEvent.click(incrementButton) // 1
    fireEvent.click(incrementButton) // 2
    fireEvent.click(decrementButton) // 1
    fireEvent.click(incrementButton) // 2
    fireEvent.click(incrementButton) // 3
    fireEvent.click(decrementButton) // 2
    
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('displays counter description text', () => {
    render(
      <TestWrapper>
        <ExampleCounter />
      </TestWrapper>
    )

    expect(
      screen.getByText(/Demonstrating.*state management/i)
    ).toBeInTheDocument()
  })
})