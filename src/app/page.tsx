"use client";
import Navbar from "@/components/navbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <main className="flex flex-col gap-10">
      <Navbar />
      <p className="container text-black">{JSON.stringify(session)}</p>
    </main>
  );
}
