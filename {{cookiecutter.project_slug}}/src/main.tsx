{% if cookiecutter.app_type == "spa" -%}
import React from 'react'
import ReactDOM from 'react-dom/client'
{% if cookiecutter.ui_library == "chakra-ui" -%}
import { ChakraProvider } from '@chakra-ui/react'
{% elif cookiecutter.ui_library == "material-ui" -%}
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme'
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
import { Provider } from 'react-redux'
import { store } from './stores/store'
{% endif -%}
{% if cookiecutter.use_i18n == "y" -%}
import './i18n'
{% endif -%}
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
{% if cookiecutter.state_management == "redux-toolkit" -%}
    <Provider store={store}>
{% endif -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
      <ChakraProvider>
{% elif cookiecutter.ui_library == "material-ui" -%}
      <ThemeProvider theme={theme}>
        <CssBaseline />
{% endif -%}
        <App />
{% if cookiecutter.ui_library == "chakra-ui" -%}
      </ChakraProvider>
{% elif cookiecutter.ui_library == "material-ui" -%}
      </ThemeProvider>
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
    </Provider>
{% endif -%}
  </React.StrictMode>
)
{% else -%}
// This file is for SPA projects only
// Next.js projects use pages/_app.tsx as the entry point
{% endif -%}