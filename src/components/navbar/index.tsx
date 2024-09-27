"use client";
import { Menu, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { status: session } = useSession();
  const disableNavbar = ["/register", "/login"];
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);
  const isActive = (path: string) => {
    if (path === pathName) {
      return true;
    } else {
      return false;
    }
  };

  return (
    !disableNavbar.includes(pathName) && (
      <nav className="bg-base-black">
        <div className="container py-8 flex flex-row items-center justify-between">
          <Link href="/" className="font-bold text-3xl text-base-white">
            Whale AI
          </Link>
          <div className="hidden md:flex gap-8 items-center text-xl">
            <Link
              href={"/"}
              className={`${
                isActive("/")
                  ? "font-semibold text-primary-cream"
                  : "text-secondary-pale-cream"
              }`}
            >
              Home
            </Link>
            <Link
              href={"/stocks"}
              className={`${
                isActive("/stocks")
                  ? "font-semibold text-primary-cream"
                  : "text-secondary-pale-cream"
              }`}
            >
              Stocks
            </Link>
            <Link
              href={"/news"}
              className={`${
                isActive("/news")
                  ? "font-semibold text-primary-cream"
                  : "text-secondary-pale-cream"
              }`}
            >
              News
            </Link>
          </div>
          <div className="hidden md:block">
            {session === "authenticated" ? (
              <button
                className="bg-primary-cream text-base-black py-3 px-8 rounded-xl"
                onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-primary-cream text-base-black py-3 px-8 rounded-xl"
                onClick={() => signIn()}
              >
                Login
              </button>
            )}
          </div>
          {/* Mobile Navbar */}
          <div
            className="text-secondary-pale-cream self-end cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </div>
        </div>
        <div
          className={`container flex flex-col text-xl gap-6 ${
            isOpen ? "py-4" : ""
          } lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <Link
            href={"/"}
            className={`${
              isActive("/")
                ? "font-semibold text-primary-cream"
                : "text-secondary-pale-cream"
            }`}
          >
            Home
          </Link>
          <Link
            href={"/stocks"}
            className={`${
              isActive("/stocks")
                ? "font-semibold text-primary-cream"
                : "text-secondary-pale-cream"
            }`}
          >
            Stocks
          </Link>
          <Link
            href={"/news"}
            className={`${
              isActive("/news")
                ? "font-semibold text-primary-cream"
                : "text-secondary-pale-cream"
            }`}
          >
            News
          </Link>
        </div>
      </nav>
    )
  );
};

export default Navbar;
