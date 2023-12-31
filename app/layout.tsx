import "./css/style.css"

import { Inter, Inter_Tight } from "next/font/google"
import Script from "next/script"
import GoogleAnalytics from "@/components/google-analytics"

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
  title: "Home - Bounty",
  description: "People search supercharged",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <GoogleAnalytics tagId="G-1FG9TWS1K9" />
      <Script>
        {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3735981,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
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
