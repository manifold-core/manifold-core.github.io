"use client"

import Image from "next/image"
import Logo from "@/public/images/logo.svg"
import { useSearchParams } from "next/navigation";

import { Background } from "@/components/background"
import { Search } from "@/components/search"
import { SearchForm } from "@/components/search/form"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  return (
    <Background>
      {query ? <SearchForm search={query} /> : <SearchBar />}
    </Background>
  )
}

function SearchBar() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="-mt-15 grid gap-y-2">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm shadow-zinc-950/20">
          <Image src={Logo} alt="logo" className="h-12 w-12" />
        </div>
        <div className="mx-auto mt-4 w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Search />
        </div>
      </div>
    </div>
  )
}
