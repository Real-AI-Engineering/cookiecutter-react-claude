{% if cookiecutter.use_i18n == "y" -%}
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  
  // Mock translation resources
  resources: {
    en: {
      translation: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        
        // Meta
        'meta.title': 'Test App',
        'meta.description': 'Test application',
        
        // Hero section
        'hero.title': 'Welcome to Test App',
        'hero.subtitle': 'Test application description',
        'hero.cta.primary': 'Get Started',
        'hero.cta.secondary': 'View on GitHub',
        
        // Features
        'features.title': 'Features',
        'features.subtitle': 'Everything you need to build modern React applications',
        'features.modern.title': 'Modern Stack',
        'features.modern.description': 'Built with React 18, TypeScript, and the latest web technologies for optimal performance and developer experience.',
        'features.developer.title': 'Developer Experience',
        'features.developer.description': 'Excellent DX with hot reload, TypeScript support, ESLint, Prettier, and comprehensive testing setup.',
        'features.design.title': 'Beautiful Design',
        'features.design.description': 'Styled with Tailwind CSS for responsive, accessible, and beautiful interfaces.',
        
        // Counter
        'counter.title': 'Counter Example',
        'counter.description': 'Demonstrating React state management',
        'counter.reset': 'Reset',
        
        // About page
        'pages.about.title': 'About Us',
        'pages.about.subtitle': 'Learn more about this project',
        'pages.about.description': 'Learn more about Test App',
        'pages.about.sections.mission.title': 'Our Mission',
        'pages.about.sections.mission.content': 'This project was created to demonstrate modern React development practices.',
        'pages.about.sections.tech.title': 'Technology Stack',
        'pages.about.sections.contact.title': 'Get in Touch',
        'pages.about.sections.contact.content': 'Have questions or suggestions?',
        
        // Footer
        'footer.description': 'Test application',
        'footer.sections.project.title': 'Project',
        'footer.sections.resources.title': 'Resources',
        'footer.sections.resources.github': 'GitHub',
        'footer.sections.resources.issues': 'Issues',
        'footer.sections.resources.docs': 'Documentation',
        'footer.rights': 'All rights reserved.',
        'footer.built_with': 'Built with',
      },
    },
    ru: {
      translation: {
        // Navigation
        'nav.home': 'Главная',
        'nav.about': 'О нас',
        
        // Meta
        'meta.title': 'Тестовое приложение',
        'meta.description': 'Тестовое приложение',
        
        // Hero section
        'hero.title': 'Добро пожаловать в Тестовое приложение',
        'hero.subtitle': 'Описание тестового приложения',
        'hero.cta.primary': 'Начать',
        'hero.cta.secondary': 'Посмотреть на GitHub',
        
        // Features
        'features.title': 'Возможности',
        'features.subtitle': 'Всё необходимое для создания современных React приложений',
        'features.modern.title': 'Современный стек',
        'features.modern.description': 'Построено с React 18, TypeScript и последними веб-технологиями.',
        'features.developer.title': 'Опыт разработчика',
        'features.developer.description': 'Отличный DX с горячей перезагрузкой, поддержкой TypeScript, ESLint, Prettier.',
        'features.design.title': 'Красивый дизайн',
        'features.design.description': 'Стилизовано с помощью Tailwind CSS для отзывчивых и красивых интерфейсов.',
        
        // Counter
        'counter.title': 'Пример счётчика',
        'counter.description': 'Демонстрация управления состоянием React',
        'counter.reset': 'Сброс',
        
        // About page
        'pages.about.title': 'О нас',
        'pages.about.subtitle': 'Узнайте больше о проекте',
        'pages.about.description': 'Узнайте больше о Тестовом приложении',
        'pages.about.sections.mission.title': 'Наша миссия',
        'pages.about.sections.mission.content': 'Этот проект был создан для демонстрации современных практик разработки на React.',
        'pages.about.sections.tech.title': 'Технологический стек',
        'pages.about.sections.contact.title': 'Связаться с нами',
        'pages.about.sections.contact.content': 'Есть вопросы или предложения?',
        
        // Footer
        'footer.description': 'Тестовое приложение',
        'footer.sections.project.title': 'Проект',
        'footer.sections.resources.title': 'Ресурсы',
        'footer.sections.resources.github': 'GitHub',
        'footer.sections.resources.issues': 'Проблемы',
        'footer.sections.resources.docs': 'Документация',
        'footer.rights': 'Все права защищены.',
        'footer.built_with': 'Создано с помощью',
      },
    },
  },
})

export default i18n
{% else -%}
// This file is only used when i18n is enabled
export default null as any
{% endif -%}