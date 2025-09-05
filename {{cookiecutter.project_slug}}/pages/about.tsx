{% if cookiecutter._use_nextjs == "y" -%}
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'
{% endif -%}

const AboutPage: NextPage = () => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation('common')

{% endif -%}
  return (
    <>
      <Head>
        <title>{% if cookiecutter.use_i18n == "y" -%}{t('pages.about.title')} | {t('meta.title')}{% else -%}About | {{cookiecutter.project_name}}{% endif -%}</title>
        <meta 
          name="description" 
          content="{% if cookiecutter.use_i18n == "y" -%}{t('pages.about.description')}{% else -%}Learn more about {{cookiecutter.project_name}}{% endif -%}" 
        />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {% if cookiecutter.use_i18n == "y" -%}{t('pages.about.title')}{% else -%}About Us{% endif -%}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {% if cookiecutter.use_i18n == "y" -%}{t('pages.about.subtitle')}{% else -%}Learn more about this project{% endif -%}
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              {% if cookiecutter.use_i18n == "y" -%}{t('pages.about.sections.mission.title')}{% else -%}Our Mission{% endif -%}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {% if cookiecutter.use_i18n == "y" -%}{t('pages.about.sections.mission.content')}{% else -%}
              This project was created with {{cookiecutter.project_name}} to demonstrate modern React development practices
              using TypeScript, Tailwind CSS, and other cutting-edge technologies.
              {% endif -%}
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              {% if cookiecutter.use_i18n == "y" -%}{t('pages.about.sections.tech.title')}{% else -%}Technology Stack{% endif -%}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>React 18+ with TypeScript</li>
              {% if cookiecutter._use_nextjs == "y" -%}
              <li>Next.js for server-side rendering</li>
              {% else -%}
              <li>Vite for fast development and building</li>
              <li>React Router for client-side routing</li>
              {% endif -%}
              <li>Tailwind CSS for utility-first styling</li>
              {% if cookiecutter.ui_library != "none" -%}
              <li>{{cookiecutter.ui_library|replace("-", " ")|title}} for UI components</li>
              {% endif -%}
              {% if cookiecutter.state_management != "none" -%}
              <li>{{cookiecutter.state_management|replace("-", " ")|title}} for state management</li>
              {% endif -%}
              {% if cookiecutter.use_i18n == "y" -%}
              <li>react-i18next for internationalization</li>
              {% endif -%}
              <li>Vitest for unit testing</li>
              <li>Playwright for end-to-end testing</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">
              {% if cookiecutter.use_i18n == "y" -%}{t('pages.about.sections.contact.title')}{% else -%}Get in Touch{% endif -%}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {% if cookiecutter.use_i18n == "y" -%}{t('pages.about.sections.contact.content')}{% else -%}
              Have questions or suggestions? Feel free to reach out to us through our 
              <a href="https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}" 
                 className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                GitHub repository
              </a>.
              {% endif -%}
            </p>
          </div>
        </div>
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
export default AboutPage
{% else -%}
// This file is for Next.js projects only
import type { NextPage } from 'next'

const AboutPage: NextPage = () => {
  return <div>Next.js About Page</div>
}

export default AboutPage
{% endif -%}