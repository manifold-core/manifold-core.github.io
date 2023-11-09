"use client"
import Testimonial from "@/components/testimonial"
import TestimonialImg01 from "@/public/images/testimonial-01.jpg"
import TestimonialImg02 from "@/public/images/testimonial-02.jpg"
import TestimonialImg03 from "@/public/images/testimonial-03.jpg"
import TestimonialImg04 from "@/public/images/testimonial-04.jpg"
import TestimonialImg05 from "@/public/images/testimonial-05.jpg"
import TestimonialImg06 from "@/public/images/testimonial-06.jpg"
import TestimonialImg07 from "@/public/images/testimonial-07.jpg"
import TestimonialImg08 from "@/public/images/testimonial-08.jpg"

export default function Testimonials() {
  const testimonials01 = [
    {
      image: TestimonialImg01,
      name: "Lina James",
      user: "@linaj87",
      link: "#0",
      content:
        "Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.",
    },
    {
      image: TestimonialImg02,
      name: "Lina James",
      user: "@linaj87",
      link: "#0",
      content:
        "Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.",
    },
    {
      image: TestimonialImg03,
      name: "Lina James",
      user: "@linaj87",
      link: "#0",
      content:
        "Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.",
    },
    {
      image: TestimonialImg04,
      name: "Mary Kahl",
      user: "@marykahl",
      link: "#0",
      content:
        "Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.",
    },
  ]

  const testimonials02 = [
    {
      image: TestimonialImg05,
      name: "Katy Dragán",
      user: "@katyd",
      link: "#0",
      content:
        "Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.",
    },
    {
      image: TestimonialImg06,
      name: "Karl Ahmed",
      user: "@karl87",
      link: "#0",
      content:
        "Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.",
    },
    {
      image: TestimonialImg07,
      name: "Carlotta Grech",
      user: "@carlagrech",
      link: "#0",
      content:
        "Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.",
    },
    {
      image: TestimonialImg08,
      name: "Alejandra Gok",
      user: "@alejandraIT",
      link: "#0",
      content:
        "Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.",
    },
  ]

  return (
    <section className="bg-zinc-800">
      <div className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="font-inter-tight text-3xl font-bold text-zinc-200 md:text-4xl">
              Loved by thousands of seekers around the world
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-[94rem] space-y-6">
          {/* Row #1 */}
          <div className="group inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)]">
            <div className="animate-infinite-scroll flex items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>div]:mx-3">
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="animate-infinite-scroll flex items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>div]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
          {/* Row #2 */}
          <div className="group inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)]">
            <div className="animate-infinite-scroll-inverse flex items-start justify-center [animation-delay:-7.5s] group-hover:[animation-play-state:paused] md:justify-start [&>div]:mx-3">
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="animate-infinite-scroll-inverse flex items-start justify-center [animation-delay:-7.5s] group-hover:[animation-play-state:paused] md:justify-start [&>div]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
