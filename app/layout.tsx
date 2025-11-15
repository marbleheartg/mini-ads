import { Fira_Code } from "next/font/google"
import { ReactNode } from "react"
import Ad from "./frontend/components/Ad"
import "./globals.css"
import { MINIAPP, MINIAPP_DESCRIPTION, MINIAPP_TITLE } from "./lib/constants"

const firaCode = Fira_Code({
  variable: "--fira-code",
  weight: "variable",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://auth.farcaster.xyz" />
        <link rel="icon" type="image/svg+xml" href="/images/global/logo.svg" />
        <meta name="fc:miniapp" content={JSON.stringify(MINIAPP)} />
        <meta name="description" content={MINIAPP_DESCRIPTION} />
        <title>{MINIAPP_TITLE}</title>
      </head>
      <body className={`${firaCode.variable} antialiased`}>
        <Ad />
        {children}
      </body>
    </html>
  )
}
