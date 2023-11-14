import CTAButton from "@/components/cta-button"

type Props = Partial<{
  headline: string
  children: React.ReactNode
}>

export default function Cta(props: Props) {
  return (
    <section>
      <div className="mx-auto max-w-6xl bg-zinc-800 px-4 sm:px-6">
        <div className="relative">
          <Background />
          <div className="-mx-20 px-20 py-12 md:py-20">
            <div className="items-center justify-between text-center md:flex md:text-left">
              <Headline {...props} />
              <Action />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Background() {
  return (
    <div
      className="absolute inset-0 -z-10 -mx-20 overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-800"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 -translate-x-1/3 blur-2xl md:-translate-x-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="2106" height="1327">
          <defs>
            <filter
              id="hi-a"
              width="133.3%"
              height="131.3%"
              x="-16.7%"
              y="-15.6%"
              filterUnits="objectBoundingBox"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            </filter>
            <filter
              id="hi-b"
              width="133.3%"
              height="131.3%"
              x="-16.7%"
              y="-15.6%"
              filterUnits="objectBoundingBox"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            </filter>
            <filter
              id="hi-c"
              width="159.9%"
              height="145%"
              x="-29.9%"
              y="-22.5%"
              filterUnits="objectBoundingBox"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            </filter>
          </defs>
          <g fill="none" fillRule="evenodd">
            <path
              fill="#6D28D9"
              fillOpacity=".72"
              d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
              filter="url(#hi-a)"
              transform="translate(0 -605)"
            />
            <path
              fill="#67E8F9"
              fillOpacity=".64"
              d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
              filter="url(#hi-b)"
              transform="translate(0 -605)"
            />
            <path
              fill="#F472B6"
              fillOpacity=".8"
              d="M1191.108 871C1338.988 871 1631 635.765 1631 487.507 1631 339.248 1625.874 205 1477.994 205s-267.76 120.187-267.76 268.445c0 148.259-167.006 397.555-19.126 397.555Z"
              filter="url(#hi-c)"
              transform="translate(0 -605)"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

function Headline(props: Props) {
  const { headline = "Ready to get started?", children } = props
  return (
    <div className="md:max-w-[940px]">
      <div
        className="text-4xl font-extrabold text-slate-100"
        data-aos="fade-right"
      >
        {headline}
      </div>
      <p
        className="mt-2 text-lg text-slate-300 "
        data-aos="fade-right"
        data-aos-delay="100"
      >
        {children || "Stop wasting your time cold emailing prospects. Start closing deals."}
      </p>
    </div>
  )
}

function Action() {
  return (
    <div
      className="mt-6 md:ml-5 md:mt-0"
      data-aos="fade-left"
      data-aos-duration="900"
    >
      <CTAButton />
    </div>
  )
}
