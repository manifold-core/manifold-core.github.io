export const metadata = {
  title: "Home - Bounty",
  description: "People search supercharged",
}

import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import Problems from "@/components/problems"
import Solution from "@/components/solution"
// import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta-2"

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Solution />
      <HowItWorks />
      <Pricing />
      {/*<Testimonials />*/}
      <Cta />
    </>
  )
}
