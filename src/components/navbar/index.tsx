"use client";
import accountLogo from "@/assets/icon/account.svg";
import navLogo from "@/assets/icon/logo/navbar.png";
import notifLogo from "@/assets/icon/notif.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../button";

const Navbar = () => {
  // const { status: session } = useSession();
  const disableNavbar = ["/register", "/login"];
  const pathName = usePathname();
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // useEffect(() => {
  //   setIsOpen(false);
  // }, [pathName]);
  // const isActive = (path: string) => {
  //   if (path === pathName) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    !disableNavbar.includes(pathName) && (
      <nav className="container flex flex-col gap-2 md:flex-row items-center justify-between my-16">
        <Link href="/" className="text-3xl font-semibold text-white flex gap-4 items-center">
          <Image alt="nav-logo" src={navLogo} />
          <h3>WhaleAI</h3>
        </Link>
        <div className="hidden md:flex gap-9 items-center">
          <Link href={"/register"}>
            <Button rounded="4xl" className="rounded-[36px]">
              Sign Up
            </Button>
          </Link>
          <Image src={notifLogo} alt="notif-logo" />
          <Image src={accountLogo} alt="account-logo" />
        </div>
      </nav>
    )
  );
};

export default Navbar;
