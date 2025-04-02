"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/Mock/links";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const path = usePathname();

  return (
    <div
      className={`sticky top-0 left-0 flex flex-col gap-5 min-h-[100vh] h-full bg-white border-r border-r-[#7BBE47] transition-all duration-300 px-2 py-5 ${
        isOpen ? "w-[300px]" : "w-[80px]"
      }`}
    >
      <button
        className=" text-[#7BBE47] px-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      {links.map(({ id, title, to, icon }: any) => (
        <Link
          href={to}
          key={id}
          className={`font-bold px-5 hover:text-[#7BBE47] flex items-center gap-2 ${
            path === to ? "text-[#7BBE47]" : "text-black"
          }`}
        >
          <span className="text-3xl">{React.createElement(icon)}</span>
          <span className="text-xl">{isOpen && title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
