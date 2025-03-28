import { CiUser } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { ILinks } from "@/Interface/links";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

export const links: ILinks[] = [
  { id: 0, title: "Panel", to: "/", icon: MdOutlineDashboard },
  { id: 1, title: "Heyyət", to: "/staff", icon: GoPeople },
  { id: 2, title: "İstifadəçilər", to: "/users", icon: CiUser },
  { id: 3, title: "Kartlar", to: "/cards", icon: FaRegAddressCard },
];
