import { authOptions } from "@/app/api/auth/[...nextauth]/options";

import DashboardNav from "@/components/dashboard-nav";
import Sidebar from "@/components/sidebar";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const isAuthenticated = session?.user !== null;
  return (
    <main className="w-full flex flex-row">
      <Sidebar />
      <div className="container w-[80vw] flex flex-col py-10">
        <DashboardNav isAuthenticated={isAuthenticated} />
        {children}
      </div>
    </main>
  );
}
