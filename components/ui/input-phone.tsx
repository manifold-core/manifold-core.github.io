import React from "react"
import { IMaskInput, IMaskInputProps } from "react-imask"

import { cn } from "@/lib/utils"
import { InputClasses } from "@/components/ui/input"

const PhoneInput = React.forwardRef<
  HTMLInputElement,
  IMaskInputProps<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <IMaskInput
      className={cn(InputClasses, className)}
      ref={ref}
      mask={"+1 (000) 000-0000" as any}
      radix="."
      {...props}
    />
  )
})
PhoneInput.displayName = "PhoneInput"

export { PhoneInput }
