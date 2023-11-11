"use client"

import { Button } from "@/components/ui/button"
import { MouseEventHandler, useContext } from "react"
import { StepContext } from "@/components/search/step"

export function NextButton({
  disabled = false,
  transition = false,
  text,
  onClick,
}: Partial<{
  disabled: boolean
  transition: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  text: string
}>) {
  const { next } = useContext(StepContext)
  return (
    <Button
      disabled={disabled}
      type="submit"
      className="mx-auto mt-2 block w-full bg-zinc-900 text-zinc-100 shadow hover:bg-zinc-800"
      onClick={(evt) =>
        transition ? next() : onClick && onClick(evt)
      }
    >
      {text || "Next"}
    </Button>
  )
}
