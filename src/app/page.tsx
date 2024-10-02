import Navbar from "@/components/navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Hero from "./sections/home/Hero";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // if (session) {
  //   redirect("/dashboard");
  // }
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
