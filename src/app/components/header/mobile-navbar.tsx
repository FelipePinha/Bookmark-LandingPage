"use client";

import Image from "next/image";
import { BookmarkLogo } from "./bookmark-logo";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { navbarItems } from "./helpers/navbar-items";

export function MobileNavbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function openNavbar() {
    setIsNavbarOpen(true);
  }

  function closeNavbar() {
    setIsNavbarOpen(false);
  }

  return (
    <div className="block md:hidden">
      <Button onClick={openNavbar} variant="ghost">
        <Image
          src={"/icon-hamburger.svg"}
          alt="icone do botão de abrir o menu"
          width={20}
          height={20}
        />
      </Button>

      <div
        className={`fixed w-screen h-screen ${
          isNavbarOpen ? "top-0" : "-top-[100%]"
        } left-0 bg-sky-800 transition-all duration-75`}
      >
        <div className="space-y-5 py-10 px-5">
          <div className="flex justify-between items-center text-white">
            <BookmarkLogo />
            <X onClick={closeNavbar} />
          </div>
          <ul className="space-y-5 text-center pt-5">
            {navbarItems.map((item) => (
              <li
                className="border-t border-t-white text-white pt-4 uppercase tracking-wider"
                key={item}
              >
                {item}
              </li>
            ))}
            <li className="border-t border-t-white pt-7">
              <Button
                className="bg-transparent text-white w-full py-5 uppercase tracking-wider"
                variant="outline"
              >
                Login
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
