"use client"

import Link from "next/link"
import CTAButton from "@/components/cta-button"

export default function Pricing() {
  return (
    <section>
      <div className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative mx-auto max-w-3xl pb-4 text-center lg:pb-12">
            <div
              className="text-md mb-4 font-bold uppercase tracking-normal text-[#6366F1]"
              data-aos="zoom-y-out"
            >
              pricing
            </div>
            <h2 className="font-inter-tight mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">
              And the best part?
            </h2>
            <p className="text-lg text-zinc-500">
              You only pay if you find who you are searching for.
            </p>
          </div>

          <div className="pb-12">
            <div className="mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
              <div />
              <div className="h-full">
                <div className="relative flex h-full flex-col rounded-lg bg-zinc-800 p-6">
                  <div className="mb-4">
                    <div className="text-md mb-1 font-semibold uppercase tracking-wide text-zinc-200">
                      Simple
                    </div>
                    <div className="font-inter-tight mb-2 inline-flex items-baseline">
                      <span className="text-4xl font-bold text-zinc-200">
                        10
                      </span>
                      <span className="text-2xl font-bold text-zinc-200">
                        %
                      </span>
                      <span className="font-medium tracking-wide text-zinc-400">
                        &nbsp;/ bounty
                      </span>
                    </div>
                    <div className="text-zinc-500">Money back guarantee.</div>
                    <div className="text-zinc-500">No questions asked.</div>
                  </div>
                  <div className="mt-2">
                    <CTAButton />
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
