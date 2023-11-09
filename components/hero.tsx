"use client"

import {Search} from "@/components/search";
import Image from "next/image";
import Logo from "@/public/images/logo.svg"

export default function Hero() {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <section id="search" className="relative flex h-screen items-center justify-center before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-80 before:bg-gradient-to-b before:from-zinc-100">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="-mt-12 pb-12 pt-24 md:pt-32">
        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-white shadow-sm shadow-zinc-950/20">
          <Image src={Logo} alt="logo" className="h-24 w-24" />
        </div>
        <div className="px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <em className="relative inline-flex items-center justify-center italic text-zinc-900"></em>
              <h1 className="font-inter-tight bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-500 bg-clip-text pb-4 text-5xl font-bold text-transparent md:text-6xl">
                people search <span className="bg-gradient-to-r from-[#6366F1] to-[#A1ADFF] bg-clip-text text-transparent">supercharged</span>
              </h1>
              <p className="mb-8 text-lg text-zinc-500 lg:text-xl">
                Get the introduction to the people you need to take your startup to
                the next level.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-10 w-full max-w-4xl px-4 sm:px-6 md:mb-20 lg:px-8">
          <Search />
        </div>

        {/* Image */}
        {/*<div className="relative mx-auto flex max-w-6xl justify-center px-4 pb-12 before:absolute before:-top-12 before:-z-10 before:h-96 before:w-96 before:rounded-full before:bg-zinc-900 before:opacity-[.15] before:blur-3xl sm:px-6 md:pb-20">*/}
        {/*  <Image className="rounded-lg shadow-2xl" src={HeroImage} width={1104} height={620} alt="Hero" priority />*/}
        {/*</div>*/}

        {/* Stats */}
        {/*<Stats />*/}
      </div>
    </section>
  )
}
