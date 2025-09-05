{% if cookiecutter._use_nextjs == "y" -%}
// For Next.js projects, this is a copy of src/components/Features.tsx
import React from 'react'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from 'next-i18next'
{% endif -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
import { Box, Container, Grid, Heading, Text, Icon, VStack } from '@chakra-ui/react'
import { FaReact, FaCode, FaPalette } from 'react-icons/fa'
{% elif cookiecutter.ui_library == "material-ui" -%}
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material'
import { Code, Palette, Speed } from '@mui/icons-material'
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"
{% endif -%}

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

export const Features: React.FC = () => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation()

{% endif -%}
  const features: Feature[] = [
    {
      title: {% if cookiecutter.use_i18n == "y" -%}t ? t('features.modern.title') : 'Modern Stack'{% else -%}'Modern Stack'{% endif -%},
      description: {% if cookiecutter.use_i18n == "y" -%}t ? t('features.modern.description') : 'Built with React 18, TypeScript, and the latest web technologies for optimal performance and developer experience.'{% else -%}'Built with React 18, TypeScript, and the latest web technologies for optimal performance and developer experience.'{% endif -%},
      icon: (
{% if cookiecutter.ui_library == "chakra-ui" -%}
        <Icon as={FaReact} w={8} h={8} color="blue.500" />
{% elif cookiecutter.ui_library == "material-ui" -%}
        <Speed fontSize="large" sx={{"{{ color: '#1976d2' }}"}} />
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
        <Zap className="h-6 w-6 text-blue-600" />
{% else -%}
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
{% endif -%}
      )
    },
    {
      title: {% if cookiecutter.use_i18n == "y" -%}t ? t('features.developer.title') : 'Developer Experience'{% else -%}'Developer Experience'{% endif -%},
      description: {% if cookiecutter.use_i18n == "y" -%}t ? t('features.developer.description') : 'Excellent DX with hot reload, TypeScript support, ESLint, Prettier, and comprehensive testing setup.'{% else -%}'Excellent DX with hot reload, TypeScript support, ESLint, Prettier, and comprehensive testing setup.'{% endif -%},
      icon: (
{% if cookiecutter.ui_library == "chakra-ui" -%}
        <Icon as={FaCode} w={8} h={8} color="green.500" />
{% elif cookiecutter.ui_library == "material-ui" -%}
        <Code fontSize="large" sx={{"{{ color: '#388e3c' }}"}} />
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
        <Code className="h-6 w-6 text-green-600" />
{% else -%}
        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
{% endif -%}
      )
    },
    {
      title: {% if cookiecutter.use_i18n == "y" -%}t ? t('features.design.title') : 'Beautiful Design'{% else -%}'Beautiful Design'{% endif -%},
      description: {% if cookiecutter.use_i18n == "y" -%}t ? t('features.design.description') : 'Styled with Tailwind CSS{% if cookiecutter.ui_library != "none" %} and {{cookiecutter.ui_library|replace("-", " ")|title}}{% endif %} for responsive, accessible, and beautiful interfaces.'{% else -%}'Styled with Tailwind CSS{% if cookiecutter.ui_library != "none" %} and {{cookiecutter.ui_library|replace("-", " ")|title}}{% endif %} for responsive, accessible, and beautiful interfaces.'{% endif -%},
      icon: (
{% if cookiecutter.ui_library == "chakra-ui" -%}
        <Icon as={FaPalette} w={8} h={8} color="purple.500" />
{% elif cookiecutter.ui_library == "material-ui" -%}
        <Palette fontSize="large" sx={{"{{ color: '#7b1fa2' }}"}} />
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
        <Palette className="h-6 w-6 text-purple-600" />
{% else -%}
        <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3 2h2v4h4v2h-4v4H7v-4H3V8h4V4z" clipRule="evenodd" />
        </svg>
{% endif -%}
      )
    }
  ]

{% if cookiecutter.ui_library == "chakra-ui" -%}
  return (
    <Box id="features" py={16} bg="gray.50" _dark={{"{{ bg: \"gray.900\" }}"}}>
      <Container maxW="6xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('features.title') : 'Features'}{% else -%}Features{% endif -%}
            </Heading>
            <Text fontSize="lg" color="gray.600" _dark={{"{{ color: \"gray.400\" }}"}}>
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('features.subtitle') : 'Everything you need to build modern React applications'}{% else -%}Everything you need to build modern React applications{% endif -%}
            </Text>
          </Box>

          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={8} w="full">
            {features.map((feature, index) => (
              <Box
                key={index}
                bg="white"
                _dark={{"{{ bg: \"gray.800\" }}"}}
                p={8}
                rounded="lg"
                shadow="md"
                textAlign="center"
                _hover={{"{{ shadow: \"lg\", transform: \"translateY(-2px)\" }}"}}}
                transition="all 0.2s"
              >
                <VStack spacing={4}>
                  {feature.icon}
                  <Heading as="h3" size="md">
                    {feature.title}
                  </Heading>
                  <Text color="gray.600" _dark={{"{{ color: \"gray.400\" }}"}}>
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
{% elif cookiecutter.ui_library == "material-ui" -%}
  return (
    <Box id="features" sx={{"{{ py: 8, bgcolor: 'grey.50' }}"}}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom>
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('features.title') : 'Features'}{% else -%}Features{% endif -%}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('features.subtitle') : 'Everything you need to build modern React applications'}{% else -%}Everything you need to build modern React applications{% endif -%}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{"{{ 
                  height: '100%', 
                  textAlign: 'center', 
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)' }
                }}"}}
              >
                <CardContent sx={{"{{ p: 3 }}"}}>
                  <Box mb={2}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('features.title') : 'Features'}{% else -%}Features{% endif -%}
          </h2>
          <p className="text-lg text-muted-foreground">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('features.subtitle') : 'Everything you need to build modern React applications'}{% else -%}Everything you need to build modern React applications{% endif -%}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
{% else -%}
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('features.title') : 'Features'}{% else -%}Features{% endif -%}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('features.subtitle') : 'Everything you need to build modern React applications'}{% else -%}Everything you need to build modern React applications{% endif -%}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
{% endif -%}
}
{% else -%}
// This component is used for Next.js projects
// For SPA projects, use src/components/Features.tsx instead
export const Features = () => {
  return <div>Next.js Features Component</div>
}
{% endif -%}