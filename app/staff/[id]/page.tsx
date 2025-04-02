"use client";
import { IStaff } from "@/Interface/staff";
import { staffData } from "@/Mock/staff";
import Image from "next/image";
import React from "react";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { useParams } from "next/navigation";

const StaffDetail = () => {
  const { id } = useParams();
  const user: IStaff | undefined = staffData.find((user) => user.id === id);

  const deleteStaff = (id: string | number | undefined) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const editStaff = (id: string | number | undefined) => {
    if (!user) {
      Swal.fire("Error", "User not found!", "error");
      return;
    }

    Swal.fire({
      width: "50vw",
      title: "İstifadəçi məlumatlarını yenilə",
      html: `
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <label for="photo-input" style="cursor: pointer;">
            <img id="photo-preview" src="${user.ProfilePhotoUrl}" 
                 alt="Şəkil seç" 
                 style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; display: block; margin: auto;">
          </label>
          <input type="file" id="photo-input" accept="image/*" style="display: none;">
          
          <input id="input1" class="swal2-input" placeholder="Ad" value="${
            user.FirstName
          }">
          <input id="input2" class="swal2-input" placeholder="Soyad" value="${
            user.LastName
          }">
          <input id="input3" class="swal2-input" placeholder="Email" value="${
            user.Email
          }">
          <input id="input4" class="swal2-input" placeholder="Telefon" value="${
            user.PhoneNumber
          }">
          <input type="date" id="input5" class="swal2-input" value="${
            user.DateOfBirth
          }">
          
          <select id="gender" class="swal2-select">
            <option value="male" ${
              user.Gender === "male" ? "selected" : ""
            }>Kişi</option>
            <option value="female" ${
              user.Gender === "female" ? "selected" : ""
            }>Qadın</option>
          </select>
          
          <select id="role" class="swal2-select">
            <option value="developer" ${
              user.JobType === "developer" ? "selected" : ""
            }>Developer</option>
            <option value="designer" ${
              user.JobType === "designer" ? "selected" : ""
            }>Designer</option>
          </select>
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Yenilə",
      showLoaderOnConfirm: true,
      customClass: {
        popup: "custom-swal-popup",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
      didOpen: () => {
        const inputElement = document.getElementById(
          "photo-input"
        ) as HTMLInputElement | null;
        const imgElement = document.getElementById(
          "photo-preview"
        ) as HTMLImageElement | null;

        if (inputElement && imgElement) {
          inputElement.addEventListener("change", (event: Event) => {
            const target = event.target as HTMLInputElement;
            const file = target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                if (imgElement) imgElement.src = e.target?.result as string;
              };
              reader.readAsDataURL(file);
            }
          });
        }
      },
      preConfirm: async () => {
        try {
          const email = (
            document.getElementById("input3") as HTMLInputElement | null
          )?.value;
          if (!email) {
            Swal.showValidationMessage("Email boş ola bilməz!");
            return false;
          }

          return { email };
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <div className="p-5">
      <div className="flex gap-2 text-2xl">
        <CiEdit
          className="bg-yellow-300 w-[40px] h-[40px] p-1 cursor-pointer"
          onClick={() => editStaff(user?.id)}
        />
        <MdDeleteOutline
          onClick={() => deleteStaff(user?.id)}
          className="bg-red-300 w-[40px] h-[40px] p-1 cursor-pointer"
        />
      </div>

      <div className="border border-[#7BBE47] p-2 flex justify-between mt-5">
        <div className="flex flex-col gap-3 text-xl">
          <p className="font-bold flex gap-2 items-center">
            {user?.FirstName} {user?.LastName}
            {user?.Gender?.toLowerCase() === "male" ? (
              <IoIosMale />
            ) : (
              <IoIosFemale />
            )}
          </p>
          <p>
            <span className="font-bold">Vəzifəsi:</span> {user?.JobType}
          </p>
          <p>
            <span className="font-bold">Doğum tarixi:</span> {user?.DateOfBirth}
          </p>
          <p>
            <span className="font-bold">Email:</span> {user?.Email}
          </p>
          <p>
            <span className="font-bold">Əlaqə nömrəsi:</span>{" "}
            {user?.PhoneNumber}
          </p>
        </div>
        <div>
          {user?.ProfilePhotoUrl && (
            <Image
              width={200}
              height={120}
              loading="lazy"
              alt="Staff Image"
              className="object-cover h-full"
              src={user?.ProfilePhotoUrl}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
