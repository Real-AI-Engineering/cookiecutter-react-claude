{% if cookiecutter.ui_library == "shadcn-ui" -%}
import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close

const SHEET_SIDES = {
  top: 'inset-x-0 top-0 border-b',
  bottom: 'inset-x-0 bottom-0 border-t',
  left: 'inset-y-0 left-0 h-full w-80 border-r',
  right: 'inset-y-0 right-0 h-full w-80 border-l',
} as const

type SheetSide = keyof typeof SHEET_SIDES

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: SheetSide
  }
>(({ className, children, side = 'right', ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 z-40 bg-black/40" />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 w-full max-w-sm bg-white p-6 shadow-lg transition ease-in-out dark:bg-gray-900',
        'border-gray-200 dark:border-gray-800',
        SHEET_SIDES[side],
        className
      )}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

export { Sheet, SheetTrigger, SheetClose, SheetContent }
{% else -%}
export {}
{% endif -%}
