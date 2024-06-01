'use client'

import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const options = [
        { label: "Quiz of the Day", href: "#" },
        { label: "Previous Days", href: "#" },
        { label: "Themes", href: "#" },
    ]

    return (
        <header className="bg-[#FFA000] text-white py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon className="h-6 w-6" />
            </button>
            <Link href="#" className="text-xl font-bold" prefetch={false}>
                ADIVINHE ME
            </Link>
          </div>
          <nav className={`absolute top-16 left-0 w-full bg-[#FFA000] z-10 ${isOpen ? "block" : "hidden"}`}>
            <ul className="py-4">
                {options.map((option, index) => (
                    <li key={index}>
                    <Link href={option.href} className="block px-6 py-2 hover:bg-[#FF8F00] focus:outline-none" prefetch={false}>
                        {option.label}
                    </Link>
                    </li>
                ))}
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header
