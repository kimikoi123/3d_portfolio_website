"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { logo } from "../assets/images"

const Navbar = () => {
  const router = useRouter()

  return (
    <header className="header">
      <Link href="/">
        <img src={logo.src} alt="logo" className="w-18 h-18 object-contain" />
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          href="/about"
          className={
            router.pathname == "/about" ? "text-blue-600" : "text-black"
          }
        >
          About
        </Link>
        <Link
          href="/projects"
          className={
            router.pathname == "/projects" ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
