import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo.svg"

export function Nav() {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <header
      className={`relative sticky z-30 mx-auto max-w-3xl before:absolute inset-0 before:rounded-lg before:bg-white before:shadow-xl before:shadow-slate-900/5 before:transition-all before:duration-500 before:ease-[cubic-bezier(.5,.85,.25,1.8)] md:top-6 bg-transparent ${
        expanded ? "before:-inset-2 before:top-0" : "before:inset-0"
      }`}
    >
      <div className="relative">
        <div className="flex items-center px-4">
          <div className="focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300">
            <Link className="flex h-8 w-8 items-center justify-center rounded" href="/">
              <Image src={Logo} width={24} height={24} alt="Logo" />
            </Link>
          </div>
          <button
            id="menubutton"
            type="button"
            className="group flex h-14 grow items-center justify-end pl-4 focus-visible:outline-none"
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-controls="menu"
          >
            <div
              className={`p-1.5 group-focus-visible:ring group-focus-visible:ring-indigo-300 ${
                expanded ? "rotate-[135deg]" : ""
              }`}
            >
              <svg
                className="shrink-0 fill-slate-400 transition duration-300 ease-in-out"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="8" width="18" height="2" />
                <rect
                  y="8"
                  width="18"
                  height="2"
                  className="origin-center rotate-90"
                />
              </svg>
            </div>
          </button>
        </div>
        <nav
          id="menu"
          role="navigation"
          aria-labelledby="menubutton"
          className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
            expanded
              ? "grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden before:block before:h-px before:w-full before:bg-gradient-to-r before:from-transparent before:via-slate-200 before:to-transparent">
            <div className="px-4 py-8 md:px-6">
              {/* Content for the navigation menu */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
