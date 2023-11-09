import { useEffect, useRef, useState } from "react";
import {MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Badge} from "@/components/ui/badge";

const prompts = [
  "a technical co-founder with experience",
  "a founding engineer to help build",
  "a director at Netflix who can sign a pilot LOI with",
  "a VP of Sales to scale my company from",
  "a VC interested in leading a seed round for",
]

export function Search() {
  const [query, setQuery] = useState("")
  const ref = useRef<HTMLTextAreaElement>(null);
  useAutosize(ref.current, query);

  return (
    <div className="relative">
      <textarea
        rows={1}
        ref={ref}
        className="block w-full resize-none overflow-y-hidden rounded-[30px] border-gray-200 p-4 pl-12 pr-20 text-base drop-shadow-lg focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
        placeholder="Who are you looking for?"
        value={query}
        onChange={evt => setQuery(evt.currentTarget.value)}
      />
      <div
        // className="absolute end-14 top-4 cursor-pointer"
        className="absolute end-4 top-4 cursor-pointer"
        onClick={() => {
          setQuery("")
        }}
      >
        {query.length ? <XMarkIcon className="h-6" /> : null}
      </div>
      <div className="absolute start-2 top-2">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-500 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-50"
        >
          <MagnifyingGlassIcon className="h-5"/>
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
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {prompts.map(p => <Badge
          key={p}
          className="w-full cursor-pointer sm:w-auto"
          variant="default"
          onClick={() => {
            setQuery(`I'm looking for ${p} `)
            ref.current?.focus()
          }}
        >{p}</Badge>)}
      </div>
    </div>
  )
}

function useAutosize(ref: HTMLTextAreaElement | null, value: string) {
  useEffect(() => {
    if (ref) {
      ref.style.height = "0px";
      const scrollHeight = ref.scrollHeight;
      ref.style.height = scrollHeight + "px";
    }
  }, [ref, value]);
}
