{% if cookiecutter.app_type == "spa" -%}
import React from 'react'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from 'react-i18next'
{% endif -%}

export const Home: React.FC = () => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation()

  // Set document title
  React.useEffect(() => {
    document.title = t('meta.title')
  }, [t])

{% endif -%}
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Welcome to {{cookiecutter.project_name}}</h1>
      <p className="mt-4 text-gray-600">Start building your application here.</p>
      {/* Add your components here */}
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