{% if cookiecutter._use_nextjs == "y" -%}
import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
{% if cookiecutter.ui_library == "material-ui" -%}
import createEmotionServer from '@emotion/server/create-instance'
import { AppType } from 'next/app'
import { MyAppProps } from './_app'
import createEmotionCache from '../lib/createEmotionCache'
{% endif -%}

{% if cookiecutter.ui_library == "material-ui" -%}
interface MyDocumentProps {
  emotionStyleTags: JSX.Element[]
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
{% else -%}
export default function Document() {
{% endif -%}
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="{{cookiecutter.project_short_description}}" />
        
        {/* Inter font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
{% if cookiecutter.ui_library == "material-ui" -%}
        {/* Inject MUI styles first to match with the prepend: true configuration. */}
        {emotionStyleTags}
{% endif -%}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

{% if cookiecutter.ui_library == "material-ui" -%}
// You can find a benchmark between CSS-in-JS libraries here:
// https://github.com/A-gambit/CSS-IN-JS-Benchmarks
// Based on the benchmarks, emotion and styled-components are the fastest CSS-in-JS libraries.
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{"{{ __html: style.css }}"}}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags,
  }
}
{% endif -%}
{% else -%}
// This file is for Next.js projects only
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
{% endif -%}