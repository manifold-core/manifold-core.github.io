"use client"

import { useState, useRef, useEffect } from "react"
import { Transition } from "@headlessui/react"
import Image from "next/image"
import CarouselIllustration from "@/public/images/carousel-illustration-01.jpg"
import {
  ChatBubbleOvalLeftIcon,
  CheckBadgeIcon, CpuChipIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

const STEPS = [
  {
    title: "Describe your target.",
    description: "The more details you provide, the better your results.",
    icon: <MagnifyingGlassIcon className="h-6 w-6 stroke-2 text-zinc-400" />,
  },
  {
    title: "Set a bounty.",
    description: "Determine the incentive for people to help you find that perfect person.",
    icon: <CurrencyDollarIcon className="h-6 w-6 stroke-2 text-zinc-400" />,
  },
  {
    title: "Notify your network.",
    description: "Choose up to 10 people in your network to start your search and us handle the rest.",
    icon: <ChatBubbleOvalLeftIcon className="h-6 w-6 stroke-2 text-zinc-400" />,
  },
  {
    title: "Bounty hunt.",
    description: "Bounty usese AI to engage your extended network with incentives to find your target.",
    icon: <CpuChipIcon className="h-6 w-6 stroke-2 text-zinc-400" />,
  },
  {
    title: "Success.",
    description: "Once found, bounty splits the reward across all the people who helped along the way.",
    icon: <CheckBadgeIcon className="h-6 w-6 stroke-2 text-zinc-400" />,
  },
]

export default function Features03() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative bg-zinc-800 after:pointer-events-none after:absolute after:right-0 after:top-0 after:h-full after:w-96 after:bg-gradient-to-l after:from-zinc-800 max-lg:after:hidden">
      <div className="py-12 md:py-20">
        {/* Carousel */}
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-6xl">
          <div className="space-y-12 lg:flex lg:space-x-12 lg:space-y-0 xl:space-x-24">
            {/* Content */}
            <div className="lg:min-w-[524px] lg:max-w-none">
              <div className="mb-8">
                <div className="mb-4 inline-flex rounded-full border border-transparent px-4 py-1 text-xs font-medium	uppercase tracking-wide text-zinc-400 [background:linear-gradient(theme(colors.zinc.800),theme(colors.zinc.800))_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box]">
                  How it works
                </div>
                <h3 className="font-inter-tight mb-4 text-3xl font-bold text-zinc-200">
                  Supercharge your search
                </h3>
                <p className="text-lg text-zinc-400">
                  {"Bounty combines the power of AI, our proprietary search algorithm, and your professional network to find the best way to access the people you're looking for."}
                </p>
              </div>
              {/* Tabs buttons */}
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
                    <div className="block" style={{ width: "32px !important"}}>{step.icon}</div>
                    <div className="grow">
                      <div className="font-inter-tight mb-1 text-lg font-semibold text-zinc-200">{i + 1}. {step.title}</div>
                      <div className="text-zinc-400">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs items */}
            <div className="relative lg:max-w-none">
              <div className="relative flex flex-col" ref={tabs}>
                {STEPS.map((step, i) => (
                  <Transition
                    show={tab === i + 1}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 -translate-y-4"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-4"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div>
                      <Image
                        className="mx-auto rounded-lg shadow-2xl lg:max-w-none"
                        src={CarouselIllustration}
                        width={800}
                        height={620}
                        alt="Carousel 01"
                      />
                    </div>
                  </Transition>
                ))}
              </div>
              {/* Gear illustration */}
              {/*<Image*/}
              {/*  className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/3 mix-blend-exclusion max-lg:w-32"*/}
              {/*  src={FeatureIllustration}*/}
              {/*  alt="Features 02 illustration"*/}
              {/*  width={173}*/}
              {/*  height={167}*/}
              {/*  aria-hidden="true"*/}
              {/*/>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
