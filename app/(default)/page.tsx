export const metadata = {
  title: "Home - Manifold",
  description: "Page description",
}

import Hero from "@/components/hero"
import Features01 from "@/components/features-01"
import Features03 from "@/components/features-03"
import Pricing from "@/components/pricing"
// import Testimonials from "@/components/testimonials"
// import Cta from "@/components/cta"
import Cta from "@/components/cta-2"

export default function Home() {
  return (
    <>
      <Hero />
      <Features01 />
      <Features03 />
      <Pricing />
      {/*<Testimonials />*/}
      {/*<Cta />*/}
      <Cta />
    </>
  )
}
