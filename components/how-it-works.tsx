"use client"

import { useState, useRef, useEffect } from "react"
import { Transition } from "@headlessui/react"
import Image from "next/image"
import CarouselIllustration from "@/public/images/carousel-illustration-01.jpg"
import Search from "@/public/images/how-it-works/search.png"
import Search2 from "@/public/images/how-it-works/search-2.png"
import Search3 from "@/public/images/how-it-works/search-3.png"
import {
  ChatBubbleOvalLeftIcon,
  CheckBadgeIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"

const className = "h-6 w-6 stroke-2 text-zinc-400"
const STEPS = [
  {
    title: "Describe your target.",
    description: "The more details you provide, the better your results.",
    icon: <MagnifyingGlassIcon className={className} />,
    illustration: Search3,
  },
  {
    title: "Set a bounty.",
    description:
      "Determine how much to reward the people who end up helping you finding your target.",
    icon: <CurrencyDollarIcon className={className} />,
  },
  {
    title: "Notify your network.",
    description: "Choose up to 10 people in your network to start your search.",
    icon: <ChatBubbleOvalLeftIcon className={className} />,
  },
  {
    title: "Bounty hunts.",
    description:
      "Bounty uses AI to engage your extended network to find your target.",
    icon: <CpuChipIcon className={className} />,
  },
  {
    title: "Target found.",
    description:
      "Once found, the bounty is split between all the people who helped along the way.",
    icon: <CheckBadgeIcon className={className} />,
  },
]

export default function HowItWorks() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  // after:bg-gradient-to-l
  return (
    <section className="relative bg-zinc-800 after:pointer-events-none after:absolute after:right-0 after:top-0 after:h-full after:w-96 after:from-zinc-800 max-lg:after:hidden">
      <div className="py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-6xl">
          <div className="items-center space-y-12 lg:flex lg:space-x-12 lg:space-y-0 xl:space-x-24">
            <div className="mx-auto max-w-xl">
              {/*<div className="lg:min-w-[524px] lg:max-w-none">*/}
              <div className="mb-8">
                <div className="mb-4 inline-flex rounded-full border border-transparent px-4 py-1 text-xs font-medium	uppercase tracking-wide text-zinc-400 [background:linear-gradient(theme(colors.zinc.800),theme(colors.zinc.800))_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box]">
                  How it works
                </div>
                <h3 className="font-inter-tight mb-4 text-3xl font-bold text-zinc-200">
                  Supercharge your search
                </h3>
                <p className="text-lg text-zinc-400">
                  Bounty combines the power of AI and your personal network to
                  get you an introduction to the people you are looking for
                  whether it is for hiring, closing a sale, or fundraising.
                </p>
              </div>
              <div className="mb-8 space-y-2 md:mb-0">
                {STEPS.map((step, i) => (
                  <div
                    key={step.title}
                    className={`flex cursor-pointer items-center gap-x-4 rounded border border-transparent px-6 py-4 text-left ${
                      tab !== i + 1
                        ? ""
                        : "[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setTab(i + 1)
                    }}
                  >
                    <div className="block" style={{ width: "32px !important" }}>
                      {step.icon}
                    </div>
                    <div className="grow">
                      <div className="font-inter-tight mb-1 text-lg font-semibold text-zinc-200">
                        {i + 1}. {step.title}
                      </div>
                      <div className="text-zinc-400">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*<div className="flex items-center lg:max-w-none">*/}
            {/*  <div className="relative" ref={tabs}>*/}
            {/*    {STEPS.map((step, i) => (*/}
            {/*      <Transition*/}
            {/*        key={step.title}*/}
            {/*        show={tab === i + 1}*/}
            {/*        className="w-full"*/}
            {/*        enter="transition ease-in-out duration-700 transform order-first"*/}
            {/*        enterFrom="opacity-0 -translate-y-4"*/}
            {/*        enterTo="opacity-100 translate-y-0"*/}
            {/*        leave="transition ease-in-out duration-300 transform absolute"*/}
            {/*        leaveFrom="opacity-100 translate-y-0"*/}
            {/*        leaveTo="opacity-0 translate-y-4"*/}
            {/*        beforeEnter={() => heightFix()}*/}
            {/*        unmount={false}*/}
            {/*      >*/}
            {/*        <Image*/}
            {/*          className="mx-auto rounded-lg shadow-2xl lg:max-w-none"*/}
            {/*          src={step.illustration || CarouselIllustration}*/}
            {/*          width={800}*/}
            {/*          height={620}*/}
            {/*          alt="Carousel 01"*/}
            {/*        />*/}
            {/*      </Transition>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
