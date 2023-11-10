export const metadata = {
  title: "Home - Bounty",
  description: "People search supercharged",
}

import Hero from "@/components/hero"
import Solution from "@/components/solution"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import Features02 from "@/components/features-02"
// import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta-2"

export default function Home() {
  return (
    <>
      <Hero />
      {/*<Features02 />*/}
      <Solution />
      <HowItWorks />
      <Pricing />
      {/*<Testimonials />*/}
      <Cta />
    </>
  )
}
