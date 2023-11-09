import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo.svg"

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 border-t border-zinc-200 py-8 sm:grid-cols-12 md:py-12">
          <div className="flex flex-col max-sm:order-1 sm:col-span-6 md:col-span-3 lg:col-span-6">
            <div className="mb-4 flex items-center gap-x-2">
              <Link
                className="flex h-8 w-8 items-center justify-center rounded bg-white shadow-sm shadow-zinc-950/20"
                href="/"
              >
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
              <div className="grow text-sm text-zinc-500">
                &copy; Bounty Search. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
