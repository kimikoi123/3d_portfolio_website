import { Inter } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kimuel Website",
  description: "Kimuel Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-300/20`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
