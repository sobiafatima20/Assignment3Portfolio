import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-rose-300 h-16  border-b-2 border-slate-900/10 flex items-center justify-between px-6 md:px-12">
        <h1 className="font-sans text-xl font-semibold text-slate-800">
          Zubayda's Portfolio
        </h1>
        <nav>
          <ul className="flex gap-6 text-slate-600">
            <li className="hover:text-slate-900 transition duration-300 ease-in-out cursor-pointer">
              <Link href="/hero">Home</Link>
            </li>
            <li className="hover:text-slate-900 transition duration-300 ease-in-out cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-slate-900 transition duration-300 ease-in-out cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-slate-900 transition duration-300 ease-in-out cursor-pointer">
              <Link href="/project">Project</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
