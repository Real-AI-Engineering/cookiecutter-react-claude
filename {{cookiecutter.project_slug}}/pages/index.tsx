{% if cookiecutter._use_nextjs == "y" -%}
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'
{% endif -%}

const HomePage: NextPage = () => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation('common')

{% endif -%}
  return (
    <>
      <Head>
        <title>{% if cookiecutter.use_i18n == "y" -%}{t('meta.title')}{% else -%}{{cookiecutter.project_name}}{% endif -%}</title>
        <meta
          name="description"
          content="{% if cookiecutter.use_i18n == "y" -%}{t('meta.description')}{% else -%}{{cookiecutter.project_description}}{% endif -%}"
        />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Welcome to {{cookiecutter.project_name}}</h1>
        <p className="mt-4 text-gray-600">Start building your application here.</p>
        {/* Add your components here */}
      </div>
    </>
  )
}

{% if cookiecutter.use_i18n == "y" -%}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

{% endif -%}
export default HomePage
{% else -%}
// This file is for Next.js projects only
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return <div>Next.js Home Page</div>
}

export default HomePage
{% endif -%}