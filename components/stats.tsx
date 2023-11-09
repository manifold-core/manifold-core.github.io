import Counter from "@/components/counter"

interface StatProps {
  number: number
  suffix: string
  text: string
}

export default function Stats() {
  const stats: StatProps[] = [
    {
      number: 476,
      suffix: "K",
      text: "Assets packed with power beyond your imagination.",
    },
    {
      number: 1.44,
      suffix: "K",
      text: "Assets packed with power beyond your imagination.",
    },
    {
      number: 1.5,
      suffix: "M+",
      text: "Assets packed with power beyond your imagination.",
    },
    {
      number: 192,
      suffix: "K",
      text: "Assets packed with power beyond your imagination.",
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mx-auto grid max-w-sm items-start gap-12 sm:grid-cols-2 md:-mx-5 md:max-w-none md:grid-cols-4 md:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5">
            <h4 className="font-inter-tight mb-2 text-2xl font-bold tabular-nums md:text-3xl">
              <Counter number={stat.number} />
              {stat.suffix}
            </h4>
            <p className="text-sm text-zinc-500">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
