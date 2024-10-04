"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import navLogo from "@/assets/icon/logo/navbar.png";
import notifLogo from "@/assets/icon/notif.svg";
import accountLogo from "@/assets/icon/account.svg";
import React from "react";
import FloatingSidebar from "../sidebar/floating";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { status: session } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <nav className="px-[2rem] md:px-0 w-full z-40 flex gap-2 items-center justify-between my-16">
        <div>
          <Menu
            size={32}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="container flex justify-end md:justify-between">
          <Link
            href="/"
            className="text-3xl font-semibold text-white flex gap-4 items-center"
          >
            <Image alt="nav-logo" src={navLogo} />
            <h3>WhaleAI</h3>
          </Link>
          <div className="hidden md:flex gap-9 items-center">
            {isClient && session === "unauthenticated" ? (
              <Link href={"/register"}>
                <Button rounded="4xl" className="rounded-[36px]">
                  Sign Up
                </Button>
              </Link>
            ) : isClient && session === "authenticated" ? (
              <Link href={"/logout"}>
                <Button rounded="4xl" className="rounded-[36px]">
                  Sign Out
                </Button>
              </Link>
            ) : null}

            <Image src={notifLogo} alt="notif-logo" />
            <Image src={accountLogo} alt="account-logo" />
          </div>
        </div>
      </nav>

      <FloatingSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
