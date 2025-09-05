{% if cookiecutter.app_type == "spa" -%}
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from 'react-i18next'
{% endif -%}
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {
{% if cookiecutter.use_i18n == "y" -%}
  const { i18n } = useTranslation()

  // Set document language
  React.useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

{% endif -%}
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
{% else -%}
// This file is for SPA projects only
// Next.js projects use pages/_app.tsx as the main app component
export default function App() {
  return <div>SPA App component</div>
}
{% endif -%}