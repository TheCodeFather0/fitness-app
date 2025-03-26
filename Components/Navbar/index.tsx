import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-5 bg-slate-600">
      <div className="flex justify-between items-center h-[80px] text-white">
        <Link href="/" className="font-bold text-2xl">
          KamRun FitNess
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src="/avatar.jpg"
            alt="user avatar"
            width={60}
            height={60}
            className="rounded-full border-3 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
