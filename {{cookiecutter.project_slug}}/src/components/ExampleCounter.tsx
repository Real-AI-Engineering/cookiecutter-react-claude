import React{% if cookiecutter.state_management == "none" -%}, { useState }{% endif -%} from 'react'
{% if cookiecutter.use_i18n == "y" -%}
import { useTranslation } from '{% if cookiecutter.app_type == "spa" -%}react-i18next{% else -%}next-i18next{% endif -%}'
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../stores/store'
import { increment, decrement, reset } from '../stores/slices/counterSlice'
{% elif cookiecutter.state_management == "zustand" -%}
import { useCounterStore } from '../stores/useStore'
{% endif -%}
{% if cookiecutter.ui_library == "chakra-ui" -%}
import { Box, Button, Text, HStack, VStack, useColorModeValue } from '@chakra-ui/react'
{% elif cookiecutter.ui_library == "material-ui" -%}
import { Box, Button, Typography, Stack, Card, CardContent } from '@mui/material'
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
{% endif -%}

export const ExampleCounter: React.FC = () => {
{% if cookiecutter.use_i18n == "y" -%}
  const { t } = useTranslation()
{% endif -%}
{% if cookiecutter.state_management == "redux-toolkit" -%}
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())
  const handleReset = () => dispatch(reset())
{% elif cookiecutter.state_management == "zustand" -%}
  const { count, increment, decrement, reset } = useCounterStore()

  const handleIncrement = () => increment()
  const handleDecrement = () => decrement()
  const handleReset = () => reset()
{% else -%}
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(prev => prev + 1)
  const handleDecrement = () => setCount(prev => prev - 1)
  const handleReset = () => setCount(0)
{% endif -%}

{% if cookiecutter.ui_library == "chakra-ui" -%}
  const cardBg = useColorModeValue('white', 'gray.800')
  
  return (
    <Box maxW="md" mx="auto" mt={12}>
      <Box
        bg={cardBg}
        p={8}
        rounded="lg"
        shadow="md"
        textAlign="center"
        borderWidth="1px"
      >
        <VStack spacing={6}>
          <Text fontSize="xl" fontWeight="semibold">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.title') : 'Counter Example'}{% else -%}Counter Example{% endif -%}
          </Text>
          
          <Text fontSize="sm" color="gray.600" _dark={{"{{ color: \"gray.400\" }}"}}>
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.description') : 'Demonstrating {% if cookiecutter.state_management == "redux-toolkit" %}Redux Toolkit{% elif cookiecutter.state_management == "zustand" %}Zustand{% else %}React state{% endif %} state management'}{% else -%}Demonstrating {% if cookiecutter.state_management == "redux-toolkit" %}Redux Toolkit{% elif cookiecutter.state_management == "zustand" %}Zustand{% else %}React state{% endif %} state management{% endif -%}
          </Text>

          <Text fontSize="4xl" fontWeight="bold" color="blue.500">
            {count}
          </Text>

          <HStack spacing={4}>
            <Button
              colorScheme="red"
              onClick={handleDecrement}
              size="lg"
            >
              -
            </Button>
            <Button
              colorScheme="gray"
              onClick={handleReset}
              variant="outline"
              size="lg"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.reset') : 'Reset'}{% else -%}Reset{% endif -%}
            </Button>
            <Button
              colorScheme="green"
              onClick={handleIncrement}
              size="lg"
            >
              +
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
{% elif cookiecutter.ui_library == "material-ui" -%}
  return (
    <Box sx={{"{{ maxWidth: 'md', mx: 'auto', mt: 6 }}"}}>
      <Card sx={{"{{ textAlign: 'center' }}"}}>
        <CardContent sx={{"{{ p: 4 }}"}}>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h5" component="h3">
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.title') : 'Counter Example'}{% else -%}Counter Example{% endif -%}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.description') : 'Demonstrating {% if cookiecutter.state_management == "redux-toolkit" %}Redux Toolkit{% elif cookiecutter.state_management == "zustand" %}Zustand{% else %}React state{% endif %} state management'}{% else -%}Demonstrating {% if cookiecutter.state_management == "redux-toolkit" %}Redux Toolkit{% elif cookiecutter.state_management == "zustand" %}Zustand{% else %}React state{% endif %} state management{% endif -%}
            </Typography>

            <Typography
              variant="h2"
              component="div"
              sx={{"{{ color: 'primary.main', fontWeight: 'bold' }}"}}
            >
              {count}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="error"
                onClick={handleDecrement}
                size="large"
              >
                -
              </Button>
              <Button
                variant="outlined"
                onClick={handleReset}
                size="large"
              >
                {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.reset') : 'Reset'}{% else -%}Reset{% endif -%}
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleIncrement}
                size="large"
              >
                +
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
{% elif cookiecutter.ui_library == "shadcn-ui" -%}
  return (
    <div className="max-w-md mx-auto mt-12">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-xl">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.title') : 'Counter Example'}{% else -%}Counter Example{% endif -%}
          </CardTitle>
          <CardDescription>
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.description') : 'Demonstrating {% if cookiecutter.state_management == "redux-toolkit" %}Redux Toolkit{% elif cookiecutter.state_management == "zustand" %}Zustand{% else %}React state{% endif %} state management'}{% else -%}Demonstrating {% if cookiecutter.state_management == "redux-toolkit" %}Redux Toolkit{% elif cookiecutter.state_management == "zustand" %}Zustand{% else %}React state{% endif %} state management{% endif -%}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-4xl font-bold text-blue-600">
            {count}
          </div>
          
          <div className="flex justify-center gap-4">
            <Button
              variant="destructive"
              onClick={handleDecrement}
              size="lg"
            >
              -
            </Button>
            <Button
              variant="outline"
              onClick={handleReset}
              size="lg"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.reset') : 'Reset'}{% else -%}Reset{% endif -%}
            </Button>
            <Button
              onClick={handleIncrement}
              size="lg"
            >
              +
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
{% else -%}
  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center border border-gray-200 dark:border-gray-700">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.title') : 'Counter Example'}{% else -%}Counter Example{% endif -%}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.description') : 'Demonstrating {% if cookiecutter.state_management == "redux-toolkit" %}Redux Toolkit{% elif cookiecutter.state_management == "zustand" %}Zustand{% else %}React state{% endif %} state management'}{% else -%}Demonstrating {% if cookiecutter.state_management == "redux-toolkit" %}Redux Toolkit{% elif cookiecutter.state_management == "zustand" %}Zustand{% else %}React state{% endif %} state management{% endif -%}
          </p>

          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            {count}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleDecrement}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              -
            </button>
            <button
              onClick={handleReset}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              {% if cookiecutter.use_i18n == "y" -%}{t ? t('counter.reset') : 'Reset'}{% else -%}Reset{% endif -%}
            </button>
            <button
              onClick={handleIncrement}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
{% endif -%}
}