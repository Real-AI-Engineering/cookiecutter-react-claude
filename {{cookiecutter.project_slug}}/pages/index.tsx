{% if cookiecutter._use_nextjs == "y" -%}
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'
{% endif -%}
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { ExampleCounter } from '../components/ExampleCounter'

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

      <div className="space-y-16">
        <Hero />
        <Features />
        <ExampleCounter />
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