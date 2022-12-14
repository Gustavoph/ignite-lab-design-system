import { Check } from 'phosphor-react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { InputHTMLAttributes } from 'react'

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
