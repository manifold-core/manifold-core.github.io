"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useLocalStorage } from "react-use"

import Logo from "@/public/images/logo.svg"

import { Bounty } from "@/components/search/bounty"
import { SearchLayout } from "@/components/search/layout"
import { Network } from "@/components/search/network"
import { Personal } from "@/components/search/personal"
import { Review } from "@/components/search/review"
import { Welcome } from "@/components/search/welcome"

export function SearchForm({ search }: { search: string }) {
  const [temp, setTemp] = useLocalStorage<object>("temp")
  const [data, setData] = useState<object>({ search })
  useEffect(() => {
    setData((prev) => ({ ...prev, search }))
  }, [search])

  useEffect(() => {
    setData((prev) => {
      const values: any = temp || {}
      return {
        ...prev,
        name: values.name,
        email: values.email,
        phone: values.phone,
        contacts: values.contacts,
      }
    })
  }, [])

  const viewProps = { data, setData }
  return (
    <div className="mx-auto mt-5 px-4 md:mt-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm shadow-zinc-950/20 md:h-20 md:w-20">
        <Image src={Logo} alt="logo" className="h-10 w-10 md:h-12 md:w-12" />
      </div>
      <SearchLayout
        pages={[
          { title: "Welcome", body: <Welcome /> },
          { title: "Personal", body: <Personal {...viewProps} /> },
          { title: "Bounty", body: <Bounty {...viewProps} /> },
          { title: "Network", body: <Network {...viewProps} /> },
          { title: "Review", body: <Review {...viewProps} /> },
        ]}
      />
    </div>
  )
}
