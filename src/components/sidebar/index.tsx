"use client";
import dashboardLogoChart from "@/assets/icon/dashboard-chart.svg";
import dashboardLogoMain from "@/assets/icon/dashboard-main.svg";
import dashboardLogoNews from "@/assets/icon/dashboard-news.svg";
import dashboardLogoPorto from "@/assets/icon/dashboard-portfolio.svg";
import dashboardLogoRisk from "@/assets/icon/dashboard-risk.svg";
import navLogo from "@/assets/icon/logo/navbar.png";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  //   useEffect(() => {
  //     setIsOpen(false);
  //   }, [pathName]);
  const isActive = (path: string) => {
    if (path === pathName) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <aside className="w-full xl:w-[25vw] 2xl:w-[20vw] bg-gray min-h-screen p-14 hidden xl:flex flex-col gap-12">
      <div className="flex flex-col gap-12">
        <Link
          href="/"
          className="text-xl 2xl:text-3xl font-semibold text-white flex gap-4 items-center"
        >
          <Image alt="nav-logo" src={navLogo} />
          <h3>WhaleAI</h3>
        </Link>
        <div className="flex flex-col gap-6 w-full">
          {sidebarItems.map((item) => {
            return (
              <Link className="w-full" href={item.link} key={item.title}>
                <Button
                  variant={isActive(item.link) ? "primary" : "transparent"}
                  className="xl:px-1.5 2xl:px-3 w-full flex justify-center 2xl:justify-start items-center gap-2 2xl:gap-6 xl:text-sm 2xl:text-base"
                >
                  <Image src={item.image} alt="" />
                  {item.title}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

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
    link: "/dashboard/risk-profile",
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
