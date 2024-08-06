"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const currentPath = usePathname();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "./CV_Yasuaki_Kumazaki.pdf" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return currentPath === path;
  };

  const NavLinks = () => {
    return (
      <>
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.path}
            onClick={toggleNavbar}
            className={`${
              isActive(page.path) ? "underline underline-offset-8" : ""
            } hover:text-gray-800`}
            target={page.name === "Resume" ? "_blank" : undefined}
            rel={page.name === "Resume" ? "noreferrer" : undefined}
          >
            {page.name}
          </Link>
        ))}
      </>
    );
  };

  return (
    <header>
      <nav className="w-full px-4 py-4 md:py-10 md:px-10 block items-center justify-between fixed top-0 left-0 right-0 bg-stone-400 dark:bg-stone-700 z-10">
        <div className="flex justify-between">
          {/* logo */}
          <Link
            href="/"
            onClick={toggleNavbar}
            className="text-lg md:text-3xl hover:text-gray-800"
          >
            Yasuaki Kumazaki
          </Link>
          {/* navigation bar */}
          <div className="flex item-center gap-4 md:gap-10">
            {/* primary navbar */}
            <div className="hidden item-center gap-10 md:flex">
              <NavLinks />
            </div>
            {/* dark mode */}
            <div>
              <ThemeSwitch />
            </div>
            {/* menu button */}
            <div className="md:hidden">
              <button onClick={toggleNavbar} className="text-2xl">
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* mobile  */}
          {isOpen && (
            <div className="text-2xl h-screen flex flex-col items-center justify-center gap-y-4 md:hidden">
              <NavLinks />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
