{% if cookiecutter.ui_library == "shadcn-ui" -%}
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind class names while allowing conditional values.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
{% else -%}
// Utility helpers for shared UI logic can be added here.
export {}
{% endif -%}
