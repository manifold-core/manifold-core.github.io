import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo.svg"

export default function Header() {
  return (
    <header className="absolute top-2 z-30 w-full md:top-6">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex h-14 items-center justify-between rounded-lg border border-transparent px-3 [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
            {/* Site branding */}
            <div className="mr-4 shrink-0">
              {/* Logo */}
              <Link
                className="flex h-8 w-8 items-center justify-center rounded"
                href="/"
              >
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow flex-wrap items-center justify-end gap-x-2">
                {/*<li>*/}
                {/*  <Link className="flex items-center px-3 py-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900 lg:px-5" href="/login">Log in</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <Link className="btn-sm w-full bg-zinc-900 text-zinc-100 shadow hover:bg-zinc-800" href="/login">Log In</Link>*/}
                {/*</li>*/}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
