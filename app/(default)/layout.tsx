"use client"

import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { Nav } from "@/components/ui/nav"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {/*<Nav />*/}
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}
