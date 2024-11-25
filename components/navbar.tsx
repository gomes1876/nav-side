import Icon from "@/icons/icon-logo.svg";
import TextIcon from "@/icons/text-logo.svg";
import { Menu, LayoutGrid, Bell } from "lucide-react";
import Image from "next/image";
import UserSelect from "./userSelect";

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <div className="w-full bg-white drop-shadow-md h-16 flex flex-row p-4 items-center z-10">
      <div className="w-10 h-10 cursor-pointer flex justify-center content-center items-center">
        <Menu
          className="w-6 h-6 mr-4"
          id="menu-button"
          onClick={toggleSidebar}
        />
      </div>
      <div className="flex flex-row">
        <Image src={Icon} alt="ícone de logo" className="w-10 h-10" />
        <Image src={TextIcon} alt="TEXT" className="w-24 h-10" />
      </div>
      <div className="flex px-4">
        <div className="h-[48px] w-[1px] bg-gray-150 self-center" />
      </div>
      <div className="flex flex-row items-center gap-1">
        <LayoutGrid className="w-6 h-6" />
        <span className="text-sm">Soluções</span>
      </div>
      <div
        className="flex flex-row ml-auto justify-center items-center"
        id="user-group"
      >
        <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
          <Bell className="w-6 h-6" />
        </div>
        <UserSelectWrapper />
      </div>
    </div>
  );
};

const UserSelectWrapper = () => {
  return (
    <div className="flex flex-row ml-auto h-full">
      <UserSelect userName="Gabriel Gomes" userRole="Desenvolvimento" />
    </div>
  );
};
