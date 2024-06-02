"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Quiz do dia", href: "/" },
    { label: "Dias anteriores", href: "/data" },
    { label: "Temas", href: "/tema" },
  ];

  return (
    <>
      <header className="fixed w-full bg-primary text-white py-4 px-6 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="mr-4 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <Link href="#" className="text-xl font-bold" prefetch={false}>
              ADIVINHE ME
            </Link>
          </div>
          <nav
            className={`absolute top-14 left-0 w-full bg-primary z-10 overflow-hidden transition-max-height duration-300 ease-in-out ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="py-4" onClick={() => setIsOpen(!isOpen)}>
              {options.map((option, index) => (
                <li key={index}>
                  <Link
                    href={option.href}
                    className="block text-secondary px-6 py-2 hover:text-secondary-foreground hover:bg-primary-foreground focus:outline-none"
                    prefetch={false}
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div className="h-[60px]" />
    </>
  );
};

export default Navbar;
