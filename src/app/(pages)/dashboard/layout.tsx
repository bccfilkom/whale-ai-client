import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import accountLogo from "@/assets/icon/account.svg";
import notifLogo from "@/assets/icon/notif.svg";
import Button from "@/components/button";
import Sidebar from "@/components/sidebar";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <main className="w-full flex flex-row">
      <Sidebar />
      <div className="container w-[80vw] flex flex-col py-10">
        <div className="hidden md:flex gap-9 items-center self-end">
          {session ? (
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
          <Image src={notifLogo} alt="notif-logo" />
          <Image src={accountLogo} alt="account-logo" />
        </div>
        {children}
      </div>
    </main>
  );
}
