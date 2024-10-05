"use client";
import React, { useState } from "react";
import FloatingSidebar from "../sidebar/floating";
import { Menu } from "lucide-react";
import Link from "next/link";
import Button from "../button";
import Image from "next/image";
import accountLogo from "@/assets/icon/account.svg";
import notifLogo from "@/assets/icon/notif.svg";

const DashboardNav = ({ isAuthenticated }: { isAuthenticated?: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="py-10 flex justify-between">
        <div>
          <Menu
            size={40}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer font-bold text-white xl:hidden"
          />
        </div>
        <div>
          <div className="flex gap-6 items-center ">
            {isAuthenticated ? (
              <Link href={"/logout"}>
                <Button rounded="4xl" className="rounded-[36px]">
                  Sign Out
                </Button>
              </Link>
            ) : (
              <Link href={"/login"}>
                <Button rounded="4xl" className="rounded-[36px]">
                  Sign In
                </Button>
              </Link>
            )}
            <div className="hidden md:flex gap-9 items-center self-end">
              <Image src={notifLogo} alt="notif-logo" />
              <Image src={accountLogo} alt="account-logo" />
            </div>
          </div>
        </div>
      </div>
      <FloatingSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default DashboardNav;
