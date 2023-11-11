"use client"

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useLocalStorage } from "react-use"

import { Badge } from "@/components/ui/badge"

const prompts = [
  "a technical co-founder with experience",
  "a VP of Sales to scale my company from",
  "a founding engineer to help build",
  "a director at Netflix who can sign an LOI to pilot",
  "a VC interested in leading a seed round for",
]

export function Search() {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const ref = useRef<HTMLTextAreaElement>(null)
  const form = useForm()
  useAutosize(ref.current, search)

  function onSubmit() {
    // TODO: persist to local storage instead of query params
    router.push(`/search?q=${encodeURIComponent(search)}`)
  }

  return (
    <div>
      <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
        <textarea
          rows={1}
          ref={ref}
          className="block w-full resize-none overflow-y-hidden rounded-[30px] border-gray-200 px-12 py-4 text-base drop-shadow-lg focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
          placeholder="Who are you looking for?"
          value={search}
          onChange={(evt) => setSearch(evt.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              form.handleSubmit(onSubmit)()
            }
          }}
        />
        <div
          // className="absolute end-14 top-4 cursor-pointer"
          className="absolute end-4 top-4 cursor-pointer"
          onClick={() => {
            setSearch("")
          }}
        >
          {search.length ? <XMarkIcon className="h-6" /> : null}
        </div>
        <div className="absolute start-2 top-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-50"
          >
            <MagnifyingGlassIcon className="h-5" />
          </button>
        </div>
        {/*<div className="absolute end-2 top-2">*/}
        {/*  <button*/}
        {/*    type="button"*/}
        {/*    className="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-sm font-semibold text-gray-500 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-50"*/}
        {/*  >*/}
        {/*    <svg*/}
        {/*      className="h-4 w-4 shrink-0"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="24"*/}
        {/*      height="24"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      fill="none"*/}
        {/*      stroke="currentColor"*/}
        {/*      strokeWidth="2"*/}
        {/*      strokeLinecap="round"*/}
        {/*      strokeLinejoin="round"*/}
        {/*    >*/}
        {/*      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />*/}
        {/*      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />*/}
        {/*      <line x1="12" x2="12" y1="19" y2="22" />*/}
        {/*    </svg>*/}
        {/*  </button>*/}
        {/*</div>*/}
      </form>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {prompts.map((p) => (
          <Badge
            key={p}
            className="w-full cursor-pointer sm:w-auto"
            variant="secondary"
            onClick={() => {
              setSearch(`I'm looking for ${p} `)
              ref.current?.focus()
            }}
          >
            {p}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function useAutosize(ref: HTMLTextAreaElement | null, value: string) {
  useEffect(() => {
    if (ref) {
      ref.style.height = "0px"
      const scrollHeight = ref.scrollHeight
      ref.style.height = scrollHeight + "px"
    }
  }, [ref, value])
}
