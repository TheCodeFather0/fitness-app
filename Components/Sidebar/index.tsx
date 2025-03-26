import { ILinks } from "@/Interface/links";
import { links } from "@/Mock/links";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-slate-600 h-[calc(100vh-85px)] flex flex-col text-white gap-5">
      {links.map(({ id, title, to }: ILinks) => {
        return (
          <Link
            href={to}
            key={id}
            className="font-bold text-xl p-5 hover:bg-slate-500"
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
