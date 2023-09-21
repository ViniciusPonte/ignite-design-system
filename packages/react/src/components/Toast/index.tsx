import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description?: string
}

export function Toast({ title, description, ...rest }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot {...rest}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewPort />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'