"use client";

import Avatar from "@/icons/avatar.png";
import Image from "next/image";
import { useMediaQueryContext } from "./contextApp";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

interface UserSelectProps {
  userName: string;
  userRole: string;
}

export default function UserSelect({ userName, userRole }: UserSelectProps) {
  const { isMobile } = useMediaQueryContext();

  return (
    <Select>
      <SelectTrigger className="!h-12 items-center flex p-2 ">
        <div className="flex items-center py-1.5 px-1">
          <Image src={Avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
          {!isMobile && (
            <div className="flex flex-col justify-center ml-2 mr-4">
              <p className="text-sm font-bold">{userName}</p>
              <p className="text-xs self-start">{userRole}</p>
            </div>
          )}
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="profile">Profile</SelectItem>
        <SelectItem value="settings">Settings</SelectItem>
        <SelectItem value="logout">Logout</SelectItem>
      </SelectContent>
    </Select>
  );
}
