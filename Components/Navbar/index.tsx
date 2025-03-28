import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-5 items-center h-[80px] bg-white shadow-md">
      <Link href="/" className="font-bold text-2xl">
        <Image src="/logo.png" alt="logo" width={150} height={150} />
      </Link>
      <div className="flex items-center gap-2">
        <Image
          src="/avatar.jpg"
          alt="user avatar"
          width={50}
          height={50}
          className="rounded-full border-3 border-[#7BBE47]"
        />
      </div>
    </div>
  );
};

export default Navbar;
