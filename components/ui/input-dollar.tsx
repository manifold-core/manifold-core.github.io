import * as React from "react"

import { cn } from "@/lib/utils"
import { Input, InputProps } from "@/components/ui/input"

const DollarInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, className, ...props }, ref) => {
    return (
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          $
        </div>
        <Input
          type="text"
          ref={ref}
          className={cn(
            "text-right text-base [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

DollarInput.displayName = "DollarInput"

export { DollarInput }
