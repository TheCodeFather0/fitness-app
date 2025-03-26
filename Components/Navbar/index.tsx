import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-5 bg-gray-200">
      <div className="flex justify-between items-center h-[80px]">
        <Link href="/" className="font-bold text-2xl">
          KamRun FitNess
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src="/avatar.jpg"
            alt="user avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
