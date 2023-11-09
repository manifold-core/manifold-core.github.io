"use client"

import { useState } from "react"
import { Transition } from "@headlessui/react"

interface TooltipProps {
  children: React.ReactNode
  content: string
  id: string
  dark?: boolean
}

export default function Tooltip({
  children,
  content,
  id,
  dark = false,
}: TooltipProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="relative">
      <button
        className={`block cursor-help text-left text-zinc-500 underline decoration-dotted underline-offset-4 ${
          dark ? "decoration-zinc-600 " : "decoration-zinc-300"
        }`}
        aria-describedby={`tooltip-${id}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {children}
      </button>
      <div
        id={`tooltip-${id}`}
        role="tooltip"
        className="absolute left-0 top-full z-10"
      >
        <Transition
          show={open}
          className="mt-1 w-[12.5rem] overflow-hidden rounded border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-500 shadow-lg"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {content}
        </Transition>
      </div>
    </div>
  )
}
