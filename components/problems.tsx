"use client"

import Stats from "@/components/stats"

export default function Solution() {
  return (
    <section className="relative bg-zinc-50 py-12 md:py-20">
      <div
        className="mx-auto max-w-3xl px-4 text-center sm:px-6"
        id="solution"
      >
        <div
          className="text-md mb-4 font-bold uppercase tracking-normal text-[#6366F1]"
          data-aos="zoom-y-out"
        >
          problem
        </div>
        <h2 className="font-inter-tight mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">
          Stop cold emailing your prospects
        </h2>
        <div className="mb-12 text-lg text-zinc-500 grid gap-y-2">
          75% of all deals come through outbound and cold outreach have to accept {"<"}1% conversion rates.
          Stop compensating with additional outreach volume and make each prospect count with a referral.
        </div>
      </div>
      <Stats />
    </section>
  )
}

