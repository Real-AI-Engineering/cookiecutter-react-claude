import React from 'react'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from '{% if cookiecutter.app_type == "spa" -%}react-i18next{% else -%}next-i18next{% endif -%}'
{% endif -%}

export const Footer: React.FC = () => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation()
{% endif -%}
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {{cookiecutter.project_name}}
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {% if cookiecutter.use_i18n == "y" -%}{t ? t('footer.description') : '{{cookiecutter.project_short_description}}'}{% else -%}{{cookiecutter.project_short_description}}{% endif -%}
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase">
                  {% if cookiecutter.use_i18n == "y" -%}{t ? t('footer.sections.project.title') : 'Project'}{% else -%}Project{% endif -%}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    {% if cookiecutter.app_type == "spa" -%}
                    <a href="/" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                      {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
                    </a>
                    {% else -%}
                    <a href="/" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                      {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
                    </a>
                    {% endif -%}
                  </li>
                  <li>
                    {% if cookiecutter.app_type == "spa" -%}
                    <a href="/about" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                      {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
                    </a>
                    {% else -%}
                    <a href="/about" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                      {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
                    </a>
                    {% endif -%}
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase">
                  {% if cookiecutter.use_i18n == "y" -%}{t ? t('footer.sections.resources.title') : 'Resources'}{% else -%}Resources{% endif -%}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a 
                      href="https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      {% if cookiecutter.use_i18n == "y" -%}{t ? t('footer.sections.resources.github') : 'GitHub'}{% else -%}GitHub{% endif -%}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      {% if cookiecutter.use_i18n == "y" -%}{t ? t('footer.sections.resources.issues') : 'Issues'}{% else -%}Issues{% endif -%}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}/blob/main/README.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      {% if cookiecutter.use_i18n == "y" -%}{t ? t('footer.sections.resources.docs') : 'Documentation'}{% else -%}Documentation{% endif -%}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-500 dark:text-gray-400">
              &copy; {currentYear} {{cookiecutter.project_name}}. 
              {% if cookiecutter.use_i18n == "y" -%} {t ? t('footer.rights') : 'All rights reserved.'}{% else -%} All rights reserved.{% endif -%}
            </p>
            
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {% if cookiecutter.use_i18n == "y" -%}{t ? t('footer.built_with') : 'Built with'}{% else -%}Built with{% endif -%}
                <span className="text-blue-600 dark:text-blue-400 ml-1">
                  {% if cookiecutter._use_nextjs == "y" -%}Next.js{% else -%}React + Vite{% endif -%}
                </span>
                {% if cookiecutter.ui_library != "none" -%}
                <span className="mx-1">•</span>
                <span className="text-blue-600 dark:text-blue-400">
                  {{cookiecutter.ui_library|replace("-", " ")|title}}
                </span>
                {% endif -%}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}