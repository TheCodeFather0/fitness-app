import React from "react";
import Link from "next/link";
import { staffData } from "@/Mock/staff";
import StaffCard from "@/Components/Staff/StaffCard";

const Staff = () => {
  return (
    <div>
      <div className="flex justify-between font-bold text-xl sticky top-0 z-10 bg-slate-200 p-5">
        <h2>Heyyət</h2>
        <Link href="/create-staff">Əlavə et</Link>
      </div>

      <div className="grid grid-cols-4 my-5 gap-4 p-5 pt-0">
        {staffData.map((staff, index) => {
          return <StaffCard key={index} {...staff} />;
        })}
      </div>
    </div>
  );
};

export default Staff;
