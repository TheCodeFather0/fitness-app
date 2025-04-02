"use client";
import React from "react";
import Link from "next/link";
import { staffData } from "@/Mock/staff";
import StaffCard from "@/Components/Staff/StaffCard";
import Swal from "sweetalert2";

const Staff = () => {
  const createNewStaff = () => {
    Swal.fire({
      width: "50vw",
      title: "Yeni İşçi Yarat",
      html: `
      <div style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
        
        <!-- Şəkil Seçmə Bölməsi -->
        <div style="text-align: center;">
          <label for="photo-input" style="cursor: pointer; display: block; margin-bottom: 10px;">
            <img id="photo-preview" 
                 src="/defaultAvatar.jpg" 
                 alt="Şəkil seç" 
                 style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 2px solid #ddd;">
          </label>
          <input type="file" id="photo-input" accept="image/*" style="display: none;">
        </div>

        <!-- Form Sahələri -->
        <input id="input1" class="swal2-input" placeholder="Ad" style="width: 100%;">
        <input id="input2" class="swal2-input" placeholder="Soyad" style="width: 100%;">
        <input id="input3" class="swal2-input" placeholder="Email" style="width: 100%;">
        <input id="input4" class="swal2-input" placeholder="Telefon" style="width: 100%;">
        <input type="date" id="input5" class="swal2-input" style="width: 100%;">
        
        <!-- Seçimlər -->
        <select id="gender" class="swal2-select" style="width: 100%; padding: 10px; border-radius: 5px;">
          <option value="" disabled selected>Cinsiyyət seç</option>
          <option value="male">Kişi</option>
          <option value="female">Qadın</option>
        </select>
        
        <select id="role" class="swal2-select" style="width: 100%; padding: 10px; border-radius: 5px;">
          <option value="" disabled selected>Peşə seç</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
        </select>
      </div>
    `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Yarat",
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
          const firstName = (
            document.getElementById("input1") as HTMLInputElement
          )?.value.trim();
          const lastName = (
            document.getElementById("input2") as HTMLInputElement
          )?.value.trim();
          const email = (
            document.getElementById("input3") as HTMLInputElement
          )?.value.trim();
          const phone = (
            document.getElementById("input4") as HTMLInputElement
          )?.value.trim();
          const birthDate = (
            document.getElementById("input5") as HTMLInputElement
          )?.value;
          const gender = (
            document.getElementById("gender") as HTMLSelectElement
          )?.value;
          const role = (document.getElementById("role") as HTMLSelectElement)
            ?.value;

          if (
            !firstName ||
            !lastName ||
            !email ||
            !phone ||
            !birthDate ||
            !gender ||
            !role
          ) {
            Swal.showValidationMessage("Bütün sahələri doldurun!");
            return false;
          }

          return { firstName, lastName, email, phone, birthDate, gender, role };
        } catch (error) {
          Swal.showValidationMessage(`Xəta baş verdi: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold text-3xl">Heyyət</h2>
        <button className="text-xl" onClick={createNewStaff}>
          Əlavə et
        </button>
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
