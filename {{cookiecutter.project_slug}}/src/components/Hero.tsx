import React from 'react'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from '{% if cookiecutter.app_type == "spa" -%}react-i18next{% else -%}next-i18next{% endif -%}'
{% endif -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
import { Box, Heading, Text, Button, Stack, Container } from '@chakra-ui/react'
{% elif cookiecutter.ui_library == "material-ui" -%}
import { Box, Typography, Button, Container, Stack } from '@mui/material'
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
import { Button } from "@/components/ui/button"
{% endif -%}

export const Hero: React.FC = () => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation()

{% endif -%}
  const scrollToFeatures = () => {
    const featuresElement = document.getElementById('features')
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

{% if cookiecutter.ui_library == "chakra-ui" -%}
  return (
    <Box
      bg="linear-gradient(135deg, blue.500 0%, purple.600 100%)"
      color="white"
      py={{"{{ base: 16, md: 24 }}"}}}
    >
      <Container maxW="4xl" textAlign="center">
        <Stack spacing={6}>
          <Heading
            as="h1"
            size={{"{{ base: \"2xl\", md: \"4xl\" }}"}}}
            fontWeight="bold"
            lineHeight="shorter"
          >
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.title') : 'Welcome to {{cookiecutter.project_name}}'}{% else -%}Welcome to {{cookiecutter.project_name}}{% endif -%}
          </Heading>
          
          <Text
            fontSize={{"{{ base: \"lg\", md: \"xl\" }}"}}}
            color="blue.100"
            maxW="2xl"
            mx="auto"
          >
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.subtitle') : '{{cookiecutter.project_short_description}}'}{% else -%}{{cookiecutter.project_short_description}}{% endif -%}
          </Text>
          
          <Stack
            direction={{"{{ base: \"column\", md: \"row\" }}"}}}
            spacing={4}
            justify="center"
          >
            <Button
              size="lg"
              colorScheme="white"
              variant="solid"
              onClick={scrollToFeatures}
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.cta.primary') : 'Get Started'}{% else -%}Get Started{% endif -%}
            </Button>
            <Button
              size="lg"
              colorScheme="white"
              variant="outline"
              as="a"
              href="https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}"
              target="_blank"
              rel="noopener noreferrer"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.cta.secondary') : 'View on GitHub'}{% else -%}View on GitHub{% endif -%}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
{% elif cookiecutter.ui_library == "material-ui" -%}
  return (
    <Box
      sx={{"{{
        background: 'linear-gradient(135deg, #1976d2 0%, #7b1fa2 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center'
      }}"}}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{"{{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2
            }}"}}
          >
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.title') : 'Welcome to {{cookiecutter.project_name}}'}{% else -%}Welcome to {{cookiecutter.project_name}}{% endif -%}
          </Typography>
          
          <Typography
            variant="h5"
            component="p"
            sx={{"{{
              color: '#bbdefb',
              maxWidth: '600px',
              mx: 'auto'
            }}"}}
          >
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.subtitle') : '{{cookiecutter.project_short_description}}'}{% else -%}{{cookiecutter.project_short_description}}{% endif -%}
          </Typography>
          
          <Stack
            direction={{"{{ xs: 'column', sm: 'row' }}"}}}
            spacing={2}
            justifyContent="center"
            sx={{"{{ mt: 4 }}"}}>
          >
            <Button
              variant="contained"
              size="large"
              onClick={scrollToFeatures}
              sx={{"{{
                bgcolor: 'white',
                color: '#1976d2',
                '&:hover': { bgcolor: '#f5f5f5' }
              }}"}}
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.cta.primary') : 'Get Started'}{% else -%}Get Started{% endif -%}
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}"
              target="_blank"
              rel="noopener noreferrer"
              sx={{"{{
                borderColor: 'white',
                color: 'white',
                '&:hover': { borderColor: '#f5f5f5', bgcolor: 'rgba(255,255,255,0.1)' }
              }}"}}
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.cta.secondary') : 'View on GitHub'}{% else -%}View on GitHub{% endif -%}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.title') : 'Welcome to {{cookiecutter.project_name}}'}{% else -%}Welcome to {{cookiecutter.project_name}}{% endif -%}
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.subtitle') : '{{cookiecutter.project_short_description}}'}{% else -%}{{cookiecutter.project_short_description}}{% endif -%}
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={scrollToFeatures}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.cta.primary') : 'Get Started'}{% else -%}Get Started{% endif -%}
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a
                href="https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}"
                target="_blank"
                rel="noopener noreferrer"
              >
                {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.cta.secondary') : 'View on GitHub'}{% else -%}View on GitHub{% endif -%}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{"{{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}"}}
        />
      </div>
    </section>
  )
{% else -%}
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.title') : 'Welcome to {{cookiecutter.project_name}}'}{% else -%}Welcome to {{cookiecutter.project_name}}{% endif -%}
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.subtitle') : '{{cookiecutter.project_short_description}}'}{% else -%}{{cookiecutter.project_short_description}}{% endif -%}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToFeatures}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.cta.primary') : 'Get Started'}{% else -%}Get Started{% endif -%}
            </button>
            <a
              href="https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('hero.cta.secondary') : 'View on GitHub'}{% else -%}View on GitHub{% endif -%}
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-pink-400 to-indigo-400"
            style={{"{{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}"}}
          />
        </div>
      </div>
    </section>
  )
{% endif -%}
}