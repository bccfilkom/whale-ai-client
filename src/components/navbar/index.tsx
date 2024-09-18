"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status: session } = useSession();
  return (
    <nav className="container py-4 flex items-center justify-between">
      <Link href="/">Whale AI</Link>
      {session === "authenticated" ? (
        <button
          className="bg-black text-white py-3 px-4 rounded-xl"
          onClick={() => signOut()}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-black text-white py-3 px-4 rounded-xl"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
