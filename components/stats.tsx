import Counter from "@/components/counter"

interface StatProps {
  number: number
  suffix: string
  text: string
}

export default function Stats() {
  const stats: StatProps[] = [
    {
      number: 6,
      suffix: "H",
      text: "Avg hours saved per week sourcing leads",
    },
    {
      number: 24,
      suffix: "X",
      text: "Likelihood to schedule a meeting vs cold outreach",
    },
    {
      number: 84,
      suffix: "%",
      text: "B2B buyers start a purchase after a referral",
    },
    {
      number: 72,
      suffix: "%",
      text: "B2B buyers close a deal after a referral",
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mx-auto grid items-start gap-12 sm:grid-cols-2 md:-mx-5 md:max-w-none md:grid-cols-4 md:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5">
            <h4 className="font-inter-tight mb-2 text-2xl font-bold tabular-nums md:text-3xl">
              <Counter number={stat.number} />
              {stat.suffix}
            </h4>
            <p className="text-md text-zinc-500">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
