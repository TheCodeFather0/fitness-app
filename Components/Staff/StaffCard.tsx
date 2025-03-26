import Image from "next/image";
import Link from "next/link";
import React from "react";

const StaffCard = ({
  id,
  JobType,
  LastName,
  FirstName,
  ProfilePhotoUrl,
}: any) => {
  return (
    <div className="border-1 border-black rounded-xl relative">
      <Link href={`/staff/${id}`} className="absolute inset-0"></Link>
      <Image
        width={200}
        height={200}
        alt="staff image"
        className="w-full h-[200px] object-cover rounded-tr-xl rounded-tl-xl"
        src={ProfilePhotoUrl}
      />
      <div className="p-3">
        <p className="font-bold text-xl">
          {FirstName} {LastName}
        </p>
        <p>{JobType}</p>
      </div>
    </div>
  );
};

export default StaffCard;
