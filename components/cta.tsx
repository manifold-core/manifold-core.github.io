import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo.svg"

export default function Features02() {
  return (
    <section>
      <div className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="relative mb-8 inline-flex h-20 w-20 items-center justify-center rounded-xl bg-white shadow-md before:absolute before:-top-12 before:-z-10 before:h-52 before:w-52 before:rounded-full before:bg-zinc-900 before:opacity-[.08] before:blur-3xl">
              <Link href="/">
                <Image src={Logo} width={50} height={50} alt="Logo" />
              </Link>
            </div>
            <h2 className="font-inter-tight mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">
              Start your search{" "}
              <em className="relative inline-flex items-end justify-center not-italic">
                today
                <svg
                  className="absolute -z-10 w-[calc(100%+1rem)] fill-zinc-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="10"
                  viewBox="0 0 120 10"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path d="M118.273 6.09C79.243 4.558 40.297 5.459 1.305 9.034c-1.507.13-1.742-1.521-.199-1.81C39.81-.228 79.647-1.568 118.443 4.2c1.63.233 1.377 1.943-.17 1.89Z" />
                </svg>
              </em>
            </h2>
            <p className="mb-8 text-lg text-zinc-500">
              Stop wasting your time on cold outreaches on LinkedIn and bad recruiters. Are you ready to start your search?
            </p>
            <div className="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0">
              <div>
                <a
                  className="btn w-full bg-zinc-900 text-zinc-100 shadow hover:bg-zinc-800"
                  href="#search"
                >
                  Start Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
