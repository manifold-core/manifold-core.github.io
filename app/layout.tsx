import "./css/style.css"

import { Inter, Inter_Tight } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const inter_tight = Inter_Tight({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
})

export const metadata = {
  title: "Home - Manifold",
  description: "People search supercharged",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter bg-white tracking-tight text-zinc-900 antialiased`}
      >
        <div
          className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:text-clip"
          style={{ scrollBehavior: "smooth" }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
