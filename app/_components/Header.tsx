"use client";

import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { navLinks } from "@/lib/constants/nav-links";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full pt-4">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="bg-white border border-[#D9E2EC] rounded-2xl shadow-sm">
          
          <div className="h-20 px-4 md:px-6 lg:px-8 flex items-center justify-between">
            
            <div className="text-2xl font-bold text-[#0B3C5D]">
              المستقبل تك
            </div>

            <nav className="hidden md:flex items-center gap-8 text-[#1F1F1F] font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#1DA1F2] transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <button className="bg-[#FF7A00] text-white px-5 py-2.5 rounded-full hover:opacity-90 transition">
                اطلب خدمة الآن
              </button>
            </div>

            <button
              className="md:hidden text-[#0B3C5D] text-3xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="فتح القائمة"
            >
              {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } border-t border-[#D9E2EC]`}
          >
            <nav
              onClick={closeMenu}
              className="flex flex-col gap-4 px-4 pt-4 pb-10 text-[#1F1F1F] font-medium"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#1DA1F2] transition"
                >
                  {link.label}
                </a>
              ))}

              <button className="bg-[#FF7A00] text-white py-3 rounded-full hover:opacity-90 transition mt-4">
                اطلب خدمة الآن
              </button>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}