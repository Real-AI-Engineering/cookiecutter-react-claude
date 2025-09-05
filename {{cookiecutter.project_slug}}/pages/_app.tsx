{% if cookiecutter._use_nextjs == "y" -%}
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
{% if cookiecutter.ui_library == "chakra-ui" -%}
import { ChakraProvider } from '@chakra-ui/react'
{% elif cookiecutter.ui_library == "material-ui" -%}
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../lib/createEmotionCache'
import { theme } from '../lib/theme'
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
import { Provider } from 'react-redux'
import { store } from '../lib/stores/store'
{% endif -%}
{% if cookiecutter.use_i18n == "y" -%}
import { appWithTranslation } from 'next-i18next'
{% endif -%}
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/globals.css'

{% if cookiecutter.ui_library == "material-ui" -%}
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
{% else -%}
function MyApp({ Component, pageProps }: AppProps) {
{% endif -%}
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      
{% if cookiecutter.state_management == "redux-toolkit" -%}
      <Provider store={store}>
{% endif -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
        <ChakraProvider>
{% elif cookiecutter.ui_library == "material-ui" -%}
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
{% endif -%}
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
            <Header />
            
            <main className="flex-1 container mx-auto px-4 py-8">
              <Component {...pageProps} />
            </main>

            <Footer />
          </div>
{% if cookiecutter.ui_library == "chakra-ui" -%}
        </ChakraProvider>
{% elif cookiecutter.ui_library == "material-ui" -%}
          </ThemeProvider>
        </CacheProvider>
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
      </Provider>
{% endif -%}
    </>
  )
}

{% if cookiecutter.use_i18n == "y" -%}
export default appWithTranslation(MyApp)
{% else -%}
export default MyApp
{% endif -%}
{% else -%}
// This file is for Next.js projects only
// SPA projects use src/main.tsx as the entry point
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
{% endif -%}