{% if cookiecutter.app_type == "spa" -%}
import React from 'react'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from 'react-i18next'
{% endif -%}
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { ExampleCounter } from '../components/ExampleCounter'

export const Home: React.FC = () => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation()

  // Set document title
  React.useEffect(() => {
    document.title = t('meta.title')
  }, [t])

{% endif -%}
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      <ExampleCounter />
    </div>
  )
}
{% else -%}
// This component is for SPA projects only
// Next.js projects use pages/index.tsx instead
import React from 'react'

export const Home: React.FC = () => {
  return <div>SPA Home Page</div>
}
{% endif -%}