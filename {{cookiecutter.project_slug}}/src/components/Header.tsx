import React, { useState } from 'react'
{% if cookiecutter.app_type == "spa" -%}
import { Link } from 'react-router-dom'
{% else -%}
import Link from 'next/link'
import { useRouter } from 'next/router'
{% endif -%}
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from '{% if cookiecutter.app_type == "spa" -%}react-i18next{% else -%}next-i18next{% endif -%}'
{% endif -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
import {
  Box,
  Flex,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
  HStack,
  useDisclosure,
  VStack,
  Collapse
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
{% elif cookiecutter.ui_library == "material-ui" -%}
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { Menu as MenuIcon, Brightness4, Brightness7 } from '@mui/icons-material'
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu } from "lucide-react"
{% endif -%}

{% if cookiecutter.use_i18n == "y" -%}
interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${className}`}
    >
      {i18n.language === 'en' ? 'RU' : 'EN'}
    </button>
  )
}

{% endif -%}
const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  React.useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

{% if cookiecutter.ui_library == "chakra-ui" -%}
  return (
    <IconButton
      aria-label="Toggle theme"
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      onClick={toggleTheme}
      variant="ghost"
      size="sm"
    />
  )
{% elif cookiecutter.ui_library == "material-ui" -%}
  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {isDark ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
{% else -%}
  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
{% endif -%}
}

export const Header: React.FC = () => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation()
{% endif -%}
{% if cookiecutter.app_type == "ssr" -%}
  const router = useRouter()
{% endif -%}
  const [isOpen, setIsOpen] = useState(false)

{% if cookiecutter.ui_library == "chakra-ui" -%}
  const { isOpen: isMobileOpen, onToggle } = useDisclosure()

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            {{cookiecutter.project_name}}
          </Text>
        </Flex>

        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{"{{ base: 'none', md: 'flex' }}"}}>
            {% if cookiecutter.app_type == "spa" -%}
            <Link to="/">
              <Button variant="ghost">{t ? t('nav.home') : 'Home'}</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">{t ? t('nav.about') : 'About'}</Button>
            </Link>
            {% else -%}
            <Link href="/" passHref>
              <Button variant="ghost">{t ? t('nav.home') : 'Home'}</Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant="ghost">{t ? t('nav.about') : 'About'}</Button>
            </Link>
            {% endif -%}
          </HStack>

          <HStack spacing={2}>
            <ThemeToggle />
            {% if cookiecutter.use_i18n == "y" -%}
            <LanguageSwitcher />
            {% endif -%}
            <IconButton
              size="md"
              icon={isMobileOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{"{{ md: 'none' }}"}}
              onClick={onToggle}
            />
          </HStack>
        </Flex>
      </Flex>

      <Collapse in={isMobileOpen} animateOpacity>
        <VStack
          display={{"{{ md: 'none' }}"}}
          pb={4}
          spacing={4}
        >
          {% if cookiecutter.app_type == "spa" -%}
          <Link to="/">
            <Button variant="ghost" w="full">{t ? t('nav.home') : 'Home'}</Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" w="full">{t ? t('nav.about') : 'About'}</Button>
          </Link>
          {% else -%}
          <Link href="/" passHref>
            <Button variant="ghost" w="full">{t ? t('nav.home') : 'Home'}</Button>
          </Link>
          <Link href="/about" passHref>
            <Button variant="ghost" w="full">{t ? t('nav.about') : 'About'}</Button>
          </Link>
          {% endif -%}
        </VStack>
      </Collapse>
    </Box>
  )
{% elif cookiecutter.ui_library == "material-ui" -%}
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{"{{ flexGrow: 1 }}"}}>
            {{cookiecutter.project_name}}
          </Typography>

          {!isMobile ? (
            <Box sx={{"{{ display: 'flex', alignItems: 'center', gap: 2 }}"}}>
              {% if cookiecutter.app_type == "spa" -%}
              <Link to="/">
                <Button color="inherit">{t ? t('nav.home') : 'Home'}</Button>
              </Link>
              <Link to="/about">
                <Button color="inherit">{t ? t('nav.about') : 'About'}</Button>
              </Link>
              {% else -%}
              <Link href="/" passHref>
                <Button color="inherit">{t ? t('nav.home') : 'Home'}</Button>
              </Link>
              <Link href="/about" passHref>
                <Button color="inherit">{t ? t('nav.about') : 'About'}</Button>
              </Link>
              {% endif -%}
              <ThemeToggle />
              {% if cookiecutter.use_i18n == "y" -%}
              <LanguageSwitcher />
              {% endif -%}
            </Box>
          ) : (
            <Box sx={{"{{ display: 'flex', alignItems: 'center', gap: 1 }}"}}>
              <ThemeToggle />
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={() => setIsOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box sx={{"{{ width: 250, pt: 2 }}"}}>
          <List>
            {% if cookiecutter.app_type == "spa" -%}
            <ListItem component={Link} to="/" onClick={() => setIsOpen(false)}>
              <ListItemText primary={t ? t('nav.home') : 'Home'} />
            </ListItem>
            <ListItem component={Link} to="/about" onClick={() => setIsOpen(false)}>
              <ListItemText primary={t ? t('nav.about') : 'About'} />
            </ListItem>
            {% else -%}
            <ListItem component={Link} href="/" onClick={() => setIsOpen(false)}>
              <ListItemText primary={t ? t('nav.home') : 'Home'} />
            </ListItem>
            <ListItem component={Link} href="/about" onClick={() => setIsOpen(false)}>
              <ListItemText primary={t ? t('nav.about') : 'About'} />
            </ListItem>
            {% endif -%}
            {% if cookiecutter.use_i18n == "y" -%}
            <ListItem>
              <LanguageSwitcher />
            </ListItem>
            {% endif -%}
          </List>
        </Box>
      </Drawer>
    </>
  )
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          {% if cookiecutter.app_type == "spa" -%}
          <Link to="/" className="flex items-center space-x-2">
          {% else -%}
          <Link href="/" className="flex items-center space-x-2">
          {% endif -%}
            <span className="inline-block font-bold">{{cookiecutter.project_name}}</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {% if cookiecutter.app_type == "spa" -%}
            <Link
              to="/"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
            </Link>
            <Link
              to="/about"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
            </Link>
            {% else -%}
            <Link
              href="/"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
            </Link>
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
            </Link>
            {% endif -%}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center gap-1">
            <ThemeToggle />
            {% if cookiecutter.use_i18n == "y" -%}
            <LanguageSwitcher />
            {% endif -%}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <nav className="grid gap-2 text-sm font-medium">
                  {% if cookiecutter.app_type == "spa" -%}
                  <Link to="/" className="block px-2 py-1 text-lg">
                    {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
                  </Link>
                  <Link to="/about" className="block px-2 py-1 text-lg">
                    {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
                  </Link>
                  {% else -%}
                  <Link href="/" className="block px-2 py-1 text-lg">
                    {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
                  </Link>
                  <Link href="/about" className="block px-2 py-1 text-lg">
                    {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
                  </Link>
                  {% endif -%}
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
{% else -%}
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {% if cookiecutter.app_type == "spa" -%}
            <Link to="/" className="flex-shrink-0">
            {% else -%}
            <Link href="/" className="flex-shrink-0">
            {% endif -%}
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {{cookiecutter.project_name}}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {% if cookiecutter.app_type == "spa" -%}
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
            </Link>
            {% else -%}
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                router.pathname === '/' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                router.pathname === '/about' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
            </Link>
            {% endif -%}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            {% if cookiecutter.use_i18n == "y" -%}
            <LanguageSwitcher className="hidden md:block" />
            {% endif -%}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              {% if cookiecutter.app_type == "spa" -%}
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
              </Link>
              {% else -%}
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  router.pathname === '/' 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.home') : 'Home'}{% else -%}Home{% endif -%}
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  router.pathname === '/about' 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {% if cookiecutter.use_i18n == "y" -%}{t ? t('nav.about') : 'About'}{% else -%}About{% endif -%}
              </Link>
              {% endif -%}
              {% if cookiecutter.use_i18n == "y" -%}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
              {% endif -%}
            </div>
          </div>
        )}
      </div>
    </header>
  )
{% endif -%}
}