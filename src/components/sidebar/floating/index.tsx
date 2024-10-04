"use client";
import dashboardLogoChart from "@/assets/icon/dashboard-chart.svg";
import dashboardLogoMain from "@/assets/icon/dashboard-main.svg";
import dashboardLogoNews from "@/assets/icon/dashboard-news.svg";
import dashboardLogoPorto from "@/assets/icon/dashboard-portfolio.svg";
import dashboardLogoRisk from "@/assets/icon/dashboard-risk.svg";
import navLogo from "@/assets/icon/logo/navbar.png";
import Button from "@/components/button";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const FloatingSidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const { status: session } = useSession();
  const pathName = usePathname();

  const isActive = (path: string) => path === pathName;

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  return (
    isOpen && (
      <aside
        className={`items-center py-28 px-8 bg-gray/100 opacity-100 z-50 fixed left-0 top-0 flex xl:hidden h-screen w-[350px] flex-col bg-dark-80 shadow-xl transition-transform duration-1000 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <X
          className={`cursor-pointer font-bold text-white absolute top-14 right-4`}
          onClick={() => setIsOpen(!isOpen)}
          size={40}
        />
        <div className="flex flex-col gap-12">
          <Link
            href="/"
            className="text-3xl font-semibold text-white flex gap-4 items-center"
          >
            <Image alt="nav-logo" src={navLogo} />
            <h3>WhaleAI</h3>
          </Link>
          <div className="flex flex-col gap-6 w-full">
            {sidebarItems.map((item) => (
              <Link className="w-full" href={item.link} key={item.title}>
                <Button
                  variant={isActive(item.link) ? "primary" : "transparent"}
                  className="xl:px-1.5 2xl:px-3 w-full flex justify-center 2xl:justify-start items-center gap-2 2xl:gap-6 xl:text-sm 2xl:text-base"
                >
                  <Image src={item.image} alt="" />
                  {item.title}
                </Button>
              </Link>
            ))}
            <div className="self-center">
              {session == "authenticated" ? (
                <Link href={"/logout"}>
                  <Button>Sign Out</Button>
                </Link>
              ) : (
                <Link href={"/login"}>
                  <Button>Sign In</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </aside>
    )
  );
};

export default FloatingSidebar;

const sidebarItems = [
  {
    image: dashboardLogoMain,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    image: dashboardLogoChart,
    title: "Chart",
    link: "/dashboard/chart",
  },
  {
    image: dashboardLogoRisk,
    title: "Risk Profile",
    link: "/dashboard/risk-portfolio",
  },
  {
    image: dashboardLogoPorto,
    title: "Portfolio",
    link: "/dashboard/portfolio",
  },
  {
    image: dashboardLogoNews,
    title: "News",
    link: "/dashboard/news",
  },
];
